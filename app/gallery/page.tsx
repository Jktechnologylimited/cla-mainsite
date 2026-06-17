import { Metadata } from "next";
import { Section, Container, PageHero } from "@/components/ui";
import { ADMIN_URL } from "@/lib/constants";
import GalleryClient from "./client";
import { ImageIcon } from "lucide-react";

export const metadata: Metadata = {
  title: "Gallery — Life at Cecilia Learning Academy",
  description: "Browse photos and highlights from Cecilia Learning Academy — classrooms, events, sports, arts, and everyday life at CLA Port Harcourt.",
  alternates: { canonical: "https://cecilialearningacademy.com.ng/gallery" },
  openGraph: {
    title: "Gallery | Cecilia Learning Academy Port Harcourt",
    description: "Photos from classrooms, events, sports, arts and everyday life at Cecilia Learning Academy, Port Harcourt.",
    url: "https://cecilialearningacademy.com.ng/gallery",
    images: [{ url: "https://res.cloudinary.com/devdspz1m/image/upload/w_1200,h_630,c_fill,g_auto,q_auto,f_auto/v1781695454/PHOTO-2026-05-11-20-32-10_3_mgpcr2.jpg", width: 1200, height: 630, alt: "Cecilia Learning Academy" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gallery | Cecilia Learning Academy Port Harcourt",
    description: "Photos from classrooms, events, sports, arts and everyday life at Cecilia Learning Academy, Port Harcourt.",
    images: ["https://res.cloudinary.com/devdspz1m/image/upload/w_1200,h_630,c_fill,g_auto,q_auto,f_auto/v1781695454/PHOTO-2026-05-11-20-32-10_3_mgpcr2.jpg"],
  },
};

async function getGallery() {
  try {
    const r = await fetch(`${ADMIN_URL}/api/public/gallery`, { next: { revalidate: 120 } });
    return (await r.json()).images || [];
  } catch { return []; }
}

export default async function GalleryPage() {
  const images = await getGallery();

  return (
    <>
      <PageHero
        title="School Gallery"
        subtitle="A glimpse into life at Cecilia Learning Academy — learning, playing, growing, and celebrating together."
        breadcrumb={[{ label: "Gallery", href: "/gallery" }]}
      />
      <Section className="bg-white">
        <Container>
          {images.length === 0 ? (
            <div className="border-2 border-dashed border-ivory-dark py-24 text-center">
              <ImageIcon size={48} className="text-slate/30 mx-auto mb-4" />
              <h3 className="font-display text-xl font-bold text-navy mb-2">Gallery Coming Soon</h3>
              <p className="text-slate text-sm max-w-sm mx-auto">School photos will appear here once uploaded through the admin portal.</p>
            </div>
          ) : (
            <GalleryClient images={images} />
          )}
        </Container>
      </Section>
    </>
  );
}
