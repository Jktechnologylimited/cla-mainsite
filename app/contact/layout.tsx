import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us — Cecilia Learning Academy",
  description: "Get in touch with Cecilia Learning Academy. Call 08037925637, email info@cecilialearningacademy.com.ng or visit us at 4 Miller Avenue, Rumuolumeni, Port Harcourt.",
  alternates: { canonical: "https://cecilialearningacademy.com.ng/contact" },
  openGraph: {
    title: "Contact Cecilia Learning Academy | Port Harcourt",
    description: "Reach us by phone, email or visit our campus at 4 Miller Avenue, Rumuolumeni, Port Harcourt, Rivers State.",
    url: "https://cecilialearningacademy.com.ng/contact",
    images: [{ url: "https://res.cloudinary.com/devdspz1m/image/upload/w_1200,h_630,c_fill,g_auto,q_auto,f_auto/v1781695454/PHOTO-2026-05-11-20-32-09_eadl9e.jpg", width: 1200, height: 630, alt: "Cecilia Learning Academy campus" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Cecilia Learning Academy | Port Harcourt",
    description: "Call, email or visit Cecilia Learning Academy in Rumuolumeni, Port Harcourt.",
    images: ["https://res.cloudinary.com/devdspz1m/image/upload/w_1200,h_630,c_fill,g_auto,q_auto,f_auto/v1781695454/PHOTO-2026-05-11-20-32-09_eadl9e.jpg"],
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
