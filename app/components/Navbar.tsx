"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/schools", label: "Schools" },
  { href: "/school-area", label: "School Area" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-navy/97 backdrop-blur-md shadow-xl py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          {/* Emblem */}
          <div className="w-10 h-10 bg-crimson flex items-center justify-center shrink-0">
            <span className="font-display text-white text-lg font-bold leading-none">C</span>
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-display text-white text-xl font-semibold tracking-wide">
              Cecilia
            </span>
            <span className="text-white/50 text-[9px] tracking-[0.3em] uppercase font-sans font-light mt-0.5">
              Learning Academy
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`nav-link text-[11px] tracking-[0.2em] uppercase font-sans font-medium transition-colors duration-300 ${
                pathname === link.href ? "text-crimson active" : "text-white/80 hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/contact" className="btn-gold">
            <span>Enquire Now</span>
          </Link>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-white" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-navy/98 backdrop-blur-md border-t border-white/10 mt-3">
          <div className="flex flex-col px-6 py-8 gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`text-[11px] tracking-[0.25em] uppercase font-medium ${
                  pathname === link.href ? "text-crimson" : "text-white/80"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/contact" onClick={() => setMenuOpen(false)} className="btn-gold text-center mt-2">
              <span>Enquire Now</span>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
