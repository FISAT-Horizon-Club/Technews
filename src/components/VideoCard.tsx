import Image from "next/image";

interface VideoCardProps {
  title: string;
  description?: string | null;
  publishedAt?: string | null;
  thumbnailUrl?: string | null;
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

export default function VideoCard({
  title,
  description,
  publishedAt,
  thumbnailUrl,
}: VideoCardProps) {
  const date = formatDate(publishedAt);

  return (
    <article className="flex flex-col overflow-hidden rounded-xl border border-zinc-200 bg-white transition-colors hover:border-zinc-300">
      <div className="relative flex aspect-video items-center justify-center bg-zinc-900 text-xs font-medium uppercase tracking-wider text-zinc-500">
        {thumbnailUrl ? (
          <Image
            src={thumbnailUrl}
            alt=""
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover"
          />
        ) : (
          "Video thumbnail"
        )}
      </div>

      <div className="flex flex-1 flex-col gap-2 p-4">
        <h3 className="text-base font-semibold leading-snug text-zinc-900">
          {title}
        </h3>
        {description ? (
          <p className="line-clamp-2 text-sm text-zinc-500">{description}</p>
        ) : null}
        {date ? <p className="mt-auto text-xs text-zinc-500">{date}</p> : null}
      </div>
    </article>
  );
}
