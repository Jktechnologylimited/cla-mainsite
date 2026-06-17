import { Metadata } from "next";
import { Section, Container, SectionHeader, PageHero } from "@/components/ui";
import { DIVISIONS } from "@/lib/constants";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
export const metadata: Metadata = {
  title: "Our Schools — Crèche, Nursery, Primary & Secondary",
  description: "Cecilia Learning Academy offers Crèche (3m-2yr), Nursery 1-3 (2-5yr), Primary 1-5 (5-11yr), and JSS1-SS3 (11-18yr) in Port Harcourt, Rivers State.",
  alternates: { canonical: "https://cecilialearningacademy.com.ng/schools" },
  openGraph: {
    title: "Our Schools | Cecilia Learning Academy Port Harcourt",
    description: "Complete education from Crèche through Senior Secondary. Discover our four school divisions at CLA, Port Harcourt.",
    url: "https://cecilialearningacademy.com.ng/schools",
    images: [{ url: "https://res.cloudinary.com/devdspz1m/image/upload/w_1200,h_630,c_fill,g_auto,q_auto,f_auto/v1781695454/PHOTO-2026-05-11-20-32-10_3_mgpcr2.jpg", width: 1200, height: 630, alt: "Cecilia Learning Academy" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Schools | Cecilia Learning Academy Port Harcourt",
    description: "Complete education from Crèche through Senior Secondary. Discover our four school divisions at CLA, Port Harcourt.",
    images: ["https://res.cloudinary.com/devdspz1m/image/upload/w_1200,h_630,c_fill,g_auto,q_auto,f_auto/v1781695454/PHOTO-2026-05-11-20-32-10_3_mgpcr2.jpg"],
  },
};
export default function SchoolsPage() {
  return (
    <>
      <PageHero title="Our Schools" subtitle="A complete educational journey from infancy through senior secondary." breadcrumb={[{ label: "Schools", href: "/schools" }]} />
      <Section className="bg-white">
        <Container>
          <SectionHeader eyebrow="All Programmes" title="Choose Your Child's Stage" />
          <div className="grid md:grid-cols-2 gap-8">
            {DIVISIONS.map(div => (
              <div key={div.slug} className="border border-ivory-dark hover:shadow-lg transition-shadow group">
                <div className="h-[3px]" style={{ background: div.color }} />
                <div className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-5xl">{div.icon}</div>
                    <span className="text-xs font-bold text-white uppercase tracking-wider px-3 py-1" style={{ background: div.color }}>Ages {div.ageRange}</span>
                  </div>
                  <h2 className="font-display text-3xl font-bold text-navy-dark mb-3 group-hover:text-crimson transition-colors">{div.label}</h2>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {div.classes.map(c => <span key={c} className="border border-ivory-dark text-navy text-xs px-3 py-1 font-medium">{c}</span>)}
                  </div>
                  <Link href={`/schools/${div.slug}`} className="inline-flex items-center gap-2 text-sm font-bold text-crimson hover:gap-3 transition-all">Learn More <ArrowRight size={14} /></Link>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
