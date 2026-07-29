import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center p-6 text-center">
      <div className="neuro-glass rounded-[2rem] px-8 py-12">
        <p className="text-sm text-blue-300">404</p>
        <h1 className="text-gradient-blue mt-3 text-4xl font-bold">
          Page not found
        </h1>
        <p className="mt-3 text-slate-400">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link className="btn-neuro mt-8 inline-flex px-6 py-3" href="/">
          Back home
        </Link>
      </div>
    </main>
  );
}
