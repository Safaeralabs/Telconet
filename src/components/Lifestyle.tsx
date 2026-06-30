import { lifestyle } from "@/lib/data";
import Reveal from "./Reveal";

// Floating offsets so each card bobs out of sync with the others.
const floatDelays = ["0s", "1.4s", "0.7s", "2.1s"];

export default function Lifestyle() {
  return (
    <section id="experiencia" className="relative overflow-hidden py-24">
      <div className="bg-aurora absolute inset-0" />

      <div className="relative mx-auto max-w-7xl px-4">
        <Reveal>
          <span className="text-sm font-semibold uppercase tracking-widest text-cyan">
            Conectamos tu mundo
          </span>
          <h2 className="mt-3 max-w-2xl font-display text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
            Internet para{" "}
            <span className="text-gradient">cada momento</span> de tu día
          </h2>
          <p className="mt-4 max-w-xl text-muted">
            Una sola conexión que acompaña a toda la familia: trabajar, estudiar,
            ver tus series y estar cerca de quienes quieres.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {lifestyle.map((item, i) => (
            <Reveal
              key={item.title}
              delay={(i % 2) * 0.12}
              className={i % 2 === 1 ? "lg:mt-16" : ""}
            >
              <div
                className="animate-floaty"
                style={{ animationDelay: floatDelays[i % floatDelays.length] }}
              >
                <figure className="group relative overflow-hidden rounded-3xl border border-line bg-surface/40 shadow-lg transition-colors hover:border-cyan/40">
                  <div className="aspect-[16/10] overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={item.src}
                      alt={item.title}
                      width={1100}
                      height={688}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                    />
                  </div>

                  {/* Dark gradient so the caption stays legible over bright photos */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bg via-bg/45 to-transparent" />
                  {/* Subtle inner ring to seat the photo into the dark theme */}
                  <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/5" />

                  <figcaption className="absolute inset-x-0 bottom-0 p-6">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-cyan/25 bg-cyan/10 px-3 py-1 text-xs font-semibold text-cyan-soft backdrop-blur">
                      <span className="h-1.5 w-1.5 rounded-full bg-cyan" />
                      {item.tag}
                    </span>
                    <h3 className="mt-3 font-display text-xl font-bold text-ink">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 max-w-md text-sm leading-relaxed text-muted">
                      {item.desc}
                    </p>
                  </figcaption>
                </figure>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
