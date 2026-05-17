import { Footer } from "@/components/site/footer";
import { Header } from "@/components/site/header";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <div className="flex-1 pt-20 sm:pt-24">{children}</div>
      <Footer />
    </>
  );
}
