-- Initial schema for the tech news platform.
--
-- This is a deliberately minimal starting point: three plain tables, no
-- foreign keys, no roles and no RLS policies. Extend it as features land.
--
-- Run it with either:
--   - the Supabase CLI:  supabase db push
--   - or paste it into the Supabase Dashboard -> SQL Editor.

create table if not exists public.categories (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  slug text not null unique,
  created_at timestamptz not null default now()
);

create table if not exists public.articles (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text not null unique,
  content text not null default '',
  thumbnail_url text,
  category text,
  published_at timestamptz,
  created_at timestamptz not null default now()
);

create table if not exists public.videos (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  description text,
  video_url text not null,
  thumbnail_url text,
  published_at timestamptz,
  created_at timestamptz not null default now()
);

create index if not exists articles_published_at_idx
  on public.articles (published_at desc);

create index if not exists videos_published_at_idx
  on public.videos (published_at desc);
