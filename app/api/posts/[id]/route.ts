import { NextRequest, NextResponse } from "next/server";

import { deletePost } from "@/lib/services/post.service";

export async function DELETE(req: NextRequest, context: { params: Promise<{ id: string }> }) {
  const { id } = await context.params;

  await deletePost(Number(id));

  return NextResponse.json({ message: "Deleted" });
}
