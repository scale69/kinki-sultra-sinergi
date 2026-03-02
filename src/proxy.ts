import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
  // Match all pathnames except for:
  // - /api, /_next, /_vercel     → Next.js internals
  // - sitemap.xml, robots.txt   → SEO files (served dynamically by Next.js)
  // - Any path with a dot ext   → Static files (images, fonts, icons, etc.)
  matcher: ["/((?!api|_next|_vercel|sitemap\\.xml|robots\\.txt|.*\\..*).*)"],
};
