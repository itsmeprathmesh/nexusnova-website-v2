export const dynamic = "force-dynamic";
import { CrudTable } from "@/components/admin/crud-table";
export default function Page() {
  return (
    <CrudTable
      config={{
        table: "testimonials",
        title: "Testimonials",
        columns: ["name", "company", "rating", "status"],
        defaults: { status: "draft", rating: 5 },
        fields: [
          { name: "name", label: "Name" },
          { name: "role", label: "Role" },
          { name: "company", label: "Company" },
          { name: "quote", label: "Quote", type: "textarea" },
          { name: "rating", label: "Rating", type: "number" },
          {
            name: "status",
            label: "Status",
            type: "select",
            options: ["draft", "published"],
          },
        ],
      }}
    />
  );
}
