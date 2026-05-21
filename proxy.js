import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";

// 🔄 CHANGED FROM: export async function middleware(request)
export async function proxy(request) {
  // Better-Auth checks for an active user session using request headers
  const session = await auth.api.getSession({
    headers: request.headers,
  });

  // If the user is NOT logged in, redirect them immediately to the login page
  if (!session) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // If a valid session exists, allow them to view the protected route smoothly
  return NextResponse.next();
}

// Keep your matcher config exactly the same as before!
export const config = {
  matcher: [
    "/profile",        
    "/all-tiles/:id+"  
  ],
};