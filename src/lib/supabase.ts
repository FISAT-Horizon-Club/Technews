import { createClient, type SupabaseClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

/**
 * True when `.env.local` provides a Supabase URL and anon key.
 * The UI can use this to show a setup notice instead of crashing.
 */
export const isSupabaseConfigured = Boolean(supabaseUrl && supabaseAnonKey);

/**
 * Returns a Supabase client using the anon key from `.env.local`.
 *
 * A getter rather than a module-level singleton so the build never fails when
 * credentials are absent. The service_role / secret key must never be used
 * here — it is for trusted server code only, and the anon key is the only key
 * exposed to the browser.
 */
export function getSupabaseClient(): SupabaseClient {
  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error(
      "Supabase is not configured. Copy .env.example to .env.local and add your project URL and anon key.",
    );
  }

  return createClient(supabaseUrl, supabaseAnonKey);
}
