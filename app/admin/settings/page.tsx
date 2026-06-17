"use client";
import { useState, useEffect } from "react";
import { Save, CheckCircle } from "lucide-react";

type Settings = Record<string, string>;

const FIELDS = [
  { group: "Homepage", fields: [
    { key: "home_hero_tag", label: "Hero Tag Line", type: "text", placeholder: "e.g. Welcome to CLA" },
    { key: "home_hero_title", label: "Hero Main Headline", type: "text", placeholder: "e.g. Shaping Tomorrow's Leaders" },
    { key: "home_hero_subtitle", label: "Hero Subtitle", type: "textarea", placeholder: "Brief description under hero headline" },
    { key: "home_about_title", label: "About Section Title", type: "text" },
    { key: "home_about_text", label: "About Section Text", type: "textarea" },
    { key: "home_cta_title", label: "CTA Banner Title", type: "text" },
    { key: "home_cta_subtitle", label: "CTA Banner Subtitle", type: "text" },
  ]},
  { group: "School Information", fields: [
    { key: "school_name", label: "School Name", type: "text" },
    { key: "school_tagline", label: "School Tagline / Motto", type: "text" },
    { key: "school_description", label: "School Description (for SEO & footer)", type: "textarea" },
    { key: "school_phone", label: "Phone Number", type: "text" },
    { key: "school_email", label: "Email Address", type: "text" },
    { key: "school_address", label: "Full Address", type: "textarea" },
    { key: "school_founded", label: "Year Founded", type: "text" },
  ]},
  { group: "About Page", fields: [
    { key: "about_mission", label: "Mission Statement", type: "textarea" },
    { key: "about_vision", label: "Vision Statement", type: "textarea" },
    { key: "about_values", label: "Core Values (comma separated)", type: "text" },
    { key: "about_story", label: "Our Story (paragraph 1)", type: "textarea" },
    { key: "about_story2", label: "Our Story (paragraph 2)", type: "textarea" },
  ]},
  { group: "Admissions Page", fields: [
    { key: "admissions_open", label: "Admissions Status", type: "select", options: ["Open", "Closed", "Limited Spaces"] },
    { key: "admissions_notice", label: "Admissions Notice / Info", type: "textarea" },
    { key: "admissions_requirements", label: "Admission Requirements", type: "textarea", placeholder: "One requirement per line" },
  ]},
  { group: "Social Media", fields: [
    { key: "social_facebook", label: "Facebook URL", type: "text" },
    { key: "social_instagram", label: "Instagram URL", type: "text" },
    { key: "social_twitter", label: "Twitter/X URL", type: "text" },
    { key: "social_whatsapp", label: "WhatsApp Number", type: "text" },
  ]},
];

export default function SettingsPage() {
  const [settings, setSettings] = useState<Settings>({});
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [activeGroup, setActiveGroup] = useState("Homepage");

  useEffect(() => {
    fetch("/api/settings").then(r => r.json()).then(setSettings);
  }, []);

  const save = async () => {
    setSaving(true);
    await fetch("/api/settings", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(settings) });
    setSaving(false);
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  const currentGroup = FIELDS.find(g => g.group === activeGroup);

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <div className="w-8 h-0.5 bg-crimson mb-3" />
          <h1 className="font-display text-3xl font-bold text-navy-dark">Site Content</h1>
          <p className="text-slate text-sm mt-1">Edit all text content on the website. Changes go live immediately after saving.</p>
        </div>
        <button onClick={save} disabled={saving}
          className="inline-flex items-center gap-2 bg-crimson text-white font-semibold px-6 py-2.5 text-sm uppercase tracking-wider hover:bg-crimson-dark transition-colors disabled:opacity-60">
          {saved ? <><CheckCircle size={15} /> Saved!</> : saving ? "Saving..." : <><Save size={15} /> Save Changes</>}
        </button>
      </div>

      <div className="grid grid-cols-4 gap-6">
        {/* Group tabs */}
        <div className="col-span-1">
          <div className="bg-white border border-ivory-dark">
            {FIELDS.map(g => (
              <button key={g.group} onClick={() => setActiveGroup(g.group)}
                className={`w-full text-left px-4 py-3 text-sm border-b border-ivory-dark last:border-b-0 transition-colors ${activeGroup === g.group ? "bg-crimson text-white font-semibold" : "text-slate hover:bg-ivory hover:text-navy"}`}>
                {g.group}
              </button>
            ))}
          </div>
        </div>

        {/* Fields */}
        <div className="col-span-3 bg-white border border-ivory-dark p-8">
          <h2 className="font-display text-xl font-bold text-navy-dark mb-6 pb-4 border-b border-ivory-dark">{activeGroup}</h2>
          <div className="space-y-6">
            {currentGroup?.fields.map(f => (
              <div key={f.key}>
                <label className="block text-xs font-semibold text-slate uppercase tracking-wider mb-2">{f.label}</label>
                {f.type === "textarea" ? (
                  <textarea rows={4} value={settings[f.key] || ""} placeholder={f.placeholder}
                    onChange={e => setSettings(p => ({ ...p, [f.key]: e.target.value }))}
                    className="w-full border border-silver/40 px-3 py-2.5 text-sm focus:outline-none focus:border-navy transition-colors resize-none" />
                ) : f.type === "select" ? (
                  <select value={settings[f.key] || ""} onChange={e => setSettings(p => ({ ...p, [f.key]: e.target.value }))}
                    className="w-full border border-silver/40 px-3 py-2.5 text-sm focus:outline-none focus:border-navy bg-white transition-colors">
                    <option value="">Select...</option>
                    {f.options?.map(o => <option key={o} value={o}>{o}</option>)}
                  </select>
                ) : (
                  <input type="text" value={settings[f.key] || ""} placeholder={f.placeholder}
                    onChange={e => setSettings(p => ({ ...p, [f.key]: e.target.value }))}
                    className="w-full border border-silver/40 px-3 py-2.5 text-sm focus:outline-none focus:border-navy transition-colors" />
                )}
                <p className="text-xs text-silver mt-1">Key: <code className="bg-ivory px-1 py-0.5 rounded">{f.key}</code></p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
