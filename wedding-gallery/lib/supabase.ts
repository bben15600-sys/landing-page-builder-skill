import { createClient } from "@supabase/supabase-js";

const url = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://pqykgrfajugcmqqhvcvz.supabase.co";
const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "sb_publishable_GKRDK5L48NihXuvTy1J3wg_HFtR8hsp";

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
  return `${url}/storage/v1/object/public/photos/${storagePath}`;
}
