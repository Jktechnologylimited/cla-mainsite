"use client";
import { useState } from "react";
import Image from "next/image";

const CATS = ["All", "Classrooms", "Events", "Sports", "Graduation", "Cultural", "Nursery & Crèche", "Primary", "Secondary"];

export default function GalleryClient({ images }: { images: any[] }) {
  const [active, setActive] = useState("All");
  const [lightbox, setLightbox] = useState<any | null>(null);

  const categories = ["All", ...Array.from(new Set(images.map((i: any) => i.category).filter(Boolean)))];
  const filtered = active === "All" ? images : images.filter((i: any) => i.category === active);

  return (
    <>
      {/* Category filter */}
      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-4 py-1.5 text-xs font-bold uppercase tracking-wider border transition-colors ${
              active === cat
                ? "bg-navy text-white border-navy"
                : "bg-white text-slate border-ivory-dark hover:border-navy hover:text-navy"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filtered.map((img: any) => (
          <button
            key={img.id}
            onClick={() => setLightbox(img)}
            className="group relative aspect-square bg-ivory-dark overflow-hidden block w-full"
          >
            <Image
              src={img.url}
              alt={img.caption || "CLA Gallery"}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
            {img.caption && (
              <div className="absolute inset-0 bg-black/55 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
                <p className="text-white text-xs text-left">{img.caption}</p>
              </div>
            )}
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <div className="relative max-w-4xl w-full max-h-[90vh]" onClick={e => e.stopPropagation()}>
            <button
              onClick={() => setLightbox(null)}
              className="absolute -top-10 right-0 text-white text-3xl font-light hover:text-crimson transition-colors z-10"
              aria-label="Close"
            >
              ×
            </button>
            <div className="relative w-full" style={{ paddingBottom: "66.67%" }}>
              <Image
                src={lightbox.url}
                alt={lightbox.caption || "CLA Gallery"}
                fill
                className="object-contain"
              />
            </div>
            {lightbox.caption && (
              <p className="text-white/70 text-sm text-center mt-4">{lightbox.caption}</p>
            )}
            {lightbox.category && (
              <p className="text-crimson text-xs text-center mt-1 uppercase tracking-wider font-bold">{lightbox.category}</p>
            )}
          </div>
        </div>
      )}
    </>
  );
}
