import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Primary School (Ages 5-11) — Cecilia Learning Academy",
  description: "Rigorous and joyful Primary 1-5 education for children aged 5-11 at Cecilia Learning Academy, developing critical thinkers in Port Harcourt.",
  alternates: { canonical: "https://cecilialearningacademy.com.ng/schools/primary" },
  openGraph: {
    title: "Primary School (Ages 5-11) | Cecilia Learning Academy Port Harcourt",
    description: "Rigorous and joyful Primary 1-5 education for children aged 5-11 at Cecilia Learning Academy, developing critical thinkers in Port Harcourt.",
    url: "https://cecilialearningacademy.com.ng/schools/primary",
    images: [{ url: "https://res.cloudinary.com/devdspz1m/image/upload/w_1200,h_630,c_fill,g_auto,q_auto,f_auto/v1781695454/PHOTO-2026-05-11-20-32-10_3_mgpcr2.jpg", width: 1200, height: 630, alt: "Cecilia Learning Academy students" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Primary School (Ages 5-11) | Cecilia Learning Academy",
    description: "Rigorous and joyful Primary 1-5 education for children aged 5-11 at Cecilia Learning Academy, developing critical thinkers in Port Harcourt.",
    images: ["https://res.cloudinary.com/devdspz1m/image/upload/w_1200,h_630,c_fill,g_auto,q_auto,f_auto/v1781695454/PHOTO-2026-05-11-20-32-10_3_mgpcr2.jpg"],
  },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
