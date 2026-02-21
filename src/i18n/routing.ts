import { defineRouting } from "next-intl/routing";
import { createNavigation } from "next-intl/navigation";

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ["id", "en", "jp"] as const,

  // Used when no locale matches
  defaultLocale: "id",
});
// Lightweight wrappers around Next.js' navigation APIs

export const { Link, redirect, usePathname, useRouter } =
  createNavigation(routing);
