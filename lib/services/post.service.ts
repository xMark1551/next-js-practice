import { prisma } from "../prisma";

import type { postsModel } from "@/generated/prisma/models/posts";
import { unstable_cache } from "next/cache";
import { revalidateTag } from "next/cache";

export const getPosts = unstable_cache(
  async (): Promise<postsModel[]> => {
    const result = await prisma.posts.findMany();
    return result;
  },
  ["posts"], // cache key
  { tags: ["posts"] }, // tag for revalidation
);

export async function getPost(id: number) {
  return await prisma.posts.findUnique({ where: { id } });
}

export const createPost = async (title: string, description: string) => {
  const result = await prisma.posts.create({
    data: {
      title,
      content: description,
    },
  });

  revalidateTag("posts", "");
  return result;
};

export const deletePost = async (id: number) => {
  await prisma.posts.delete({ where: { id } });

  revalidateTag("posts", "");
};
