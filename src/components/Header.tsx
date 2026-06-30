"use client";

import { useEffect, useState } from "react";
import { navLinks, company } from "@/lib/data";
import { Icons } from "./Icons";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const wa = `https://wa.me/${company.whatsapp}`;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4">
        <div
          className={`flex items-center justify-between rounded-2xl px-4 py-3 transition-all duration-300 ${
            scrolled ? "glass-strong shadow-lg" : "bg-transparent"
          }`}
        >
          {/* Logo */}
          <a href="#inicio" className="flex items-center gap-2.5">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo-tecolnet-mark.png"
              alt="TecolNet"
              width={328}
              height={258}
              className="h-9 w-auto drop-shadow-[0_0_14px_rgba(34,211,238,0.25)]"
            />
            <span className="font-display text-lg font-bold tracking-tight">
              Tecol<span className="text-brand-bright">Net</span>
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 lg:flex">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="rounded-lg px-3.5 py-2 text-sm font-medium text-muted transition-colors hover:text-ink"
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden items-center gap-3 lg:flex">
            <a
              href={wa}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-xl border border-line px-3.5 py-2 text-sm font-semibold text-ink transition-colors hover:border-cyan/50 hover:text-cyan"
            >
              <Icons.whatsapp className="h-4 w-4 text-[#22d3ee]" />
              WhatsApp
            </a>
            <a
              href="#planes"
              className="btn-glow rounded-xl px-4 py-2 text-sm font-bold text-white"
            >
              Contratar
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            aria-label="Menú"
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-xl border border-line lg:hidden"
          >
            <div className="space-y-1.5">
              <span
                className={`block h-0.5 w-5 bg-ink transition-transform ${
                  open ? "translate-y-2 rotate-45" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-5 bg-ink transition-opacity ${
                  open ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-5 bg-ink transition-transform ${
                  open ? "-translate-y-2 -rotate-45" : ""
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="glass-strong mt-2 rounded-2xl p-4 lg:hidden">
            <nav className="flex flex-col">
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-3 text-sm font-medium text-muted transition-colors hover:bg-white/5 hover:text-ink"
                >
                  {l.label}
                </a>
              ))}
              <div className="mt-3 flex gap-2">
                <a
                  href={wa}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-line px-3 py-2.5 text-sm font-semibold"
                >
                  <Icons.whatsapp className="h-4 w-4 text-[#22d3ee]" />
                  WhatsApp
                </a>
                <a
                  href="#planes"
                  onClick={() => setOpen(false)}
                  className="btn-glow flex-1 rounded-xl px-3 py-2.5 text-center text-sm font-bold text-white"
                >
                  Contratar
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
