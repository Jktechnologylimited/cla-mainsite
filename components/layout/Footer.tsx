import Link from "next/link";
import Image from "next/image";
import { SCHOOL, DIVISIONS, NAV } from "@/lib/constants";
import { Phone, Mail, MapPin, ExternalLink, Share2, Globe } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-navy-dark text-white/65">
      <div className="h-[3px] bg-crimson" />
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <Image src="/cla-logo.png" alt="CLA Logo" width={48} height={48} className="object-contain" />
              <div>
                <div className="font-display font-bold text-white text-base leading-tight">Cecilia Learning</div>
                <div className="font-display text-crimson-light text-sm">Academy</div>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-white/45 mb-5">
              Premier private school in Port Harcourt offering quality education from Crèche to Senior Secondary. Learning for Development.
            </p>
            <div className="flex gap-3">
              {[
                { href: SCHOOL.facebook, Icon: Share2 },
                { href: SCHOOL.instagram, Icon: Globe },
              ].map(({ href, Icon }) => (
                <a key={href} href={href} target="_blank" rel="noopener noreferrer"
                  className="w-8 h-8 border border-white/15 flex items-center justify-center hover:border-crimson hover:text-crimson transition-colors">
                  <Icon size={13} />
                </a>
              ))}
            </div>
          </div>

          {/* Schools */}
          <div>
            <h3 className="text-white font-bold text-xs uppercase tracking-[0.2em] mb-4 pb-2 border-b border-white/10">Our Schools</h3>
            <ul className="space-y-2">
              {DIVISIONS.map(d => (
                <li key={d.slug}>
                  <Link href={`/schools/${d.slug}`} className="text-sm hover:text-crimson-light transition-colors">{d.label}</Link>
                </li>
              ))}
              <li className="pt-1">
                <Link href="/admissions" className="text-sm font-semibold text-crimson-light hover:text-white transition-colors">→ Apply for Admission</Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-xs uppercase tracking-[0.2em] mb-4 pb-2 border-b border-white/10">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { href: "/about",      label: "About Us" },
                { href: "/gallery",    label: "School Gallery" },
                { href: "/calendar",   label: "School Calendar" },
                { href: "/blog",       label: "News & Blog" },
                { href: "/contact",    label: "Contact Us" },
              ].map(l => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm hover:text-crimson-light transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold text-xs uppercase tracking-[0.2em] mb-4 pb-2 border-b border-white/10">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex gap-3 text-sm">
                <MapPin size={15} className="text-crimson shrink-0 mt-0.5" />
                <span className="leading-relaxed">{SCHOOL.address}</span>
              </li>
              <li className="flex gap-3 text-sm">
                <Phone size={15} className="text-crimson shrink-0" />
                <a href={`tel:${SCHOOL.phone}`} className="hover:text-white transition-colors">{SCHOOL.phone}</a>
              </li>
              <li className="flex gap-3 text-sm">
                <Mail size={15} className="text-crimson shrink-0" />
                <a href={`mailto:${SCHOOL.email}`} className="hover:text-white transition-colors break-all">{SCHOOL.email}</a>
              </li>
            </ul>
            <a href={SCHOOL.googleMapsUrl} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 mt-4 text-xs text-crimson-light hover:text-white transition-colors font-medium">
              <ExternalLink size={11} /> Get Directions
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/25">
            © {new Date().getFullYear()} Cecilia Learning Academy. All rights reserved.
          </p>
          {/* JK Technology credit */}
          <a href="https://jktl.com.ng" target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2 group">
            <span className="text-xs text-white/25 group-hover:text-white/50 transition-colors">Powered by</span>
            <Image src="/jk-logo.png" alt="JK Technology Limited" width={16} height={16} className="object-contain opacity-20 group-hover:opacity-50 transition-opacity invert" />
            <span className="text-xs text-white/25 group-hover:text-white/50 transition-colors font-medium">JK Technology Limited</span>
            <span className="text-xs text-white/15 group-hover:text-white/30 transition-colors">· School Desk</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
