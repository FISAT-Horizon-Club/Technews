import Image from "next/image";

interface ArticleCardProps {
  title: string;
  category?: string | null;
  publishedAt?: string | null;
  thumbnailUrl?: string | null;
  featured?: boolean;
}

const dateFormatter = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "short",
  day: "numeric",
});

function formatDate(value?: string | null) {
  if (!value) return null;
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? null : dateFormatter.format(date);
}

export default function ArticleCard({
  title,
  category,
  publishedAt,
  thumbnailUrl,
  featured = false,
}: ArticleCardProps) {
  const date = formatDate(publishedAt);

  return (
    <article
      className={`group flex flex-col overflow-hidden rounded-xl border border-zinc-200 bg-white transition-colors hover:border-zinc-300 ${
        featured ? "sm:col-span-2" : ""
      }`}
    >
      <div
        className={`relative flex items-center justify-center bg-zinc-100 text-xs font-medium uppercase tracking-wider text-zinc-400 ${
          featured ? "aspect-[16/7]" : "aspect-[16/9]"
        }`}
      >
        {thumbnailUrl ? (
          <Image
            src={thumbnailUrl}
            alt=""
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover"
          />
        ) : (
          "Thumbnail"
        )}
      </div>

      <div className="flex flex-1 flex-col gap-2 p-4">
        {category ? (
          <span className="text-xs font-semibold uppercase tracking-wide text-blue-600">
            {category}
          </span>
        ) : null}
        <h3
          className={`font-semibold leading-snug text-zinc-900 ${
            featured ? "text-lg sm:text-xl" : "text-base"
          }`}
        >
          {title}
        </h3>
        {date ? <p className="mt-auto text-xs text-zinc-500">{date}</p> : null}
      </div>
    </article>
  );
}
