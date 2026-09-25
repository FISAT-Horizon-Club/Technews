import ArticleCard from "@/components/ArticleCard";
import SectionHeading from "@/components/SectionHeading";
import VideoCard from "@/components/VideoCard";
import {
  placeholderArticles,
  placeholderCategories,
  placeholderVideos,
} from "@/lib/placeholder-data";

export default function Home() {
  const [lead, ...rest] = placeholderArticles;

  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
      <section className="mb-12">
        <h1 className="max-w-2xl text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
          The latest in tech, without the noise.
        </h1>
        <p className="mt-3 max-w-2xl text-base text-zinc-600">
          This is a starter boilerplate. Every card below is placeholder
          content that will be replaced with real articles, videos and
          categories from Supabase.
        </p>
      </section>

      <section className="mb-14">
        <SectionHeading
          title="Featured News"
          description="Placeholder section — the lead story will be selected here."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <ArticleCard
            featured
            title={lead.title}
            category={lead.category}
            publishedAt={lead.published_at}
            thumbnailUrl={lead.thumbnail_url}
          />
          {rest.slice(0, 2).map((article) => (
            <ArticleCard
              key={article.id}
              title={article.title}
              category={article.category}
              publishedAt={article.published_at}
              thumbnailUrl={article.thumbnail_url}
            />
          ))}
        </div>
      </section>

      <section className="mb-14">
        <SectionHeading
          title="Latest News"
          description="Placeholder section — a reverse-chronological article feed goes here."
          action={{ href: "/news", label: "View all news" }}
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {placeholderArticles.map((article) => (
            <ArticleCard
              key={article.id}
              title={article.title}
              category={article.category}
              publishedAt={article.published_at}
              thumbnailUrl={article.thumbnail_url}
            />
          ))}
        </div>
      </section>

      <section className="mb-14">
        <SectionHeading
          title="Latest Videos"
          description="Placeholder section — the most recent video uploads go here."
          action={{ href: "/videos", label: "View all videos" }}
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {placeholderVideos.map((video) => (
            <VideoCard
              key={video.id}
              title={video.title}
              description={video.description}
              publishedAt={video.published_at}
              thumbnailUrl={video.thumbnail_url}
            />
          ))}
        </div>
      </section>

      <section id="categories" className="scroll-mt-20">
        <SectionHeading
          title="Categories"
          description="Placeholder section — categories will be read from the database."
        />
        <div className="flex flex-wrap gap-3">
          {placeholderCategories.map((category) => (
            <span
              key={category.id}
              className="rounded-full border border-zinc-200 bg-zinc-50 px-4 py-2 text-sm font-medium text-zinc-700"
            >
              {category.name}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
}
