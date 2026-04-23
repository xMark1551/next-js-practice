import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

import { NextRequest } from "next/server";

const isProtectedRoute = createRouteMatcher(["/dashboard(.*)"]);
const isAuthRoute = createRouteMatcher(["/auth/login(.*)", "/auth/register(.*)"]);

export default clerkMiddleware(async (auth, req) => {
  const { userId } = await auth();

  if (isProtectedRoute(req)) {
    await auth.protect({ unauthenticatedUrl: "http://localhost:3000/auth/login" });
  }

  if (isAuthRoute(req) && userId) {
    return Response.redirect(new URL("/dashboard", req.url));
  }
});

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith("/posts")) {
    console.log("Rewrite to /about-2");
    // return NextResponse.rewrite(new URL("/about-2", request.url));
  }
}

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
