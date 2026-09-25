import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "News",
  description: "All tech news articles.",
};

export default function NewsPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
      <SectionHeading
        title="News"
        description="Placeholder page. Article fetching, pagination, filtering and search will be implemented here."
      />

      <div className="rounded-xl border border-dashed border-zinc-300 bg-zinc-50 px-6 py-12 text-center">
        <h2 className="text-lg font-semibold text-zinc-900">
          Article list goes here
        </h2>
        <p className="mx-auto mt-2 max-w-md text-sm text-zinc-500">
          The next developer will query the <code>articles</code> table with
          the Supabase client in <code>src/lib/supabase.ts</code> and map rows
          onto <code>ArticleCard</code>.
        </p>
      </div>
    </div>
  );
}
