import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Middleware function
export async function middleware(request: NextRequest) {
  const token = await getToken({req: request});
    const url = request.nextUrl
    // If the token is missing, redirect to the login page
    if (token && (
        url.pathname.startsWith("/sign-in")  ||
      url.pathname.startsWith("/sign-up")
    )) {
      return NextResponse.redirect(`${url.origin}/?message=signed-in`);
    }
  if (!token && request.nextUrl.pathname.startsWith("/my-articles")) {
    return NextResponse.redirect(new URL(`${url.origin}/sign-in?message=not-signed-in`));
  }

  // Continue with the request
  return NextResponse.next();
}

export {default} from "next-auth/middleware"

// Define the routes that the middleware should apply to
export const config = {
    matcher: [
        "/sign-in",
        "/sign-up",
        "/my-articles",
        // "/dashboard/:path*"
    ],
};

