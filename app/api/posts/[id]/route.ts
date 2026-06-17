import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
export async function DELETE(_: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  await prisma.post.delete({ where: { id } });
  return NextResponse.json({ success: true });
}
export async function PATCH(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const body = await req.json();
  const post = await prisma.post.update({ where: { id }, data: body });
  return NextResponse.json({ post });
}
