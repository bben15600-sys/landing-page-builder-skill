import { LoginForm } from "./login-form";

export const dynamic = "force-dynamic";

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ next?: string }>;
}) {
  const { next } = await searchParams;
  return (
    <main className="min-h-screen flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-sm rounded-xl border bg-card p-8">
        <h1 className="text-2xl font-semibold mb-1">כניסת מנהל</h1>
        <p className="text-sm text-muted-foreground mb-6">
          התחבר כדי לנהל אירועים ולהעלות תמונות.
        </p>
        <LoginForm next={next || "/admin"} />
      </div>
    </main>
  );
}
