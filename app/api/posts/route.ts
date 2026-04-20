import { NextResponse } from "next/server";

// GET /api/posts
export async function GET() {
  return NextResponse.json([
    { id: 1, title: "Post 1" },
    { id: 2, title: "Post 2" },
  ]);
}

// POST /api/posts
export async function POST(req: Request) {
  const body = await req.json();

  return NextResponse.json({
    message: "Created",
    data: body,
  });
}
