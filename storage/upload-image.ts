import { Upload } from "@aws-sdk/lib-storage";
import { r2 } from "./";

export async function uploadImage(file: File) {
  const key = `${Date.now()}-${file.name}`;

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  const upload = new Upload({
    client: r2,
    params: {
      Bucket: process.env.R2_BUCKET!,
      Key: key,
      Body: buffer,
      ContentType: file.type,
    },
  });

  await upload.done();

  return `https://pub-e195be303e3846379ccff4d1a056eef1.r2.dev/${key}`;
}
