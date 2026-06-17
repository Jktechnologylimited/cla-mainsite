import { Metadata } from "next";
import { Section, Container, PageHero } from "@/components/ui";
import { ADMIN_URL } from "@/lib/constants";
import GalleryClient from "./client";
import { ImageIcon } from "lucide-react";

export const metadata: Metadata = {
  title: "Gallery | Cecilia Learning Academy",
  description: "Browse photos from Cecilia Learning Academy — classrooms, events, sports and life at CLA Port Harcourt.",
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
