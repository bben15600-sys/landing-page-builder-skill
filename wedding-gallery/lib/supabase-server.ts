import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

const SUPABASE_URL =
  process.env.NEXT_PUBLIC_SUPABASE_URL || "https://pqykgrfajugcmqqhvcvz.supabase.co";
const SUPABASE_KEY =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
  "sb_publishable_GKRDK5L48NihXuvTy1J3wg_HFtR8hsp";

export async function createSupabaseServer() {
  const store = await cookies();
  return createServerClient(SUPABASE_URL, SUPABASE_KEY, {
    cookies: {
      getAll: () => store.getAll(),
      setAll: (cookieList) => {
        try {
          for (const { name, value, options } of cookieList) {
            store.set(name, value, options);
          }
        } catch {
          // setAll called from a Server Component — middleware will refresh
        }
      },
    },
  });
}
