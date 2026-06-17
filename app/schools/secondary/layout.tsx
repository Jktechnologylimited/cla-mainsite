import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Secondary School (JSS1-SS3) — Cecilia Learning Academy",
  description: "University-preparatory Secondary education with WAEC/NECO pathways at Cecilia Learning Academy, Port Harcourt. JSS1 through SS3.",
  alternates: { canonical: "https://cecilialearningacademy.com.ng/schools/secondary" },
  openGraph: {
    title: "Secondary School (JSS1-SS3) | Cecilia Learning Academy Port Harcourt",
    description: "University-preparatory Secondary education with WAEC/NECO pathways at Cecilia Learning Academy, Port Harcourt. JSS1 through SS3.",
    url: "https://cecilialearningacademy.com.ng/schools/secondary",
    images: [{ url: "https://res.cloudinary.com/devdspz1m/image/upload/w_1200,h_630,c_fill,g_auto,q_auto,f_auto/v1781695454/PHOTO-2026-05-11-20-32-10_3_mgpcr2.jpg", width: 1200, height: 630, alt: "Cecilia Learning Academy students" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Secondary School (JSS1-SS3) | Cecilia Learning Academy",
    description: "University-preparatory Secondary education with WAEC/NECO pathways at Cecilia Learning Academy, Port Harcourt. JSS1 through SS3.",
    images: ["https://res.cloudinary.com/devdspz1m/image/upload/w_1200,h_630,c_fill,g_auto,q_auto,f_auto/v1781695454/PHOTO-2026-05-11-20-32-10_3_mgpcr2.jpg"],
  },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
