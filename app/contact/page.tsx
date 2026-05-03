"use client";
import { useState } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const enquiryTypes = ["General Enquiry", "Admissions", "Campus Tour", "Crèche", "Nursery", "Primary", "Secondary", "Other"];

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", type: "", child: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <main className="pt-28">
      {/* Hero */}
      <div className="relative bg-forest py-24 overflow-hidden">
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <span className="gold-line" />
          <span className="text-[10px] tracking-[0.3em] uppercase text-gold font-medium block mb-6">Get in Touch</span>
          <h1 className="font-display text-6xl md:text-7xl text-ivory font-light leading-tight mb-6">
            Begin the <span className="italic text-gold">Conversation</span>
          </h1>
          <p className="text-ivory/50 text-lg leading-relaxed max-w-2xl mx-auto">
            Our admissions team responds to all enquiries within one business day. We look forward to hearing from you.
          </p>
        </div>
      </div>

      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-5 gap-16">
          {/* Contact info */}
          <div className="md:col-span-2">
            <span className="gold-line-left" />
            <h2 className="font-display text-4xl text-charcoal font-light mb-8">Our <span className="italic text-forest">Offices</span></h2>
            
            <div className="space-y-8">
              {[
                { icon: MapPin, label: "Address", value: "No 4 Miller Avenue, Cecilia Bus stop, Iwofe, Port Harcourt" },
                { icon: Phone, label: "Phone", value: "+234 803 792 5637" },
                { icon: Mail, label: "Email", value: "cecilialearningacademy@gmail.com" },
                { icon: Clock, label: "Office Hours", value: "Monday – Friday: 7:30am – 5pm\nSaturday: 9am – 1pm" },
              ].map((item) => (
                <div key={item.label} className="flex gap-4">
                  <div className="w-10 h-10 border border-gold/30 flex items-center justify-center shrink-0">
                    <item.icon size={14} className="text-gold" />
                  </div>
                  <div>
                    <div className="text-[10px] tracking-[0.25em] uppercase text-gold font-medium mb-1">{item.label}</div>
                    <p className="text-stone text-sm leading-relaxed whitespace-pre-line">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Map placeholder */}
            <div className="mt-10 bg-gradient-to-br from-forest to-forest-mid h-48 flex items-center justify-center border border-gold/20">
              <div className="text-center">
                <MapPin className="text-gold mx-auto mb-2" size={24} />
                <span className="text-ivory/40 text-xs tracking-widest uppercase">No 4 Miller Avenue, Cecilia Bus stop, Iwofe, Port Harcourt</span>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="md:col-span-3">
            {sent ? (
              <div className="border border-gold/30 p-16 text-center">
                <div className="font-display text-gold text-6xl mb-4">✓</div>
                <h3 className="font-display text-3xl text-charcoal font-light mb-4">Enquiry Received</h3>
                <p className="text-stone text-sm leading-relaxed max-w-sm mx-auto">
                  Thank you for reaching out to Cecilia Learning Academy. A member of our admissions team will contact you within one business day.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    { id: "name", label: "Full Name", type: "text", placeholder: "Your full name" },
                    { id: "email", label: "Email Address", type: "email", placeholder: "your@email.com" },
                    { id: "phone", label: "Phone Number", type: "tel", placeholder: "+234 000 000 0000" },
                    { id: "child", label: "Child's Age / Year Group", type: "text", placeholder: "e.g. 5 years / Year 1" },
                  ].map((field) => (
                    <div key={field.id}>
                      <label className="text-[10px] tracking-[0.25em] uppercase text-stone font-medium block mb-2">{field.label}</label>
                      <input
                        type={field.type}
                        placeholder={field.placeholder}
                        required
                        value={form[field.id as keyof typeof form]}
                        onChange={(e) => setForm({ ...form, [field.id]: e.target.value })}
                        className="w-full border border-stone/20 bg-transparent px-4 py-3 text-charcoal text-sm placeholder-stone/40 focus:border-gold focus:outline-none transition-colors duration-300"
                      />
                    </div>
                  ))}
                </div>
                <div>
                  <label className="text-[10px] tracking-[0.25em] uppercase text-stone font-medium block mb-2">Enquiry Type</label>
                  <select
                    required
                    value={form.type}
                    onChange={(e) => setForm({ ...form, type: e.target.value })}
                    className="w-full border border-stone/20 bg-cream px-4 py-3 text-charcoal text-sm focus:border-gold focus:outline-none transition-colors duration-300"
                  >
                    <option value="">Select type...</option>
                    {enquiryTypes.map((t) => <option key={t} value={t}>{t}</option>)}
                  </select>
                </div>
                <div>
                  <label className="text-[10px] tracking-[0.25em] uppercase text-stone font-medium block mb-2">Your Message</label>
                  <textarea
                    rows={5}
                    placeholder="Tell us about your child and what you're looking for..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full border border-stone/20 bg-transparent px-4 py-3 text-charcoal text-sm placeholder-stone/40 focus:border-gold focus:outline-none transition-colors duration-300 resize-none"
                  />
                </div>
                <button type="submit" className="btn-gold w-full text-center"><span>Submit Enquiry</span></button>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
