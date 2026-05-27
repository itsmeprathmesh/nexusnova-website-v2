export const dynamic = "force-dynamic";
import { CrudTable } from "@/components/admin/crud-table";
export default function Page() {
  return (
    <CrudTable
      config={{
        table: "site_settings",
        title: "Site Settings",
        columns: ["key", "value", "updated_at"],
        fields: [
          { name: "key", label: "Key" },
          { name: "value", label: "Value", type: "textarea" },
        ],
      }}
    />
  );
}
