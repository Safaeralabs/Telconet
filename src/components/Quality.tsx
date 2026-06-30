import { quality } from "@/lib/data";
import { Icons } from "./Icons";
import Reveal from "./Reveal";

export default function Quality() {
  return (
    <section
      id="calidad"
      className="relative border-y border-line bg-bg-2/40 py-20"
    >
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:items-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-cyan">
              <Icons.shield className="h-4 w-4" />
              Indicadores de calidad
            </span>
            <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
              Calidad medida y{" "}
              <span className="text-gradient">transparente</span>
            </h2>
            <p className="mt-4 max-w-md text-muted">
              Reportamos el desempeño real de la red según la metodología RPU,
              sin letra pequeña. Así puedes verificar lo que contratas.
            </p>
            <a
              href={quality.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-cyan transition-colors hover:text-cyan-soft"
            >
              Ver informe completo
              <Icons.external className="h-4 w-4" />
            </a>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2">
            {quality.items.map((it, i) => {
              const meets = it.value >= it.target;
              return (
                <Reveal key={it.label} delay={(i % 2) * 0.08}>
                  <div className="h-full rounded-2xl border border-line bg-surface/40 p-5">
                    <div className="flex items-baseline justify-between gap-2">
                      <span className="font-display text-3xl font-extrabold text-ink">
                        {it.value}%
                      </span>
                      <span
                        className={`text-xs font-semibold ${
                          meets ? "text-cyan" : "text-faint"
                        }`}
                      >
                        Meta ≥ {it.target}%
                      </span>
                    </div>
                    <p className="mt-1 text-sm text-muted">{it.label}</p>
                    <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/5">
                      <div
                        className={`h-full rounded-full ${
                          meets
                            ? "bg-gradient-to-r from-brand to-cyan"
                            : "bg-faint/60"
                        }`}
                        style={{ width: `${it.value}%` }}
                      />
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>

        <p className="mt-8 text-xs text-faint">{quality.note}</p>
      </div>
    </section>
  );
}
