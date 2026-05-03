import Link from "next/link";

const facilities = [
  { name: "Science & Innovation Labs", icon: "🔬", desc: "Three fully equipped labs for Biology, Chemistry, and Physics — with a dedicated Innovation Lab for robotics, coding, and maker projects." },
  { name: "The Library & Knowledge Centre", icon: "📖", desc: "Over 12,000 curated titles alongside digital research stations, a reading lounge, and a rare books collection. Open 7am–7pm daily." },
  { name: "Sports Complex", icon: "🏊", desc: "Olympic-standard swimming pool, covered multi-sport court, athletics track, tennis courts, and a fully equipped gymnasium." },
  { name: "Arts & Performance Studio", icon: "🎭", desc: "A 350-seat performing arts theatre, music practice rooms, recording studio, visual arts suites, and a ceramics workshop." },
  { name: "Dining Hall & Nutrition Centre", icon: "🍽️", desc: "Farm-to-table dining prepared by professional chefs, with menus designed by a certified nutritionist for growing minds." },
  { name: "Medical & Wellness Bay", icon: "🏥", desc: "Resident nurse and visiting paediatrician, counselling services, and a quiet wellness room for students who need a moment to reset." },
  { name: "Smart Classrooms", icon: "💻", desc: "Every classroom equipped with interactive panels, high-speed fibre, and ergonomic furniture designed for collaborative and focused learning." },
  { name: "Boarding Houses", icon: "🏡", desc: "Six gender-separated boarding houses with 24-hour house parents, climate control, and WiFi — a home away from home." },
];

const campusStats = [
  { value: "14 acres", label: "Campus Size" },
  { value: "8", label: "Specialist Buildings" },
  { value: "60,000 sq ft", label: "Indoor Learning Space" },
  { value: "2025", label: "Last Major Expansion" },
];

export default function SchoolAreaPage() {
  return (
    <main className="pt-28">
      {/* Hero */}
      <div className="relative bg-forest py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <svg width="100%" height="100%"><defs><pattern id="sa" width="80" height="80" patternUnits="userSpaceOnUse"><rect x="10" y="10" width="60" height="60" fill="none" stroke="#C9A84C" strokeWidth="0.5"/><rect x="25" y="25" width="30" height="30" fill="none" stroke="#C9A84C" strokeWidth="0.3"/></pattern></defs><rect width="100%" height="100%" fill="url(#sa)"/></svg>
        </div>
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <span className="gold-line" />
          <span className="text-[10px] tracking-[0.3em] uppercase text-gold font-medium block mb-6">Our Campus</span>
          <h1 className="font-display text-6xl md:text-7xl text-ivory font-light leading-tight mb-6">
            A World Built for <span className="italic text-gold">Learning</span>
          </h1>
          <p className="text-ivory/50 text-lg leading-relaxed max-w-2xl mx-auto">
            Our 14-acre campus in Lekki, Lagos is designed to inspire curiosity at every corner — because environment shapes mind.
          </p>
        </div>
      </div>

      {/* Campus stats */}
      <div className="bg-ivory py-14">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {campusStats.map((s) => (
            <div key={s.label}>
              <div className="font-display text-gold text-4xl font-light mb-2">{s.value}</div>
              <div className="text-[10px] tracking-[0.2em] uppercase text-stone">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Facilities grid */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="gold-line" />
          <h2 className="font-display text-5xl text-charcoal font-light mt-4">World-Class <span className="italic text-forest">Facilities</span></h2>
          <p className="text-stone mt-4 max-w-xl mx-auto text-sm leading-relaxed">Every space on campus serves a purpose: to ignite curiosity, nurture talent, and support the wellbeing of every student.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {facilities.map((f) => (
            <div key={f.name} className="school-card border border-gold/15 p-8 hover:border-gold transition-colors duration-300">
              <div className="text-4xl mb-5">{f.icon}</div>
              <h3 className="font-display text-xl text-charcoal font-medium mb-3">{f.name}</h3>
              <p className="text-stone text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Safety section */}
      <section className="py-20 bg-forest text-center px-6">
        <div className="max-w-3xl mx-auto">
          <span className="gold-line" />
          <h2 className="font-display text-4xl text-ivory font-light mt-4 mb-6">Safety is Our <span className="italic text-gold">Foundation</span></h2>
          <p className="text-ivory/50 text-sm leading-relaxed mb-8">
            Cecilia Learning Academy operates a comprehensive security framework: 24-hour gated security, AI-assisted CCTV coverage across all zones, biometric access to sensitive areas, trained first-aid staff on every floor, and a real-time parent notification system. Your child is always safe with us.
          </p>
          <Link href="/contact" className="btn-gold"><span>Schedule a Campus Tour</span></Link>
        </div>
      </section>
    </main>
  );
}
