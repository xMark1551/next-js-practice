import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const isProtectedRoute = createRouteMatcher(["/dashboard(.*)"]);
const isAuthRoute = createRouteMatcher(["/auth/login(.*)", "/auth/register(.*)"]);

export default clerkMiddleware(async (auth, req) => {
  const { userId } = await auth();

  // protect dashboard
  if (isProtectedRoute(req)) {
    await auth.protect({
      unauthenticatedUrl: "/auth/login",
    });
  }

  // redirect logged-in users away from auth pages
  if (isAuthRoute(req) && userId) {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }

  return NextResponse.next();
});

export const config = {
  matcher: ["/((?!_next|.*\\..*).*)", "/(api|trpc)(.*)"],
};
