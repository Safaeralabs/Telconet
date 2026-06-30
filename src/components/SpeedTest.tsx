"use client";

import { useRef, useState } from "react";
import { Icons } from "./Icons";

type Phase = "idle" | "running" | "done";

export default function SpeedTest() {
  const [phase, setPhase] = useState<Phase>("idle");
  const [value, setValue] = useState(0);
  const [result, setResult] = useState({ down: 0, up: 0, ping: 0 });
  const raf = useRef(0);

  const MAX = 600;

  function run() {
    if (phase === "running") return;
    setPhase("running");
    setValue(0);
    const target = 480 + Math.random() * 100;
    const start = performance.now();
    const dur = 2600;

    const tick = (now: number) => {
      const p = Math.min((now - start) / dur, 1);
      // ease with some jitter
      const eased = 1 - Math.pow(1 - p, 2.5);
      const jitter = p < 1 ? (Math.random() - 0.5) * 30 : 0;
      setValue(Math.max(0, eased * target + jitter));
      if (p < 1) {
        raf.current = requestAnimationFrame(tick);
      } else {
        setValue(target);
        setResult({
          down: Math.round(target),
          up: Math.round(target * 0.45),
          ping: Math.round(6 + Math.random() * 6),
        });
        setPhase("done");
      }
    };
    raf.current = requestAnimationFrame(tick);
  }

  // gauge geometry (semi-circle)
  const pct = Math.min(value / MAX, 1);
  const angle = -90 + pct * 180;

  return (
    <section id="velocidad" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="glass-strong relative overflow-hidden rounded-[2rem] p-8 sm:p-12">
          <div className="bg-aurora absolute inset-0 opacity-50" />
          <div className="relative grid items-center gap-12 lg:grid-cols-2">
            {/* Copy */}
            <div>
              <span className="text-sm font-semibold uppercase tracking-widest text-cyan">
                Test de velocidad
              </span>
              <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
                Mide tu conexión <span className="text-gradient">ahora mismo</span>
              </h2>
              <p className="mt-4 max-w-md text-muted">
                Comprueba la velocidad real de tu red. Si no estás recibiendo lo
                que mereces, en TecolNet te conectamos a la fibra que sí cumple.
              </p>
              <button
                onClick={run}
                disabled={phase === "running"}
                className="btn-glow mt-8 inline-flex items-center gap-2 rounded-xl px-7 py-3.5 text-sm font-bold text-white disabled:opacity-70"
              >
                <Icons.gauge className="h-5 w-5" />
                {phase === "idle" && "Iniciar prueba"}
                {phase === "running" && "Midiendo…"}
                {phase === "done" && "Repetir prueba"}
              </button>
            </div>

            {/* Gauge */}
            <div className="mx-auto w-full max-w-sm">
              <div className="relative aspect-[2/1] w-full overflow-hidden">
                <svg viewBox="0 0 200 110" className="h-full w-full">
                  <defs>
                    <linearGradient id="gauge" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#1e6bff" />
                      <stop offset="100%" stopColor="#22d3ee" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M 15 100 A 85 85 0 0 1 185 100"
                    fill="none"
                    stroke="rgba(120,160,255,0.12)"
                    strokeWidth="12"
                    strokeLinecap="round"
                  />
                  <path
                    d="M 15 100 A 85 85 0 0 1 185 100"
                    fill="none"
                    stroke="url(#gauge)"
                    strokeWidth="12"
                    strokeLinecap="round"
                    strokeDasharray={267}
                    strokeDashoffset={267 - pct * 267}
                    style={{ transition: "stroke-dashoffset 0.1s linear" }}
                  />
                  {/* needle */}
                  <line
                    x1="100"
                    y1="100"
                    x2="100"
                    y2="32"
                    stroke="#eaf1ff"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    transform={`rotate(${angle} 100 100)`}
                  />
                  <circle cx="100" cy="100" r="5" fill="#eaf1ff" />
                </svg>
              </div>
              <div className="-mt-4 text-center">
                <p className="font-mono text-5xl font-bold tabular-nums text-ink">
                  {value.toFixed(0)}
                </p>
                <p className="font-mono text-sm text-cyan">Mbps</p>
              </div>

              {phase === "done" && (
                <div className="mt-4 grid grid-cols-3 gap-2 text-center">
                  <Metric label="Bajada" value={`${result.down}`} unit="Mbps" />
                  <Metric label="Subida" value={`${result.up}`} unit="Mbps" />
                  <Metric label="Ping" value={`${result.ping}`} unit="ms" />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Metric({
  label,
  value,
  unit,
}: {
  label: string;
  value: string;
  unit: string;
}) {
  return (
    <div className="rounded-xl border border-line bg-white/[0.03] py-3">
      <p className="font-mono text-lg font-bold text-ink">{value}</p>
      <p className="text-xs text-faint">
        {label} · {unit}
      </p>
    </div>
  );
}
