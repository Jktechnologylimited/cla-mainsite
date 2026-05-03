import Link from "next/link";

const team = [
  { name: "Dr. Amara Okonkwo", role: "Founder & Principal", years: "20 years" },
  { name: "Mrs. Chidinma Eze", role: "Head of Primary", years: "14 years" },
  { name: "Mr. Emeka Adeyemi", role: "Head of Secondary", years: "12 years" },
  { name: "Ms. Fatima Bello", role: "Director of Admissions", years: "8 years" },
];

const milestones = [
  { year: "2005", event: "Founded with 60 students and a vision to transform Nigerian education." },
  { year: "2009", event: "Opened Secondary School; first WAEC cohort achieves 100% distinction rate." },
  { year: "2013", event: "Awarded Best Private School in Lagos by the National Education Council." },
  { year: "2017", event: "Launched IGCSE and A-Level programmes; first international placements." },
  { year: "2021", event: "Completed the new state-of-the-art Sports & Arts Complex." },
  { year: "2024", event: "Ranked #1 Private School in South-West Nigeria for 3 consecutive years." },
];

export default function AboutPage() {
  return (
    <main className="pt-28">
      {/* Hero */}
      <div className="relative bg-forest py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <svg width="100%" height="100%"><defs><pattern id="ab" width="50" height="50" patternUnits="userSpaceOnUse"><circle cx="25" cy="25" r="20" fill="none" stroke="#C9A84C" strokeWidth="0.5"/></pattern></defs><rect width="100%" height="100%" fill="url(#ab)"/></svg>
        </div>
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <span className="gold-line" />
          <span className="text-[10px] tracking-[0.3em] uppercase text-gold font-medium block mb-6">About Us</span>
          <h1 className="font-display text-6xl md:text-7xl text-ivory font-light leading-tight mb-6">
            Our <span className="italic text-gold">Story</span>
          </h1>
          <p className="text-ivory/50 text-lg leading-relaxed max-w-2xl mx-auto">
            Founded with an uncompromising belief that Nigerian children deserve world-class education on African soil.
          </p>
        </div>
      </div>

      {/* Mission */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { label: "Our Mission", text: "To cultivate exceptional minds through an education that is academically rigorous, culturally grounded, and globally relevant — preparing every graduate to lead with excellence and integrity." },
            { label: "Our Vision", text: "To be Africa&apos;s most respected educational institution — a place where potential is not merely developed but transformed into lasting brilliance." },
            { label: "Our Values", text: "Excellence without arrogance. Discipline with joy. Curiosity above compliance. Integrity in all things. These are the values that guide every decision at Cecilia Learning Academy." },
          ].map((item) => (
            <div key={item.label} className="border border-gold/20 p-10">
              <span className="gold-line-left" />
              <h3 className="font-display text-3xl text-forest font-light mb-4">{item.label}</h3>
              <p className="text-stone text-sm leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Milestones */}
      <section className="py-20 bg-ivory">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="gold-line" />
            <h2 className="font-display text-5xl text-charcoal font-light mt-4">Two Decades of <span className="italic text-forest">Milestones</span></h2>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gold/20 -translate-x-1/2 hidden md:block" />
            {milestones.map((m, i) => (
              <div key={m.year} className={`flex gap-8 mb-12 items-start ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                <div className={`flex-1 ${i % 2 === 0 ? "md:text-right" : ""}`}>
                  <span className="font-display text-gold text-5xl font-light">{m.year}</span>
                  <p className="text-stone text-sm leading-relaxed mt-2">{m.event}</p>
                </div>
                <div className="hidden md:flex w-4 h-4 rounded-full border-2 border-gold bg-cream mt-2 shrink-0 z-10" />
                <div className="flex-1" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="gold-line" />
          <h2 className="font-display text-5xl text-charcoal font-light mt-4">Our <span className="italic text-forest">Leadership</span></h2>
        </div>
        <div className="grid md:grid-cols-4 gap-6">
          {team.map((person) => (
            <div key={person.name} className="group text-center">
              <div className="w-24 h-24 mx-auto bg-gradient-to-br from-forest to-forest-mid border border-gold/20 flex items-center justify-center mb-6 group-hover:border-gold transition-colors duration-300">
                <span className="font-display text-gold text-3xl font-light">{person.name[0]}</span>
              </div>
              <h4 className="font-display text-xl text-charcoal font-medium mb-1">{person.name}</h4>
              <div className="text-gold text-[10px] tracking-[0.2em] uppercase mb-1">{person.role}</div>
              <div className="text-stone text-xs">{person.years} experience</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-forest py-20 text-center px-6">
        <h2 className="font-display text-4xl text-ivory font-light mb-6">Ready to Join the <span className="italic text-gold">Cecilia Family?</span></h2>
        <Link href="/contact" className="btn-gold"><span>Begin Your Application</span></Link>
      </section>
    </main>
  );
}
