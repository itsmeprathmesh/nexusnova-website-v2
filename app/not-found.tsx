import type { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = {
  title: "Page Not Found",
  robots: { index: false, follow: false },
};
export default function NotFound() {
  return (
    <main className="lux-bg grid min-h-screen place-items-center p-6 text-center">
      <div className="glass rounded-[2rem] px-8 py-12">
        <p className="text-sm text-violet-300">404</p>
        <h1 className="text-gradient mt-3 text-4xl font-semibold">Page not found</h1>
        <Link
          className="btn-lux mt-8 inline-flex px-6 py-3"
          href="/"
        >
          Back home
        </Link>
      </div>
    </main>
  );
}
