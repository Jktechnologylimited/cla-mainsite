import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { SCHOOL } from "@/lib/constants";

const BASE_URL = "https://cecilialearningacademy.com.ng";
const OG_IMAGE = "https://res.cloudinary.com/devdspz1m/image/upload/w_1200,h_630,c_fill,g_auto,q_auto,f_auto/v1781695454/PHOTO-2026-05-11-20-32-09_eadl9e.jpg";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  title: {
    default: "Cecilia Learning Academy | Quality Education in Port Harcourt",
    template: "%s | Cecilia Learning Academy",
  },
  description:
    "Cecilia Learning Academy (CLA) offers world-class education from Crèche to Senior Secondary School in Rumuolumeni, Port Harcourt, Rivers State, Nigeria. Enrol today.",

  keywords: [
    "Cecilia Learning Academy",
    "CLA Port Harcourt",
    "private school Port Harcourt",
    "best school Rumuolumeni",
    "nursery school Port Harcourt",
    "primary school Port Harcourt",
    "secondary school Port Harcourt",
    "school Rivers State Nigeria",
    "Ignatius Ajuru University area school",
    "Rumuolumeni school",
    "learning development Port Harcourt",
  ],

  authors: [{ name: "Cecilia Learning Academy", url: BASE_URL }],
  creator: "JK Technology Limited",
  publisher: "Cecilia Learning Academy",

  // Canonical
  alternates: {
    canonical: BASE_URL,
  },

  // Open Graph
  openGraph: {
    type: "website",
    url: BASE_URL,
    siteName: "Cecilia Learning Academy",
    locale: "en_NG",
    title: "Cecilia Learning Academy | Quality Education in Port Harcourt",
    description:
      "World-class education from Crèche to Senior Secondary in Rumuolumeni, Port Harcourt, Rivers State. Learning for Development.",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Cecilia Learning Academy students in a creative learning activity",
        type: "image/jpeg",
      },
    ],
  },

  // Twitter / X
  twitter: {
    card: "summary_large_image",
    site: "@ceciliaacademy",
    creator: "@ceciliaacademy",
    title: "Cecilia Learning Academy | Quality Education in Port Harcourt",
    description:
      "World-class education from Crèche to Senior Secondary in Rumuolumeni, Port Harcourt, Rivers State.",
    images: [OG_IMAGE],
  },

  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Icons
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/cla-logo.png",
  },

  // Verification (add your Google Search Console code here)
  // verification: { google: "your-google-site-verification-code" },

  // App info
  applicationName: "Cecilia Learning Academy",
  category: "Education",
};

// Full structured data
const schoolSchema = {
  "@context": "https://schema.org",
  "@type": "School",
  name: "Cecilia Learning Academy",
  alternateName: "CLA",
  url: BASE_URL,
  logo: `${BASE_URL}/cla-logo.png`,
  image: OG_IMAGE,
  description:
    "Cecilia Learning Academy offers quality education from Crèche to Senior Secondary School in Rumuolumeni, Port Harcourt, Rivers State, Nigeria.",
  telephone: SCHOOL.phone,
  email: SCHOOL.email,
  slogan: "Learning for Development",
  foundingDate: "2006",
  address: {
    "@type": "PostalAddress",
    streetAddress: "4 Miller Avenue, Opposite Cecilia Bus Stop, Off Ignatius Ajuru University",
    addressLocality: "Rumuolumeni, Port Harcourt",
    addressRegion: "Rivers State",
    postalCode: "500001",
    addressCountry: "NG",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "4.8156",
    longitude: "7.0498",
  },
  sameAs: [
    SCHOOL.facebook,
    SCHOOL.instagram,
    SCHOOL.twitter,
  ],
  hasMap: SCHOOL.googleMapsUrl,
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "07:30",
      closes: "16:00",
    },
  ],
  educationalLevel: [
    "Pre-School",
    "Nursery",
    "Primary",
    "Junior Secondary",
    "Senior Secondary",
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-NG">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schoolSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
        <meta name="geo.region" content="NG-RI" />
        <meta name="geo.placename" content="Port Harcourt, Rivers State" />
        <meta name="geo.position" content="4.8156;7.0498" />
        <meta name="ICBM" content="4.8156, 7.0498" />
      </head>
      <body>
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
