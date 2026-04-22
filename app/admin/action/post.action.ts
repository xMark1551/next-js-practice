"use server";
import { refresh } from "next/cache";
import { createPost, deletePost } from "@/lib/services/post.service";

export async function createPostAction(title: string, description: string) {
  await createPost(title, description);
  refresh();
}

export async function deletePostAction(id: number) {
  await deletePost(id);
  refresh();
}
