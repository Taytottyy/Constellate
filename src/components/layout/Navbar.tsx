"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/#about", label: "About" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/services", label: "Services" },
  { href: "/team", label: "Team" },
  { href: "/#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-navy/10 bg-white/95 shadow-sm backdrop-blur-md"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-6 md:h-18 md:px-12 lg:px-16">
        <Link
          href="/"
          className={cn(
            "font-heading text-lg font-semibold tracking-tight transition-colors md:text-xl",
            scrolled ? "text-navy" : "text-white"
          )}
        >
          Constellate Strategy Group
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-gold",
                scrolled ? "text-navy/80" : "text-white/90"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Button
            nativeButton={false}
            render={<Link href="/#contact" />}
            variant={scrolled ? "outline" : "navy-outline"}
            size="sm"
            className={cn(scrolled && "border-navy/30 text-navy hover:bg-navy/5")}
          >
            Partner With Us
          </Button>
          <Button
            nativeButton={false}
            render={<Link href="/team" />}
            variant="gold"
            size="sm"
          >
            Join our Team
          </Button>
        </div>

        <button
          type="button"
          className={cn(
            "inline-flex size-10 items-center justify-center rounded-lg md:hidden",
            scrolled ? "text-navy" : "text-white"
          )}
          onClick={() => setMobileOpen((open) => !open)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-navy/10 bg-white px-6 py-6 md:hidden">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-base font-medium text-navy"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-4 flex flex-col gap-3">
              <Button
                nativeButton={false}
                render={<Link href="/#contact" />}
                variant="outline"
                className="w-full border-navy/30 text-navy"
                onClick={() => setMobileOpen(false)}
              >
                Partner With Us
              </Button>
              <Button
                nativeButton={false}
                render={<Link href="/team" />}
                variant="gold"
                className="w-full"
                onClick={() => setMobileOpen(false)}
              >
                Join our Team
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
