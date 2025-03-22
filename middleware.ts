import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'

const isProtectedRoutes = createRouteMatcher(['/admin(.*)', '/teacher(.*)', '/pupil(.*)'])
const isLoginPageRoute = createRouteMatcher(['/login'])

export default clerkMiddleware(async (auth, request) => {
  const { userId, sessionClaims } = await auth()

  if(!userId && isProtectedRoutes(request)){
    return NextResponse.redirect(new URL('/', request.url))
  }

  if(userId && sessionClaims.metadata.role === 'admin' && isLoginPageRoute(request)){
    return NextResponse.redirect(new URL('/admin', request.url))
  }
  
  if(userId && sessionClaims.metadata.role === 'teacher' && isLoginPageRoute(request)){
    return NextResponse.redirect(new URL('/teacher', request.url))
  }

  if(userId && sessionClaims.metadata.role === 'pupil' && isLoginPageRoute(request)){
    return NextResponse.redirect(new URL('/pupil', request.url))
  }
})

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
}