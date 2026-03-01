import { NextRequest, NextResponse } from "next/server";

// In-memory store for development / demo purposes.
// Replace with Supabase client call when DB is configured.
const waitlistEntries: { email: string; businessType: string; createdAt: string }[] = [];

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email, businessType } = body;

    // Validate input
    if (!email || typeof email !== "string") {
      return NextResponse.json({ error: "Valid email is required." }, { status: 400 });
    }

    if (!businessType || typeof businessType !== "string") {
      return NextResponse.json({ error: "Business type is required." }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
    }

    const validTypes = ["mobile", "solo_salon", "multi_groomer", "chain"];
    if (!validTypes.includes(businessType)) {
      return NextResponse.json({ error: "Invalid business type." }, { status: 400 });
    }

    // Check for duplicate (case-insensitive)
    const normalizedEmail = email.toLowerCase().trim();
    const existing = waitlistEntries.find(
      (e) => e.email.toLowerCase() === normalizedEmail
    );
    if (existing) {
      // Idempotent — still return success so UX is clean
      return NextResponse.json({ success: true, message: "Already on the waitlist!" }, { status: 200 });
    }

    // Store entry
    // TODO: Replace with Supabase:
    //   const { error } = await supabase
    //     .from('waitlist')
    //     .insert({ email: normalizedEmail, business_type: businessType })
    //   if (error) throw error;

    waitlistEntries.push({
      email: normalizedEmail,
      businessType,
      createdAt: new Date().toISOString(),
    });

    console.log(`[Waitlist] New signup: ${normalizedEmail} (${businessType})`);

    return NextResponse.json(
      { success: true, message: "You're on the waitlist!" },
      { status: 201 }
    );
  } catch (err) {
    console.error("[Waitlist] Error:", err);
    return NextResponse.json(
      { error: "Internal server error. Please try again." },
      { status: 500 }
    );
  }
}

export async function GET() {
  // Health check / count endpoint (no auth in dev)
  return NextResponse.json({ count: waitlistEntries.length });
}
