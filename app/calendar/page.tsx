import { Metadata } from "next";
import { Section, Container, PageHero } from "@/components/ui";
import { ADMIN_URL } from "@/lib/constants";
import { Calendar, Tag } from "lucide-react";

export const metadata: Metadata = {
  title: "Academic Calendar — Cecilia Learning Academy",
  description: "View the Cecilia Learning Academy academic calendar — term dates, school events, examinations, holidays and important dates for the school year.",
  alternates: { canonical: "https://cecilialearningacademy.com.ng/calendar" },
  openGraph: {
    title: "Academic Calendar | Cecilia Learning Academy",
    description: "Term dates, school events, examinations and important dates at Cecilia Learning Academy, Port Harcourt.",
    url: "https://cecilialearningacademy.com.ng/calendar",
    images: [{ url: "https://res.cloudinary.com/devdspz1m/image/upload/w_1200,h_630,c_fill,g_auto,q_auto,f_auto/v1781695454/PHOTO-2026-05-11-20-32-09_eadl9e.jpg", width: 1200, height: 630, alt: "Cecilia Learning Academy" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Academic Calendar | Cecilia Learning Academy",
    description: "Term dates, school events, examinations and important dates at Cecilia Learning Academy, Port Harcourt.",
    images: ["https://res.cloudinary.com/devdspz1m/image/upload/w_1200,h_630,c_fill,g_auto,q_auto,f_auto/v1781695454/PHOTO-2026-05-11-20-32-09_eadl9e.jpg"],
  },
};

async function getEvents() {
  try {
    const r = await fetch(`${ADMIN_URL}/api/public/events`, { next: { revalidate: 60 } });
    return (await r.json()).events || [];
  } catch { return []; }
}

function formatDate(d: string) {
  return new Date(d).toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" });
}

const TERMS = [
  { term: "First Term",  start: "September", end: "December", note: "Begins mid-September, closes mid-December" },
  { term: "Second Term", start: "January",   end: "April",    note: "Begins early January, closes late March/April" },
  { term: "Third Term",  start: "April",     end: "July",     note: "Begins mid-April, closes late July" },
];

export default async function CalendarPage() {
  const events = await getEvents();

  const categories = Array.from(new Set(events.map((e: any) => e.category).filter(Boolean)));

  return (
    <>
      <PageHero
        title="Academic Calendar"
        subtitle="Stay up to date with term dates, school events, examinations, and holiday periods at Cecilia Learning Academy."
        breadcrumb={[{ label: "Calendar", href: "/calendar" }]}
      />

      {/* Term overview */}
      <Section className="bg-white">
        <Container>
          <div className="flex items-center gap-3 mb-3">
            <div className="h-0.5 w-8 bg-crimson" />
            <span className="text-crimson text-[11px] font-bold uppercase tracking-[0.22em]">Academic Year</span>
          </div>
          <h2 className="font-display text-3xl font-bold text-navy-dark mb-8">Term Schedule</h2>
          <div className="grid md:grid-cols-3 gap-6 mb-0">
            {TERMS.map((t, i) => (
              <div key={t.term} className="border border-ivory-dark p-6">
                <div className="font-display text-5xl font-bold text-navy/8 mb-2">{String(i + 1).padStart(2, "0")}</div>
                <h3 className="font-display text-xl font-bold text-navy-dark mb-1">{t.term}</h3>
                <div className="text-crimson text-xs font-bold uppercase tracking-wider mb-3">{t.start} – {t.end}</div>
                <p className="text-slate text-sm">{t.note}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Events from admin */}
      <Section className="bg-ivory">
        <Container>
          <div className="flex items-center gap-3 mb-3">
            <div className="h-0.5 w-8 bg-crimson" />
            <span className="text-crimson text-[11px] font-bold uppercase tracking-[0.22em]">Events & Activities</span>
          </div>
          <h2 className="font-display text-3xl font-bold text-navy-dark mb-8">Upcoming Events</h2>

          {events.length === 0 ? (
            <div className="border-2 border-dashed border-ivory-dark py-20 text-center">
              <Calendar size={44} className="text-slate/30 mx-auto mb-4" />
              <h3 className="font-display text-xl font-bold text-navy mb-2">No Upcoming Events</h3>
              <p className="text-slate text-sm max-w-sm mx-auto">Events will appear here once added through the admin portal. Check back soon!</p>
            </div>
          ) : (
            <div className="space-y-4">
              {events.map((event: any) => (
                <div key={event.id} className="bg-white border border-ivory-dark flex gap-0 overflow-hidden hover:shadow-md transition-shadow">
                  {/* Color bar */}
                  <div className="w-1.5 shrink-0" style={{ background: event.color || "#1B4B8A" }} />
                  <div className="p-5 flex-1">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          {event.category && (
                            <span className="text-[10px] font-bold uppercase tracking-wider text-white px-2 py-0.5"
                              style={{ background: event.color || "#1B4B8A" }}>
                              {event.category}
                            </span>
                          )}
                        </div>
                        <h3 className="font-display text-lg font-bold text-navy-dark">{event.title}</h3>
                        {event.description && (
                          <p className="text-slate text-sm mt-1 leading-relaxed">{event.description}</p>
                        )}
                      </div>
                      <div className="text-right shrink-0">
                        <div className="flex items-center gap-1.5 text-sm text-slate">
                          <Calendar size={13} className="text-crimson" />
                          {formatDate(event.startDate)}
                        </div>
                        {event.endDate && event.endDate !== event.startDate && (
                          <div className="text-xs text-slate/60 mt-0.5">
                            to {formatDate(event.endDate)}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </Container>
      </Section>
    </>
  );
}
