"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { SocialLinks } from "./SocialIcons";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Portfolio" },
    { href: "/about", label: "About" },
    { href: "mailto:hello@sofiaossman.com", label: "Contact", external: true },
  ];

  return (
    <header className="w-full">
      {/* Desktop header — 3-column: nav left, logo center, icons right */}
      <div className="hidden md:grid grid-cols-3 items-center max-w-6xl mx-auto px-6 py-5">
        {/* Left — nav links */}
        <nav className="flex items-center gap-6">
          {navLinks.map((link) =>
            link.external ? (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs uppercase tracking-widest text-portfolio-muted hover:text-portfolio-heading transition-colors"
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className={`text-xs uppercase tracking-widest transition-colors ${
                  pathname === link.href
                    ? "text-portfolio-accent font-semibold"
                    : "text-portfolio-muted hover:text-portfolio-heading"
                }`}
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        {/* Center — logo */}
        <Link href="/" className="justify-self-center hover:opacity-80 transition-opacity">
          <Image
            src="/images/sofia-portrait.png"
            alt="Sofia Ossman"
            width={2127}
            height={224}
            className="h-10 w-auto"
            priority
          />
        </Link>

        {/* Right — social icons + Play Dress Up button */}
        <div className="flex items-center justify-end gap-5">
          <SocialLinks />
          <Link
            href="/dress-up-seasons"
            className="px-4 py-1.5 rounded-full bg-portfolio-accent-bg text-portfolio-accent text-xs font-semibold uppercase tracking-wide hover:bg-portfolio-accent-hover hover:text-white transition-colors"
          >
            Play Dress Up
          </Link>
        </div>
      </div>

      {/* Mobile header */}
      <div className="md:hidden flex items-center justify-between px-6 py-4">
        <Link href="/" className="hover:opacity-80 transition-opacity">
          <Image
            src="/images/sofia-portrait.png"
            alt="Sofia Ossman"
            width={2127}
            height={224}
            className="h-7 w-auto"
            priority
          />
        </Link>

        <button
          className="p-2 text-portfolio-muted hover:text-portfolio-heading"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-portfolio-border px-6 py-4 space-y-3">
          {navLinks.map((link) =>
            link.external ? (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sm text-portfolio-muted"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className={`block text-sm ${
                  pathname === link.href
                    ? "text-portfolio-accent font-medium"
                    : "text-portfolio-muted"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            )
          )}
          <Link
            href="/dress-up-seasons"
            className="inline-block px-3 py-1 rounded-full bg-portfolio-accent-bg text-portfolio-accent text-sm font-medium"
            onClick={() => setMobileMenuOpen(false)}
          >
            Play Dress Up
          </Link>
          <SocialLinks className="pt-2" />
        </div>
      )}
    </header>
  );
}
