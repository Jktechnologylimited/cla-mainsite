const BASE = process.env.NEXT_PUBLIC_ADMIN_API_URL || "https://admin.cecilialearningacademy.com.ng";

async function apiFetch<T>(path: string, opts?: RequestInit): Promise<T> {
  const res = await fetch(`${BASE}/api/public${path}`, {
    next: { revalidate: 60 }, // Cache 60 seconds, auto revalidate
    ...opts,
  });
  if (!res.ok) throw new Error(`API error: ${res.status}`);
  return res.json();
}

export const api = {
  hero:     () => apiFetch<{ slides: any[] }>("/hero"),
  posts:    (type?: string, limit = 20) => apiFetch<{ posts: any[] }>(`/posts${type ? `?type=${type}` : ""}${limit !== 20 ? `${type ? "&" : "?"}limit=${limit}` : ""}`),
  gallery:  (category?: string) => apiFetch<{ images: any[] }>(`/gallery${category ? `?category=${encodeURIComponent(category)}` : ""}`),
  events:   () => apiFetch<{ events: any[] }>("/events"),
  settings: () => apiFetch<{ settings: Record<string, string> }>("/settings"),
};

export async function postToAdmin(path: string, data: unknown) {
  return fetch(`${BASE}/api/${path}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
}
