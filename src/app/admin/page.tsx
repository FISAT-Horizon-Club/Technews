import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin Dashboard",
  description: "Placeholder admin area for the future editorial dashboard.",
};

const adminSections = [
  {
    title: "Articles",
    description: "Create, edit, publish and remove news articles.",
  },
  {
    title: "Videos",
    description: "Upload and manage video entries and thumbnails.",
  },
  {
    title: "Categories",
    description: "Add, rename and organise content categories.",
  },
];

export default function AdminPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
          Admin Dashboard
        </h1>
        <p className="mt-3 max-w-2xl text-base text-zinc-600">
          This page is an empty shell. Authentication, CRUD, forms, uploads,
          scheduling and publishing will be added by later tasks.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {adminSections.map((section) => (
          <section
            key={section.title}
            className="rounded-xl border border-zinc-200 bg-white p-5"
          >
            <h2 className="text-lg font-semibold text-zinc-900">
              {section.title}
            </h2>
            <p className="mt-2 text-sm text-zinc-500">{section.description}</p>
            <p className="mt-4 rounded-md bg-zinc-50 px-3 py-2 text-xs font-medium uppercase tracking-wide text-zinc-400">
              Not implemented yet
            </p>
          </section>
        ))}
      </div>
    </div>
  );
}
