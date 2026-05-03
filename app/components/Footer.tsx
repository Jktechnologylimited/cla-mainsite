import Link from "next/link";
import { MapPin, Phone, Mail, Share2, Globe, Link2 } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-navy text-white/70">
      <div className="h-1 bg-crimson" />
      <div className="max-w-7xl mx-auto px-6 pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-crimson flex items-center justify-center shrink-0">
                <span className="font-display text-white text-lg font-bold">C</span>
              </div>
              <div>
                <div className="font-display text-white text-xl font-semibold tracking-wide leading-none">Cecilia</div>
                <div className="text-[9px] tracking-[0.3em] uppercase text-white/40 mt-0.5">Learning Academy</div>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-white/45 mb-8">
              Nurturing excellence from the earliest years through to secondary education. Where every child&apos;s potential is a promise we keep.
            </p>
            <div className="flex gap-3">
              {[Share2, Globe, Link2].map((Icon, i) => (
                <a key={i} href="#" className="w-9 h-9 border border-white/15 flex items-center justify-center text-white/40 hover:border-crimson hover:text-crimson transition-colors duration-300">
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[10px] tracking-[0.3em] uppercase text-crimson font-medium mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[{ href: "/", label: "Home" }, { href: "/about", label: "About Us" }, { href: "/schools", label: "Our Schools" }, { href: "/school-area", label: "School Area" }, { href: "/contact", label: "Contact" }].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm hover:text-crimson transition-colors duration-300">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Schools */}
          <div>
            <h4 className="text-[10px] tracking-[0.3em] uppercase text-crimson font-medium mb-6">Our Schools</h4>
            <ul className="space-y-3">
              {["Crèche", "Nursery School", "Primary School", "Secondary School"].map((s) => (
                <li key={s}>
                  <Link href="/schools" className="text-sm hover:text-crimson transition-colors duration-300">{s}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[10px] tracking-[0.3em] uppercase text-crimson font-medium mb-6">Contact Us</h4>
            <ul className="space-y-4">
              {[
                { icon: MapPin, text: "4 Miller Avenue, by Cecilia Bus stop, Iwofe, Port Harcourt Nigeria" },
                { icon: Phone, text: "+234 803 792 5637" },
                { icon: Mail, text: "cecilialearningacademy@gmail.com" },
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm">
                  <item.icon size={14} className="text-crimson mt-1 shrink-0" />
                  <span className="whitespace-pre-line">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="h-px bg-white/10 mb-8" />
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/25 tracking-wider">
          <span>© {new Date().getFullYear()} Cecilia Learning Academy. All rights reserved.</span>
          <div className="flex gap-6">
            <a href="#" className="hover:text-crimson transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-crimson transition-colors">Terms of Use</a>
            <a href="#" className="hover:text-crimson transition-colors">Admissions Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
