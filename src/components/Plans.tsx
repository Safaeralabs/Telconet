"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  homePlans,
  homeRadioPlans,
  businessPlans,
  formatCOP,
  company,
  type Plan,
} from "@/lib/data";
import { Icons } from "./Icons";

function PlanCard({ plan, index }: { plan: Plan; index: number }) {
  const wa = `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(
    `Hola TecolNet, quiero contratar el plan ${plan.name}.`
  )}`;
  const isCustom = plan.price === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className={`group relative flex flex-col rounded-3xl p-7 transition-transform duration-300 hover:-translate-y-1.5 ${
        plan.featured
          ? "glass-strong glow-ring"
          : "glass border border-line"
      }`}
    >
      {plan.featured && (
        <div className="absolute inset-x-0 -top-px mx-auto h-px w-2/3 bg-gradient-to-r from-transparent via-cyan to-transparent" />
      )}
      {plan.badge && (
        <span
          className={`absolute -top-3 right-6 rounded-full px-3 py-1 text-xs font-bold ${
            plan.featured
              ? "bg-cyan text-bg"
              : "border border-line bg-surface text-muted"
          }`}
        >
          {plan.badge}
        </span>
      )}

      <h3 className="font-display text-lg font-bold text-ink">{plan.name}</h3>

      <div className="mt-4 flex items-baseline gap-1">
        {isCustom ? (
          <span className="font-display text-3xl font-extrabold text-ink">
            A tu medida
          </span>
        ) : (
          <>
            <span className="font-display text-4xl font-extrabold text-ink">
              {formatCOP(plan.price)}
            </span>
            <span className="text-sm text-faint">/mes</span>
          </>
        )}
      </div>

      {plan.speed > 0 && (
        <div className="mt-5 flex items-center gap-2 rounded-xl border border-line bg-white/[0.03] px-4 py-3">
          <Icons.bolt className="h-5 w-5 text-cyan" />
          <span className="font-mono text-2xl font-bold text-ink">
            {plan.speed}
          </span>
          <span className="font-mono text-sm text-muted">Megas</span>
        </div>
      )}

      <ul className="mt-6 flex-1 space-y-3">
        {plan.features.map((f) => (
          <li key={f} className="flex items-start gap-2.5 text-sm text-muted">
            <Icons.check className="mt-0.5 h-4 w-4 shrink-0 text-cyan" />
            <span>{f}</span>
          </li>
        ))}
      </ul>

      <a
        href={wa}
        target="_blank"
        rel="noopener noreferrer"
        className={`mt-7 flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-bold transition-all ${
          plan.featured
            ? "btn-glow text-white"
            : "border border-line text-ink hover:border-cyan/50 hover:text-cyan"
        }`}
      >
        {isCustom ? "Solicitar cotización" : "Contratar plan"}
        <Icons.arrow className="h-4 w-4" />
      </a>
    </motion.div>
  );
}

export default function Plans() {
  const [tab, setTab] = useState<"hogar" | "empresa">("hogar");

  return (
    <section id="planes" className="relative py-24">
      <div className="bg-aurora absolute inset-0 opacity-60" />
      <div className="relative mx-auto max-w-7xl px-4">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-cyan">
            Planes
          </span>
          <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
            Elige el internet a tu <span className="text-gradient">medida</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted">
            Sin letra pequeña. Todos los planes incluyen router WiFi, instalación
            con asesoría y soporte 7 días a la semana.
          </p>
        </div>

        {/* Segmented control */}
        <div className="mt-10 flex justify-center">
          <div className="glass inline-flex rounded-2xl p-1.5">
            {(["hogar", "empresa"] as const).map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`relative rounded-xl px-7 py-2.5 text-sm font-bold transition-colors ${
                  tab === t ? "text-bg" : "text-muted hover:text-ink"
                }`}
              >
                {tab === t && (
                  <motion.span
                    layoutId="tab-pill"
                    className="absolute inset-0 rounded-xl bg-cyan"
                    transition={{ type: "spring", stiffness: 400, damping: 32 }}
                  />
                )}
                <span className="relative">
                  {t === "hogar" ? "Hogar" : "Empresa"}
                </span>
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={tab}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35 }}
            className="mt-12"
          >
            <div className="grid gap-6 md:grid-cols-3">
              {(tab === "hogar" ? homePlans : businessPlans).map((p, i) => (
                <PlanCard key={p.name} plan={p} index={i} />
              ))}
            </div>

            {tab === "hogar" && (
              <div className="mt-8">
                <p className="mb-4 text-center text-sm font-semibold text-muted">
                  ¿Sin fibra en tu zona? También llegamos por{" "}
                  <span className="text-cyan">antena / radio</span>:
                </p>
                <div className="grid gap-4 sm:grid-cols-3">
                  {homeRadioPlans.map((p) => (
                    <div
                      key={p.name}
                      className="glass flex items-center justify-between rounded-2xl px-6 py-5"
                    >
                      <div>
                        <p className="font-display font-bold text-ink">
                          {p.name}
                        </p>
                        <p className="text-xs text-faint">Antena / Radio</p>
                      </div>
                      <div className="text-right">
                        <p className="font-mono text-lg font-bold text-cyan">
                          {p.speed} Megas
                        </p>
                        <p className="text-sm text-faint">
                          {formatCOP(p.price)}/mes
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <p className="mt-8 text-center text-sm text-muted">
              ¿Buscas todos los planes y tarifas vigentes?{" "}
              <a
                href="/informacion-importante#comparador"
                className="font-semibold text-cyan hover:text-cyan-soft"
              >
                Ver comparador completo
              </a>
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
