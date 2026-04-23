"use server";
import { refresh } from "next/cache";
import { createPost, deletePost } from "@/lib/services/post.service";

export async function createPostAction(formData: FormData) {
  const title = formData.get("title") as string;
  const description = formData.get("description") as string;
  const image = formData.get("image") as File | null;

  if (image) {
    console.log("Image:", image.name);
  }

  await createPost(title, description, image);
  refresh();
}

export async function deletePostAction(id: number) {
  await deletePost(id);
  refresh();
}
