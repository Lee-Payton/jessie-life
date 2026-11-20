import { ArticleCard } from '@/components/ArticleCard';
import { getSubstackPosts, normalizePostUrl } from '@/lib/substack';

export type FeaturedArticle = {
  title: string;
  excerpt: string;
  url: string;
  topic?: string;
  imageAlt?: string;
};

type ArticleGridProps = {
  publicationUrl: string;
  featured: FeaturedArticle[];
  recentLimit?: number;
};

export function FeaturedArticleGrid({ featured }: { featured: FeaturedArticle[] }) {
  return (
    <div className="grid gap-6 md:grid-cols-2 md:gap-8">
      {featured.map((article, i) => (
        <ArticleCard key={article.url} {...article} index={i} />
      ))}
    </div>
  );
}

export async function ArticleGrid({ publicationUrl, featured, recentLimit = 6 }: ArticleGridProps) {
  const posts = await getSubstackPosts(publicationUrl);
  const postsByUrl = new Map(posts.map((post) => [normalizePostUrl(post.url), post]));
  const featuredKeys = new Set(featured.map((article) => normalizePostUrl(article.url)));

  const recent = posts.filter((post) => !featuredKeys.has(normalizePostUrl(post.url))).slice(0, recentLimit);

  return (
    <div className="grid gap-6 md:grid-cols-2 md:gap-8">
      {featured.map((article, i) => {
        const match = postsByUrl.get(normalizePostUrl(article.url));
        return <ArticleCard key={article.url} {...article} image={match?.image} index={i} />;
      })}
      {recent.map((post, i) => (
        <ArticleCard
          key={post.url}
          title={post.title}
          excerpt={post.description}
          url={post.url}
          publishedAt={post.publishedAt}
          topic={post.topic}
          image={post.image}
          index={featured.length + i}
        />
      ))}
    </div>
  );
}
