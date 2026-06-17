export const dynamic = "force-dynamic";
import { prisma } from "@/lib/prisma";

export default async function AdminMessagesPage() {
  const messages = await prisma.contactMessage.findMany({ orderBy: { createdAt: "desc" } });
  return (
    <div>
      <div className="mb-8">
        <div className="w-8 h-0.5 bg-crimson mb-3" />
        <h1 className="font-display text-3xl font-bold text-navy-dark">Contact Messages</h1>
        <p className="text-slate text-sm mt-1">{messages.filter((m: any) => !m.read).length} unread · {messages.length} total</p>
      </div>
      <div className="space-y-4">
        {messages.length === 0 ? (
          <div className="bg-white border border-ivory-dark text-center py-16 text-slate text-sm">No messages yet.</div>
        ) : messages.map((m: any) => (
          <div key={m.id} className={`bg-white border p-6 ${!m.read ? "border-crimson/40 bg-crimson/5" : "border-ivory-dark"}`}>
            <div className="flex items-start justify-between mb-2">
              <div>
                <h3 className="font-semibold text-navy text-sm">{m.name}</h3>
                <p className="text-xs text-slate">{m.email} {m.phone ? `· ${m.phone}` : ""}</p>
              </div>
              <div className="text-right">
                <span className="text-xs text-slate">{new Date(m.createdAt).toLocaleDateString("en-GB")}</span>
                {!m.read && <span className="block text-xs bg-crimson text-white px-2 py-0.5 mt-1 font-medium">NEW</span>}
              </div>
            </div>
            <p className="text-sm font-semibold text-navy mb-1">{m.subject}</p>
            <p className="text-sm text-slate leading-relaxed">{m.message}</p>
            <a href={`mailto:${m.email}`} className="inline-block mt-3 text-xs text-crimson font-semibold hover:underline">
              Reply via Email →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
