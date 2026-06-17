import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Nursery School (Ages 2-5) — Cecilia Learning Academy",
  description: "Play-based Nursery 1-3 programme for children aged 2-5 at Cecilia Learning Academy, building foundations in literacy, numeracy and social skills.",
  alternates: { canonical: "https://cecilialearningacademy.com.ng/schools/nursery" },
  openGraph: {
    title: "Nursery School (Ages 2-5) | Cecilia Learning Academy Port Harcourt",
    description: "Play-based Nursery 1-3 programme for children aged 2-5 at Cecilia Learning Academy, building foundations in literacy, numeracy and social skills.",
    url: "https://cecilialearningacademy.com.ng/schools/nursery",
    images: [{ url: "https://res.cloudinary.com/devdspz1m/image/upload/w_1200,h_630,c_fill,g_auto,q_auto,f_auto/v1781695454/PHOTO-2026-05-11-20-32-10_3_mgpcr2.jpg", width: 1200, height: 630, alt: "Cecilia Learning Academy students" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nursery School (Ages 2-5) | Cecilia Learning Academy",
    description: "Play-based Nursery 1-3 programme for children aged 2-5 at Cecilia Learning Academy, building foundations in literacy, numeracy and social skills.",
    images: ["https://res.cloudinary.com/devdspz1m/image/upload/w_1200,h_630,c_fill,g_auto,q_auto,f_auto/v1781695454/PHOTO-2026-05-11-20-32-10_3_mgpcr2.jpg"],
  },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
