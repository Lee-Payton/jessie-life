import { ArticleCard } from '@/components/ArticleCard';
import { getRecentSubstackPosts } from '@/lib/substack';

type RecentSubstackArticlesProps = {
  publicationUrl: string;
  featuredUrls: string[];
  startIndex: number;
};

export async function RecentSubstackArticles({
  publicationUrl,
  featuredUrls,
  startIndex,
}: RecentSubstackArticlesProps) {
  const posts = await getRecentSubstackPosts(publicationUrl, {
    limit: 6,
    excludeUrls: featuredUrls,
  });

  if (posts.length === 0) return null;

  return (
    <div className="mt-6 grid gap-6 md:grid-cols-2">
      {posts.map((post, i) => (
        <ArticleCard
          key={post.url}
          title={post.title}
          excerpt={post.description}
          url={post.url}
          publishedAt={post.publishedAt}
          index={startIndex + i}
        />
      ))}
    </div>
  );
}
