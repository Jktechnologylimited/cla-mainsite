import HeroCarousel from "./components/HeroCarousel";
import Link from "next/link";
import { Star, Globe, Users, Award, BookOpen } from "lucide-react";

const schools = [
  { name: "Crèche", age: "3 months – 2 years", desc: "Warm, nurturing care designed to develop trust, sensory exploration, and the earliest cognitive foundations in a safe, loving environment.", icon: "🌱", color: "from-navy/5 to-navy/10", border: "border-navy/15", accent: "text-navy" },
  { name: "Nursery", age: "2 – 5 years", desc: "Play-based learning rich in language, numeracy, music, and movement — building curiosity, confidence, and a lifelong love of discovery.", icon: "🌼", color: "from-crimson/5 to-crimson/10", border: "border-crimson/15", accent: "text-crimson" },
  { name: "Primary", age: "5 – 11 years", desc: "A rigorous yet joyful curriculum grounded in critical thinking, creativity, and the British/Nigerian hybrid framework for academic mastery.", icon: "📚", color: "from-navy/5 to-navy/10", border: "border-navy/15", accent: "text-navy" },
  { name: "Secondary", age: "11 – 18 years", desc: "University-preparatory education with IGCSE and A-Level pathways, leadership programmes, and global exchange opportunities.", icon: "🎓", color: "from-crimson/5 to-crimson/10", border: "border-crimson/15", accent: "text-crimson" },
];

const stats = [
  { value: "98%", label: "University Acceptance Rate" },
  { value: "20+", label: "Years of Excellence" },
  { value: "850+", label: "Students Enrolled" },
  { value: "42", label: "Expert Educators" },
];

const values = [
  { icon: Star, title: "Academic Rigour", desc: "Standards that challenge, inspire, and elevate every student beyond what they believed possible." },
  { icon: Globe, title: "Global Perspective", desc: "A curriculum and culture that prepares students for leadership in an interconnected world." },
  { icon: Users, title: "Character Formation", desc: "Values, ethics, and emotional intelligence woven into everything we teach." },
  { icon: Award, title: "Proven Excellence", desc: "Decades of consistent results in national and international examinations and competitions." },
];

export default function HomePage() {
  return (
    <main>
      <HeroCarousel />

      {/* Stats ribbon — navy bg */}
      <div className="bg-navy py-14 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.06]">
          <svg width="100%" height="100%"><defs><pattern id="dots" width="30" height="30" patternUnits="userSpaceOnUse"><circle cx="15" cy="15" r="1.5" fill="#FFFFFF" /></pattern></defs><rect width="100%" height="100%" fill="url(#dots)" /></svg>
        </div>
        {/* Red top border */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-crimson" />
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/10">
            {stats.map((s) => (
              <div key={s.value} className="text-center px-4">
                <div className="font-display text-crimson text-5xl font-light mb-2">{s.value}</div>
                <div className="text-white/50 text-[10px] tracking-[0.2em] uppercase">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Welcome section */}
      <section className="py-28 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="red-line-left" />
            <span className="text-[10px] tracking-[0.3em] uppercase text-crimson font-medium">Welcome to Cecilia</span>
            <h2 className="font-display text-5xl md:text-6xl font-light text-navy mt-4 mb-6 leading-tight">
              Education as an <span className="italic text-crimson">Investment</span>
            </h2>
            <p className="text-slate text-base leading-relaxed mb-6">
              Cecilia Learning Academy was founded on a singular conviction: that exceptional education should be experiential, personal, and transformative. For over two decades, we have been the institution of choice for families who understand that a child&apos;s schooling years are not a rehearsal — they are the foundation of everything.
            </p>
            <p className="text-slate text-base leading-relaxed mb-10">
              Our approach blends the best of British educational methodology with the spirit and heritage of Nigeria, producing graduates who are both globally competitive and deeply rooted.
            </p>
            <div className="flex gap-4 flex-wrap">
              <Link href="/about" className="btn-gold"><span>Our Story</span></Link>
              <Link href="/contact" className="btn-outline-navy">Book a Tour</Link>
            </div>
          </div>

          {/* Visual block */}
          <div className="relative">
            <div className="aspect-[4/5] bg-gradient-to-br from-navy to-navy-mid relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <svg width="100%" height="100%"><defs><pattern id="weave" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M0 20 L20 0 L40 20 L20 40 Z" fill="none" stroke="#FFFFFF" strokeWidth="0.5"/></pattern></defs><rect width="100%" height="100%" fill="url(#weave)" /></svg>
              </div>
              {/* Red accent corner */}
              <div className="absolute top-0 left-0 w-16 h-16 bg-crimson" />
              <div className="absolute bottom-0 right-0 w-16 h-16 bg-crimson" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-10">
                <div className="font-display text-white/10 text-8xl italic mb-4">&ldquo;</div>
                <p className="font-display text-white text-2xl font-light italic leading-relaxed">To educate a child is to invest in the soul of a nation.</p>
                <div className="h-0.5 w-12 bg-crimson my-6" />
                <span className="text-white/50 text-[10px] tracking-[0.25em] uppercase">The Cecilia Principle</span>
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 border-2 border-navy/20" />
            <div className="absolute -top-6 -right-6 w-32 h-32 border-2 border-crimson/20" />
          </div>
        </div>
      </section>

      {/* Schools section */}
      <section className="py-24 bg-ivory-dark">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="gold-line" />
            <span className="text-[10px] tracking-[0.3em] uppercase text-crimson font-medium block mb-4">From Cradle to University</span>
            <h2 className="font-display text-5xl font-light text-navy">Our <span className="italic text-crimson">Four Schools</span></h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {schools.map((school) => (
              <div key={school.name} className={`school-card bg-gradient-to-b ${school.color} border ${school.border} p-8 bg-white`}>
                <div className="text-4xl mb-6">{school.icon}</div>
                <div className={`text-[9px] tracking-[0.25em] uppercase font-medium mb-2 ${school.accent}`}>Ages {school.age}</div>
                <h3 className="font-display text-3xl font-light text-navy mb-4">{school.name}</h3>
                <p className="text-slate text-sm leading-relaxed mb-6">{school.desc}</p>
                <Link href="/schools" className={`text-[10px] tracking-[0.25em] uppercase font-medium flex items-center gap-2 hover:gap-4 transition-all duration-300 ${school.accent}`}>
                  Learn More <span>→</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-28 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="gold-line" />
          <span className="text-[10px] tracking-[0.3em] uppercase text-crimson font-medium block mb-4">The Pillars of a Cecilia Education</span>
          <h2 className="font-display text-5xl font-light text-navy">What We <span className="italic text-crimson">Stand For</span></h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((v) => (
            <div key={v.title} className="group">
              <div className="w-14 h-14 border-2 border-navy/20 flex items-center justify-center mb-6 group-hover:border-crimson group-hover:bg-crimson/5 transition-all duration-300">
                <v.icon size={22} className="text-navy/50 group-hover:text-crimson transition-colors duration-300" />
              </div>
              <h4 className="font-display text-2xl font-light text-navy mb-3">{v.title}</h4>
              <p className="text-slate text-sm leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Banner — navy with crimson accents */}
      <section className="relative bg-navy py-24 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1 bg-crimson" />
        <div className="absolute inset-0 opacity-[0.04]">
          <svg width="100%" height="100%"><defs><pattern id="hexagon" width="60" height="52" patternUnits="userSpaceOnUse"><polygon points="30,1 59,15 59,37 30,51 1,37 1,15" fill="none" stroke="#FFFFFF" strokeWidth="0.5"/></pattern></defs><rect width="100%" height="100%" fill="url(#hexagon)" /></svg>
        </div>
        <div className="relative max-w-3xl mx-auto text-center px-6">
          <BookOpen className="text-crimson mx-auto mb-6" size={32} />
          <h2 className="font-display text-5xl md:text-6xl text-white font-light mb-6 leading-tight">
            Begin the Admissions <span className="italic text-crimson">Journey</span>
          </h2>
          <p className="text-white/50 text-base leading-relaxed mb-10">
            Spaces at Cecilia Learning Academy are limited by design. We maintain small class sizes to ensure every child receives the individual attention they deserve.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/contact" className="btn-gold"><span>Apply for Admission</span></Link>
            <Link href="/schools" className="btn-outline">View All Programmes</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
