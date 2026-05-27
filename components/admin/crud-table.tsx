"use client";
import { ImageWithSkeleton } from "@/components/site/motion";
import { useEffect, useMemo, useState } from "react";
import slugify from "slugify";

type FieldType =
  | "text"
  | "textarea"
  | "number"
  | "checkbox"
  | "select"
  | "array"
  | "image";
type Config = {
  table: string;
  title: string;
  fields: {
    name: string;
    label: string;
    type?: FieldType;
    options?: string[];
  }[];
  columns: string[];
  defaults?: Record<string, any>;
};

function emptyValue(type?: FieldType) {
  if (type === "checkbox") return false;
  return "";
}

export function CrudTable({ config }: { config: Config }) {
  const [items, setItems] = useState<any[]>([]);
  const [form, setForm] = useState<any>(config.defaults || {});
  const [editing, setEditing] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [loadingItems, setLoadingItems] = useState(true);
  const [uploading, setUploading] = useState<string | null>(null);
  const [error, setError] = useState("");
  const fields = useMemo(() => config.fields, [config]);

  async function load() {
    setLoadingItems(true);
    try {
      const r = await fetch(`/api/admin/${config.table}`, { cache: "no-store" });
      if (!r.ok) {
        setError(
          "Unable to load data. Check Supabase env vars and admin access.",
        );
        return;
      }
      setItems(await r.json());
    } catch {
      setError(
        "Unable to load data. Check Supabase env vars and admin access.",
      );
    } finally {
      setLoadingItems(false);
    }
  }

  useEffect(() => {
    load();
  }, []);

  function setField(name: string, value: any) {
    setForm((current: any) => ({
      ...current,
      [name]: value,
      ...(name === "title" && !current.slug
        ? { slug: slugify(value || "", { lower: true, strict: true }) }
        : {}),
    }));
  }

  async function uploadImage(fieldName: string, file?: File) {
    if (!file) return;
    setUploading(fieldName);
    setError("");
    const fd = new FormData();
    fd.append("file", file);
    fd.append("folder", config.table);
    const r = await fetch("/api/admin/upload", { method: "POST", body: fd });
    const data = await r.json();
    setUploading(null);
    if (!r.ok) {
      setError(data.error || "Upload failed");
      return;
    }
    setField(fieldName, data.url);
  }

  async function save(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    const payload = { ...form };
    for (const f of fields) {
      if (f.type === "array" && typeof payload[f.name] === "string") {
        payload[f.name] = payload[f.name]
          .split("\n")
          .map((x: string) => x.trim())
          .filter(Boolean);
      }
      if (
        f.type === "number" &&
        payload[f.name] !== "" &&
        payload[f.name] !== undefined
      )
        payload[f.name] = Number(payload[f.name]);
    }
    const url = editing
      ? `/api/admin/${config.table}/${editing.id}`
      : `/api/admin/${config.table}`;
    const r = await fetch(url, {
      method: editing ? "PATCH" : "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    setLoading(false);
    if (!r.ok) {
      const data = await r.json().catch(() => ({}));
      setError(data.error || "Save failed");
      return;
    }
    setForm(config.defaults || {});
    setEditing(null);
    await load();
  }

  async function del(id: string) {
    if (!confirm("Delete this item?")) return;
    const r = await fetch(`/api/admin/${config.table}/${id}`, {
      method: "DELETE",
    });
    if (!r.ok) {
      setError("Delete failed");
      return;
    }
    await load();
  }

  function edit(item: any) {
    setEditing(item);
    const editable = { ...item };
    for (const f of fields)
      if (f.type === "array" && Array.isArray(editable[f.name]))
        editable[f.name] = editable[f.name].join("\n");
    setForm(editable);
  }

  return (
    <div>
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-semibold">{config.title}</h1>
          <p className="mt-2 text-sm text-white/50">
            Create, edit, publish, update status, upload images, and manage live
            website content.
          </p>
        </div>
        <button
          onClick={() => {
            setEditing(null);
            setForm(config.defaults || {});
          }}
          className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-black"
        >
          New
        </button>
      </div>
      {error && (
        <div className="mb-5 rounded-2xl border border-red-400/30 bg-red-500/10 p-4 text-sm text-red-100">
          {error}
        </div>
      )}
      <form
        aria-busy={loading}
        onSubmit={save}
        className="glass mb-8 rounded-3xl p-5"
      >
        <h2 className="mb-4 text-xl font-semibold">
          {editing ? "Edit" : "Create"} {config.title}
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          {fields.map((field) => (
            <label className="text-sm text-white/55" key={field.name}>
              {field.label}
              {field.type === "textarea" || field.type === "array" ? (
                <textarea
                  value={form[field.name] || ""}
                  onChange={(e) => setField(field.name, e.target.value)}
                  rows={field.type === "array" ? 5 : 4}
                  className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 p-3 text-white outline-none"
                />
              ) : field.type === "select" ? (
                <select
                  value={form[field.name] || field.options?.[0] || ""}
                  onChange={(e) => setField(field.name, e.target.value)}
                  className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 p-3 text-white outline-none"
                >
                  {(field.options || []).map((option) => (
                    <option className="bg-black" key={option}>
                      {option}
                    </option>
                  ))}
                </select>
              ) : field.type === "checkbox" ? (
                <span className="mt-2 flex items-center gap-3">
                  <input
                    checked={!!form[field.name]}
                    onChange={(e) => setField(field.name, e.target.checked)}
                    type="checkbox"
                  />{" "}
                  <span>{form[field.name] ? "Enabled" : "Disabled"}</span>
                </span>
              ) : field.type === "image" ? (
                <div className="mt-2 space-y-3">
                  <input
                    value={form[field.name] || ""}
                    onChange={(e) => setField(field.name, e.target.value)}
                    placeholder="Paste image URL or upload below"
                    className="w-full rounded-2xl border border-white/10 bg-white/5 p-3 text-white outline-none"
                  />
                  <input
                    accept="image/*"
                    type="file"
                    onChange={(e) =>
                      uploadImage(field.name, e.target.files?.[0])
                    }
                    className="block w-full rounded-2xl border border-white/10 bg-white/5 p-3 text-white"
                  />
                  {uploading === field.name && (
                    <div className="flex items-center gap-2 text-xs text-blue-200">
                      <span className="skeleton h-3 w-20 rounded-full [--skeleton-delay:.12s]" />
                      Uploading image...
                    </div>
                  )}
                  {form[field.name] && (
                    <ImageWithSkeleton
                      src={form[field.name]}
                      alt="Preview"
                      className="h-28 w-full rounded-2xl object-cover"
                    />
                  )}
                </div>
              ) : (
                <input
                  value={form[field.name] ?? emptyValue(field.type)}
                  onChange={(e) => setField(field.name, e.target.value)}
                  type={field.type === "number" ? "number" : "text"}
                  className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 p-3 text-white outline-none"
                />
              )}
            </label>
          ))}
        </div>
        <button
          disabled={loading}
          className="btn-lux mt-5 gap-2 px-6 py-3 disabled:opacity-60"
        >
          {loading && (
            <span aria-hidden className="skeleton h-4 w-4 rounded-full [--skeleton-delay:.1s]" />
          )}
          {loading ? "Saving..." : "Save Changes"}
        </button>
      </form>
      <div
        aria-busy={loadingItems}
        className="overflow-x-auto rounded-3xl border border-white/10"
      >
        <table className="w-full min-w-[900px] text-left text-sm">
          <thead className="bg-white/5 text-white/60">
            <tr>
              {config.columns.map((c) => (
                <th className="p-4" key={c}>
                  {c}
                </th>
              ))}
              <th className="p-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {loadingItems &&
              Array.from({ length: 4 }).map((_, row) => (
                <tr className="border-t border-white/10" key={`loading-${row}`}>
                  {config.columns.map((column) => (
                    <td className="p-4" key={column}>
                      <span
                        className="skeleton block h-4 w-28 rounded-full"
                        style={{ "--skeleton-delay": `${row * 0.07}s` } as React.CSSProperties}
                      />
                    </td>
                  ))}
                  <td className="p-4">
                    <span
                      className="skeleton block h-4 w-20 rounded-full"
                      style={{ "--skeleton-delay": `${row * 0.07 + 0.04}s` } as React.CSSProperties}
                    />
                  </td>
                </tr>
              ))}
            {!loadingItems && Array.isArray(items) &&
              items.map((item) => (
                <tr className="border-t border-white/10" key={item.id}>
                  {config.columns.map((c) => (
                    <td className="max-w-xs truncate p-4" key={c}>
                      {Array.isArray(item[c])
                        ? item[c].join(", ")
                        : String(item[c] ?? "")}
                    </td>
                  ))}
                  <td className="p-4">
                    <button
                      onClick={() => edit(item)}
                      className="mr-3 text-blue-300"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => del(item.id)}
                      className="text-red-300"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
