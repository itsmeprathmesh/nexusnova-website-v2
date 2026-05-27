export const dynamic = "force-dynamic";
import { CrudTable } from "@/components/admin/crud-table";
export default function Page() {
  return (
    <CrudTable
      config={{
        table: "leads",
        title: "Leads",
        columns: [
          "name",
          "email",
          "phone",
          "business_name",
          "service_needed",
          "budget",
          "timeline",
          "status",
        ],
        defaults: { status: "new" },
        fields: [
          { name: "name", label: "Name" },
          { name: "email", label: "Email" },
          { name: "phone", label: "Phone" },
          { name: "business_name", label: "Business" },
          { name: "service_needed", label: "Service" },
          { name: "budget", label: "Budget" },
          { name: "timeline", label: "Timeline" },
          { name: "message", label: "Message", type: "textarea" },
          {
            name: "status",
            label: "Status",
            type: "select",
            options: ["new", "contacted", "converted", "lost"],
          },
          { name: "admin_notes", label: "Admin notes", type: "textarea" },
        ],
      }}
    />
  );
}
