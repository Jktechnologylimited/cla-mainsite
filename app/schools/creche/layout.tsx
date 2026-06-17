import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Crèche Programme (Ages 3m-2yr) — Cecilia Learning Academy",
  description: "Our warm, safe Crèche cares for infants and toddlers aged 3 months to 2 years at Cecilia Learning Academy, Port Harcourt.",
  alternates: { canonical: "https://cecilialearningacademy.com.ng/schools/creche" },
  openGraph: {
    title: "Crèche Programme (Ages 3m-2yr) | Cecilia Learning Academy Port Harcourt",
    description: "Our warm, safe Crèche cares for infants and toddlers aged 3 months to 2 years at Cecilia Learning Academy, Port Harcourt.",
    url: "https://cecilialearningacademy.com.ng/schools/creche",
    images: [{ url: "https://res.cloudinary.com/devdspz1m/image/upload/w_1200,h_630,c_fill,g_auto,q_auto,f_auto/v1781695454/PHOTO-2026-05-11-20-32-10_3_mgpcr2.jpg", width: 1200, height: 630, alt: "Cecilia Learning Academy students" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Crèche Programme (Ages 3m-2yr) | Cecilia Learning Academy",
    description: "Our warm, safe Crèche cares for infants and toddlers aged 3 months to 2 years at Cecilia Learning Academy, Port Harcourt.",
    images: ["https://res.cloudinary.com/devdspz1m/image/upload/w_1200,h_630,c_fill,g_auto,q_auto,f_auto/v1781695454/PHOTO-2026-05-11-20-32-10_3_mgpcr2.jpg"],
  },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
