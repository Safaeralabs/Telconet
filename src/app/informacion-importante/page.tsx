import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { Icons } from "@/components/Icons";
import {
  company,
  links,
  infoLinks,
  comparador,
  speedFactors,
  trafficPractices,
  pqr,
  coverageMaps,
  quality,
  docs,
  formatCOP,
} from "@/lib/data";

export const metadata: Metadata = {
  title: "Información importante para usuarios — TecolNet",
  description:
    "Cobertura, comparador de planes y tarifas, factores de limitación de la velocidad, indicadores de calidad, prácticas de gestión de tráfico y PQR. Información al usuario conforme a la SIC.",
};

function Download({ url, label }: { url: string; label: string }) {
  if (!url) {
    return (
      <span
        title="Documento por publicar"
        className="inline-flex items-center gap-2 rounded-xl border border-line px-4 py-2.5 text-sm font-semibold text-faint"
      >
        <Icons.download className="h-4 w-4" />
        {label} · próximamente
      </span>
    );
  }
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 rounded-xl border border-line px-4 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-cyan/50 hover:text-cyan"
    >
      <Icons.download className="h-4 w-4 text-cyan" />
      {label}
    </a>
  );
}

function SectionTitle({ n, children }: { n: number; children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3">
      <span className="grid h-8 w-8 place-items-center rounded-lg border border-cyan/25 bg-cyan/5 font-mono text-sm font-bold text-cyan">
        {n}
      </span>
      <h2 className="font-display text-2xl font-extrabold tracking-tight text-ink sm:text-3xl">
        {children}
      </h2>
    </div>
  );
}

export default function InformacionImportante() {
  return (
    <>
      <Header />
      <main className="relative pt-28">
        <div className="bg-aurora absolute inset-0 h-[40vh]" />

        <div className="relative mx-auto max-w-5xl px-4 pb-24">
          {/* Encabezado */}
          <div className="border-b border-line pb-10">
            <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-cyan">
              <Icons.info className="h-4 w-4" />
              Información al usuario
            </span>
            <h1 className="mt-3 font-display text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
              Información importante para usuarios
            </h1>
            <p className="mt-4 max-w-2xl text-muted">
              Aquí reunimos, en un solo lugar, la información que como usuario
              tienes derecho a conocer antes y durante tu contrato con{" "}
              {company.name}, conforme a lo exigido por la Superintendencia de
              Industria y Comercio (SIC) y la CRC.
            </p>

            {/* Índice */}
            <div className="mt-8 grid gap-2 sm:grid-cols-2">
              {infoLinks.map((l, i) => (
                <a
                  key={l.href}
                  href={`#${l.href.split("#")[1]}`}
                  className="flex items-center gap-3 rounded-xl border border-line bg-surface/40 px-4 py-3 text-sm text-muted transition-colors hover:border-cyan/40 hover:text-ink"
                >
                  <span className="font-mono text-xs text-cyan">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {l.label}
                </a>
              ))}
            </div>
          </div>

          {/* 1. Cobertura */}
          <section id="cobertura" className="scroll-mt-28 border-b border-line py-12">
            <SectionTitle n={1}>Cobertura</SectionTitle>
            <p className="mt-4 max-w-2xl text-muted">
              Consulta las zonas donde {company.name} presta servicio de
              Internet por fibra óptica y radio. Antes de contratar, verifica que
              tu domicilio esté dentro del área cubierta.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {coverageMaps.map((m) => (
                <a
                  key={m.zone}
                  href={m.img}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group overflow-hidden rounded-2xl border border-line bg-surface/40 transition-colors hover:border-cyan/40"
                >
                  <div className="flex aspect-[4/3] items-center justify-center overflow-hidden border-b border-line bg-white/[0.02]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={m.img}
                      alt={`Mapa de cobertura — ${m.zone}`}
                      loading="lazy"
                      className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-[1.04]"
                    />
                  </div>
                  <p className="flex items-center justify-between gap-2 px-4 py-3 text-sm font-semibold text-ink">
                    {m.zone}
                    <Icons.external className="h-3.5 w-3.5 text-faint transition-colors group-hover:text-cyan" />
                  </p>
                </a>
              ))}
            </div>
            <p className="mt-4 text-xs text-faint">
              Toca un mapa para ampliarlo. El área sombreada indica la zona
              cubierta por nuestra red de fibra óptica y radio.
            </p>
            <a
              href={`https://wa.me/${company.whatsapp}?text=${encodeURIComponent(
                "Hola TecolNet, quiero verificar si tienen cobertura en mi dirección."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-glow mt-5 inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-bold text-white"
            >
              <Icons.map className="h-4 w-4" />
              Verificar cobertura en mi dirección
            </a>
          </section>

          {/* 2. Comparador de planes y tarifas */}
          <section id="comparador" className="scroll-mt-28 border-b border-line py-12">
            <SectionTitle n={2}>Comparador de planes y tarifas</SectionTitle>
            <p className="mt-4 max-w-2xl text-muted">
              Tarifas mensuales vigentes de nuestros planes residenciales y
              empresariales. Los valores incluyen IVA y pueden actualizarse; la
              tarifa aplicable es la vigente al momento de la contratación.
            </p>

            <h3 className="mt-8 font-display text-lg font-bold text-ink">
              Planes residenciales — Internet hogar
            </h3>
            <div className="mt-3 overflow-x-auto rounded-2xl border border-line">
              <table className="w-full min-w-[520px] text-left text-sm">
                <thead className="bg-white/[0.03] text-xs uppercase tracking-wide text-faint">
                  <tr>
                    <th className="px-4 py-3 font-semibold">Plan</th>
                    <th className="px-4 py-3 font-semibold">Tecnología</th>
                    <th className="px-4 py-3 font-semibold">Velocidad</th>
                    <th className="px-4 py-3 text-right font-semibold">
                      Precio mensual
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-line">
                  {comparador.residencial.map((p) => (
                    <tr key={p.name} className="text-muted">
                      <td className="px-4 py-3 font-semibold text-ink">
                        {p.name}
                      </td>
                      <td className="px-4 py-3">{p.tech}</td>
                      <td className="px-4 py-3 font-mono text-cyan">{p.speed}</td>
                      <td className="px-4 py-3 text-right font-mono font-bold text-ink">
                        {formatCOP(p.price)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h3 className="mt-8 font-display text-lg font-bold text-ink">
              Planes empresariales / corporativos
            </h3>
            <div className="mt-3 overflow-x-auto rounded-2xl border border-line">
              <table className="w-full min-w-[640px] text-left text-sm">
                <thead className="bg-white/[0.03] text-xs uppercase tracking-wide text-faint">
                  <tr>
                    <th className="px-4 py-3 font-semibold">Plan</th>
                    <th className="px-4 py-3 font-semibold">Velocidad</th>
                    <th className="px-4 py-3 text-right font-semibold">
                      Precio mensual
                    </th>
                    <th className="px-4 py-3 font-semibold">Beneficios</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-line">
                  {comparador.empresarial.map((p) => (
                    <tr key={p.name} className="text-muted">
                      <td className="px-4 py-3 font-semibold text-ink">
                        {p.name}
                      </td>
                      <td className="px-4 py-3 font-mono text-cyan">{p.speed}</td>
                      <td className="px-4 py-3 text-right font-mono font-bold text-ink">
                        {formatCOP(p.price)}
                      </td>
                      <td className="px-4 py-3">{p.beneficios}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* 3. Factores de limitación de la velocidad */}
          <section
            id="factores-velocidad"
            className="scroll-mt-28 border-b border-line py-12"
          >
            <SectionTitle n={3}>
              Factores de limitación de la velocidad de Internet
            </SectionTitle>
            <p className="mt-4 max-w-2xl text-muted">
              La velocidad de tu conexión puede verse afectada por factores
              propios de la red (que gestionamos) y por factores externos (fuera
              de nuestro control):
            </p>

            <div className="mt-6 grid gap-5 md:grid-cols-2">
              <div className="rounded-2xl border border-line bg-surface/40 p-6">
                <h3 className="font-display text-base font-bold text-ink">
                  Factores internos
                </h3>
                <p className="mt-1 text-xs text-faint">
                  Controlados por {company.name}
                </p>
                <ul className="mt-4 space-y-3">
                  {speedFactors.internos.map((f) => (
                    <li key={f} className="flex gap-2.5 text-sm text-muted">
                      <Icons.check className="mt-0.5 h-4 w-4 shrink-0 text-cyan" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl border border-line bg-surface/40 p-6">
                <h3 className="font-display text-base font-bold text-ink">
                  Factores externos
                </h3>
                <p className="mt-1 text-xs text-faint">
                  Fuera del control del operador
                </p>
                <ul className="mt-4 space-y-3">
                  {speedFactors.externos.map((f) => (
                    <li key={f} className="flex gap-2.5 text-sm text-muted">
                      <Icons.bolt className="mt-0.5 h-4 w-4 shrink-0 text-faint" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* 4. Indicadores de calidad del servicio */}
          <section
            id="indicadores-calidad"
            className="scroll-mt-28 border-b border-line py-12"
          >
            <SectionTitle n={4}>
              Indicadores de calidad del servicio de Internet
            </SectionTitle>
            <p className="mt-4 max-w-2xl text-muted">
              Publicamos y actualizamos mensualmente el desempeño real de la red
              según la metodología RPU: velocidad de descarga, velocidad de
              carga, disponibilidad y latencia.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {quality.items.map((it) => {
                const meets = it.value >= it.target;
                return (
                  <div
                    key={it.label}
                    className="rounded-2xl border border-line bg-surface/40 p-5"
                  >
                    <span className="font-display text-3xl font-extrabold text-ink">
                      {it.value}%
                    </span>
                    <p className="mt-1 text-sm text-muted">{it.label}</p>
                    <p
                      className={`mt-2 text-xs font-semibold ${
                        meets ? "text-cyan" : "text-faint"
                      }`}
                    >
                      Meta ≥ {it.target}%
                    </p>
                  </div>
                );
              })}
            </div>

            <p className="mt-4 text-xs text-faint">{quality.note}</p>
            <div className="mt-5">
              <Download url={docs.indicadores} label="Descargar reporte mensual" />
            </div>
          </section>

          {/* 5. Prácticas de gestión de tráfico */}
          <section
            id="gestion-trafico"
            className="scroll-mt-28 border-b border-line py-12"
          >
            <SectionTitle n={5}>Prácticas de gestión de tráfico</SectionTitle>
            <p className="mt-4 max-w-2xl text-muted">
              Estas son las medidas técnicas de gestión de tráfico que aplica{" "}
              {company.name} para preservar la calidad, la seguridad y el uso
              equitativo de la red:
            </p>
            <ul className="mt-6 space-y-3">
              {trafficPractices.map((t) => (
                <li
                  key={t}
                  className="flex gap-3 rounded-xl border border-line bg-surface/40 p-4 text-sm text-muted"
                >
                  <Icons.shield className="mt-0.5 h-5 w-5 shrink-0 text-cyan" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
            <div className="mt-5">
              <Download
                url={docs.gestionTrafico}
                label="Descargar documento completo"
              />
            </div>
          </section>

          {/* 6. PQR */}
          <section id="pqr" className="scroll-mt-28 py-12">
            <SectionTitle n={6}>
              Peticiones, Quejas y Reclamos (PQR)
            </SectionTitle>

            <div className="mt-6 rounded-2xl border border-cyan/20 bg-cyan/[0.04] p-6">
              <h3 className="font-display text-base font-bold text-ink">
                Tu derecho a presentar PQR
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {pqr.derecho}
              </p>
            </div>

            <h3 className="mt-8 font-display text-lg font-bold text-ink">
              Procedimiento
            </h3>
            <ol className="mt-4 space-y-3">
              {pqr.procedimiento.map((step, i) => (
                <li key={step} className="flex gap-3 text-sm text-muted">
                  <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full border border-cyan/30 bg-cyan/5 font-mono text-xs font-bold text-cyan">
                    {i + 1}
                  </span>
                  <span className="pt-0.5">{step}</span>
                </li>
              ))}
            </ol>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={links.pqrsf}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-glow inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-bold text-white"
              >
                <Icons.external className="h-4 w-4" />
                Radicar PQR
              </a>
              <Download url={docs.pqr} label="Descargar procedimiento (PDF)" />
            </div>
          </section>
        </div>
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
