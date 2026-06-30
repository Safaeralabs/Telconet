import { company, navLinks } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-line bg-bg-2/60">
      <div className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          {/* Brand */}
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo-tecolnet-full.png"
              alt="TecolNet — Conectamos tu mundo"
              width={1085}
              height={258}
              className="h-12 w-auto"
            />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted">
              Internet de fibra rápido y confiable para hogares y empresas.{" "}
              {company.mission} desde {company.since}.
            </p>
          </div>

          {/* Nav */}
          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-widest text-faint">
              Navegación
            </h4>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-muted transition-colors hover:text-cyan"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-widest text-faint">
              Información
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm text-muted">
              <li><a href="#" className="transition-colors hover:text-cyan">PQRSF</a></li>
              <li><a href="#" className="transition-colors hover:text-cyan">Contrato y condiciones</a></li>
              <li><a href="#" className="transition-colors hover:text-cyan">Gestión de tráfico</a></li>
              <li><a href="#" className="transition-colors hover:text-cyan">Pagar factura</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-widest text-faint">
              Contacto
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-muted">
              <li>{company.address}</li>
              <li>
                <a href={`tel:${company.phone}`} className="transition-colors hover:text-cyan">
                  {company.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${company.email}`} className="transition-colors hover:text-cyan">
                  {company.email}
                </a>
              </li>
            </ul>
            <div className="mt-5 flex flex-wrap gap-2 text-xs text-faint">
              {["MinTIC", "CRC", "SIC"].map((r) => (
                <span key={r} className="rounded-md border border-line px-2.5 py-1">
                  {r}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="divider-line mt-12" />
        <div className="mt-6 flex flex-col items-center justify-between gap-4 text-xs text-faint sm:flex-row">
          <p>
            © {year} {company.legal}. Todos los derechos reservados.
          </p>
          <p>Hecho con fibra óptica en La Guajira 🇨🇴</p>
        </div>
      </div>
    </footer>
  );
}
