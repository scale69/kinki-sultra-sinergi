import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
  // Match all pathnames except for:
  // - /api, /_next, /_vercel (Next.js internals)
  // - Files with an extension (e.g. robots.txt, sitemap.xml, favicon.ico, images, etc.)
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
