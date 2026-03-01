const plans = [
  {
    name: "Solo",
    price: 29,
    description: "Perfect for independent mobile groomers",
    badge: null,
    color: "gray",
    features: [
      "1 groomer",
      "Unlimited appointments",
      "Smart scheduling",
      "Pet & client CRM",
      "Payment processing",
      "Before/after photos",
      "Automated reminders",
      "Mobile app",
    ],
    notIncluded: ["Team management", "AI breed detection", "Smart rebooking AI"],
    cta: "Start free trial",
  },
  {
    name: "Salon",
    price: 79,
    description: "For small salons with 2–5 groomers",
    badge: "Most Popular",
    color: "teal",
    features: [
      "Up to 5 groomers",
      "Unlimited appointments",
      "Smart scheduling",
      "Pet & client CRM",
      "Payment processing",
      "Before/after photos",
      "Automated reminders",
      "Mobile app",
      "AI breed detection",
      "Smart rebooking AI",
      "Team management",
      "Priority support",
    ],
    notIncluded: [],
    cta: "Start free trial",
  },
  {
    name: "Enterprise",
    price: 149,
    description: "For multi-location chains and franchises",
    badge: null,
    color: "gray",
    features: [
      "Unlimited groomers",
      "Unlimited appointments",
      "Smart scheduling",
      "Pet & client CRM",
      "Payment processing",
      "Before/after photos",
      "Automated reminders",
      "Mobile app",
      "AI breed detection",
      "Smart rebooking AI",
      "Team management",
      "Multi-location support",
      "Custom integrations",
      "Dedicated account manager",
      "SLA uptime guarantee",
    ],
    notIncluded: [],
    cta: "Contact sales",
  },
];

export default function Pricing() {
  return (
    <section className="py-24 bg-white" id="pricing">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 rounded-full bg-teal-50 border border-teal-200 text-teal-700 text-sm font-medium mb-4">
            Simple pricing
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Plans that grow{" "}
            <span className="text-gradient">with your business</span>
          </h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            14-day free trial on all plans. No credit card required.
            Cancel anytime.
          </p>
        </div>

        {/* Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl border-2 p-8 card-hover ${
                plan.color === "teal"
                  ? "border-teal-500 bg-gradient-to-b from-teal-50 to-white shadow-xl scale-105"
                  : "border-gray-200 bg-white shadow-soft"
              }`}
            >
              {/* Popular badge */}
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-teal-600 text-white text-xs font-bold rounded-full shadow-lg">
                  {plan.badge}
                </div>
              )}

              {/* Plan header */}
              <div className="mb-6">
                <h3 className="font-display text-xl font-bold text-gray-900 mb-1">
                  {plan.name}
                </h3>
                <p className="text-sm text-gray-500 mb-4">{plan.description}</p>
                <div className="flex items-baseline gap-1">
                  <span className="font-display text-5xl font-extrabold text-gray-900">
                    ${plan.price}
                  </span>
                  <span className="text-gray-500 text-sm">/month</span>
                </div>
              </div>

              {/* CTA */}
              <a
                href="#waitlist"
                className={`block w-full text-center py-3 rounded-xl font-semibold text-sm mb-8 transition-all ${
                  plan.color === "teal"
                    ? "bg-teal-600 text-white hover:bg-teal-700 shadow-lg hover:shadow-xl"
                    : "bg-gray-900 text-white hover:bg-gray-800"
                }`}
              >
                {plan.cta}
              </a>

              {/* Features */}
              <ul className="space-y-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2.5 text-sm text-gray-700">
                    <svg
                      className="w-4 h-4 text-teal-500 shrink-0"
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
                    {f}
                  </li>
                ))}
                {plan.notIncluded.map((f) => (
                  <li key={f} className="flex items-center gap-2.5 text-sm text-gray-400">
                    <svg
                      className="w-4 h-4 text-gray-300 shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* FAQ row */}
        <div className="mt-16 bg-gray-50 rounded-2xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                q: "Can I switch plans?",
                a: "Yes, upgrade or downgrade anytime. Changes take effect on your next billing date.",
              },
              {
                q: "Is there a free trial?",
                a: "All plans include a 14-day free trial. No credit card required to start.",
              },
              {
                q: "Do you charge per appointment?",
                a: "Never. All plans include unlimited appointments. Just the flat monthly fee.",
              },
            ].map((faq) => (
              <div key={faq.q}>
                <h4 className="font-semibold text-gray-900 mb-2">{faq.q}</h4>
                <p className="text-sm text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
