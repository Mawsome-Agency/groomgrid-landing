import Link from "next/link";

const stats = [
  { value: "4x", label: "More rebookings" },
  { value: "90%", label: "Fewer no-shows" },
  { value: "2 hrs", label: "Saved daily" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-hero overflow-hidden pt-16">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-teal-100/60 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-coral-100/40 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sand-100/30 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-50 border border-teal-200 text-teal-700 text-sm font-medium mb-8 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse" />
            Now in Early Access — Join the waitlist
          </div>

          {/* Headline */}
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-extrabold text-gray-900 leading-[1.08] tracking-tight mb-6 animate-slide-up">
            The Grooming Business{" "}
            <span className="text-gradient">That Runs Itself</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-10 animate-slide-up">
            GroomGrid is the AI-powered platform built for pet groomers. Smart
            scheduling, breed detection, automated client notes — so you can
            focus on the dogs, not the admin.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a
              href="#waitlist"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-teal-600 text-white font-semibold text-lg hover:bg-teal-700 active:bg-teal-800 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Get Early Access
            </a>
            <a
              href="#features"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-gray-700 font-semibold text-lg hover:bg-gray-50 transition-all shadow-sm border border-gray-200 hover:-translate-y-0.5"
            >
              See how it works
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto mb-16">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-display text-3xl md:text-4xl font-extrabold text-teal-600 mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-500 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Social proof */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-gray-500">
            <div className="flex items-center -space-x-2">
              {["🐶", "🐱", "🐩", "🦮", "🐾"].map((emoji, i) => (
                <div
                  key={i}
                  className="w-9 h-9 rounded-full bg-white border-2 border-white shadow-sm flex items-center justify-center text-base"
                  style={{ zIndex: 5 - i }}
                >
                  {emoji}
                </div>
              ))}
            </div>
            <p>
              <span className="font-semibold text-gray-700">47 groomers</span>{" "}
              already on the waitlist
            </p>
          </div>
        </div>

        {/* App Preview Mock */}
        <div className="relative mt-20 max-w-4xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200/60 bg-white animate-float">
            {/* Browser chrome */}
            <div className="bg-gray-100 border-b border-gray-200 px-4 py-3 flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
              </div>
              <div className="flex-1 bg-white rounded-md px-3 py-1 text-xs text-gray-400 text-center">
                app.groomgrid.com/dashboard
              </div>
            </div>
            {/* Dashboard preview */}
            <div className="bg-gradient-to-br from-teal-50 to-sand-50 p-6 md:p-8 min-h-[320px]">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                {[
                  { label: "Today's Appointments", value: "8", icon: "📅", color: "teal" },
                  { label: "Revenue Today", value: "$640", icon: "💰", color: "green" },
                  { label: "Rebooking Rate", value: "94%", icon: "🔄", color: "coral" },
                  { label: "Satisfaction", value: "4.9★", icon: "⭐", color: "yellow" },
                ].map((card) => (
                  <div
                    key={card.label}
                    className="bg-white rounded-xl p-4 shadow-sm border border-gray-100"
                  >
                    <div className="text-2xl mb-1">{card.icon}</div>
                    <div className="font-display font-bold text-xl text-gray-900">
                      {card.value}
                    </div>
                    <div className="text-xs text-gray-500 mt-0.5">{card.label}</div>
                  </div>
                ))}
              </div>
              {/* Appointment list mock */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="px-4 py-3 border-b border-gray-100 flex items-center justify-between">
                  <span className="font-semibold text-sm text-gray-700">Today&apos;s Schedule</span>
                  <span className="text-xs px-2 py-1 bg-teal-100 text-teal-700 rounded-full font-medium">
                    8 appointments
                  </span>
                </div>
                {[
                  { time: "9:00 AM", pet: "Bella (Golden Retriever)", owner: "Sarah M.", service: "Full groom", status: "Done", ai: "Breed match: 99%" },
                  { time: "10:30 AM", pet: "Max (Poodle Mix)", owner: "James K.", service: "Trim + bath", status: "In progress", ai: "Next visit: Mar 28" },
                  { time: "12:00 PM", pet: "Luna (Shih Tzu)", owner: "Maria G.", service: "Full groom", status: "Upcoming", ai: "Prefers fragrance-free" },
                ].map((apt) => (
                  <div
                    key={apt.time}
                    className="px-4 py-3 border-b border-gray-50 flex items-center gap-4 last:border-0"
                  >
                    <div className="text-xs font-mono text-gray-400 w-20 shrink-0">
                      {apt.time}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-medium text-sm text-gray-900 truncate">
                        {apt.pet}
                      </div>
                      <div className="text-xs text-gray-500">
                        {apt.owner} · {apt.service}
                      </div>
                    </div>
                    <div className="hidden md:block text-xs text-teal-600 bg-teal-50 px-2 py-1 rounded-md font-medium shrink-0">
                      🤖 {apt.ai}
                    </div>
                    <div
                      className={`text-xs font-semibold px-2 py-1 rounded-full shrink-0 ${
                        apt.status === "Done"
                          ? "bg-gray-100 text-gray-600"
                          : apt.status === "In progress"
                          ? "bg-teal-100 text-teal-700"
                          : "bg-sand-100 text-sand-700"
                      }`}
                    >
                      {apt.status}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Floating AI badge */}
          <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-lg border border-teal-100 px-4 py-3 flex items-center gap-2 animate-float" style={{ animationDelay: "1s" }}>
            <div className="w-8 h-8 bg-teal-500 rounded-lg flex items-center justify-center text-white text-sm">
              🧠
            </div>
            <div>
              <div className="text-xs font-bold text-gray-900">AI Breed Detection</div>
              <div className="text-xs text-gray-500">Photo → breed → notes</div>
            </div>
          </div>
          {/* Floating rebooking badge */}
          <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg border border-coral-100 px-4 py-3 flex items-center gap-2 animate-float" style={{ animationDelay: "2s" }}>
            <div className="w-8 h-8 bg-coral-400 rounded-lg flex items-center justify-center text-white text-sm">
              🔄
            </div>
            <div>
              <div className="text-xs font-bold text-gray-900">Smart Rebooking</div>
              <div className="text-xs text-gray-500">Auto-texts 2 weeks before</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
