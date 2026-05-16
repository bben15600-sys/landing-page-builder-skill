import { createClient } from "@supabase/supabase-js";

const url = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(url, key, {
  auth: { persistSession: false },
});

export type Event = {
  id: string;
  slug: string;
  title: string;
  date: string | null;
  cover_url: string | null;
  created_at: string;
};

export type Photo = {
  id: string;
  event_id: string;
  storage_path: string;
  width: number | null;
  height: number | null;
  created_at: string;
};

export function publicPhotoUrl(storagePath: string): string {
  const base = process.env.NEXT_PUBLIC_SUPABASE_URL!;
  return `${base}/storage/v1/object/public/photos/${storagePath}`;
}
