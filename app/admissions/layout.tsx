import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admissions — Apply to Cecilia Learning Academy",
  description: "Apply for admission to Cecilia Learning Academy, Port Harcourt. Open for Crèche, Nursery, Primary and Secondary. Submit your enquiry online today.",
  alternates: { canonical: "https://cecilialearningacademy.com.ng/admissions" },
  openGraph: {
    title: "Apply to Cecilia Learning Academy | Port Harcourt",
    description: "Admissions open for Crèche through Senior Secondary. Join hundreds of families who trust CLA for quality education in Port Harcourt.",
    url: "https://cecilialearningacademy.com.ng/admissions",
    images: [{ url: "https://res.cloudinary.com/devdspz1m/image/upload/w_1200,h_630,c_fill,g_auto,q_auto,f_auto/v1781695454/PHOTO-2026-05-11-20-58-16_qnvkye.jpg", width: 1200, height: 630, alt: "Apply to Cecilia Learning Academy" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Apply to Cecilia Learning Academy | Port Harcourt",
    description: "Admissions open for Crèche through Senior Secondary at CLA, Port Harcourt.",
    images: ["https://res.cloudinary.com/devdspz1m/image/upload/w_1200,h_630,c_fill,g_auto,q_auto,f_auto/v1781695454/PHOTO-2026-05-11-20-58-16_qnvkye.jpg"],
  },
};

export default function AdmissionsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
