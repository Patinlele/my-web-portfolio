"use client";

import { useState } from "react";
import { navLinks, profile } from "@/data/portfolio";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white/70 backdrop-blur-xl backdrop-saturate-150">
      <nav className="mx-auto flex h-12 max-w-5xl items-center justify-between px-6">
        <a
          href="#beranda"
          className="text-[17px] font-semibold tracking-tight text-[#1d1d1f]"
        >
          {profile.name}
        </a>

        {/* Menu desktop */}
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-[12px] text-[#1d1d1f]/80 transition-colors hover:text-[#1d1d1f]"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Tombol menu mobile */}
        <button
          type="button"
          aria-label="Buka menu"
          onClick={() => setOpen((v) => !v)}
          className="flex h-9 w-9 items-center justify-center rounded-full text-[#1d1d1f] transition-colors hover:bg-black/5 md:hidden"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
            {open ? (
              <>
                <line x1="5" y1="5" x2="19" y2="19" />
                <line x1="19" y1="5" x2="5" y2="19" />
              </>
            ) : (
              <>
                <line x1="4" y1="8" x2="20" y2="8" />
                <line x1="4" y1="16" x2="20" y2="16" />
              </>
            )}
          </svg>
        </button>
      </nav>

      {/* Garis tipis di bawah navbar, khas Apple */}
      <div className="h-px bg-black/10" />

      {/* Menu mobile */}
      {open && (
        <ul className="border-b border-black/10 bg-white/90 px-6 py-3 backdrop-blur-xl md:hidden">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block py-2.5 text-[14px] text-[#1d1d1f]"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
