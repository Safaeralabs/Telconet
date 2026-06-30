import { features, company, values } from "@/lib/data";
import { Icons } from "./Icons";
import Reveal from "./Reveal";

export default function Features() {
  return (
    <section id="nosotros" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid items-end gap-6 lg:grid-cols-[1fr_auto]">
          <div>
            <span className="text-sm font-semibold uppercase tracking-widest text-cyan">
              Por qué TecolNet
            </span>
            <h2 className="mt-3 max-w-2xl font-display text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
              Tecnología de punta con{" "}
              <span className="text-gradient">gente de aquí</span>
            </h2>
          </div>
          <p className="max-w-sm text-muted">
            Más de {new Date().getFullYear() - 2008} años conectando La Guajira.
            Una red diseñada para llevar internet estable donde realmente importa.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => {
            const Icon = Icons[f.icon] ?? Icons.fiber;
            return (
              <Reveal key={f.title} delay={(i % 3) * 0.08}>
                <div className="group relative h-full overflow-hidden rounded-3xl border border-line bg-surface/40 p-7 transition-colors hover:border-cyan/30">
                  <div className="animate-shimmer pointer-events-none absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100" />
                  <div className="relative">
                    <div className="grid h-12 w-12 place-items-center rounded-2xl border border-cyan/20 bg-cyan/5 text-cyan">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-5 font-display text-lg font-bold text-ink">
                      {f.title}
                    </h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-muted">
                      {f.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Visión + valores (de tecolnet.com/nosotros) */}
        <Reveal>
          <div className="mt-10 rounded-3xl border border-line bg-surface/30 p-7 sm:p-9">
            <div className="grid gap-6 lg:grid-cols-[auto_1fr] lg:items-center lg:gap-10">
              <div className="max-w-xl">
                <h3 className="font-display text-sm font-bold uppercase tracking-widest text-cyan">
                  Nuestra visión
                </h3>
                <p className="mt-2 text-lg leading-relaxed text-ink">
                  {company.vision}
                </p>
              </div>
              <div className="flex flex-wrap gap-2 lg:justify-end">
                {values.map((v) => (
                  <span
                    key={v}
                    className="rounded-full border border-line bg-white/[0.02] px-3.5 py-1.5 text-xs font-medium text-muted"
                  >
                    {v}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
