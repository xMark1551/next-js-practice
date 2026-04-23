import { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith("/posts")) {
    console.log("Rewrite to /about-2");
  }
}

export const config = {
  matcher: "/posts/:path*",
};
