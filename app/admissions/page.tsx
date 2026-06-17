"use client";
import { useState, useEffect } from "react";
import { Section, Container, PageHero } from "@/components/ui";
import { DIVISIONS, ADMIN_URL } from "@/lib/constants";
import { CheckCircle, Send, FileText, Users, Calendar, CreditCard, AlertCircle } from "lucide-react";

export default function AdmissionsPage() {
  const [settings, setSettings] = useState<Record<string, string>>({});
  const [form, setForm] = useState({ parentName: "", email: "", phone: "", childName: "", childDOB: "", division: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(`${ADMIN_URL}/api/public/settings`)
      .then(r => r.json()).then(d => setSettings(d.settings || {})).catch(() => {});
  }, []);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const r = await fetch(`${ADMIN_URL}/api/enquiries`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!r.ok) throw new Error("Failed");
      setSent(true);
    } catch {
      setError("Something went wrong. Please call us directly on " + (settings.school_phone || "08037925637"));
    } finally {
      setLoading(false);
    }
  };

  const admissionsOpen = settings.admissions_status !== "Closed";
  const requirements = (settings.admissions_requirements || "Birth certificate\nPrevious school report (if applicable)\nPassport photographs\nParent/guardian ID\nCompleted application form").split("\n").filter(Boolean);

  return (
    <>
      <PageHero
        title="Admissions"
        subtitle="Begin your child's journey at Cecilia Learning Academy. We welcome applications for all school levels."
        breadcrumb={[{ label: "Admissions", href: "/admissions" }]}
      />

      {/* Status notice */}
      {settings.admissions_status && (
        <div className={`py-4 text-center text-sm font-semibold ${admissionsOpen ? "bg-green-600 text-white" : "bg-amber-500 text-white"}`}>
          <span className="inline-flex items-center gap-2">
            <AlertCircle size={15} />
            Admissions Status: {settings.admissions_status}
            {settings.admissions_notice && ` — ${settings.admissions_notice}`}
          </span>
        </div>
      )}

      {/* Process steps */}
      <Section className="bg-white">
        <Container>
          <div className="text-center mb-10">
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="h-0.5 w-8 bg-crimson" />
              <span className="text-crimson text-[11px] font-bold uppercase tracking-[0.22em]">How to Apply</span>
              <div className="h-0.5 w-8 bg-crimson" />
            </div>
            <h2 className="font-display text-3xl font-bold text-navy-dark">Our Admissions Process</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-6 mb-0">
            {[
              { step: "01", icon: FileText, title: "Submit Enquiry", desc: "Fill in the online form below or visit us in person at our campus." },
              { step: "02", icon: Users,    title: "Meet the Team",  desc: "Schedule a visit and meet our admissions team and see our facilities." },
              { step: "03", icon: Calendar, title: "Assessment",     desc: "Your child may be invited for an age-appropriate assessment." },
              { step: "04", icon: CreditCard, title: "Enrolment",    desc: "Receive your offer, complete registration and pay school fees." },
            ].map(({ step, icon: Icon, title, desc }) => (
              <div key={step} className="text-center p-6 border border-ivory-dark">
                <div className="font-display text-5xl font-bold text-navy/10 mb-3">{step}</div>
                <div className="w-12 h-12 bg-crimson flex items-center justify-center mb-4 mx-auto">
                  <Icon size={20} className="text-white" />
                </div>
                <h3 className="font-display text-lg font-bold text-navy-dark mb-2">{title}</h3>
                <p className="text-slate text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Requirements */}
      <Section className="bg-navy-dark">
        <Container>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <div className="h-0.5 w-8 bg-crimson mb-4" />
              <h2 className="font-display text-2xl font-bold text-white mb-6">Documents Required</h2>
              <ul className="space-y-3">
                {requirements.map((req: string, i: number) => (
                  <li key={i} className="flex items-start gap-3 text-white/75 text-sm">
                    <CheckCircle size={16} className="text-crimson shrink-0 mt-0.5" />
                    {req}
                  </li>
                ))}
              </ul>
              {settings.admissions_fees_note && (
                <div className="mt-6 p-4 border border-white/15 bg-white/5">
                  <p className="text-white/60 text-xs leading-relaxed">{settings.admissions_fees_note}</p>
                </div>
              )}
            </div>
            <div>
              <div className="h-0.5 w-8 bg-crimson mb-4" />
              <h2 className="font-display text-2xl font-bold text-white mb-6">Age Requirements</h2>
              <div className="space-y-3">
                {DIVISIONS.map(div => (
                  <div key={div.slug} className="flex items-center justify-between py-3 border-b border-white/10">
                    <div>
                      <div className="text-white font-semibold text-sm">{div.label}</div>
                      <div className="text-white/40 text-xs mt-0.5">{div.classes.join(", ")}</div>
                    </div>
                    <span className="text-crimson text-sm font-bold">Ages {div.ageRange}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Form */}
      <Section className="bg-ivory">
        <Container>
          <div className="max-w-2xl mx-auto bg-white border border-ivory-dark p-8 md:p-12">
            {sent ? (
              <div className="text-center py-8">
                <CheckCircle size={52} className="text-green-500 mx-auto mb-4" />
                <h3 className="font-display text-2xl font-bold text-navy mb-3">Enquiry Submitted!</h3>
                <p className="text-slate text-sm mb-6">Thank you for your interest in CLA. We&apos;ll be in touch within 24–48 hours.</p>
                <button onClick={() => { setSent(false); setForm({ parentName: "", email: "", phone: "", childName: "", childDOB: "", division: "", message: "" }); }}
                  className="text-crimson text-sm font-semibold underline">Submit another enquiry</button>
              </div>
            ) : (
              <>
                <div className="w-8 h-0.5 bg-crimson mb-3" />
                <h2 className="font-display text-2xl font-bold text-navy-dark mb-2">Admission Enquiry Form</h2>
                <p className="text-slate text-sm mb-8">Complete this form and our admissions team will contact you shortly.</p>

                <form onSubmit={submit} className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-5">
                    {[
                      { id: "parentName", label: "Parent / Guardian Name *", type: "text", required: true },
                      { id: "phone", label: "Phone Number *", type: "tel", required: true },
                    ].map(({ id, label, type, required }) => (
                      <div key={id}>
                        <label htmlFor={id} className="block text-xs font-bold text-navy uppercase tracking-wider mb-2">{label}</label>
                        <input id={id} type={type} required={required} value={(form as any)[id]}
                          onChange={e => setForm(f => ({ ...f, [id]: e.target.value }))}
                          className="w-full border border-ivory-dark px-4 py-3 text-sm text-navy focus:outline-none focus:border-navy" />
                      </div>
                    ))}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-bold text-navy uppercase tracking-wider mb-2">Email Address *</label>
                    <input id="email" type="email" required value={form.email}
                      onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                      className="w-full border border-ivory-dark px-4 py-3 text-sm text-navy focus:outline-none focus:border-navy" />
                  </div>

                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="childName" className="block text-xs font-bold text-navy uppercase tracking-wider mb-2">Child&apos;s Full Name *</label>
                      <input id="childName" type="text" required value={form.childName}
                        onChange={e => setForm(f => ({ ...f, childName: e.target.value }))}
                        className="w-full border border-ivory-dark px-4 py-3 text-sm text-navy focus:outline-none focus:border-navy" />
                    </div>
                    <div>
                      <label htmlFor="childDOB" className="block text-xs font-bold text-navy uppercase tracking-wider mb-2">Date of Birth *</label>
                      <input id="childDOB" type="date" required value={form.childDOB}
                        onChange={e => setForm(f => ({ ...f, childDOB: e.target.value }))}
                        className="w-full border border-ivory-dark px-4 py-3 text-sm text-navy focus:outline-none focus:border-navy" />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="division" className="block text-xs font-bold text-navy uppercase tracking-wider mb-2">Applying For *</label>
                    <select id="division" required value={form.division}
                      onChange={e => setForm(f => ({ ...f, division: e.target.value }))}
                      className="w-full border border-ivory-dark px-4 py-3 text-sm text-navy focus:outline-none focus:border-navy bg-white">
                      <option value="">— Select School Division —</option>
                      {DIVISIONS.map(d => (
                        <option key={d.slug} value={d.slug}>{d.label} (Ages {d.ageRange})</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-bold text-navy uppercase tracking-wider mb-2">Additional Information</label>
                    <textarea id="message" rows={4} value={form.message}
                      onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                      placeholder="Any additional notes about your child, specific needs, or questions..."
                      className="w-full border border-ivory-dark px-4 py-3 text-sm text-navy focus:outline-none focus:border-navy resize-none" />
                  </div>

                  {error && <p className="text-crimson text-sm font-semibold">{error}</p>}

                  <button type="submit" disabled={loading}
                    className="w-full bg-crimson text-white font-bold py-4 text-sm uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-crimson-dark transition-colors disabled:opacity-60">
                    {loading ? "Submitting…" : <><Send size={15} /> Submit Enquiry</>}
                  </button>
                </form>
              </>
            )}
          </div>
        </Container>
      </Section>
    </>
  );
}
