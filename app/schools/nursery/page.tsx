import { DIVISIONS } from "@/lib/constants";
import { Section, Container, PageHero, SectionHeader } from "@/components/ui";
import { CheckCircle } from "lucide-react";
import Link from "next/link";
const div = DIVISIONS[1];
export const metadata = { title: "Nursery School", description: "Learn about the Nursery School at Cecilia Learning Academy, Port Harcourt." };
export default function Page() {
  return (
    <>
      <PageHero title={div.label} subtitle={div.ageRange} breadcrumb={[{ label: "Schools", href: "/schools" }, { label: div.label, href: "/schools/nursery" }]} />
      <Section className="bg-white">
        <Container>
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <SectionHeader eyebrow={div.label} title={"About Our " + div.label} centered={false} />
              <div className="space-y-4 text-slate text-sm leading-relaxed mb-8">
                <p>At Cecilia Learning Academy, our programme provides every child with a strong foundation in a nurturing, structured, and stimulating environment tailored to their developmental stage.</p>
                <p>Our qualified teachers, age-appropriate resources, and curriculum aligned with Nigerian educational standards ensure every student thrives at their own pace.</p>
              </div>
              <h3 className="font-display text-xl font-bold text-navy-dark mb-4">Classes Offered</h3>
              <div className="grid md:grid-cols-2 gap-3">
                {div.classes.map((c: string) => (
                  <div key={c} className="flex items-center gap-3 p-3 border border-ivory-dark">
                    <CheckCircle size={16} className="text-crimson shrink-0" />
                    <span className="text-sm font-medium text-navy">{c}</span>
                  </div>
                ))}
              </div>
            </div>
            <aside className="space-y-5">
              <div className="bg-navy-dark text-white p-6">
                <h3 className="font-display text-xl font-bold mb-4">Programme Details</h3>
                <div className="space-y-3 text-sm text-white/65">
                  <div className="flex justify-between border-b border-white/10 pb-2"><span>Age Range</span><span className="text-white font-semibold">{div.ageRange}</span></div>
                  <div className="flex justify-between border-b border-white/10 pb-2"><span>Classes</span><span className="text-white font-semibold">{div.classes.length}</span></div>
                  <div className="flex justify-between"><span>Admission</span><span className="text-green-400 font-semibold">Open</span></div>
                </div>
              </div>
              <div className="bg-crimson/10 border border-crimson/25 p-6">
                <h3 className="font-display text-lg font-bold text-crimson mb-2">Enrol Your Child</h3>
                <Link href="/admissions" className="inline-block bg-crimson text-white font-bold px-5 py-2.5 text-sm uppercase tracking-wider hover:bg-crimson-dark transition-colors">Enquire Now</Link>
              </div>
            </aside>
          </div>
        </Container>
      </Section>
    </>
  );
}
