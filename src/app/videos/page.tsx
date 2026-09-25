import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Videos",
  description: "Tech news videos.",
};

export default function VideosPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
      <SectionHeading
        title="Videos"
        description="Placeholder page. Video fetching, playback and embedding will be implemented here."
      />

      <div className="rounded-xl border border-dashed border-zinc-300 bg-zinc-50 px-6 py-12 text-center">
        <h2 className="text-lg font-semibold text-zinc-900">
          Video grid goes here
        </h2>
        <p className="mx-auto mt-2 max-w-md text-sm text-zinc-500">
          The next developer will query the <code>videos</code> table with the
          Supabase client in <code>src/lib/supabase.ts</code> and map rows onto{" "}
          <code>VideoCard</code>.
        </p>
      </div>
    </div>
  );
}
