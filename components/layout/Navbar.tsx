"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { NAV, SCHOOL } from "@/lib/constants";
import { Menu, X, ChevronDown, Phone } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled]     = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [subOpen, setSubOpen]       = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 70);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <>
      {/* Top bar */}
      <div className="hidden md:block bg-navy-dark text-white/70 text-xs py-1.5">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <span className="uppercase tracking-widest font-semibold text-[10px]">Welcome to Cecilia Learning Academy — Learning for Development</span>
          <div className="flex items-center gap-5">
            <a href={`tel:${SCHOOL.phone}`} className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Phone size={11} /> {SCHOOL.phone}
            </a>
            <a href={`mailto:${SCHOOL.email}`} className="hover:text-white transition-colors">{SCHOOL.email}</a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <header className={`sticky top-0 z-50 bg-white border-b-[3px] border-crimson transition-shadow duration-300 ${scrolled ? "shadow-lg" : ""}`}>
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between h-16 md:h-[72px]">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 shrink-0">
              <Image src="/cla-logo.png" alt="Cecilia Learning Academy Logo" width={52} height={52} className="object-contain" priority />
              <div className="hidden sm:block leading-tight">
                <div className="font-display font-bold text-navy text-base">Cecilia Learning</div>
                <div className="font-display text-crimson text-sm">Academy</div>
                <div className="text-[9px] text-slate uppercase tracking-[0.18em]">Port Harcourt</div>
              </div>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-0.5" aria-label="Main navigation">
              {NAV.map(link =>
                link.children ? (
                  <div key={link.href} className="relative group">
                    <button className={`flex items-center gap-1 px-3 py-2 text-[13px] font-medium transition-colors ${pathname.startsWith("/schools") ? "text-crimson" : "text-navy hover:text-crimson"}`}>
                      {link.label}
                      <ChevronDown size={13} className="group-hover:rotate-180 transition-transform duration-200" />
                    </button>
                    <div className="absolute top-full left-0 w-60 bg-white border border-ivory-dark shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 translate-y-1 group-hover:translate-y-0">
                      {link.children.map(child => (
                        <Link key={child.href} href={child.href}
                          className="block px-4 py-3 hover:bg-ivory border-b border-ivory-dark last:border-0 group/item">
                          <span className="block text-sm font-semibold text-navy group-hover/item:text-crimson transition-colors">{child.label}</span>
                          <span className="block text-xs text-slate mt-0.5">{child.desc}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link key={link.href} href={link.href}
                    className={`px-3 py-2 text-[13px] font-medium transition-colors ${pathname === link.href ? "text-crimson" : "text-navy hover:text-crimson"}`}>
                    {link.label}
                  </Link>
                )
              )}
            </nav>

            <div className="flex items-center gap-3">
              <Link href="/admissions"
                className="hidden md:inline-flex bg-crimson text-white text-[11px] font-bold px-4 py-2.5 uppercase tracking-[0.15em] hover:bg-crimson-dark transition-colors">
                Apply Now
              </Link>
              <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden p-2 text-navy" aria-label="Toggle menu">
                {mobileOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <nav className="lg:hidden border-t border-ivory-dark bg-white max-h-[80vh] overflow-y-auto">
            <div className="px-4 py-3 flex flex-col">
              {NAV.map(link =>
                link.children ? (
                  <div key={link.href}>
                    <button onClick={() => setSubOpen(!subOpen)}
                      className="w-full flex items-center justify-between py-3 text-sm font-medium text-navy border-b border-ivory-dark">
                      {link.label} <ChevronDown size={14} className={subOpen ? "rotate-180" : ""} />
                    </button>
                    {subOpen && (
                      <div className="pl-4 border-l-2 border-crimson/30 ml-2 my-1 flex flex-col gap-0.5">
                        {link.children.map(c => (
                          <Link key={c.href} href={c.href} onClick={() => setMobileOpen(false)}
                            className="py-2 text-sm text-slate hover:text-crimson transition-colors">{c.label}</Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link key={link.href} href={link.href} onClick={() => setMobileOpen(false)}
                    className={`py-3 text-sm font-medium border-b border-ivory-dark ${pathname === link.href ? "text-crimson" : "text-navy"}`}>
                    {link.label}
                  </Link>
                )
              )}
              <Link href="/admissions" onClick={() => setMobileOpen(false)}
                className="mt-4 bg-crimson text-white text-center py-3 text-sm font-bold uppercase tracking-wider">
                Apply Now
              </Link>
            </div>
          </nav>
        )}
      </header>
    </>
  );
}
