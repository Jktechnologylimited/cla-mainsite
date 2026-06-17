import { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import { Section, Container, SectionHeader } from "@/components/ui";
import { DIVISIONS, SCHOOL, ADMIN_URL } from "@/lib/constants";
import Link from "next/link";
import { GraduationCap, Star, Shield, Users, BookOpen, Heart, ArrowRight, Phone, Mail, MapPin, CheckCircle } from "lucide-react";

const BASE_URL = "https://cecilialearningacademy.com.ng";
const OG_IMAGE = "https://res.cloudinary.com/devdspz1m/image/upload/w_1200,h_630,c_fill,g_auto,q_auto,f_auto/v1781695454/PHOTO-2026-05-11-20-32-09_eadl9e.jpg";

export const metadata: Metadata = {
  title: "Cecilia Learning Academy | Quality Education in Port Harcourt, Rivers State",
  description:
    "Cecilia Learning Academy (CLA) offers quality education from Crèche to Senior Secondary in Rumuolumeni, Port Harcourt, Rivers State. Apply for admission today.",
  alternates: { canonical: BASE_URL },
  openGraph: {
    title: "Cecilia Learning Academy | Quality Education in Port Harcourt",
    description: "World-class education from Crèche to Senior Secondary in Rumuolumeni, Port Harcourt. Learning for Development.",
    url: BASE_URL,
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Cecilia Learning Academy students" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cecilia Learning Academy | Quality Education in Port Harcourt",
    description: "World-class education from Crèche to Senior Secondary in Rumuolumeni, Port Harcourt.",
    images: [OG_IMAGE],
  },
};

async function getSettings() {
  try {
    const r = await fetch(`${ADMIN_URL}/api/public/settings`, { next: { revalidate: 300 } });
    return (await r.json()).settings || {};
  } catch { return {}; }
}

export default async function HomePage() {
  const settings = await getSettings();

  return (
    <>
      <HeroSection />

      {/* Quick contact strip */}
      <div className="bg-crimson text-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/20">
          {[
            { icon: Phone, label: "Call Us", value: SCHOOL.phone, href: `tel:${SCHOOL.phone}` },
            { icon: Mail, label: "Email Us", value: SCHOOL.email, href: `mailto:${SCHOOL.email}` },
            { icon: MapPin, label: "Find Us", value: "Rumuolumeni, Port Harcourt", href: SCHOOL.googleMapsUrl },
          ].map(({ icon: Icon, label, value, href }) => (
            <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer"
              className="flex items-center gap-3 py-3.5 px-6 hover:bg-white/10 transition-colors">
              <Icon size={17} className="shrink-0 opacity-80" />
              <div>
                <div className="text-white/55 text-[10px] uppercase tracking-wider">{label}</div>
                <div className="text-sm font-medium truncate">{value}</div>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* About */}
      <Section className="bg-white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="h-0.5 w-8 bg-crimson" />
                <span className="text-crimson text-[11px] font-bold uppercase tracking-[0.22em]">About CLA</span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-navy-dark mb-5 leading-tight">
                {settings.home_about_title || "A Legacy of Excellence in Port Harcourt"}
              </h2>
              <p className="text-slate leading-relaxed mb-4">
                {settings.home_about_body || "Cecilia Learning Academy (CLA) has been a cornerstone of quality education in Rumuolumeni, Port Harcourt. We believe every child deserves an education that nurtures intellect, character, and potential."}
              </p>
              <p className="text-slate leading-relaxed mb-8">
                {settings.home_about_body2 || "From our warm Crèche programme to our rigorous Secondary School, CLA provides a complete educational journey guided by our motto: \"Learning for Development.\""}
              </p>
              <ul className="space-y-3 mb-8">
                {["WAEC & NECO accredited secondary school", "Experienced and qualified teaching staff", "Safe, inclusive, and stimulating environment", "Extracurricular activities & sports clubs"].map(item => (
                  <li key={item} className="flex items-start gap-3 text-sm text-slate">
                    <CheckCircle size={16} className="text-crimson shrink-0 mt-0.5" /> {item}
                  </li>
                ))}
              </ul>
              <div className="flex gap-3 flex-wrap">
                <Link href="/about" className="inline-flex items-center gap-2 bg-navy text-white font-semibold text-sm px-6 py-3 uppercase tracking-wider hover:bg-navy-dark transition-colors">
                  Learn About Us
                </Link>
                <Link href="/admissions" className="inline-flex items-center gap-2 border-2 border-navy text-navy font-semibold text-sm px-6 py-3 uppercase tracking-wider hover:bg-navy hover:text-white transition-colors">
                  Apply Now
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src="https://res.cloudinary.com/devdspz1m/image/upload/w_900,h_700,c_fill,g_auto,q_auto,f_auto/v1781695455/PHOTO-2026-05-11-20-58-36_zz746f.jpg"
                  alt="CLA students in a creative learning activity"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-navy-dark/30" />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-navy-dark/80 to-transparent">
                  <p className="font-display text-white text-lg italic leading-relaxed">&ldquo;Learning for Development&rdquo;</p>
                  <span className="text-white/50 text-xs uppercase tracking-[0.2em]">Cecilia Learning Academy</span>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-20 h-20 border-2 border-crimson/25" />
              <div className="absolute -top-4 -left-4 w-20 h-20 border-2 border-navy/15" />
            </div>
          </div>
        </Container>
      </Section>

      {/* Schools */}
      <Section className="bg-ivory">
        <Container>
          <SectionHeader eyebrow="Our Programmes" title="Education at Every Stage"
            subtitle="From your child's first steps to their final exams, CLA offers a complete educational journey tailored to each stage of development." />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {DIVISIONS.map(div => (
              <Link key={div.slug} href={`/schools/${div.slug}`}
                className="bg-white border border-ivory-dark hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group block">
                <div className="p-6">
                  <div className="text-4xl mb-4">{div.icon}</div>
                  <div className="text-xs text-crimson font-bold uppercase tracking-wider mb-1">Ages {div.ageRange}</div>
                  <h2 className="font-display text-xl font-bold text-navy-dark mb-2 group-hover:text-crimson transition-colors">{div.label}</h2>
                  <p className="text-sm text-slate leading-relaxed mb-4 line-clamp-3">
                    {div.slug === "creche" ? (settings.school_creche_desc || "A warm, safe, and stimulating environment for our youngest learners.") :
                     div.slug === "nursery" ? (settings.school_nursery_desc || "Play-based learning that builds foundations in literacy, numeracy, and social skills.") :
                     div.slug === "primary" ? (settings.school_primary_desc || "A rigorous and joyful curriculum developing critical thinkers and confident learners.") :
                     (settings.school_secondary_desc || "University-preparatory education with WAEC/NECO pathways and leadership development.")}
                  </p>
                  <div className="text-xs font-bold text-crimson flex items-center gap-1 group-hover:gap-2 transition-all">
                    Learn More <ArrowRight size={12} />
                  </div>
                </div>
                <div className="h-[3px]" style={{ background: div.color }} />
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      {/* Why CLA */}
      <Section className="bg-navy-dark relative overflow-hidden">
        <Container className="relative">
          <SectionHeader eyebrow="Why Choose Us" title="The CLA Difference" light
            subtitle="We go beyond academics to cultivate well-rounded individuals ready for the challenges of tomorrow." />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: GraduationCap, t: "Academic Excellence",   d: "Rigorous curriculum aligned with Nigerian standards, with a proven track record of outstanding results." },
              { icon: Heart,         t: "Holistic Development",  d: "Sports, arts, clubs and character-building activities that complement the academic programme." },
              { icon: Shield,        t: "Safe Environment",      d: "A secure, disciplined campus where every child feels valued, respected, and protected." },
              { icon: Users,         t: "Experienced Educators", d: "Qualified, passionate teachers committed to unlocking the potential in every student." },
              { icon: Star,          t: "Strong Values",         d: "We instil integrity, discipline, respect, and faith — values that guide students throughout life." },
              { icon: BookOpen,      t: "Modern Learning",       d: "Contemporary teaching methods that prepare students for the demands of a digital, global world." },
            ].map(({ icon: Icon, t, d }) => (
              <div key={t} className="group p-6 border border-white/10 hover:border-crimson/50 transition-colors">
                <div className="w-11 h-11 bg-crimson/20 flex items-center justify-center mb-4 group-hover:bg-crimson transition-colors">
                  <Icon size={20} className="text-crimson group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-display text-lg font-bold text-white mb-2">{t}</h3>
                <p className="text-white/45 text-sm leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <div className="bg-crimson py-20 text-center px-6">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
          {settings.home_cta_title || "Ready to Join the CLA Family?"}
        </h2>
        <p className="text-white/75 text-lg mb-8 max-w-xl mx-auto">
          {settings.home_cta_subtitle || "Enrolment is open. Secure your child's place in one of Port Harcourt's leading private schools today."}
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link href="/admissions" className="bg-white text-crimson font-bold px-8 py-4 text-sm uppercase tracking-wider hover:bg-ivory transition-colors inline-flex items-center gap-2">
            Apply for Admission <ArrowRight size={15} />
          </Link>
          <Link href="/contact" className="border-2 border-white text-white font-bold px-8 py-4 text-sm uppercase tracking-wider hover:bg-white/10 transition-colors">
            Contact Us
          </Link>
        </div>
      </div>

      {/* Location */}
      <Section className="bg-white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="h-0.5 w-8 bg-crimson" />
                <span className="text-crimson text-[11px] font-bold uppercase tracking-[0.22em]">Find Us</span>
              </div>
              <h2 className="font-display text-3xl font-bold text-navy-dark mb-6">Visit Our Campus</h2>
              <div className="space-y-5 mb-8">
                {[
                  { icon: MapPin, label: "Address", value: SCHOOL.address },
                  { icon: Phone, label: "Phone", value: SCHOOL.phone, href: `tel:${SCHOOL.phone}` },
                  { icon: Mail, label: "Email", value: SCHOOL.email, href: `mailto:${SCHOOL.email}` },
                ].map(({ icon: Icon, label, value, href }) => (
                  <div key={label} className="flex gap-4">
                    <div className="w-10 h-10 bg-crimson/10 flex items-center justify-center shrink-0">
                      <Icon size={17} className="text-crimson" />
                    </div>
                    <div>
                      <div className="text-[11px] font-bold text-slate uppercase tracking-wider mb-0.5">{label}</div>
                      {href ? <a href={href} className="text-sm text-navy hover:text-crimson transition-colors">{value}</a>
                             : <p className="text-sm text-slate leading-relaxed">{value}</p>}
                    </div>
                  </div>
                ))}
              </div>
              <a href={SCHOOL.googleMapsUrl} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-crimson text-white font-bold text-sm px-6 py-3 uppercase tracking-wider hover:bg-crimson-dark transition-colors">
                Get Directions on Google Maps <ArrowRight size={14} />
              </a>
            </div>
            <div className="bg-navy/5 border border-ivory-dark h-80 flex items-center justify-center">
              <div className="text-center p-8">
                <MapPin size={36} className="text-crimson mx-auto mb-3" />
                <p className="font-display text-lg font-bold text-navy">Cecilia Learning Academy</p>
                <p className="text-sm text-slate mt-1">4 Miller Avenue, Opposite Cecilia Bus Stop</p>
                <p className="text-sm text-slate">Rumuolumeni, Port Harcourt</p>
                <a href={SCHOOL.googleMapsUrl} target="_blank" rel="noopener noreferrer"
                  className="inline-block mt-4 bg-crimson text-white text-xs font-bold px-5 py-2 uppercase tracking-wider hover:bg-crimson-dark transition-colors">
                  Open in Google Maps
                </a>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
