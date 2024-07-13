import { authMiddleware } from "@clerk/nextjs/server";
 
// This example protects all routes including api/trpc routes
// Please edit this to allow other routes to be public as needed.
// See https://clerk.com/docs/references/nextjs/auth-middleware for more information about configuring your Middleware

export default authMiddleware({
    publicRoutes:[
        '/',
        '/api/webhook/clerk',
        '/api/webhook/stripe',
        '/api/uploadthing',
        '/api/webhooks(.*)'
    ],
    ignoredRoutes:[
        
        '/api/webhook/clerk',
        '/api/webhook/stripe',
        '/api/uploadthing'
    ]
});
 
export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
// ** This version gives me an error with publicRoutes **
// import { clerkMiddleware } from "@clerk/nextjs/server";

// export default clerkMiddleware({
//   publicRoutes: ['/api/webhooks/clerk']
// });

// export const config = {
//   matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
// };


// ** This version is deprecated **
// import { authMiddleware } from "@clerk/nextjs/server";
 
// export default authMiddleware({
//   // publicRoutes: ['/', '/api/webhooks/clerk', '/api/webhooks/stripe']
//   publicRoutes: ['/',"/api/webhooks/test/",],
//   ignoredRoutes: ["/api/webhooks/clerk/", ],
// });
 
// export const config = {
//   matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
// };

// import { clerkMiddleware } from '@clerk/nextjs/server';

// // Make sure that the `/api/webhooks/(.*)` route is not protected here
// export default clerkMiddleware()

// export const config = {
//   matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
// };

// import { authMiddleware } from "@clerk/nextjs/server";

// export default authMiddleware({
//   publicRoutes: ["/api/webhooks(.*)"],
// });

// export const config = {
//   matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
// };


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