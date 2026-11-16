export type SubstackPost = {
  title: string;
  description: string;
  url: string;
  publishedAt: string;
};

const MAX_DESCRIPTION_LENGTH = 180;
const FETCH_TIMEOUT_MS = 8000;
const REVALIDATE_SECONDS = 3600;

const NAMED_ENTITIES: Record<string, string> = {
  amp: '&',
  lt: '<',
  gt: '>',
  quot: '"',
  apos: "'",
  nbsp: ' ',
  hellip: '\u2026',
  ndash: '\u2013',
  mdash: '\u2014',
  lsquo: '\u2018',
  rsquo: '\u2019',
  ldquo: '\u201C',
  rdquo: '\u201D',
};

function decodeEntities(value: string): string {
  return value.replace(/&(#x[0-9a-f]+|#\d+|[a-z]+);/gi, (match, entity: string) => {
    if (entity[0] === '#') {
      const code =
        entity[1].toLowerCase() === 'x'
          ? parseInt(entity.slice(2), 16)
          : parseInt(entity.slice(1), 10);
      return Number.isFinite(code) && code > 0 && code < 0x110000
        ? String.fromCodePoint(code)
        : '';
    }
    return NAMED_ENTITIES[entity.toLowerCase()] ?? match;
  });
}

// Feed text is only ever rendered as plain React text, so stripping tags here is
// defense in depth: no feed HTML can reach the page.
function toPlainText(raw: string): string {
  const withoutCdata = raw.replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, '$1');
  const withoutTags = decodeEntities(withoutCdata)
    .replace(/<(script|style)[\s\S]*?<\/\1>/gi, ' ')
    .replace(/<[^>]*>/g, ' ');
  return decodeEntities(withoutTags).replace(/\s+/g, ' ').trim();
}

function readTag(block: string, tag: string): string {
  const match = block.match(new RegExp(`<${tag}(?:\\s[^>]*)?>([\\s\\S]*?)</${tag}>`, 'i'));
  return match ? match[1] : '';
}

function truncate(text: string, max: number): string {
  if (text.length <= max) return text;
  const cut = text.slice(0, max).replace(/\s+\S*$/, '');
  return `${cut}\u2026`;
}

// Strips query strings and trailing slashes so tracking params (?r=...) never
// cause a featured post to look like a different article.
export function normalizePostUrl(url: string): string {
  try {
    const parsed = new URL(url);
    return `${parsed.origin}${parsed.pathname.replace(/\/+$/, '')}`.toLowerCase();
  } catch {
    return '';
  }
}

function safePostUrl(raw: string, publicationHost: string): string | null {
  try {
    const parsed = new URL(decodeEntities(raw).trim());
    if (parsed.protocol !== 'https:' || parsed.hostname !== publicationHost) return null;
    if (!parsed.pathname.startsWith('/p/')) return null;
    return `${parsed.origin}${parsed.pathname}`;
  } catch {
    return null;
  }
}

function isPaywalled(item: string): boolean {
  const content = readTag(item, 'content:encoded');
  return /class=["'][^"']*paywall/i.test(content) || /paid subscribers/i.test(content);
}

export function parseSubstackFeed(xml: string, publicationHost: string): SubstackPost[] {
  const items = xml.match(/<item>[\s\S]*?<\/item>/gi) ?? [];
  const posts: SubstackPost[] = [];

  for (const item of items) {
    if (isPaywalled(item)) continue;

    const title = toPlainText(readTag(item, 'title'));
    const url = safePostUrl(toPlainText(readTag(item, 'link')), publicationHost);
    const published = new Date(toPlainText(readTag(item, 'pubDate')));
    if (!title || !url || Number.isNaN(published.getTime())) continue;

    posts.push({
      title,
      description: truncate(toPlainText(readTag(item, 'description')), MAX_DESCRIPTION_LENGTH),
      url,
      publishedAt: published.toISOString(),
    });
  }

  return posts.sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
}

export async function getRecentSubstackPosts(
  publicationUrl: string,
  options: { limit: number; excludeUrls: string[] },
): Promise<SubstackPost[]> {
  try {
    const base = new URL(publicationUrl);
    const response = await fetch(`${base.origin}/feed`, {
      next: { revalidate: REVALIDATE_SECONDS },
      signal: AbortSignal.timeout(FETCH_TIMEOUT_MS),
      headers: { Accept: 'application/rss+xml, application/xml;q=0.9, text/xml;q=0.8' },
    });
    if (!response.ok) return [];

    const excluded = new Set(options.excludeUrls.map(normalizePostUrl));
    return parseSubstackFeed(await response.text(), base.hostname)
      .filter((post) => !excluded.has(normalizePostUrl(post.url)))
      .slice(0, options.limit);
  } catch {
    return [];
  }
}
