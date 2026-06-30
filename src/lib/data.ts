// Datos centralizados del sitio. Edita aquí precios, velocidades y textos.
// NOTA: las velocidades en Megas son estimaciones — confirmar con el cliente.

export const company = {
  name: "TecolNet",
  legal: "Tecol Networks SAS",
  tagline: "Conectamos tu mundo",
  mission: "Cerrando brechas, construyendo futuro",
  pitch: "Internet rápido y confiable desde La Guajira para Colombia y el mundo",
  vision:
    "Para 2030, ser la empresa líder de telecomunicaciones en La Guajira, con innovación tecnológica, responsabilidad social y sostenibilidad ambiental.",
  since: 2008,
  phone: "3104137651",
  whatsapp: "573104137651",
  email: "contacto@tecolnetworks.com",
  address: "Carrera 5 No. 3A-07, Riohacha · La Guajira",
};

// Enlaces externos oficiales (portal de clientes, pagos y páginas legales).
export const links = {
  portal:
    "https://clientes.portalinternet.app/accounts/login/?empresa=tecolnet-sas",
  pagar: "https://clientes.portalinternet.app/saldo/tecolnet-sas/",
  instalacion:
    "https://clientes.portalinternet.app/solicitar-instalacion/tecolnet-sas/",
  pqrsf: "https://tecolnet.com/pqr/",
  privacidad: "https://tecolnet.com/politica-de-privacidad/",
  terminos: "https://tecolnet.com/118-2/",
  gestionTrafico: "https://tecolnet.com/practicas-de-gestion-de-trafico-2/",
  indicadores: "https://tecolnet.com/indicadores-de-calidad/",
  cobertura: "https://tecolnet.com/cobertura/",
  speedtest: "https://fast.com/es/",
};

// Valores corporativos (de tecolnet.com/nosotros).
export const values = [
  "Innovación tecnológica",
  "Compromiso social",
  "Sostenibilidad",
  "Calidad y confiabilidad",
  "Inclusión y accesibilidad",
  "Transparencia y ética",
  "Cercanía con el cliente",
];

// Indicadores de calidad reportados (metodología RPU).
export const quality = {
  note: "Medición según metodología RPU · Actualizado jul. 2025",
  url: "https://tecolnet.com/indicadores-de-calidad/",
  items: [
    { label: "Velocidad de descarga", value: 95, target: 90 },
    { label: "Velocidad de subida", value: 92, target: 85 },
    { label: "Disponibilidad del servicio", value: 99, target: 98 },
    { label: "Latencia", value: 78, target: 80 },
  ],
};

export const stats = [
  { value: 17, suffix: "+", label: "Años conectando La Guajira" },
  { value: 99.6, suffix: "%", label: "Disponibilidad garantizada" },
  { value: 7, suffix: "/7", label: "Soporte técnico real" },
  { value: 100, suffix: "%", label: "Fibra hasta tu hogar" },
];

export type Plan = {
  name: string;
  price: number;
  speed: number;
  featured?: boolean;
  badge?: string;
  features: string[];
};

export const homePlans: Plan[] = [
  {
    name: "Hogar Básico",
    price: 50000,
    speed: 100,
    features: [
      "Ideal para navegar y redes sociales",
      "Router WiFi incluido",
      "Soporte 7 días a la semana",
      "Instalación con asesoría personalizada",
    ],
  },
  {
    name: "Hogar Avanzado",
    price: 75000,
    speed: 250,
    featured: true,
    badge: "Más elegido",
    features: [
      "Streaming en HD y video llamadas estables",
      "Router WiFi de alto alcance incluido",
      "Soporte prioritario 7 días",
      "Conexión estable para varios dispositivos",
    ],
  },
  {
    name: "Hogar Premium",
    price: 100000,
    speed: 500,
    features: [
      "Gaming y 4K sin interrupciones",
      "Router WiFi premium incluido",
      "Soporte preferente 7 días",
      "Máximo rendimiento para toda la familia",
    ],
  },
];

export const homePlansExtra: Plan[] = [
  {
    name: "Plan Full",
    price: 100000,
    speed: 600,
    features: ["Alta velocidad para hogares conectados", "Router incluido"],
  },
  {
    name: "Plan Pro",
    price: 130000,
    speed: 900,
    features: ["Velocidad máxima tipo fibra pura", "Router premium incluido"],
  },
];

export const businessPlans: Plan[] = [
  {
    name: "Empresarial",
    price: 178500,
    speed: 300,
    features: [
      "Canal con prioridad empresarial",
      "Atención técnica preferente",
      "IP fija incluida",
      "Comunicación en tiempo real",
    ],
  },
  {
    name: "Empresarial Plus",
    price: 275000,
    speed: 600,
    featured: true,
    badge: "Recomendado",
    features: [
      "Mayor ancho de banda dedicado",
      "Escalamiento técnico prioritario",
      "IP fija y soporte 24/7",
      "SLA con disponibilidad 99.6%",
    ],
  },
  {
    name: "Internet Dedicado",
    price: 0,
    speed: 0,
    badge: "A medida",
    features: [
      "Ancho de banda 100% dedicado",
      "Disponibilidad garantizada 99.6%",
      "Soporte premium 24/7",
      "Diseñado para tu operación",
    ],
  },
];

export const features = [
  {
    title: "Fibra hasta tu hogar",
    desc: "Infraestructura de fibra óptica para una conexión estable, de baja latencia y lista para el futuro.",
    icon: "fiber",
  },
  {
    title: "Soporte 7 días reales",
    desc: "Un equipo local que conoce La Guajira y responde rápido, sin call centers eternos.",
    icon: "support",
  },
  {
    title: "Router WiFi incluido",
    desc: "Todos los planes incluyen equipo WiFi optimizado para cubrir cada rincón de tu casa.",
    icon: "wifi",
  },
  {
    title: "Instalación rápida",
    desc: "Agenda y conéctate pronto, con asesoría personalizada según tu dirección y necesidad.",
    icon: "bolt",
  },
  {
    title: "Cobertura regional",
    desc: "Llegamos donde otros no llegan: cerrando brechas de conectividad en zonas remotas.",
    icon: "map",
  },
  {
    title: "Para empresas también",
    desc: "Internet dedicado, IP fija y SLA con disponibilidad del 99.6% para tu operación.",
    icon: "building",
  },
];

export const testimonials = [
  {
    quote:
      "Llevamos años con TecolNet y nunca nos deja sin internet. El soporte responde de verdad, son de aquí mismo.",
    author: "María C.",
    role: "Cliente Hogar · Riohacha",
  },
  {
    quote:
      "Migramos nuestra oficina al plan empresarial y la diferencia fue inmediata. Conexión estable todo el día.",
    author: "Andrés P.",
    role: "Gerente · Comercio local",
  },
  {
    quote:
      "Vivo en una zona alejada y son los únicos que me dieron buena señal. Instalación rápida y clara.",
    author: "Luisa G.",
    role: "Cliente Hogar · La Guajira",
  },
];

export const lifestyle = [
  {
    src: "/photos/familia-streaming.webp",
    tag: "Entretenimiento",
    title: "Streaming sin cortes",
    desc: "Series, música y juegos en varias pantallas a la vez, sin buffering.",
  },
  {
    src: "/photos/videollamadas.webp",
    tag: "Familia",
    title: "Más cerca de los tuyos",
    desc: "Videollamadas nítidas y estables para no perderte ningún momento.",
  },
  {
    src: "/photos/empresas.webp",
    tag: "Trabajo",
    title: "Teletrabajo sin límites",
    desc: "Reuniones, nube y herramientas online con la velocidad que tu día exige.",
  },
  {
    src: "/photos/estudio-casa.webp",
    tag: "Educación",
    title: "Estudio en casa",
    desc: "Clases y tareas en línea para toda la familia, al mismo tiempo.",
  },
];

export const coverageZones = [
  "Riohacha",
  "Maicao",
  "Manaure",
  "Uribia",
  "Dibulla",
  "Albania",
  "Hatonuevo",
  "Barrancas",
];

export const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Planes", href: "#planes" },
  { label: "Empresas", href: "#empresas" },
  { label: "Cobertura", href: "#cobertura" },
  { label: "Velocidad", href: "#velocidad" },
  { label: "Nosotros", href: "#nosotros" },
];

export function formatCOP(value: number) {
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    maximumFractionDigits: 0,
  }).format(value);
}
