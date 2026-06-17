import { Metadata } from "next";
import { Section, Container, SectionHeader, PageHero } from "@/components/ui";
import { DIVISIONS } from "@/lib/constants";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
export const metadata: Metadata = { title: "Our Schools", description: "CLA offers Crèche, Nursery 1-3, Primary 1-5, JSS 1-3 and SS 1-3 in Port Harcourt." };
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
