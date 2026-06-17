"use client";
import { useState } from "react";
import { Section, Container, PageHero } from "@/components/ui";
import { SCHOOL, ADMIN_URL } from "@/lib/constants";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await fetch(`${ADMIN_URL}/api/messages`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) });
    setSent(true);
    setLoading(false);
  };

  return (
    <>
      <PageHero title="Contact Us" subtitle="We'd love to hear from you. Our team responds within 24 hours." breadcrumb={[{ label: "Contact", href: "/contact" }]} />
      <Section className="bg-white">
        <Container>
          <div className="grid lg:grid-cols-3 gap-12">
            <div>
              <h2 className="font-display text-2xl font-bold text-navy-dark mb-6">Get In Touch</h2>
              <div className="space-y-6">
                {[
                  { icon: MapPin, title: "Address", lines: [SCHOOL.address] },
                  { icon: Phone, title: "Phone", lines: [SCHOOL.phone], href: `tel:${SCHOOL.phone}` },
                  { icon: Mail, title: "Email", lines: [SCHOOL.email], href: `mailto:${SCHOOL.email}` },
                  { icon: Clock, title: "Hours", lines: ["Mon–Fri: 7:30am – 4:00pm", "Saturday: 9:00am – 12:00pm"] },
                ].map(({ icon: Icon, title, lines, href }) => (
                  <div key={title} className="flex gap-4">
                    <div className="w-10 h-10 bg-crimson/10 flex items-center justify-center shrink-0">
                      <Icon size={17} className="text-crimson" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-navy text-sm mb-1">{title}</h3>
                      {lines.map(l => href
                        ? <a key={l} href={href} className="block text-sm text-slate hover:text-crimson transition-colors">{l}</a>
                        : <p key={l} className="text-sm text-slate leading-relaxed">{l}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              <a href={SCHOOL.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="inline-block mt-6 bg-crimson text-white text-xs font-bold px-5 py-2.5 uppercase tracking-wider hover:bg-crimson-dark transition-colors">Get Directions →</a>
            </div>
            <div className="lg:col-span-2">
              {sent ? (
                <div className="border border-green-200 bg-green-50 p-16 text-center">
                  <CheckCircle size={52} className="text-green-500 mx-auto mb-4" />
                  <h3 className="font-display text-2xl font-bold text-navy mb-3">Message Received!</h3>
                  <p className="text-slate text-sm">We&apos;ll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={submit} className="space-y-5">
                  <h2 className="font-display text-2xl font-bold text-navy-dark mb-2">Send Us a Message</h2>
                  <div className="grid md:grid-cols-2 gap-5">
                    {[
                      { id: "name", label: "Full Name *", type: "text" },
                      { id: "email", label: "Email *", type: "email" },
                      { id: "phone", label: "Phone", type: "tel" },
                      { id: "subject", label: "Subject *", type: "text" },
                    ].map(f => (
                      <div key={f.id}>
                        <label className="block text-xs font-bold text-slate uppercase tracking-wider mb-1.5">{f.label}</label>
                        <input type={f.type} required={f.label.endsWith("*")} value={(form as any)[f.id]}
                          onChange={e => setForm(p => ({ ...p, [f.id]: e.target.value }))}
                          className="w-full border border-silver/40 px-3 py-2.5 text-sm focus:outline-none focus:border-navy transition-colors" />
                      </div>
                    ))}
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate uppercase tracking-wider mb-1.5">Message *</label>
                    <textarea required rows={5} value={form.message} onChange={e => setForm(p => ({ ...p, message: e.target.value }))}
                      className="w-full border border-silver/40 px-3 py-2.5 text-sm focus:outline-none focus:border-navy transition-colors resize-none" />
                  </div>
                  <button type="submit" disabled={loading} className="bg-crimson text-white font-bold px-8 py-3 text-sm uppercase tracking-wider hover:bg-crimson-dark transition-colors inline-flex items-center gap-2 disabled:opacity-60">
                    {loading ? "Sending..." : <><Send size={15} /> Send Message</>}
                  </button>
                </form>
              )}
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
