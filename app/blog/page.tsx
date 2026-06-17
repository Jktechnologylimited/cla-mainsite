import { Metadata } from "next";
import { Section, Container, PageHero, SectionHeader } from "@/components/ui";
import { ADMIN_URL } from "@/lib/constants";
import Link from "next/link";
import { BookOpen, ArrowRight } from "lucide-react";
export const metadata: Metadata = {
  title: "News & Blog — Cecilia Learning Academy",
  description: "Read the latest news, stories, announcements and insights from the Cecilia Learning Academy community in Port Harcourt, Rivers State.",
  alternates: { canonical: "https://cecilialearningacademy.com.ng/blog" },
  openGraph: {
    title: "News & Blog | Cecilia Learning Academy",
    description: "Latest news, stories and updates from Cecilia Learning Academy, Port Harcourt.",
    url: "https://cecilialearningacademy.com.ng/blog",
    images: [{ url: "https://res.cloudinary.com/devdspz1m/image/upload/w_1200,h_630,c_fill,g_auto,q_auto,f_auto/v1781695454/PHOTO-2026-05-11-20-58-16_qnvkye.jpg", width: 1200, height: 630, alt: "Cecilia Learning Academy" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "News & Blog | Cecilia Learning Academy",
    description: "Latest news, stories and updates from Cecilia Learning Academy, Port Harcourt.",
    images: ["https://res.cloudinary.com/devdspz1m/image/upload/w_1200,h_630,c_fill,g_auto,q_auto,f_auto/v1781695454/PHOTO-2026-05-11-20-58-16_qnvkye.jpg"],
  },
};

async function getPosts() {
  try { const r = await fetch(`${ADMIN_URL}/api/public/posts`, { next: { revalidate: 60 } }); return (await r.json()).posts || []; }
  catch { return []; }
}
function formatDate(d: string) { return new Date(d).toLocaleDateString("en-GB", { day: "2-digit", month: "long", year: "numeric" }); }

export default async function BlogPage() {
  const posts = await getPosts();
  return (
    <>
      <PageHero title="News & Blog" subtitle="Stories, updates, and insights from the Cecilia Learning Academy community." breadcrumb={[{ label: "News & Blog", href: "/blog" }]} />
      <Section className="bg-white">
        <Container>
          {posts.length === 0 ? (
            <div className="border-2 border-dashed border-ivory-dark py-24 text-center">
              <BookOpen size={48} className="text-silver mx-auto mb-4" />
              <h3 className="font-display text-xl font-bold text-navy mb-2">Stories Coming Soon</h3>
              <p className="text-slate text-sm max-w-sm mx-auto">News articles and blog posts will appear here once published through the admin portal.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post: any) => (
                <Link key={post.id} href={`/blog/${post.slug}`} className="border border-ivory-dark hover:shadow-lg transition-shadow group block">
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs font-bold text-white bg-crimson px-2 py-0.5 uppercase">{post.type}</span>
                      <span className="text-xs text-slate">{formatDate(post.publishedAt || post.createdAt)}</span>
                    </div>
                    <h2 className="font-display text-xl font-bold text-navy-dark mb-2 group-hover:text-crimson transition-colors">{post.title}</h2>
                    {post.excerpt && <p className="text-slate text-sm leading-relaxed mb-4 line-clamp-3">{post.excerpt}</p>}
                    <div className="text-xs font-bold text-crimson flex items-center gap-1">Read More <ArrowRight size={11} /></div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </Container>
      </Section>
    </>
  );
}
