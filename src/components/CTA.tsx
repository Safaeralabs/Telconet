import { company } from "@/lib/data";
import { Icons } from "./Icons";

export default function CTA() {
  const wa = `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(
    "Hola TecolNet, quiero contratar internet."
  )}`;

  return (
    <section id="contacto" className="relative py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="glass-strong glow-ring relative overflow-hidden rounded-[2.5rem] px-8 py-16 text-center sm:px-12">
          <div className="bg-grid absolute inset-0 opacity-40" />
          <div className="bg-aurora absolute inset-0" />
          <div className="relative">
            <h2 className="mx-auto max-w-3xl font-display text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              Conéctate a la fibra que{" "}
              <span className="text-gradient">sí cumple</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-muted">
              Habla con nuestro equipo local y deja que te asesoremos para elegir
              el plan ideal para tu hogar o tu empresa.
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
              <a
                href={wa}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-glow flex items-center gap-2 rounded-xl px-7 py-4 text-sm font-bold text-white"
              >
                <Icons.whatsapp className="h-5 w-5" />
                Escríbenos por WhatsApp
              </a>
              <a
                href={`tel:${company.phone}`}
                className="flex items-center gap-2 rounded-xl border border-line bg-white/5 px-7 py-4 text-sm font-semibold text-ink transition-colors hover:border-cyan/40"
              >
                Llamar {company.phone}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
