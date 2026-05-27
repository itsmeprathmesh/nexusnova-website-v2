import { auth, currentUser } from "@clerk/nextjs/server";

export async function requireAdmin() {
  if (process.env.NEXT_PHASE === "phase-production-build")
    return { userId: "build", email: "build@nexusnova.local" };
  const { userId } = await auth();
  if (!userId) throw new Error("UNAUTHENTICATED");

  const user = await currentUser();
  const email =
    user?.emailAddresses?.find(
      (e: { id: string; emailAddress: string }) =>
        e.id === user.primaryEmailAddressId,
    )?.emailAddress || user?.emailAddresses?.[0]?.emailAddress;

  const allowed = (process.env.ADMIN_EMAIL || "")
    .split(",")
    .map((e: string) => e.trim().toLowerCase())
    .filter(Boolean);

  if (!email || !allowed.includes(email.toLowerCase()))
    throw new Error("FORBIDDEN");
  return { userId, email };
}

export async function isAdmin() {
  try {
    await requireAdmin();
    return true;
  } catch {
    return false;
  }
}
