import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
export async function GET() {
  const settings = await prisma.siteSetting.findMany();
  const map = Object.fromEntries(settings.map((s: any) => [s.key, s.value]));
  return NextResponse.json(map);
}
export async function POST(req: NextRequest) {
  const body = await req.json();
  for (const [key, value] of Object.entries(body as Record<string, string>)) {
    await prisma.siteSetting.upsert({
      where: { key },
      update: { value: value as string },
      create: { key, value: value as string, label: key, group: "general" },
    });
  }
  return NextResponse.json({ success: true });
}
