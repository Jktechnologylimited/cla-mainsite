import Link from "next/link";

export function Section({ children, className = "", id }: { children: React.ReactNode; className?: string; id?: string }) {
  return <section id={id} className={`py-12 md:py-20 lg:py-24 ${className}`}>{children}</section>;
}

export function Container({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>;
}

export function SectionHeader({ eyebrow, title, subtitle, centered = true, light = false }: {
  eyebrow?: string; title: string; subtitle?: string; centered?: boolean; light?: boolean;
}) {
  return (
    <div className={`mb-8 md:mb-12 ${centered ? "text-center" : ""}`}>
      {eyebrow && (
        <div className={`flex items-center gap-3 mb-3 ${centered ? "justify-center" : ""}`}>
          <div className="h-0.5 w-8 bg-crimson" />
          <span className="text-crimson text-[11px] font-bold uppercase tracking-[0.22em]">{eyebrow}</span>
          <div className="h-0.5 w-8 bg-crimson" />
        </div>
      )}
      <h2 className={`font-display text-2xl sm:text-3xl md:text-4xl font-bold leading-tight ${light ? "text-white" : "text-navy-dark"}`}>{title}</h2>
      {subtitle && (
        <p className={`mt-3 md:mt-4 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl ${centered ? "mx-auto" : ""} ${light ? "text-white/65" : "text-slate"}`}>{subtitle}</p>
      )}
    </div>
  );
}

export function PageHero({ title, subtitle, breadcrumb }: {
  title: string; subtitle?: string; breadcrumb?: { label: string; href: string }[];
}) {
  return (
    <div className="bg-navy-dark text-white py-10 sm:py-14 md:py-20 relative overflow-hidden">
      <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-crimson" />
      <div className="absolute inset-0 opacity-[0.04]">
        <svg width="100%" height="100%"><defs><pattern id="ph" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5"/>
        </pattern></defs><rect width="100%" height="100%" fill="url(#ph)"/></svg>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        {breadcrumb && (
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-white/35 mb-3 md:mb-4 flex-wrap">
            <Link href="/" className="hover:text-white/60 transition-colors">Home</Link>
            {breadcrumb.map((b, i) => (
              <span key={b.href} className="flex items-center gap-2">
                <span>/</span>
                {i === breadcrumb.length - 1
                  ? <span className="text-white/60">{b.label}</span>
                  : <Link href={b.href} className="hover:text-white/60 transition-colors">{b.label}</Link>}
              </span>
            ))}
          </nav>
        )}
        <h1 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">{title}</h1>
        {subtitle && <p className="mt-2 md:mt-3 text-white/55 text-sm md:text-lg max-w-2xl leading-relaxed">{subtitle}</p>}
      </div>
    </div>
  );
}
