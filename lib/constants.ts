export const SCHOOL = {
  name: "Cecilia Learning Academy",
  tagline: "Learning for Development",
  phone: "08037925637",
  email: "info@cecilialearningacademy.com.ng",
  address: "4 Miller Avenue, Opposite Cecilia Bus Stop, Off Ignatius Ajuru University, Rumuolumeni, Port Harcourt, Rivers State",
  googleMapsUrl: "https://www.google.com/maps/search/4+Miller+Avenue+Rumuolumeni+Port+Harcourt+Rivers+State+Nigeria",
  facebook: "https://facebook.com/cecilialearningacademy",
  instagram: "https://instagram.com/cecilialearningacademy",
  twitter: "https://twitter.com/ceciliaacademy",
};

export const ADMIN_URL = process.env.NEXT_PUBLIC_ADMIN_API_URL || "https://admin.cecilialearningacademy.com.ng";

export const DIVISIONS = [
  { slug: "creche",    label: "Crèche",        ageRange: "3 months – 2 years", classes: ["Infant", "Toddler"],                                      icon: "🌱", color: "#4A90D9" },
  { slug: "nursery",   label: "Nursery 1–3",   ageRange: "2 – 5 years",        classes: ["Nursery 1", "Nursery 2", "Nursery 3"],                    icon: "🌼", color: "#2E6DB4" },
  { slug: "primary",   label: "Primary 1–5",   ageRange: "5 – 11 years",       classes: ["Primary 1","Primary 2","Primary 3","Primary 4","Primary 5"], icon: "📚", color: "#1B4B8A" },
  { slug: "secondary", label: "JSS 1–3 / SS 1–3", ageRange: "11 – 18 years",  classes: ["JSS 1","JSS 2","JSS 3","SS 1","SS 2","SS 3"],              icon: "🎓", color: "#0F2D5C" },
];

export const NAV = [
  { href: "/",           label: "Home" },
  { href: "/schools",    label: "Schools", children: [
    { href: "/schools/creche",    label: "Crèche",         desc: "Ages 3 months – 2 years" },
    { href: "/schools/nursery",   label: "Nursery (1–3)",  desc: "Ages 2 – 5 years" },
    { href: "/schools/primary",   label: "Primary (1–5)",  desc: "Ages 5 – 11 years" },
    { href: "/schools/secondary", label: "Secondary (JSS–SS)", desc: "Ages 11 – 18 years" },
  ]},
  { href: "/admissions", label: "Admissions" },
  { href: "/about",      label: "About" },
  { href: "/gallery",    label: "Gallery" },
  { href: "/calendar",   label: "Calendar" },
  { href: "/blog",       label: "News & Blog" },
  { href: "/contact",    label: "Contact" },
];
