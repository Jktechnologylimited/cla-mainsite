export const dynamic = "force-dynamic";
import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { Users, MessageSquare, FileText, ImageIcon, Settings, ArrowRight } from "lucide-react";

export default async function AdminDashboard() {
  const [enquiries, messages, posts] = await Promise.all([
    prisma.admissionEnquiry.count({ where: { status: "NEW" } }),
    prisma.contactMessage.count({ where: { read: false } }),
    prisma.post.count(),
  ]);

  const recentEnquiries = await prisma.admissionEnquiry.findMany({
    orderBy: { createdAt: "desc" }, take: 5,
  });

  return (
    <div>
      <div className="mb-8">
        <div className="w-8 h-0.5 bg-crimson mb-3" />
        <h1 className="font-display text-3xl font-bold text-navy-dark">Dashboard</h1>
        <p className="text-slate text-sm mt-1">Welcome to the Cecilia Learning Academy content portal.</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
        {[
          { label: "New Enquiries", value: enquiries, icon: Users, href: "/admin/admissions", color: "bg-crimson" },
          { label: "Unread Messages", value: messages, icon: MessageSquare, href: "/admin/messages", color: "bg-navy" },
          { label: "Posts Published", value: posts, icon: FileText, href: "/admin/posts", color: "bg-navy-mid" },
          { label: "Quick Settings", value: "→", icon: Settings, href: "/admin/settings", color: "bg-slate" },
        ].map(({ label, value, icon: Icon, href, color }) => (
          <Link key={label} href={href}
            className="bg-white border border-ivory-dark p-5 hover:shadow-md transition-shadow group">
            <div className={`w-10 h-10 ${color} flex items-center justify-center mb-3`}>
              <Icon size={18} className="text-white" />
            </div>
            <div className="font-display text-2xl font-bold text-navy-dark">{value}</div>
            <div className="text-xs text-slate mt-1 group-hover:text-crimson transition-colors">{label}</div>
          </Link>
        ))}
      </div>

      {/* Quick actions */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white border border-ivory-dark p-6">
          <h2 className="font-display text-xl font-bold text-navy-dark mb-4">Quick Actions</h2>
          <div className="space-y-2">
            {[
              { label: "Edit Homepage Content", href: "/admin/settings#home" },
              { label: "Edit School Information", href: "/admin/settings#school" },
              { label: "Write a News Article", href: "/admin/posts/new" },
              { label: "Upload Gallery Photos", href: "/admin/gallery" },
              { label: "Add Calendar Event", href: "/admin/events/new" },
            ].map(({ label, href }) => (
              <Link key={label} href={href}
                className="flex items-center justify-between py-2.5 px-3 border-b border-ivory-dark hover:bg-ivory text-sm text-navy hover:text-crimson transition-colors group">
                {label} <ArrowRight size={14} className="text-silver group-hover:text-crimson transition-colors" />
              </Link>
            ))}
          </div>
        </div>

        {/* Recent enquiries */}
        <div className="bg-white border border-ivory-dark p-6">
          <h2 className="font-display text-xl font-bold text-navy-dark mb-4">Recent Enquiries</h2>
          {recentEnquiries.length === 0 ? (
            <p className="text-slate text-sm text-center py-8">No enquiries yet</p>
          ) : (
            <div className="space-y-2">
              {recentEnquiries.map((e: any) => (
                <div key={e.id} className="py-2.5 border-b border-ivory-dark">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-navy">{e.parentName}</span>
                    <span className="text-xs bg-crimson/10 text-crimson px-2 py-0.5 font-medium">{e.division}</span>
                  </div>
                  <p className="text-xs text-slate mt-0.5">{e.email} · {e.childName}</p>
                </div>
              ))}
              <Link href="/admin/admissions" className="text-xs text-crimson font-semibold hover:underline mt-2 block">
                View all enquiries →
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
