import { PutObjectCommand } from "@aws-sdk/client-s3";
import { r2 } from "@/lib/r2";
import { NextRequest, NextResponse } from "next/server";
import { ResponseImageI } from "@/types/api";

export async function POST(request: NextRequest) {
  const formData = await request.formData();
  const image: File = formData.get("image") as File;

  const bytes = await image.arrayBuffer();
  const buffer = Buffer.from(bytes);

  const putImageCommand = new PutObjectCommand({
    Bucket: process.env.R2_BUCKET_NAME,
    Key: image.name,
    Body: buffer,
  });

  try {
    await r2.send(putImageCommand);

    const imageUrl = `${process.env.R2_PUBLIC_DOMAIN}/${image.name}`;

    const body: ResponseImageI = {
      image: imageUrl,
      status: 200,
    };

    return NextResponse.json(body, { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Something went wrong" }), {
      status: 500,
    });
  }
}
