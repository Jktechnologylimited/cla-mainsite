"use client";
import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { ADMIN_URL } from "@/lib/constants";

const CLD = "https://res.cloudinary.com/devdspz1m/image/upload";

// Transform helpers
const heroImg = (path: string) =>
  `${CLD}/w_1920,h_1000,c_fill,g_auto,q_auto,f_auto/${path}`;

const DEFAULT_SLIDES = [
  {
    id: "1",
    tag: "Welcome to CLA",
    title: "Shaping Tomorrow's Leaders Today",
    subtitle: "Cecilia Learning Academy provides world-class education from Crèche through Senior Secondary School in the heart of Port Harcourt.",
    ctaLabel: "Apply for Admission", ctaHref: "/admissions",
    cta2Label: "Explore Our Schools", cta2Href: "/schools",
    image: heroImg("v1781695454/PHOTO-2026-05-11-20-32-09_eadl9e.jpg"),
  },
  {
    id: "2",
    tag: "Hands-On Learning",
    title: "Where Creativity Meets Education",
    subtitle: "Our students learn by doing — through art, science, and activities that make learning joyful and meaningful every single day.",
    ctaLabel: "Our Programmes", ctaHref: "/schools",
    cta2Label: "About CLA", cta2Href: "/about",
    image: heroImg("v1781695454/PHOTO-2026-05-11-20-32-10_3_mgpcr2.jpg"),
  },
  {
    id: "3",
    tag: "Enrol Today",
    title: "Give Your Child the Best Foundation",
    subtitle: "Limited spaces available. Join hundreds of families who trust Cecilia Learning Academy for quality education in Rumuolumeni, Port Harcourt.",
    ctaLabel: "Start Application", ctaHref: "/admissions",
    cta2Label: "Contact Us", cta2Href: "/contact",
    image: heroImg("v1781695454/PHOTO-2026-05-11-20-58-16_qnvkye.jpg"),
  },
];

export default function HeroSection() {
  const [slides, setSlides] = useState(DEFAULT_SLIDES);
  const [current, setCurrent] = useState(0);
  const [transitioning, setTransitioning] = useState(false);

  useEffect(() => {
    fetch(`${ADMIN_URL}/api/public/hero`)
      .then(r => r.json())
      .then(d => {
        if (d.slides?.length) {
          // Merge admin slides but keep default images if admin has none set
          const merged = d.slides.map((s: any, i: number) => ({
            ...s,
            image: s.image || DEFAULT_SLIDES[i % DEFAULT_SLIDES.length]?.image,
          }));
          setSlides(merged);
        }
      })
      .catch(() => {});
  }, []);

  const go = useCallback((i: number) => {
    if (transitioning) return;
    setTransitioning(true);
    setTimeout(() => { setCurrent(i); setTransitioning(false); }, 400);
  }, [transitioning]);

  const next = useCallback(() => go((current + 1) % slides.length), [current, go, slides.length]);
  const prev = useCallback(() => go((current - 1 + slides.length) % slides.length), [current, go, slides.length]);

  useEffect(() => { const t = setInterval(next, 7000); return () => clearInterval(t); }, [next]);

  const slide = slides[current];

  return (
    <section className="relative min-h-[92vh] flex flex-col justify-center overflow-hidden">
      {/* Background image with overlay */}
      {slides.map((s, i) => (
        <div key={s.id} className={`absolute inset-0 transition-opacity duration-700 ${i === current ? "opacity-100" : "opacity-0"}`}>
          {s.image ? (
            <img
              src={s.image}
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
              loading={i === 0 ? "eager" : "lazy"}
            />
          ) : (
            <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, #0F2D5C 0%, #1B4B8A 60%, #2E6DB4 100%)" }} />
          )}
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-navy-dark/65" />
        </div>
      ))}

      {/* Left accent bar */}
      <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-crimson z-10" />

      {/* Pattern overlay */}
      <div className="absolute inset-0 opacity-[0.04] z-10 pointer-events-none">
        <svg width="100%" height="100%">
          <defs><pattern id="hero-p" width="70" height="70" patternUnits="userSpaceOnUse">
            <circle cx="35" cy="35" r="25" fill="none" stroke="white" strokeWidth="0.7"/>
          </pattern></defs>
          <rect width="100%" height="100%" fill="url(#hero-p)" />
        </svg>
      </div>

      {/* Content */}
      <div className={`relative z-20 max-w-7xl mx-auto px-6 md:px-12 py-24 transition-all duration-400 ${transitioning ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0"}`}>
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-0.5 w-10 bg-crimson" />
            <span className="text-white/75 text-[11px] font-bold uppercase tracking-[0.28em]">{slide.tag}</span>
          </div>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] mb-6">
            {slide.title}
          </h1>
          <p className="text-white/70 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl">{slide.subtitle}</p>
          <div className="flex flex-wrap gap-4">
            <Link href={slide.ctaHref}
              className="bg-crimson text-white font-bold px-7 py-3.5 text-[13px] uppercase tracking-[0.15em] hover:bg-crimson-dark transition-colors inline-flex items-center gap-2">
              {slide.ctaLabel} <ArrowRight size={15} />
            </Link>
            <Link href={slide.cta2Href}
              className="border-2 border-white/45 text-white font-bold px-7 py-3.5 text-[13px] uppercase tracking-[0.15em] hover:bg-white/10 transition-colors">
              {slide.cta2Label}
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-16 flex flex-wrap gap-10">
            {[
              { v: "18+", l: "Years of Excellence" },
              { v: "4",   l: "School Levels" },
              { v: "500+",l: "Students Enrolled" },
              { v: "100%",l: "Dedicated to Learning" },
            ].map(s => (
              <div key={s.l}>
                <div className="font-display text-3xl font-bold text-white">{s.v}</div>
                <div className="text-white/45 text-[10px] uppercase tracking-[0.18em] mt-0.5">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Slide counter + controls */}
      <div className="absolute bottom-8 right-8 flex items-center gap-4 z-20">
        <div className="flex gap-1.5">
          {slides.map((_, i) => (
            <button key={i} onClick={() => go(i)}
              className={`transition-all duration-300 rounded-full ${i === current ? "w-7 h-2 bg-crimson" : "w-2 h-2 bg-white/30 hover:bg-white/60"}`} />
          ))}
        </div>
        <div className="flex gap-2">
          <button onClick={prev} className="w-9 h-9 border border-white/25 flex items-center justify-center text-white/60 hover:border-crimson hover:text-crimson transition-colors">
            <ChevronLeft size={15} />
          </button>
          <button onClick={next} className="w-9 h-9 border border-white/25 flex items-center justify-center text-white/60 hover:border-crimson hover:text-crimson transition-colors">
            <ChevronRight size={15} />
          </button>
        </div>
      </div>
      <div className="absolute bottom-8 left-8 font-display text-sm z-20 text-white/30">
        <span className="text-crimson font-bold">0{current + 1}</span> / 0{slides.length}
      </div>
    </section>
  );
}
