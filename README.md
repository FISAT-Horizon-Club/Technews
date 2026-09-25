# TechNews

A minimal starter boilerplate for a tech news website. It contains the folder
structure, public site shell, placeholder pages, Supabase client setup and a
starting database schema — nothing more.

## Tech stack

- [Next.js](https://nextjs.org) (App Router)
- [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS](https://tailwindcss.com)
- [Supabase](https://supabase.com)

## Folder structure

```
src/
├── app/
│   ├── page.tsx          # Homepage: featured news, latest news, latest videos, categories
│   ├── news/page.tsx     # /news placeholder
│   ├── videos/page.tsx   # /videos placeholder
│   ├── admin/page.tsx    # /admin placeholder dashboard
│   ├── layout.tsx        # Shared shell (Header + main + Footer)
│   └── globals.css       # Tailwind entry point
├── components/
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── SectionHeading.tsx
│   ├── ArticleCard.tsx
│   ├── VideoCard.tsx
│   └── EmptyState.tsx
├── lib/
│   ├── supabase.ts       # Supabase client factory + config check
│   └── placeholder-data.ts
└── types/
    └── index.ts          # Article, Video, Category

supabase/
└── migrations/
    └── 0001_initial_schema.sql
```

## Setup

```bash
npm install
cp .env.example .env.local
```

Then open `.env.local` and fill in your own Supabase values.

### Environment variables

| Variable | Description |
| --- | --- |
| `NEXT_PUBLIC_SUPABASE_URL` | Your Supabase project URL (Project Settings → API) |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | The **anon public** key (Project Settings → API) |

`.env.example` is committed with empty values so new contributors know which
keys are needed. `.env.local` is git-ignored — never commit it, and never use
the `service_role` / secret key in a `NEXT_PUBLIC_` variable.

### Database

Apply `supabase/migrations/0001_initial_schema.sql` to create the
`articles`, `videos` and `categories` tables. Paste it into the Supabase
Dashboard SQL Editor, or run `supabase db push` with the Supabase CLI.

## Run

```bash
npm run dev     # http://localhost:3000
npm run build   # production build
npm run start   # serve the production build
npm run lint    # eslint
```

## Routes

| Route | Purpose |
| --- | --- |
| `/` | Public homepage shell |
| `/news` | News listing placeholder |
| `/videos` | Video listing placeholder |
| `/admin` | Admin dashboard placeholder (no auth or CRUD yet) |

## What's next

Deliberately **not** implemented yet: data fetching, article/video detail
pages, auth, admin CRUD, uploads, search, comments, analytics, SEO and
scheduling. See the placeholders in each page for where that work belongs.
