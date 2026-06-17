"use client";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { AlertCircle } from "lucide-react";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    const r = await signIn("credentials", { email, password, redirect: false });
    if (r?.error) { setError("Invalid email or password."); setLoading(false); }
    else router.push("/admin/dashboard");
  };

  return (
    <div className="min-h-screen bg-navy-dark flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <Image src="/cla-logo.png" alt="CLA Logo" width={72} height={72} className="object-contain mx-auto mb-4" />
          <h1 className="font-display text-2xl font-bold text-white">CLA Admin Portal</h1>
          <p className="text-white/40 text-xs mt-1 uppercase tracking-wider">Cecilia Learning Academy</p>
        </div>
        <form onSubmit={submit} className="bg-white p-8 shadow-2xl">
          <div className="w-8 h-0.5 bg-crimson mb-5" />
          <h2 className="font-display text-xl font-bold text-navy-dark mb-6">Sign In</h2>
          {error && (
            <div className="flex items-center gap-2 bg-red-50 border border-red-200 text-red-700 text-sm px-3 py-2.5 mb-4">
              <AlertCircle size={14} /> {error}
            </div>
          )}
          <div className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate uppercase tracking-wider mb-1.5">Email</label>
              <input type="email" required value={email} onChange={e => setEmail(e.target.value)} placeholder="admin@cecilialearningacademy.com.ng"
                className="w-full border border-silver/40 px-3 py-2.5 text-sm focus:outline-none focus:border-navy transition-colors" />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate uppercase tracking-wider mb-1.5">Password</label>
              <input type="password" required value={password} onChange={e => setPassword(e.target.value)} placeholder="••••••••"
                className="w-full border border-silver/40 px-3 py-2.5 text-sm focus:outline-none focus:border-navy transition-colors" />
            </div>
            <button type="submit" disabled={loading}
              className="w-full bg-crimson text-white font-bold py-3 text-sm uppercase tracking-wider hover:bg-crimson-dark transition-colors disabled:opacity-60 mt-2">
              {loading ? "Signing in..." : "Sign In"}
            </button>
          </div>
        </form>
        <div className="flex items-center justify-center gap-2 mt-6">
          <Image src="/jk-logo.png" alt="JK Technology" width={16} height={16} className="object-contain invert opacity-30" />
          <p className="text-white/20 text-xs">Powered by JK Technology Limited</p>
        </div>
      </div>
    </div>
  );
}
