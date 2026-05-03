"use client";
import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    id: 1,
    bgStyle: { background: "linear-gradient(135deg, #0D1F4E 0%, #1A3272 50%, #0D1F4E 100%)" },
    accentColor: "#C0182A",
    tag: "Excellence Since 2005",
    heading: "Where Brilliance",
    headingAccent: "Begins",
    sub: "From the gentlest crèche years to the rigour of secondary education, we cultivate minds that lead, inspire, and endure.",
    cta: "Explore Our Schools",
    ctaHref: "/schools",
    ctaSecondary: "Book a Visit",
    decorPattern: "circles",
  },
  {
    id: 2,
    bgStyle: { background: "linear-gradient(135deg, #C0182A 0%, #8C1020 60%, #C0182A 100%)" },
    accentColor: "#FFFFFF",
    tag: "World-Class Facilities",
    heading: "An Environment",
    headingAccent: "Built to Inspire",
    sub: "State-of-the-art science labs, arts studios, sports facilities, and digital learning centres — because great minds deserve great spaces.",
    cta: "View School Area",
    ctaHref: "/school-area",
    ctaSecondary: "Our Approach",
    decorPattern: "grid",
  },
  {
    id: 3,
    bgStyle: { background: "linear-gradient(135deg, #0D1F4E 0%, #C0182A 100%)" },
    accentColor: "#FFFFFF",
    tag: "Holistic Education",
    heading: "Nurturing the",
    headingAccent: "Whole Child",
    sub: "Academic excellence, character formation, and creative expression — the three pillars of a Cecilia education that endures a lifetime.",
    cta: "About Our Philosophy",
    ctaHref: "/about",
    ctaSecondary: "Apply Now",
    decorPattern: "diamonds",
  },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [animKey, setAnimKey] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goTo = useCallback((index: number) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrent(index);
      setAnimKey((k) => k + 1);
      setIsTransitioning(false);
    }, 300);
  }, [isTransitioning]);

  const next = useCallback(() => goTo((current + 1) % slides.length), [current, goTo]);
  const prev = useCallback(() => goTo((current - 1 + slides.length) % slides.length), [current, goTo]);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const slide = slides[current];

  return (
    <section className="relative h-screen min-h-[700px] overflow-hidden">
      {/* Background */}
      <div
        className={`absolute inset-0 transition-opacity duration-500 ${isTransitioning ? "opacity-0" : "opacity-100"}`}
        style={slide.bgStyle}
      />

      {/* Decorative pattern */}
      <div className="absolute inset-0 opacity-[0.06]">
        {slide.decorPattern === "circles" && (
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs><pattern id="circles" width="80" height="80" patternUnits="userSpaceOnUse">
              <circle cx="40" cy="40" r="30" fill="none" stroke="#FFFFFF" strokeWidth="1" />
              <circle cx="40" cy="40" r="10" fill="none" stroke="#FFFFFF" strokeWidth="0.5" />
            </pattern></defs>
            <rect width="100%" height="100%" fill="url(#circles)" />
          </svg>
        )}
        {slide.decorPattern === "grid" && (
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs><pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#FFFFFF" strokeWidth="0.5" />
            </pattern></defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        )}
        {slide.decorPattern === "diamonds" && (
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs><pattern id="diamonds" width="70" height="70" patternUnits="userSpaceOnUse">
              <polygon points="35,5 65,35 35,65 5,35" fill="none" stroke="#FFFFFF" strokeWidth="0.5" />
            </pattern></defs>
            <rect width="100%" height="100%" fill="url(#diamonds)" />
          </svg>
        )}
      </div>

      {/* Red accent stripe left */}
      <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-crimson" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 md:px-16 w-full">
          <div
            key={animKey}
            className={`max-w-2xl carousel-slide-enter transition-opacity duration-300 ${isTransitioning ? "opacity-0" : "opacity-100"}`}
          >
            {/* Tag */}
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px w-12 bg-crimson" />
              <span className="text-crimson bg-white/10 px-3 py-1 text-[10px] tracking-[0.3em] uppercase font-medium">
                {slide.tag}
              </span>
            </div>

            {/* Heading */}
            <h1 className="font-display text-6xl md:text-8xl font-light text-white leading-[1.0] mb-3">
              {slide.heading}
            </h1>
            <h1 className="font-display text-6xl md:text-8xl italic text-crimson font-light leading-[1.0] mb-8"
              style={slide.id === 2 ? { color: "#fff", WebkitTextStroke: "1px rgba(255,255,255,0.5)" } : {}}>
              {slide.headingAccent}
            </h1>

            {/* Sub */}
            <p className="text-white/65 text-base md:text-lg leading-relaxed max-w-lg mb-12 font-light">
              {slide.sub}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <Link href={slide.ctaHref} className="btn-gold">
                <span>{slide.cta}</span>
              </Link>
              <Link href="/contact" className="btn-outline">
                {slide.ctaSecondary}
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="absolute bottom-10 right-10 flex items-center gap-6 z-20">
        <div className="flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`transition-all duration-400 ${
                i === current ? "w-8 h-1.5 bg-crimson" : "w-2 h-1.5 bg-white/30 hover:bg-white/60"
              }`}
            />
          ))}
        </div>
        <div className="flex gap-2">
          <button onClick={prev} className="w-10 h-10 border border-white/20 flex items-center justify-center text-white/60 hover:border-crimson hover:text-crimson transition-colors duration-300">
            <ChevronLeft size={16} />
          </button>
          <button onClick={next} className="w-10 h-10 border border-white/20 flex items-center justify-center text-white/60 hover:border-crimson hover:text-crimson transition-colors duration-300">
            <ChevronRight size={16} />
          </button>
        </div>
      </div>

      {/* Slide counter */}
      <div className="absolute top-1/2 right-8 -translate-y-1/2 flex flex-col items-center gap-2 z-20">
        <span className="text-crimson text-sm font-display">0{current + 1}</span>
        <div className="h-16 w-px bg-white/20" />
        <span className="text-white/30 text-sm font-display">0{slides.length}</span>
      </div>
    </section>
  );
}
