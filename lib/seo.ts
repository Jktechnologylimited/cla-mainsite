import { Metadata } from "next";
import { SEO_DEFAULTS, SCHOOL } from "./constants";

export function buildMetadata({
  title,
  description,
  keywords,
  path = "",
  image,
  type = "website",
}: {
  title?: string;
  description?: string;
  keywords?: string;
  path?: string;
  image?: string;
  type?: "website" | "article";
}): Metadata {
  const fullTitle = title
    ? `${title} | Cecilia Learning Academy`
    : SEO_DEFAULTS.title;
  const desc = description || SEO_DEFAULTS.description;
  const url = `${SEO_DEFAULTS.url}${path}`;
  const img = image || SEO_DEFAULTS.image;

  return {
    title: fullTitle,
    description: desc,
    keywords: keywords || SEO_DEFAULTS.keywords,
    authors: [{ name: SCHOOL.name }],
    creator: SCHOOL.name,
    metadataBase: new URL(SEO_DEFAULTS.url),
    alternates: { canonical: url },
    openGraph: {
      type,
      url,
      title: fullTitle,
      description: desc,
      siteName: SEO_DEFAULTS.siteName,
      images: [{ url: img, width: 1200, height: 630, alt: SCHOOL.name }],
      locale: "en_NG",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: desc,
      images: [img],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true },
    },
  };
}

export function schoolJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "School",
    name: SCHOOL.name,
    url: SEO_DEFAULTS.url,
    logo: `${SEO_DEFAULTS.url}/cla-logo.png`,
    description: SCHOOL.description,
    address: {
      "@type": "PostalAddress",
      streetAddress: SCHOOL.address,
      addressLocality: "Port Harcourt",
      addressRegion: "Rivers State",
      addressCountry: "NG",
    },
    telephone: SCHOOL.phone,
    email: SCHOOL.email,
    sameAs: [SCHOOL.facebook, SCHOOL.instagram, SCHOOL.twitter],
  };
}
