"use client";

import { useState } from "react";

type SubmitStatus = "idle" | "loading" | "success" | "error";

const businessTypes = [
  { value: "mobile", label: "🚐 Mobile Groomer" },
  { value: "solo_salon", label: "✂️ Solo Salon" },
  { value: "multi_groomer", label: "🏪 Multi-Groomer Salon" },
  { value: "chain", label: "🏢 Multi-Location / Franchise" },
];

export default function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [businessType, setBusinessType] = useState("");
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !businessType) {
      setError("Please fill in all fields.");
      return;
    }
    setError("");
    setStatus("loading");

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, businessType }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Something went wrong");
      }

      setStatus("success");
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  };

  if (status === "success") {
    return (
      <section className="py-24 bg-gradient-to-b from-teal-600 to-teal-700" id="waitlist">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-10 border border-white/20">
            <div className="text-6xl mb-4">🎉</div>
            <h2 className="font-display text-3xl font-extrabold text-white mb-3">
              You&apos;re on the list!
            </h2>
            <p className="text-teal-100 text-lg mb-6">
              We&apos;ll email you when your spot is ready. We&apos;re launching soon —
              expect early access within the next few weeks.
            </p>
            <div className="flex items-center justify-center gap-4 text-white/80 text-sm">
              <div className="flex items-center gap-1.5">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Early bird pricing locked in
              </div>
              <div className="w-1 h-1 rounded-full bg-white/40" />
              <div className="flex items-center gap-1.5">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                No spam, ever
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 bg-gradient-to-b from-teal-600 to-teal-700" id="waitlist">
      <div className="max-w-2xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-block px-4 py-1.5 rounded-full bg-white/20 text-white text-sm font-medium mb-4">
            🐾 Limited early access spots
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-extrabold text-white mb-4">
            Join the waitlist
          </h2>
          <p className="text-teal-100 text-xl">
            Early access members get 40% off launch pricing — forever.
            Plus first dibs on new features.
          </p>
        </div>

        {/* Form card */}
        <div className="bg-white rounded-2xl p-8 shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-700 mb-1.5"
              >
                Work email
              </label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@yoursalon.com"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent text-gray-900 placeholder-gray-400 transition-all"
              />
            </div>

            {/* Business type */}
            <div>
              <p id="business-type-label" className="block text-sm font-semibold text-gray-700 mb-1.5">
                What describes you best?
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3" role="group" aria-labelledby="business-type-label">
                {businessTypes.map((type) => (
                  <button
                    key={type.value}
                    type="button"
                    aria-pressed={businessType === type.value}
                    onClick={() => setBusinessType(type.value)}
                    className={`px-4 py-3 rounded-xl border-2 text-sm font-medium text-left transition-all ${
                      businessType === type.value
                        ? "border-teal-500 bg-teal-50 text-teal-700"
                        : "border-gray-200 text-gray-600 hover:border-gray-300 hover:bg-gray-50"
                    }`}
                  >
                    {type.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Error */}
            {error && (
              <div className="flex items-center gap-2 text-red-600 text-sm bg-red-50 px-4 py-3 rounded-lg border border-red-100">
                <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {error}
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full py-4 rounded-xl bg-teal-600 text-white font-bold text-lg hover:bg-teal-700 active:bg-teal-800 transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === "loading" ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  Joining waitlist...
                </span>
              ) : (
                "Claim my early access spot →"
              )}
            </button>

            {/* Trust signals */}
            <div className="flex items-center justify-center gap-6 pt-2">
              {[
                { icon: "🔒", text: "No spam" },
                { icon: "✓", text: "14-day free trial" },
                { icon: "✕", text: "No credit card" },
              ].map((s) => (
                <div key={s.text} className="flex items-center gap-1.5 text-xs text-teal-200">
                  <span>{s.icon}</span>
                  <span>{s.text}</span>
                </div>
              ))}
            </div>
          </form>
        </div>

        {/* Social proof below form */}
        <div className="mt-8 text-center">
          <div className="flex items-center justify-center gap-3 text-white/80 text-sm">
            <div className="flex items-center -space-x-2">
              {["🐩", "🦮", "🐕", "🐾"].map((emoji, i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-sm border-2 border-teal-600"
                >
                  {emoji}
                </div>
              ))}
            </div>
            <span>Join <strong className="text-white">47 groomers</strong> already waiting</span>
          </div>
        </div>
      </div>
    </section>
  );
}
