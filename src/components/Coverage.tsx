"use client";

import { motion } from "motion/react";
import { coverageZones, company } from "@/lib/data";
import { Icons } from "./Icons";

const nodes = [
  { x: 50, y: 38, main: true },
  { x: 68, y: 30 },
  { x: 36, y: 52 },
  { x: 60, y: 58 },
  { x: 78, y: 48 },
  { x: 44, y: 28 },
  { x: 30, y: 40 },
  { x: 70, y: 66 },
];

export default function Coverage() {
  const wa = `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(
    "Hola TecolNet, quiero saber si tienen cobertura en mi dirección."
  )}`;

  return (
    <section id="cobertura" className="relative overflow-hidden py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 lg:grid-cols-2">
        {/* Copy */}
        <div>
          <span className="text-sm font-semibold uppercase tracking-widest text-cyan">
            Cobertura
          </span>
          <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
            Llegamos donde otros{" "}
            <span className="text-gradient">no llegan</span>
          </h2>
          <p className="mt-4 max-w-lg text-muted">
            Nuestra red cubre Riohacha y se expande por toda La Guajira, cerrando
            brechas de conectividad en zonas urbanas y rurales.
          </p>

          <div className="mt-7 flex flex-wrap gap-2.5">
            {coverageZones.map((z) => (
              <span
                key={z}
                className="flex items-center gap-1.5 rounded-full border border-line bg-surface/50 px-3.5 py-1.5 text-sm text-ink"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-cyan" />
                {z}
              </span>
            ))}
          </div>

          <a
            href={wa}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-glow mt-9 inline-flex items-center gap-2 rounded-xl px-6 py-3.5 text-sm font-bold text-white"
          >
            <Icons.map className="h-4 w-4" />
            ¿Hay cobertura en mi dirección?
          </a>
        </div>

        {/* Stylized radar map */}
        <div className="relative mx-auto aspect-square w-full max-w-md">
          <div className="absolute inset-0 rounded-full border border-line" />
          <div className="absolute inset-[12%] rounded-full border border-line/70" />
          <div className="absolute inset-[26%] rounded-full border border-line/50" />
          <div className="absolute inset-[40%] rounded-full border border-line/40" />

          {/* radar sweep */}
          <motion.div
            className="absolute inset-0 rounded-full"
            style={{
              background:
                "conic-gradient(from 0deg, rgba(34,211,238,0.22), transparent 35%)",
              maskImage: "radial-gradient(circle, #000 0%, #000 70%, transparent 71%)",
              WebkitMaskImage:
                "radial-gradient(circle, #000 0%, #000 70%, transparent 71%)",
            }}
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          />

          {/* nodes */}
          {nodes.map((n, i) => (
            <div
              key={i}
              className="absolute"
              style={{ left: `${n.x}%`, top: `${n.y}%`, transform: "translate(-50%,-50%)" }}
            >
              {n.main ? (
                <span className="relative grid h-5 w-5 place-items-center">
                  <span className="absolute h-full w-full animate-ping rounded-full bg-cyan/50" />
                  <span className="relative h-3 w-3 rounded-full bg-cyan shadow-[0_0_12px_rgba(34,211,238,0.9)]" />
                </span>
              ) : (
                <span
                  className="block h-2.5 w-2.5 animate-pulse-dot rounded-full bg-brand-bright shadow-[0_0_8px_rgba(59,130,246,0.8)]"
                  style={{ animationDelay: `${i * 0.3}s` }}
                />
              )}
            </div>
          ))}

          <div className="glass absolute bottom-2 left-1/2 -translate-x-1/2 rounded-xl px-4 py-2 text-center">
            <p className="font-mono text-sm font-bold text-cyan">La Guajira</p>
            <p className="text-xs text-faint">Red TecolNet activa 24/7</p>
          </div>
        </div>
      </div>
    </section>
  );
}
