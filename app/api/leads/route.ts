import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase/server";
import { sendLeadEmails } from "@/lib/email";
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

const required = [
  "name",
  "email",
  "phone",
  "business_name",
  "service_needed",
  "budget",
  "timeline",
  "message",
];

const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(3, "10 m"),
});

function clean(value: unknown, max = 500) {
  return String(value || "").trim().slice(0, max);
}

export async function POST(req: Request) {
  try {
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0] ||
      req.headers.get("x-real-ip") ||
      "unknown";

    const { success } = await ratelimit.limit(`lead-form:${ip}`);

    if (!success) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    const body = await req.json();

    for (const k of required) {
      if (!clean(body[k])) {
        return NextResponse.json({ error: `Missing ${k}` }, { status: 400 });
      }
    }

    const email = clean(body.email, 120);
    const phone = clean(body.phone, 20);

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    if (!/^[0-9+\-\s()]{7,20}$/.test(phone)) {
      return NextResponse.json({ error: "Invalid phone number" }, { status: 400 });
    }

    const payload = {
      name: clean(body.name, 80),
      email,
      phone,
      business_name: clean(body.business_name, 120),
      service_needed: clean(body.service_needed, 100),
      budget: clean(body.budget, 50),
      timeline: clean(body.timeline, 50),
      message: clean(body.message, 1000),
      status: "new",
    };

    const { data, error } = await supabaseAdmin()
      .from("leads")
      .insert(payload)
      .select()
      .single();

    if (error) throw error;

    await sendLeadEmails(payload).catch(console.error);

    return NextResponse.json({ ok: true, lead: data }, { status: 201 });
  } catch {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}