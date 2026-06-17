import { Metadata } from "next";
import { Section, Container, PageHero } from "@/components/ui";
import { ADMIN_URL } from "@/lib/constants";
import Link from "next/link";
import { ArrowLeft, Calendar, User, Tag } from "lucide-react";
import { notFound } from "next/navigation";

async function getPost(slug: string) {
  try {
    const r = await fetch(`${ADMIN_URL}/api/public/posts?slug=${slug}`, { next: { revalidate: 60 } });
    const d = await r.json();
    return d.post || null;
  } catch { return null; }
}

async function getRelated(type: string, currentSlug: string) {
  try {
    const r = await fetch(`${ADMIN_URL}/api/public/posts?type=${type}&limit=3`, { next: { revalidate: 60 } });
    const d = await r.json();
    return (d.posts || []).filter((p: any) => p.slug !== currentSlug).slice(0, 2);
  } catch { return []; }
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return { title: "Post Not Found" };
  return {
    title: `${post.title} | Cecilia Learning Academy`,
    description: post.excerpt || `Read this ${post.type.toLowerCase()} from Cecilia Learning Academy.`,
  };
}

function formatDate(d: string) {
  return new Date(d).toLocaleDateString("en-GB", { day: "2-digit", month: "long", year: "numeric" });
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) notFound();

  const related = await getRelated(post.type, post.slug);

  return (
    <>
      <PageHero
        title={post.title}
        subtitle={post.excerpt || ""}
        breadcrumb={[
          { label: "News & Blog", href: "/blog" },
          { label: post.title, href: `/blog/${post.slug}` },
        ]}
      />

      <Section className="bg-white">
        <Container>
          <div className="max-w-3xl mx-auto">

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-4 mb-8 pb-6 border-b border-ivory-dark">
              <span className="text-xs font-bold text-white bg-crimson px-3 py-1 uppercase tracking-wider">{post.type}</span>
              <div className="flex items-center gap-1.5 text-sm text-slate">
                <Calendar size={14} className="text-crimson" />
                {formatDate(post.publishedAt || post.createdAt)}
              </div>
              {post.author && (
                <div className="flex items-center gap-1.5 text-sm text-slate">
                  <User size={14} className="text-crimson" />
                  {post.author}
                </div>
              )}
              {post.tags?.length > 0 && (
                <div className="flex items-center gap-1.5 text-sm text-slate">
                  <Tag size={14} className="text-crimson" />
                  {post.tags.join(", ")}
                </div>
              )}
            </div>

            {/* Cover image */}
            {post.coverImage && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={post.coverImage}
                alt={post.title}
                className="w-full aspect-video object-cover mb-8"
              />
            )}

            {/* Content */}
            <div
              className="prose prose-navy max-w-none text-slate leading-relaxed [&>h2]:font-display [&>h2]:text-2xl [&>h2]:font-bold [&>h2]:text-navy-dark [&>h2]:mt-8 [&>h2]:mb-4 [&>h3]:font-display [&>h3]:text-xl [&>h3]:font-bold [&>h3]:text-navy [&>h3]:mt-6 [&>h3]:mb-3 [&>p]:mb-5 [&>ul]:mb-5 [&>ul]:list-disc [&>ul]:pl-6 [&>ol]:mb-5 [&>ol]:list-decimal [&>ol]:pl-6 [&>li]:mb-2 [&>blockquote]:border-l-4 [&>blockquote]:border-crimson [&>blockquote]:pl-5 [&>blockquote]:italic [&>blockquote]:text-slate-600 [&>blockquote]:my-6"
              dangerouslySetInnerHTML={{ __html: post.content.replace(/\n\n/g, "</p><p>").replace(/\n/g, "<br/>") }}
            />

            {/* Back link */}
            <div className="mt-12 pt-8 border-t border-ivory-dark">
              <Link href="/blog" className="inline-flex items-center gap-2 text-navy font-semibold text-sm hover:text-crimson transition-colors">
                <ArrowLeft size={15} /> Back to News & Blog
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      {/* Related posts */}
      {related.length > 0 && (
        <Section className="bg-ivory">
          <Container>
            <div className="max-w-3xl mx-auto">
              <h2 className="font-display text-2xl font-bold text-navy-dark mb-6">More from {post.type === "NEWS" ? "the Newsroom" : post.type === "BLOG" ? "Our Blog" : post.type === "EVENT" ? "Events" : "Announcements"}</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {related.map((p: any) => (
                  <Link key={p.id} href={`/blog/${p.slug}`} className="border border-ivory-dark bg-white hover:shadow-md transition-shadow group block p-6">
                    <span className="text-xs font-bold text-white bg-crimson px-2 py-0.5 uppercase">{p.type}</span>
                    <h3 className="font-display text-lg font-bold text-navy-dark mt-3 mb-2 group-hover:text-crimson transition-colors">{p.title}</h3>
                    {p.excerpt && <p className="text-slate text-sm line-clamp-2">{p.excerpt}</p>}
                    <p className="text-xs text-slate mt-3">{formatDate(p.publishedAt || p.createdAt)}</p>
                  </Link>
                ))}
              </div>
            </div>
          </Container>
        </Section>
      )}
    </>
  );
}
