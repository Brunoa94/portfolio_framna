import { DeleteObjectCommand, PutObjectCommand } from "@aws-sdk/client-s3";
import { r2 } from "@/lib/r2";
import { NextRequest, NextResponse } from "next/server";
import { DeleteImageI, ErrorI, ResponseImageI, SuccessI } from "@/types/api";

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
  } catch (e) {
    throw e as ErrorI;
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const body: DeleteImageI = await request.json();
    console.log("IMG: " + body.imgSrc);

    const deleteCommand = new DeleteObjectCommand({
      Bucket: process.env.R2_BUCKET_NAME,
      Key: body.imgSrc,
    });

    await r2.send(deleteCommand);

    const response: SuccessI = {
      message: "Image deleted successfully",
      status: 200,
    };

    return NextResponse.json(response, { status: 200 });
  } catch (e) {
    throw new Error(e.message);
  }
}
