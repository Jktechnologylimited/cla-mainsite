import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { SCHOOL } from "@/lib/constants";

export const metadata: Metadata = {
  metadataBase: new URL("https://cecilialearningacademy.com.ng"),
  title: { default: "Cecilia Learning Academy | Quality Education in Port Harcourt", template: `%s | Cecilia Learning Academy` },
  description: "Cecilia Learning Academy offers world-class education from Crèche to Senior Secondary in Rumuolumeni, Port Harcourt, Rivers State. Apply today.",
  keywords: "Cecilia Learning Academy, private school Port Harcourt, best school Rumuolumeni, CLA Port Harcourt, nursery primary secondary school Rivers State",
  openGraph: { type: "website", siteName: SCHOOL.name, locale: "en_NG" },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-NG">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org", "@type": "School",
          name: SCHOOL.name, url: "https://cecilialearningacademy.com.ng",
          telephone: SCHOOL.phone, email: SCHOOL.email,
          address: { "@type": "PostalAddress", streetAddress: "4 Miller Avenue", addressLocality: "Port Harcourt", addressRegion: "Rivers State", addressCountry: "NG" },
          description: "Premier private school in Port Harcourt offering Crèche to Senior Secondary education.",
        })}} />
      </head>
      <body>
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
