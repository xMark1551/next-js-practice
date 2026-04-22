import { NextResponse } from "next/server";

import { getPosts, createPost } from "@/lib/services/post.service";

// GET /api/posts
export async function GET() {
  const result = await getPosts();
  return NextResponse.json(result);
}

export async function POST(req: Request) {
  const { title, description } = await req.json();

  const result = await createPost(title, description);

  return NextResponse.json(result);
}
