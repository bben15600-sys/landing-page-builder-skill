import { NextResponse, type NextRequest } from "next/server";
import { createServerClient } from "@supabase/ssr";

// Flip to false to take the site out of "coming soon" mode and expose
// the full portfolio + gallery again.
const COMING_SOON = false;

const SUPABASE_URL =
  process.env.NEXT_PUBLIC_SUPABASE_URL || "https://pqykgrfajugcmqqhvcvz.supabase.co";
const SUPABASE_KEY =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
  "sb_publishable_GKRDK5L48NihXuvTy1J3wg_HFtR8hsp";

export async function proxy(req: NextRequest) {
  const path = req.nextUrl.pathname;

  if (
    COMING_SOON &&
    path !== "/soon" &&
    !path.startsWith("/admin") &&
    !path.startsWith("/_next") &&
    path !== "/opengraph-image" &&
    path !== "/favicon.ico"
  ) {
    const url = req.nextUrl.clone();
    url.pathname = "/soon";
    url.search = "";
    return NextResponse.rewrite(url);
  }

  let res = NextResponse.next({ request: req });

  const supabase = createServerClient(SUPABASE_URL, SUPABASE_KEY, {
    cookies: {
      getAll: () => req.cookies.getAll(),
      setAll: (list) => {
        res = NextResponse.next({ request: req });
        for (const { name, value, options } of list) {
          res.cookies.set(name, value, options);
        }
      },
    },
  });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const isLogin = path === "/admin/login";

  if (path.startsWith("/admin") && !isLogin && !user) {
    const url = req.nextUrl.clone();
    url.pathname = "/admin/login";
    url.searchParams.set("next", path);
    return NextResponse.redirect(url);
  }

  if (isLogin && user) {
    const url = req.nextUrl.clone();
    url.pathname = req.nextUrl.searchParams.get("next") || "/admin";
    url.searchParams.delete("next");
    return NextResponse.redirect(url);
  }

  return res;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image).*)"],
};
