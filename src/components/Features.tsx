const features = [
  {
    icon: "📅",
    title: "Smart Scheduling",
    description:
      "Drag-and-drop calendar with conflict detection, buffer time management, and mobile-optimized booking. Your capacity, protected.",
    badge: "Core",
    badgeColor: "teal",
    highlights: ["Conflict detection", "Buffer time", "Mobile booking", "Multi-groomer support"],
  },
  {
    icon: "🐾",
    title: "Client & Pet CRM",
    description:
      "Full history for every client and pet. Vaccine records, preferences, allergies, photos, and grooming notes — all searchable.",
    badge: "Core",
    badgeColor: "teal",
    highlights: ["Pet profiles", "Vaccine tracking", "Preference notes", "Client history"],
  },
  {
    icon: "🧠",
    title: "AI Breed Detection",
    description:
      "Snap a photo of any dog. Our vision AI identifies the breed, suggests appropriate grooming templates, and auto-fills service notes.",
    badge: "AI",
    badgeColor: "coral",
    highlights: ["300+ breed library", "Auto-templates", "Coat type analysis", "Instant results"],
  },
  {
    icon: "🔄",
    title: "Smart Rebooking",
    description:
      "GroomGrid learns each dog's grooming cycle and proactively texts clients to rebook at the perfect time. Fully automated.",
    badge: "AI",
    badgeColor: "coral",
    highlights: ["Breed-based intervals", "Automated SMS", "One-tap confirm", "Revenue forecasting"],
  },
  {
    icon: "📸",
    title: "Before & After Photos",
    description:
      "Document every groom with photo pairs. Share directly with clients, build your portfolio, and reference previous styles instantly.",
    badge: "Client Delight",
    badgeColor: "sand",
    highlights: ["Auto-organized by pet", "Client sharing", "Portfolio builder", "Style references"],
  },
  {
    icon: "💳",
    title: "Payments & Invoicing",
    description:
      "Accept cards, request deposits, and send automatic invoices. Integrated with Stripe for next-day payouts.",
    badge: "Revenue",
    badgeColor: "green",
    highlights: ["Stripe integration", "Deposit collection", "Auto-invoicing", "Next-day payouts"],
  },
];

const badgeStyles: Record<string, string> = {
  teal: "bg-teal-100 text-teal-700",
  coral: "bg-coral-100 text-coral-700",
  sand: "bg-sand-100 text-sand-800",
  green: "bg-green-100 text-green-700",
};

export default function Features() {
  return (
    <section className="py-24 bg-gradient-to-b from-sand-50/40 to-white" id="features">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 rounded-full bg-teal-50 border border-teal-200 text-teal-700 text-sm font-medium mb-4">
            Everything you need
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Six features.{" "}
            <span className="text-gradient">One platform.</span>
          </h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            Built by groomers, for groomers. Every feature solves a real
            problem — no bloat, no complexity.
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group relative bg-white rounded-2xl border border-gray-200 p-6 card-hover shadow-soft overflow-hidden"
            >
              {/* Hover glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-teal-50/0 via-transparent to-coral-50/0 group-hover:from-teal-50/60 group-hover:to-coral-50/40 transition-all duration-500 rounded-2xl" />

              <div className="relative">
                {/* Icon + badge */}
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-200">
                    {feature.icon}
                  </div>
                  <span
                    className={`text-xs font-semibold px-2.5 py-1 rounded-full ${badgeStyles[feature.badgeColor]}`}
                  >
                    {feature.badge}
                  </span>
                </div>

                {/* Title + description */}
                <h3 className="font-display text-lg font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  {feature.description}
                </p>

                {/* Highlights */}
                <ul className="space-y-1.5">
                  {feature.highlights.map((h) => (
                    <li
                      key={h}
                      className="flex items-center gap-2 text-xs text-gray-500"
                    >
                      <svg
                        className="w-3.5 h-3.5 text-teal-500 shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2.5}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-500 mb-6">
            Plus: automated reminders, team management, analytics, and more.
          </p>
          <a
            href="#waitlist"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-teal-700 text-white font-semibold text-lg hover:bg-teal-800 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            Get early access — it&apos;s free
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
