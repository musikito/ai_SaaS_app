// ** This version gives me an error with publicRoutes **
// import { clerkMiddleware } from "@clerk/nextjs/server";

// export default clerkMiddleware({
//   publicRoutes: ['/api/webhooks/clerk']
// });

// export const config = {
//   matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
// };


// ** This version is deprecated **
import { authMiddleware } from "@clerk/nextjs/server";
 
export default authMiddleware({
  publicRoutes: ['/', '/api/webhooks/clerk', '/api/webhooks/stripe']
});
 
export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};


// ** This was an updated version provided by ChatGPT to get publicRoutes working with clerkMiddleware **
// import { NextFetchEvent, NextRequest, NextResponse } from "next/server";
// import { ClerkMiddlewareAuth, clerkMiddleware, getAuth } from "@clerk/nextjs/server";
// import { NextMiddlewareResult } from "next/dist/server/web/types";

// const publicRoutes = ['/', '/api/webhooks/clerk', '/api/webhooks/stripe'];

// export default function middleware(req: { (auth: ClerkMiddlewareAuth, request: NextRequest, event: NextFetchEvent): NextMiddlewareResult | Promise<NextMiddlewareResult>; nextUrl?: any; }) {
//   const url = req.nextUrl.clone();
  
//   if (publicRoutes.includes(url.pathname)) {
//     return NextResponse.next();
//   }

//   return clerkMiddleware(req);
// }

// export const config = {
//   matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
// };