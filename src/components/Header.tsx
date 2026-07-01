"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { navLinks, company, links, infoLinks } from "@/lib/data";
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
          <Link href="/" className="flex items-center gap-2.5">
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
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 xl:flex">
            {navLinks
              .filter((l) =>
                ["/#planes", "/#cobertura", "/#nosotros"].includes(l.href)
              )
              .map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="rounded-lg px-3 py-2 text-sm font-medium text-muted transition-colors hover:text-ink"
                >
                  {l.label}
                </a>
              ))}

            {/* Botón obligatorio SIC: "Información importante para usuarios" */}
            <div className="group relative">
              <button className="flex items-center gap-1.5 rounded-lg border border-cyan/30 bg-cyan/5 px-3 py-2 text-sm font-semibold text-cyan-soft transition-colors hover:bg-cyan/10 group-focus-within:bg-cyan/10">
                <Icons.info className="h-4 w-4" />
                Información importante para usuarios
                <Icons.chevron className="h-3.5 w-3.5 transition-transform group-hover:rotate-180 group-focus-within:rotate-180" />
              </button>
              <div className="invisible absolute left-0 top-full z-50 mt-2 w-80 translate-y-1 rounded-2xl border border-line bg-surface/95 p-2 opacity-0 shadow-xl backdrop-blur-lg transition-all group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                {infoLinks.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    className="block rounded-lg px-3 py-2.5 text-sm leading-snug text-muted transition-colors hover:bg-white/5 hover:text-cyan"
                  >
                    {l.label}
                  </a>
                ))}
              </div>
            </div>
          </nav>

          {/* CTA */}
          <div className="hidden items-center gap-2 xl:flex">
            <a
              href={links.pagar}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 rounded-xl px-3 py-2 text-sm font-semibold text-muted transition-colors hover:text-cyan"
            >
              <Icons.card className="h-4 w-4" />
              Pagar
            </a>
            <a
              href={links.portal}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 rounded-xl border border-line px-3 py-2 text-sm font-semibold text-ink transition-colors hover:border-cyan/50 hover:text-cyan"
            >
              <Icons.user className="h-4 w-4" />
              Portal
            </a>
            <span className="mx-0.5 h-5 w-px bg-line" />
            <a
              href={wa}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="grid h-9 w-9 place-items-center rounded-xl border border-line text-[#22d3ee] transition-colors hover:border-cyan/50"
            >
              <Icons.whatsapp className="h-4 w-4" />
            </a>
            <Link
              href="/#planes"
              className="btn-glow rounded-xl px-4 py-2 text-sm font-bold text-white"
            >
              Contratar
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            aria-label="Menú"
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-xl border border-line xl:hidden"
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
          <div className="glass-strong mt-2 max-h-[80vh] overflow-y-auto rounded-2xl p-4 xl:hidden">
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

              {/* Información importante para usuarios (SIC) */}
              <div className="mt-2 rounded-xl border border-cyan/25 bg-cyan/5 p-2">
                <p className="flex items-center gap-1.5 px-2 py-1.5 text-xs font-bold uppercase tracking-wide text-cyan-soft">
                  <Icons.info className="h-4 w-4" />
                  Información importante para usuarios
                </p>
                {infoLinks.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-3 py-2.5 text-sm leading-snug text-muted transition-colors hover:bg-white/5 hover:text-cyan"
                  >
                    {l.label}
                  </a>
                ))}
              </div>

              <div className="mt-3 flex gap-2">
                <a
                  href={links.portal}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-line px-3 py-2.5 text-sm font-semibold"
                >
                  <Icons.user className="h-4 w-4 text-cyan" />
                  Portal clientes
                </a>
                <a
                  href={links.pagar}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-line px-3 py-2.5 text-sm font-semibold"
                >
                  <Icons.card className="h-4 w-4 text-cyan" />
                  Pagar factura
                </a>
              </div>
              <div className="mt-2 flex gap-2">
                <a
                  href={wa}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-line px-3 py-2.5 text-sm font-semibold"
                >
                  <Icons.whatsapp className="h-4 w-4 text-[#22d3ee]" />
                  WhatsApp
                </a>
                <Link
                  href="/#planes"
                  onClick={() => setOpen(false)}
                  className="btn-glow flex-1 rounded-xl px-3 py-2.5 text-center text-sm font-bold text-white"
                >
                  Contratar
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
