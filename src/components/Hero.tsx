"use client";

import { motion } from "motion/react";
import NetworkCanvas from "./NetworkCanvas";
import { Icons } from "./Icons";
import { company } from "@/lib/data";

const fade = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export default function Hero() {
  const wa = `https://wa.me/${company.whatsapp}`;

  return (
    <section
      id="inicio"
      className="bg-aurora relative flex min-h-screen items-center overflow-hidden pt-28 pb-16"
    >
      <NetworkCanvas />
      <div className="bg-grid absolute inset-0" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-bg to-transparent" />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-12 px-4 lg:grid-cols-[1.1fr_0.9fr]">
        {/* Left copy */}
        <div>
          <motion.div
            custom={0}
            variants={fade}
            initial="hidden"
            animate="show"
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan/25 bg-cyan/5 px-3.5 py-1.5 text-xs font-semibold text-cyan-soft"
          >
            <span className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-cyan" />
            Fibra óptica · Desde {company.since} en La Guajira
          </motion.div>

          <motion.h1
            custom={1}
            variants={fade}
            initial="hidden"
            animate="show"
            className="font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl"
          >
            Internet rápido y
            <br />
            confiable desde{" "}
            <span className="text-gradient">La Guajira</span>
            <br />
            para el mundo
          </motion.h1>

          <motion.p
            custom={2}
            variants={fade}
            initial="hidden"
            animate="show"
            className="mt-6 max-w-xl text-lg leading-relaxed text-muted"
          >
            Conectamos hogares y empresas con tecnología de punta. Conexión
            estable, soporte real 7 días a la semana y cobertura donde otros no
            llegan. <span className="text-ink">Cerrando brechas, construyendo futuro.</span>
          </motion.p>

          <motion.div
            custom={3}
            variants={fade}
            initial="hidden"
            animate="show"
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <a
              href="#planes"
              className="btn-glow group flex items-center gap-2 rounded-xl px-6 py-3.5 text-sm font-bold text-white"
            >
              Ver planes
              <Icons.arrow className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#velocidad"
              className="flex items-center gap-2 rounded-xl border border-line bg-white/5 px-6 py-3.5 text-sm font-semibold text-ink backdrop-blur transition-colors hover:border-cyan/40"
            >
              <Icons.gauge className="h-4 w-4 text-cyan" />
              Test de velocidad
            </a>
          </motion.div>

          <motion.div
            custom={4}
            variants={fade}
            initial="hidden"
            animate="show"
            className="mt-10 flex items-center gap-6 text-sm text-faint"
          >
            <span className="flex items-center gap-2">
              <Icons.check className="h-4 w-4 text-cyan" /> Router WiFi incluido
            </span>
            <span className="flex items-center gap-2">
              <Icons.check className="h-4 w-4 text-cyan" /> Instalación rápida
            </span>
          </motion.div>
        </div>

        {/* Right speed visual card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div className="glass-strong glow-ring animate-floaty rounded-3xl p-7">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-widest text-faint">
                Velocidad de bajada
              </span>
              <span className="flex items-center gap-1.5 rounded-full bg-emerald-400/10 px-2.5 py-1 text-xs font-semibold text-emerald-300">
                <span className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-emerald-400" />
                En línea
              </span>
            </div>

            <div className="mt-6 flex items-end gap-2">
              <span className="font-mono text-6xl font-bold tabular-nums text-ink">
                500
              </span>
              <span className="mb-2 font-mono text-xl text-cyan">Mbps</span>
            </div>

            {/* mini bar chart */}
            <div className="mt-6 flex h-20 items-end gap-1.5">
              {[40, 65, 50, 80, 72, 95, 88, 100, 92, 78, 85, 70].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-t bg-gradient-to-t from-brand/40 to-cyan"
                  style={{ height: `${h}%`, opacity: 0.55 + (h / 100) * 0.45 }}
                />
              ))}
            </div>

            <div className="mt-6 grid grid-cols-3 gap-3 border-t border-line pt-5 text-center">
              <div>
                <p className="font-mono text-lg font-bold text-ink">8</p>
                <p className="text-xs text-faint">ms ping</p>
              </div>
              <div>
                <p className="font-mono text-lg font-bold text-ink">99.6%</p>
                <p className="text-xs text-faint">uptime</p>
              </div>
              <div>
                <p className="font-mono text-lg font-bold text-ink">24/7</p>
                <p className="text-xs text-faint">red activa</p>
              </div>
            </div>
          </div>

          {/* floating mini badge */}
          <div
            className="glass absolute -left-6 -bottom-6 hidden items-center gap-2 rounded-2xl px-4 py-3 sm:flex"
            style={{ animation: "floaty 6s ease-in-out infinite", animationDelay: "1.5s" }}
          >
            <a
              href={wa}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-semibold"
            >
              <Icons.whatsapp className="h-5 w-5 text-[#22d3ee]" />
              Te asesoramos ya
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
