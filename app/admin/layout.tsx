"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { signOut } from "next-auth/react";
import { LayoutDashboard, Settings, FileText, Image as ImageIcon, Calendar, Inbox, Users, LogOut, ChevronRight } from "lucide-react";

const nav = [
  { href: "/admin/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/admin/settings", label: "Site Content", icon: Settings },
  { href: "/admin/posts", label: "News & Blog", icon: FileText },
  { href: "/admin/gallery", label: "Gallery", icon: ImageIcon },
  { href: "/admin/events", label: "Events", icon: Calendar },
  { href: "/admin/admissions", label: "Enquiries", icon: Users },
  { href: "/admin/messages", label: "Messages", icon: Inbox },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  return (
    <div className="min-h-screen bg-ivory flex">
      {/* Sidebar */}
      <aside className="w-60 bg-navy-dark flex flex-col fixed inset-y-0 left-0 z-30">
        <div className="px-4 py-5 border-b border-white/10">
          <div className="flex items-center gap-2">
            <Image src="/cla-logo.png" alt="CLA" width={32} height={32} className="object-contain" />
            <div>
              <div className="font-display text-white text-sm font-bold leading-tight">CLA Admin</div>
              <div className="text-white/40 text-[10px] uppercase tracking-wider">Content Manager</div>
            </div>
          </div>
        </div>
        <nav className="flex-1 px-3 py-4 overflow-y-auto">
          <div className="space-y-0.5">
            {nav.map(({ href, label, icon: Icon }) => {
              const active = pathname === href || pathname.startsWith(href + "/");
              return (
                <Link key={href} href={href}
                  className={`flex items-center gap-3 px-3 py-2.5 text-sm rounded-sm transition-colors ${active ? "bg-crimson text-white" : "text-white/60 hover:text-white hover:bg-white/10"}`}>
                  <Icon size={16} />
                  <span>{label}</span>
                  {active && <ChevronRight size={14} className="ml-auto" />}
                </Link>
              );
            })}
          </div>
        </nav>
        <div className="px-3 py-4 border-t border-white/10">
          <Link href="/" target="_blank" className="flex items-center gap-3 px-3 py-2 text-sm text-white/50 hover:text-white transition-colors mb-1">
            <span>← View Website</span>
          </Link>
          <button onClick={() => signOut({ callbackUrl: "/auth/login" })}
            className="w-full flex items-center gap-3 px-3 py-2 text-sm text-white/50 hover:text-crimson-light transition-colors">
            <LogOut size={16} /> Sign Out
          </button>
        </div>
      </aside>

      {/* Main */}
      <main className="flex-1 ml-60 min-h-screen">
        <div className="p-8 max-w-6xl">{children}</div>
      </main>
    </div>
  );
}
