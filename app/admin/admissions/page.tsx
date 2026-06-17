export const dynamic = "force-dynamic";
import { prisma } from "@/lib/prisma";
import { PageHero } from "@/components/ui";

export default async function AdminAdmissionsPage() {
  const enquiries = await prisma.admissionEnquiry.findMany({ orderBy: { createdAt: "desc" } });
  return (
    <div>
      <div className="mb-8">
        <div className="w-8 h-0.5 bg-crimson mb-3" />
        <h1 className="font-display text-3xl font-bold text-navy-dark">Admission Enquiries</h1>
        <p className="text-slate text-sm mt-1">{enquiries.length} total enquiries received</p>
      </div>
      <div className="bg-white border border-ivory-dark">
        {enquiries.length === 0 ? (
          <div className="text-center py-16 text-slate text-sm">No enquiries received yet.</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-ivory border-b border-ivory-dark">
                <tr>
                  {["Parent", "Child", "Division", "Phone", "Email", "Date", "Status"].map(h => (
                    <th key={h} className="text-left px-4 py-3 text-xs font-semibold text-slate uppercase tracking-wider">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-ivory-dark">
                {enquiries.map((e: any) => (
                  <tr key={e.id} className="hover:bg-ivory/50 transition-colors">
                    <td className="px-4 py-3 text-sm font-medium text-navy">{e.parentName}</td>
                    <td className="px-4 py-3 text-sm text-slate">{e.childName}</td>
                    <td className="px-4 py-3"><span className="text-xs bg-crimson/10 text-crimson px-2 py-0.5 font-medium uppercase">{e.division}</span></td>
                    <td className="px-4 py-3 text-sm text-slate">{e.phone}</td>
                    <td className="px-4 py-3 text-sm text-slate">{e.email}</td>
                    <td className="px-4 py-3 text-xs text-slate">{new Date(e.createdAt).toLocaleDateString("en-GB")}</td>
                    <td className="px-4 py-3"><span className={`text-xs px-2 py-0.5 font-medium ${e.status === "NEW" ? "bg-yellow-100 text-yellow-700" : "bg-green-100 text-green-700"}`}>{e.status}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
