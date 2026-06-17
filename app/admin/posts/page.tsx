"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Plus, Pencil, Trash2, Eye, EyeOff } from "lucide-react";

export default function AdminPostsPage() {
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState({ title: "", type: "NEWS", content: "", excerpt: "", published: false });
  const [creating, setCreating] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const load = () => {
    fetch("/api/posts").then(r => r.json()).then(d => { setPosts(d.posts || []); setLoading(false); });
  };

  useEffect(() => { load(); }, []);

  const create = async () => {
    setCreating(true);
    await fetch("/api/posts", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) });
    setCreating(false);
    setShowForm(false);
    setForm({ title: "", type: "NEWS", content: "", excerpt: "", published: false });
    load();
  };

  const del = async (id: string) => {
    if (!confirm("Delete this post?")) return;
    await fetch(`/api/posts/${id}`, { method: "DELETE" });
    load();
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <div className="w-8 h-0.5 bg-crimson mb-3" />
          <h1 className="font-display text-3xl font-bold text-navy-dark">News & Blog</h1>
          <p className="text-slate text-sm mt-1">{posts.length} posts total</p>
        </div>
        <button onClick={() => setShowForm(!showForm)}
          className="inline-flex items-center gap-2 bg-crimson text-white font-semibold px-5 py-2.5 text-sm uppercase tracking-wider hover:bg-crimson-dark transition-colors">
          <Plus size={15} /> New Post
        </button>
      </div>

      {/* Create form */}
      {showForm && (
        <div className="bg-white border border-ivory-dark p-8 mb-8">
          <h2 className="font-display text-xl font-bold text-navy-dark mb-6">Create New Post</h2>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate uppercase tracking-wider mb-1.5">Title *</label>
                <input type="text" value={form.title} onChange={e => setForm(p => ({ ...p, title: e.target.value }))}
                  className="w-full border border-silver/40 px-3 py-2.5 text-sm focus:outline-none focus:border-navy" placeholder="Post title" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate uppercase tracking-wider mb-1.5">Type</label>
                <select value={form.type} onChange={e => setForm(p => ({ ...p, type: e.target.value }))}
                  className="w-full border border-silver/40 px-3 py-2.5 text-sm focus:outline-none focus:border-navy bg-white">
                  {["NEWS", "EVENT", "BLOG", "ANNOUNCEMENT"].map(t => <option key={t} value={t}>{t}</option>)}
                </select>
              </div>
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate uppercase tracking-wider mb-1.5">Excerpt (short description)</label>
              <input type="text" value={form.excerpt} onChange={e => setForm(p => ({ ...p, excerpt: e.target.value }))}
                className="w-full border border-silver/40 px-3 py-2.5 text-sm focus:outline-none focus:border-navy" placeholder="Brief description for listing pages" />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate uppercase tracking-wider mb-1.5">Content *</label>
              <textarea rows={8} value={form.content} onChange={e => setForm(p => ({ ...p, content: e.target.value }))}
                className="w-full border border-silver/40 px-3 py-2.5 text-sm focus:outline-none focus:border-navy resize-none" placeholder="Write the full post content here..." />
            </div>
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" checked={form.published} onChange={e => setForm(p => ({ ...p, published: e.target.checked }))}
                className="accent-crimson w-4 h-4" />
              <span className="text-sm text-slate font-medium">Publish immediately (visible on website)</span>
            </label>
            <div className="flex gap-3 pt-2">
              <button onClick={create} disabled={creating || !form.title || !form.content}
                className="bg-crimson text-white font-semibold px-6 py-2.5 text-sm uppercase tracking-wider hover:bg-crimson-dark transition-colors disabled:opacity-50">
                {creating ? "Creating..." : "Create Post"}
              </button>
              <button onClick={() => setShowForm(false)} className="border border-silver/40 px-6 py-2.5 text-sm text-slate hover:text-navy transition-colors">Cancel</button>
            </div>
          </div>
        </div>
      )}

      {/* Posts table */}
      <div className="bg-white border border-ivory-dark">
        {loading ? (
          <div className="text-center py-16 text-slate text-sm">Loading...</div>
        ) : posts.length === 0 ? (
          <div className="text-center py-16 text-slate text-sm">No posts yet. Create your first post above.</div>
        ) : (
          <table className="w-full">
            <thead className="bg-ivory border-b border-ivory-dark">
              <tr>
                {["Title", "Type", "Status", "Date", ""].map(h => (
                  <th key={h} className="text-left px-5 py-3 text-xs font-semibold text-slate uppercase tracking-wider">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-ivory-dark">
              {posts.map((p: any) => (
                <tr key={p.id} className="hover:bg-ivory/50 transition-colors">
                  <td className="px-5 py-3">
                    <p className="text-sm font-medium text-navy">{p.title}</p>
                    {p.excerpt && <p className="text-xs text-slate mt-0.5 truncate max-w-xs">{p.excerpt}</p>}
                  </td>
                  <td className="px-5 py-3"><span className="text-xs bg-navy/10 text-navy px-2 py-0.5 font-medium">{p.type}</span></td>
                  <td className="px-5 py-3">
                    <span className={`text-xs px-2 py-0.5 font-medium ${p.published ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"}`}>
                      {p.published ? "Published" : "Draft"}
                    </span>
                  </td>
                  <td className="px-5 py-3 text-xs text-slate">{new Date(p.createdAt).toLocaleDateString("en-GB")}</td>
                  <td className="px-5 py-3">
                    <button onClick={() => del(p.id)} className="text-slate hover:text-crimson transition-colors p-1">
                      <Trash2 size={14} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
