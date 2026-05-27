export const dynamic = "force-dynamic";
import type { Metadata } from "next";
import { AdminContentSkeleton, AdminShell } from "@/components/admin/admin-shell";
import { requireAdmin } from "@/lib/auth/admin";
import { Suspense } from "react";
export const metadata: Metadata = {
  title: "Administration",
  robots: { index: false, follow: false, nocache: true },
};
export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  await requireAdmin();
  return (
    <AdminShell>
      <Suspense fallback={<AdminContentSkeleton />}>{children}</Suspense>
    </AdminShell>
  );
}
