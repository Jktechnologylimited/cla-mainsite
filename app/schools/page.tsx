import Link from "next/link";

const schools = [
  {
    name: "Crèche",
    slug: "creche",
    ageRange: "3 months – 2 years",
    icon: "🌱",
    color: "bg-gold/5 border-gold/20",
    heading: "The Beginning of Everything",
    description: "Our crèche is a sanctuary of warmth, safety, and gentle stimulation. Trained early childhood specialists guide each infant through carefully designed developmental programmes that respect the natural pace of each child.",
    highlights: ["Individual developmental tracking", "Sensory play programmes", "Qualified paediatric-trained staff", "Nutritionist-approved meal plans", "CCTV-monitored, parent-accessible facility"],
    curriculum: "Our curriculum is informed by the Early Years Foundation Stage (EYFS) framework, adapted for our Nigerian context.",
  },
  {
    name: "Nursery School",
    slug: "nursery",
    ageRange: "2 – 5 years",
    icon: "🌼",
    color: "bg-forest/5 border-forest/20",
    heading: "Wonder, Play, and Discovery",
    description: "The nursery years are where lifelong learning habits are formed. Our approach balances structured phonics, early numeracy, and creative arts with abundant free play — because joy and rigour are not opposites.",
    highlights: ["Phonics and early literacy", "Montessori-inspired learning corners", "Music, movement, and arts", "Bilingual introduction (English & French)", "Outdoor discovery garden"],
    curriculum: "A bespoke blend of British Foundation Stage and Montessori principles, designed for the African child.",
  },
  {
    name: "Primary School",
    slug: "primary",
    ageRange: "5 – 11 years",
    icon: "📚",
    color: "bg-gold/5 border-gold/20",
    heading: "Building the Foundation of Mastery",
    description: "Primary school at Cecilia is where academic ambition meets creative expression. Students engage with a rich, broad curriculum that develops critical thinking, scientific inquiry, and a deep appreciation for culture and the arts.",
    highlights: ["Cambridge Primary Framework", "STEM laboratories", "Coding and robotics from Year 3", "Competitive debating and public speaking", "Sports academy with qualified coaches"],
    curriculum: "Cambridge Primary curriculum with Nigerian heritage studies integrated throughout all year groups.",
  },
  {
    name: "Secondary School",
    slug: "secondary",
    ageRange: "11 – 18 years",
    icon: "🎓",
    color: "bg-forest/5 border-forest/20",
    heading: "From Scholar to Leader",
    description: "Our secondary school prepares students not merely for examinations but for life. With IGCSE, WAEC, and A-Level pathways, students are guided to the world's finest universities — and more importantly, equipped to succeed once they arrive.",
    highlights: ["IGCSE, WAEC & A-Level pathways", "University counselling from Year 9", "Harvard & Oxford alumni mentorship network", "Student leadership and prefect council", "Annual global exchange programme"],
    curriculum: "Cambridge IGCSE and A-Level, fully accredited and internationally recognised.",
  },
];

export default function SchoolsPage() {
  return (
    <main className="pt-28">
      {/* Hero */}
      <div className="relative bg-forest py-24 overflow-hidden">
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <span className="gold-line" />
          <span className="text-[10px] tracking-[0.3em] uppercase text-gold font-medium block mb-6">Our Programmes</span>
          <h1 className="font-display text-6xl md:text-7xl text-ivory font-light leading-tight mb-6">
            Four Schools, <span className="italic text-gold">One Vision</span>
          </h1>
          <p className="text-ivory/50 text-lg leading-relaxed max-w-2xl mx-auto">
            Every stage of a child&apos;s education at Cecilia is designed with the same uncompromising commitment to excellence.
          </p>
        </div>
      </div>

      {/* Schools */}
      <section className="py-16 max-w-6xl mx-auto px-6">
        <div className="space-y-12">
          {schools.map((school, i) => (
            <div key={school.slug} className={`border ${school.color} p-10 md:p-14`}>
              <div className={`grid md:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""}`}>
                <div>
                  <div className="text-5xl mb-4">{school.icon}</div>
                  <div className="text-[9px] tracking-[0.3em] uppercase text-gold mb-2">Ages {school.ageRange}</div>
                  <h2 className="font-display text-4xl text-charcoal font-light mb-2">{school.name}</h2>
                  <h3 className="font-display text-xl text-forest italic font-light mb-6">{school.heading}</h3>
                  <p className="text-stone text-sm leading-relaxed mb-8">{school.description}</p>
                  <Link href="/contact" className="btn-gold"><span>Enquire About {school.name}</span></Link>
                </div>
                <div>
                  <div className="text-[10px] tracking-[0.25em] uppercase text-gold font-medium mb-4">Programme Highlights</div>
                  <ul className="space-y-3 mb-8">
                    {school.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-3 text-sm text-stone">
                        <span className="text-gold mt-0.5">◆</span> {h}
                      </li>
                    ))}
                  </ul>
                  <div className="border-t border-gold/15 pt-6">
                    <div className="text-[10px] tracking-[0.2em] uppercase text-stone mb-2">Curriculum Framework</div>
                    <p className="text-sm text-stone italic">{school.curriculum}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-forest py-20 text-center px-6">
        <h2 className="font-display text-4xl text-ivory font-light mb-6">Not Sure Which Level? <span className="italic text-gold">Let&apos;s Talk.</span></h2>
        <p className="text-ivory/50 mb-8 max-w-lg mx-auto text-sm leading-relaxed">Our admissions team will guide you through the right entry point for your child.</p>
        <Link href="/contact" className="btn-gold"><span>Contact Admissions</span></Link>
      </section>
    </main>
  );
}
