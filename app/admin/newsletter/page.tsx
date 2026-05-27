export const dynamic = "force-dynamic";
import { CrudTable } from "@/components/admin/crud-table";

export default function Page() {
  return (
    <CrudTable
      config={{
        table: "newsletter_subscribers",
        title: "Newsletter Subscribers",
        columns: ["email", "created_at"],
        fields: [{ name: "email", label: "Email" }],
      }}
    />
  );
}
