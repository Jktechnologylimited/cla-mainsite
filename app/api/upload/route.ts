import { NextRequest, NextResponse } from "next/server";
import { v2 as cloudinary } from "cloudinary";
cloudinary.config({ cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME, api_key: process.env.CLOUDINARY_API_KEY, api_secret: process.env.CLOUDINARY_API_SECRET });
export async function POST(req: NextRequest) {
  try {
    const fd = await req.formData();
    const file = fd.get("file") as File;
    const folder = (fd.get("folder") as string) || "cla";
    const bytes = await file.arrayBuffer();
    const b64 = `data:${file.type};base64,${Buffer.from(bytes).toString("base64")}`;
    const result = await cloudinary.uploader.upload(b64, { folder, resource_type: "auto" });
    return NextResponse.json({ url: result.secure_url });
  } catch (e) {
    return NextResponse.json({ error: "Upload failed" }, { status: 500 });
  }
}
