"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { usePathname } from "@/i18n/routing";
import { useRouter } from "next/navigation";

const LOCALES = [
  { code: "id" as const, label: "ID" },
  { code: "en" as const, label: "EN" },
  { code: "jp" as const, label: "JP" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const t = useTranslations("data");

  const switchLocale = (newLocale: "id" | "en" | "jp") => {
    const path = pathname === "/" ? "" : pathname;
    router.push(`/${newLocale}${path}`);
  };

  const navItems = [
    { name: t("Navbar.Link.Home"), href: "#" },
    { name: t("Navbar.Link.About"), href: "#about" },
    { name: t("Navbar.Link.Service"), href: "#services" },
    { name: t("Navbar.Link.Process"), href: "#process" },
    { name: t("Navbar.Link.Contact"), href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-lg"
          : "bg-white/5 backdrop-blur-lg border-b border-white/20"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="#" className="flex items-center justify-center space-x-2">
            <div className="w-10 h-10  flex items-center justify-center">
              <Image
                src={"/kss.png"}
                width={"600"}
                height={300}
                alt="logo-kss"
              />
            </div>
            <span
              className={`font-bold  text-lg md:text-xl ${
                isScrolled ? "text-foreground" : "text-white"
              }`}
            >
              Kinki Sultra Sinergi
            </span>
          </Link>

          {/* Language switcher + Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <div className="flex items-center rounded-lg border bg-white/5 p-0.5">
              {LOCALES.map(({ code, label }) => (
                <button
                  key={code}
                  type="button"
                  onClick={() => switchLocale(code)}
                  className={`min-w-[2.25rem] rounded-md px-2.5 py-1 text-sm font-medium transition-colors ${
                    locale === code
                      ? "bg-[#4DA8DA] text-white"
                      : isScrolled
                        ? "text-foreground hover:bg-muted"
                        : "text-white/90 hover:bg-white/10"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
            <div className="flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`font-medium transition-colors hover:text-[#4DA8DA] ${
                    isScrolled ? "text-foreground" : "text-white"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={isScrolled ? "" : "text-white"}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-background/95 backdrop-blur-md rounded-lg shadow-lg mb-4 p-4"
          >
            <div className="flex gap-2 mb-4 pb-4 border-b border-black/40">
              {LOCALES.map(({ code, label }) => (
                <button
                  key={code}
                  type="button"
                  onClick={() => {
                    switchLocale(code);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`flex-1 rounded-md px-3 py-2 text-sm font-medium transition-colors ${locale === code ? "bg-[#4DA8DA] text-white" : "bg-white/10 text-foreground"}`}
                >
                  {label}
                </button>
              ))}
            </div>
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block py-3 px-4 text-foreground font-medium hover:bg-muted rounded-lg transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
