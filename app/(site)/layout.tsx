import { Navbar, StatusBar } from "@/components/site/sections";
import { PageTransition } from "@/components/site/page-transition";
import { Footer } from "@/components/site/footer";
import { Suspense } from "react";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <StatusBar />
      <Navbar />
      <main>
        <Suspense fallback={null}>
          <PageTransition>{children}</PageTransition>
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
