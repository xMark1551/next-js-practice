import { NextResponse } from "next/server";
import db from "@/lib/db";

// GET /api/posts
export async function GET() {
  return NextResponse.json([
    { id: 1, title: "Post 1" },
    { id: 2, title: "Post 2" },
  ]);
}

export async function POST(req: Request) {
  const body = await req.json();
  const { title, description } = body;

  console.log(title, description);

  await db.query("INSERT INTO posts (title, content) VALUES (?, ?)", [title, description]);

  return Response.json({ message: "User added" });
}
