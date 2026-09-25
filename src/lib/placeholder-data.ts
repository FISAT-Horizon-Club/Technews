import type { Article, Category, Video } from "@/types";

/**
 * Static placeholder data used to establish the UI structure.
 * Replace these with Supabase queries once the database is connected.
 */

export const placeholderArticles: Article[] = [
  {
    id: "1",
    title: "Placeholder: A major chip launch is reshaping the industry",
    slug: "placeholder-chip-launch",
    content:
      "Placeholder body copy. Article content will be rendered here once real articles are loaded from Supabase.",
    thumbnail_url: null,
    category: "Hardware",
    published_at: "2026-01-15T09:00:00.000Z",
    created_at: "2026-01-14T09:00:00.000Z",
  },
  {
    id: "2",
    title: "Placeholder: Open source maintainers push back on a new policy",
    slug: "placeholder-open-source-policy",
    content:
      "Placeholder body copy. Article content will be rendered here once real articles are loaded from Supabase.",
    thumbnail_url: null,
    category: "Software",
    published_at: "2026-01-12T09:00:00.000Z",
    created_at: "2026-01-12T08:00:00.000Z",
  },
  {
    id: "3",
    title: "Placeholder: Quantum computing reaches a new milestone",
    slug: "placeholder-quantum-milestone",
    content:
      "Placeholder body copy. Article content will be rendered here once real articles are loaded from Supabase.",
    thumbnail_url: null,
    category: "Science",
    published_at: "2026-01-09T09:00:00.000Z",
    created_at: "2026-01-09T08:00:00.000Z",
  },
  {
    id: "4",
    title: "Placeholder: A new browser engine promises faster page loads",
    slug: "placeholder-browser-engine",
    content:
      "Placeholder body copy. Article content will be rendered here once real articles are loaded from Supabase.",
    thumbnail_url: null,
    category: "Web",
    published_at: "2026-01-06T09:00:00.000Z",
    created_at: "2026-01-06T08:00:00.000Z",
  },
  {
    id: "5",
    title: "Placeholder: Startup raises funding to build on-device AI models",
    slug: "placeholder-on-device-ai-funding",
    content:
      "Placeholder body copy. Article content will be rendered here once real articles are loaded from Supabase.",
    thumbnail_url: null,
    category: "AI",
    published_at: "2026-01-03T09:00:00.000Z",
    created_at: "2026-01-03T08:00:00.000Z",
  },
  {
    id: "6",
    title: "Placeholder: Cybersecurity researchers warn of a new exploit chain",
    slug: "placeholder-exploit-chain",
    content:
      "Placeholder body copy. Article content will be rendered here once real articles are loaded from Supabase.",
    thumbnail_url: null,
    category: "Security",
    published_at: "2026-01-02T09:00:00.000Z",
    created_at: "2026-01-02T08:00:00.000Z",
  },
];

export const placeholderVideos: Video[] = [
  {
    id: "1",
    title: "Placeholder: Hands-on with the newest flagship phone",
    description: "Placeholder description for a future video entry.",
    video_url: "https://example.com/placeholder-video-1",
    thumbnail_url: null,
    published_at: "2026-01-13T09:00:00.000Z",
    created_at: "2026-01-13T08:00:00.000Z",
  },
  {
    id: "2",
    title: "Placeholder: Building a home server from spare parts",
    description: "Placeholder description for a future video entry.",
    video_url: "https://example.com/placeholder-video-2",
    thumbnail_url: null,
    published_at: "2026-01-10T09:00:00.000Z",
    created_at: "2026-01-10T08:00:00.000Z",
  },
  {
    id: "3",
    title: "Placeholder: The tools we used this month",
    description: "Placeholder description for a future video entry.",
    video_url: "https://example.com/placeholder-video-3",
    thumbnail_url: null,
    published_at: "2026-01-05T09:00:00.000Z",
    created_at: "2026-01-05T08:00:00.000Z",
  },
];

export const placeholderCategories: Category[] = [
  {
    id: "1",
    name: "AI",
    slug: "ai",
    created_at: "2026-01-01T00:00:00.000Z",
  },
  {
    id: "2",
    name: "Hardware",
    slug: "hardware",
    created_at: "2026-01-01T00:00:00.000Z",
  },
  {
    id: "3",
    name: "Software",
    slug: "software",
    created_at: "2026-01-01T00:00:00.000Z",
  },
  {
    id: "4",
    name: "Security",
    slug: "security",
    created_at: "2026-01-01T00:00:00.000Z",
  },
  {
    id: "5",
    name: "Science",
    slug: "science",
    created_at: "2026-01-01T00:00:00.000Z",
  },
  {
    id: "6",
    name: "Web",
    slug: "web",
    created_at: "2026-01-01T00:00:00.000Z",
  },
];
