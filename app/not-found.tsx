import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center p-6 text-center">
      <div className="glass-premium rounded-4xl px-10 py-14">
        <p className="text-sm font-mono text-ember">404</p>
        <h1 className="text-gradient-ember mt-4 text-5xl font-bold">
          Page not found
        </h1>
        <p className="mt-4 text-white/75">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link className="btn-primary mt-10" href="/">
          Back home
        </Link>
      </div>
    </main>
  );
}
