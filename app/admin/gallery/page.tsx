"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Upload, Trash2, ImageIcon } from "lucide-react";

export default function AdminGalleryPage() {
  const [images, setImages] = useState<any[]>([]);
  const [uploading, setUploading] = useState(false);
  const [caption, setCaption] = useState("");
  const [category, setCategory] = useState("General");

  const categories = ["General", "Classrooms", "Events", "Sports", "Graduation", "Cultural", "Nursery & Crèche"];

  const uploadFile = async (file: File) => {
    setUploading(true);
    const fd = new FormData();
    fd.append("file", file);
    fd.append("folder", "cla/gallery");
    const res = await fetch("/api/upload", { method: "POST", body: fd });
    const { url } = await res.json();
    await fetch("/api/gallery", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url, caption, category }),
    });
    setUploading(false);
    loadImages();
  };

  const loadImages = () => {
    fetch("/api/gallery").then(r => r.json()).then(d => setImages(d.images || []));
  };

  useEffect(() => { loadImages(); }, []);

  return (
    <div>
      <div className="mb-8">
        <div className="w-8 h-0.5 bg-crimson mb-3" />
        <h1 className="font-display text-3xl font-bold text-navy-dark">Gallery</h1>
        <p className="text-slate text-sm mt-1">{images.length} photos</p>
      </div>

      {/* Upload */}
      <div className="bg-white border border-ivory-dark p-6 mb-8">
        <h2 className="font-display text-xl font-bold text-navy-dark mb-4">Upload Photo</h2>
        <div className="grid md:grid-cols-3 gap-4 mb-4">
          <div>
            <label className="block text-xs font-semibold text-slate uppercase tracking-wider mb-1.5">Category</label>
            <select value={category} onChange={e => setCategory(e.target.value)}
              className="w-full border border-silver/40 px-3 py-2.5 text-sm focus:outline-none focus:border-navy bg-white">
              {categories.map(c => <option key={c} value={c}>{c}</option>)}
            </select>
          </div>
          <div className="md:col-span-2">
            <label className="block text-xs font-semibold text-slate uppercase tracking-wider mb-1.5">Caption (optional)</label>
            <input type="text" value={caption} onChange={e => setCaption(e.target.value)}
              placeholder="e.g. Students during morning assembly 2024"
              className="w-full border border-silver/40 px-3 py-2.5 text-sm focus:outline-none focus:border-navy" />
          </div>
        </div>
        <label className="flex items-center justify-center gap-3 border-2 border-dashed border-silver/40 p-8 cursor-pointer hover:border-navy transition-colors">
          {uploading ? (
            <div className="flex items-center gap-2 text-slate text-sm">
              <div className="w-4 h-4 border-2 border-navy border-t-transparent rounded-full animate-spin" />
              Uploading...
            </div>
          ) : (
            <>
              <Upload size={24} className="text-silver" />
              <span className="text-sm text-slate">Click to upload image (JPG, PNG, WebP)</span>
            </>
          )}
          <input type="file" accept="image/*" className="hidden"
            onChange={e => e.target.files?.[0] && uploadFile(e.target.files[0])} />
        </label>
      </div>

      {/* Gallery grid */}
      {images.length === 0 ? (
        <div className="border-2 border-dashed border-ivory-dark py-20 text-center">
          <ImageIcon size={40} className="text-silver mx-auto mb-3" />
          <p className="text-slate text-sm">No photos uploaded yet. Upload your first photo above.</p>
        </div>
      ) : (
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((img: any) => (
            <div key={img.id} className="group relative aspect-square bg-ivory-dark overflow-hidden">
              <Image src={img.url} alt={img.caption || "Gallery image"} fill className="object-cover" />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-3">
                {img.caption && <p className="text-white text-xs mb-2">{img.caption}</p>}
                <div className="flex justify-between items-center">
                  <span className="text-white/60 text-xs">{img.category}</span>
                  <button className="text-white/70 hover:text-crimson-light transition-colors">
                    <Trash2 size={14} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
