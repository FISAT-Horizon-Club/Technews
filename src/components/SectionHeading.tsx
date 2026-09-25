interface SectionHeadingProps {
  title: string;
  description?: string;
  action?: { href: string; label: string };
}

export default function SectionHeading({
  title,
  description,
  action,
}: SectionHeadingProps) {
  return (
    <div className="mb-6 flex flex-wrap items-end justify-between gap-3 border-b border-zinc-200 pb-3">
      <div>
        <h2 className="text-xl font-bold tracking-tight text-zinc-900 sm:text-2xl">
          {title}
        </h2>
        {description ? (
          <p className="mt-1 text-sm text-zinc-500">{description}</p>
        ) : null}
      </div>
      {action ? (
        <a
          href={action.href}
          className="text-sm font-medium text-blue-600 transition-colors hover:text-blue-700"
        >
          {action.label} &rarr;
        </a>
      ) : null}
    </div>
  );
}
