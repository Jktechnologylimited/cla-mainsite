import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const type = searchParams.get("type");
  const published = searchParams.get("published");
  const posts = await prisma.post.findMany({
    where: { ...(type ? { type: type as any } : {}), ...(published === "true" ? { published: true } : {}) },
    orderBy: { createdAt: "desc" },
  });
  return NextResponse.json({ posts });
}
export async function POST(req: NextRequest) {
  const body = await req.json();
  const slug = body.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "") + "-" + Date.now();
  const post = await prisma.post.create({ data: { ...body, slug } });
  return NextResponse.json({ post }, { status: 201 });
}
