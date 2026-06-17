import { Metadata } from "next";
import { Section, Container, PageHero } from "@/components/ui";
import { ADMIN_URL, SCHOOL } from "@/lib/constants";
import Link from "next/link";
import { Target, Eye, Star, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Cecilia Learning Academy",
  description: "Learn about Cecilia Learning Academy — our mission, vision, values and story of quality education in Port Harcourt.",
};


async function getSettings() {
  try {
    const r = await fetch(`${ADMIN_URL}/api/public/settings`, { next: { revalidate: 300 } });
    return (await r.json()).settings || {};
  } catch { return {}; }
}

export default async function AboutPage() {
  const s = await getSettings();

  const mission = s.about_mission || "To provide excellent, holistic, and affordable education that nurtures the intellectual, moral, and social development of every child in our community.";
  const vision  = s.about_vision  || "To be the foremost centre of academic excellence in Rivers State, raising responsible, innovative, and God-fearing citizens who positively impact their world.";
  const rawValues = s.about_values || "Academic Excellence\nMoral Integrity\nRespect for All\nInclusion & Diversity\nInnovation & Creativity\nService & Leadership";
  const values = rawValues.split("\n").map((v: string) => v.trim()).filter(Boolean);

  const storyP1 = s.about_story_p1 || "Cecilia Learning Academy was founded with a singular purpose: to give every child in Rumuolumeni access to world-class education. Starting from humble beginnings, the school has grown into one of Port Harcourt's most trusted institutions.";
  const storyP2 = s.about_story_p2 || "Over the years, CLA has expanded from a small nursery to a full through-school offering Crèche, Nursery, Primary, and Secondary education. Each stage is carefully designed to build on the last, ensuring continuity, depth, and joy in learning.";
  const storyP3 = s.about_story_p3 || "Today, CLA is home to hundreds of students and a dedicated team of qualified educators who share a common belief: that every child is uniquely gifted and deserves the very best start in life.";

  return (
    <>
      <PageHero
        title="About Cecilia Learning Academy"
        subtitle="A legacy of excellence, a heart for every child. Discover the story, values, and people behind CLA."
        breadcrumb={[{ label: "About", href: "/about" }]}
      />

      {/* Mission / Vision / Values */}
      <Section className="bg-white">
        <Container>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Target, label: "Our Mission", text: mission, color: "text-crimson", bg: "bg-crimson/10" },
              { icon: Eye,    label: "Our Vision",  text: vision,  color: "text-navy",   bg: "bg-navy/10" },
            ].map(({ icon: Icon, label, text, color, bg }) => (
              <div key={label} className="p-8 border border-ivory-dark">
                <div className={`w-12 h-12 ${bg} flex items-center justify-center mb-5`}>
                  <Icon size={22} className={color} />
                </div>
                <div className="h-0.5 w-8 bg-crimson mb-4" />
                <h2 className="font-display text-xl font-bold text-navy-dark mb-4">{label}</h2>
                <p className="text-slate text-sm leading-relaxed">{text}</p>
              </div>
            ))}

            {/* Values */}
            <div className="p-8 border border-ivory-dark">
              <div className="w-12 h-12 bg-yellow-50 flex items-center justify-center mb-5">
                <Star size={22} className="text-yellow-500" />
              </div>
              <div className="h-0.5 w-8 bg-crimson mb-4" />
              <h2 className="font-display text-xl font-bold text-navy-dark mb-4">Core Values</h2>
              <ul className="space-y-2">
                {values.map((v: string, i: number) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-slate">
                    <span className="w-1.5 h-1.5 bg-crimson rounded-full shrink-0 mt-1.5" />
                    {v}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      {/* Our Story */}
      <Section className="bg-ivory">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="h-0.5 w-8 bg-crimson" />
                <span className="text-crimson text-[11px] font-bold uppercase tracking-[0.22em]">Our Story</span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-navy-dark mb-6 leading-tight">
                {s.about_story_title || "Rooted in Purpose, Growing with Every Child"}
              </h2>
              <div className="space-y-5 text-slate leading-relaxed text-[15px]">
                <p>{storyP1}</p>
                <p>{storyP2}</p>
                <p>{storyP3}</p>
              </div>
              <div className="mt-8 flex gap-3 flex-wrap">
                <Link href="/admissions" className="inline-flex items-center gap-2 bg-crimson text-white font-bold text-sm px-6 py-3 uppercase tracking-wider hover:bg-crimson-dark transition-colors">
                  Apply for Admission <ArrowRight size={14} />
                </Link>
                <Link href="/contact" className="inline-flex items-center gap-2 border-2 border-navy text-navy font-bold text-sm px-6 py-3 uppercase tracking-wider hover:bg-navy hover:text-white transition-colors">
                  Contact Us
                </Link>
              </div>
            </div>
            <div className="relative overflow-hidden">
              <img
                src="https://res.cloudinary.com/devdspz1m/image/upload/w_900,h_700,c_fill,g_auto,q_auto,f_auto/v1781695454/PHOTO-2026-05-11-20-32-10_p2coxi.jpg"
                alt="CLA students in a creative learning activity"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-navy-dark/70" />
              <div className="absolute inset-0 p-10 flex flex-col justify-between">
                <div>
                  <p className="font-display text-white text-xl italic font-light leading-relaxed mb-3">
                    &ldquo;{SCHOOL.tagline}&rdquo;
                  </p>
                  <div className="h-0.5 w-12 bg-crimson mb-5" />
                </div>
                <div className="grid grid-cols-2 gap-px bg-white/10">
                  {[
                    { v: s.home_stats_1_value || "18+", l: s.home_stats_1_label || "Years of Service" },
                    { v: s.home_stats_2_value || "500+", l: s.home_stats_2_label || "Students Enrolled" },
                    { v: s.home_stats_3_value || "50+", l: s.home_stats_3_label || "Qualified Staff" },
                    { v: s.home_stats_4_value || "4", l: s.home_stats_4_label || "School Divisions" },
                  ].map(({ v, l }) => (
                    <div key={l} className="bg-navy-dark/60 p-5">
                      <div className="font-display text-3xl font-bold text-white mb-1">{v}</div>
                      <div className="text-white/50 text-xs uppercase tracking-wider">{l}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <div className="bg-crimson py-16 text-center px-6">
        <h2 className="font-display text-3xl font-bold text-white mb-3">
          {s.home_cta_title || "Ready to Join the CLA Family?"}
        </h2>
        <p className="text-white/75 mb-7 max-w-md mx-auto text-[15px]">
          {s.home_cta_subtitle || "Enrolment is open. Secure your child's place today."}
        </p>
        <Link href="/admissions" className="inline-flex items-center gap-2 bg-white text-crimson font-bold px-8 py-4 text-sm uppercase tracking-wider hover:bg-ivory transition-colors">
          Apply Now <ArrowRight size={14} />
        </Link>
      </div>
    </>
  );
}
