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
    speed: 150,
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
    speed: 200,
    features: [
      "Gaming y 4K sin interrupciones",
      "Router WiFi premium incluido",
      "Soporte preferente 7 días",
      "Máximo rendimiento para toda la familia",
    ],
  },
];

export const businessPlans: Plan[] = [
  {
    name: "Empresarial",
    price: 250000,
    speed: 200,
    features: [
      "SLA de disponibilidad hasta 99.9%",
      "Soporte técnico 24/7",
      "IP pública fija incluida",
      "Canal con prioridad empresarial",
    ],
  },
  {
    name: "Empresarial Plus",
    price: 320000,
    speed: 300,
    featured: true,
    badge: "Recomendado",
    features: [
      "SLA de disponibilidad hasta 99.9%",
      "Soporte técnico 24/7 y atención prioritaria",
      "IP pública fija incluida",
      "Mayor ancho de banda dedicado",
    ],
  },
  {
    name: "Empresarial Premium",
    price: 400000,
    speed: 400,
    features: [
      "SLA de disponibilidad hasta 99.9%",
      "Soporte técnico 24/7 y atención prioritaria",
      "IP pública fija incluida",
      "Máximo rendimiento para tu operación",
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
  "Tomarrazón",
  "Bañaderos",
  "Villa Martín",
  "Monguí",
  "Camarones",
  "Palomino",
  "Buritaca",
  "Uribia",
  "Manaure",
  "Mayapo",
];

// ─────────────────────────────────────────────────────────────────────────
// "Información importante para usuarios" — contenido exigido por la SIC
// (Resolución 49031 de 2026). Todo centralizado para fácil actualización.
// ─────────────────────────────────────────────────────────────────────────

// Submenú del botón "Información importante para usuarios" (6 segmentos).
export const infoLinks = [
  { label: "Cobertura", href: "/informacion-importante#cobertura" },
  {
    label: "Comparador de planes y tarifas",
    href: "/informacion-importante#comparador",
  },
  {
    label: "Factores de limitación de la velocidad de Internet",
    href: "/informacion-importante#factores-velocidad",
  },
  {
    label: "Indicadores de calidad del servicio de Internet",
    href: "/informacion-importante#indicadores-calidad",
  },
  {
    label: "Prácticas de gestión de tráfico",
    href: "/informacion-importante#gestion-trafico",
  },
  {
    label: "Peticiones, Quejas y Reclamos (PQR)",
    href: "/informacion-importante#pqr",
  },
];

// Comparador de planes y tarifas vigentes (fuente: documento TECOLNET).
// NOTA: verificar contra la tarifa facturada antes de publicar en producción.
export type TarifaRow = {
  name: string;
  tech: string;
  speed: string;
  price: number;
  beneficios?: string;
};

export const comparador: { residencial: TarifaRow[]; empresarial: TarifaRow[] } = {
  residencial: [
    { name: "Plan Básico", tech: "Antena / Radio", speed: "10 Mbps", price: 72000 },
    { name: "Plan Full", tech: "Antena / Radio", speed: "15 Mbps", price: 100000 },
    { name: "Plan Pro", tech: "Antena / Radio", speed: "20 Mbps", price: 130000 },
    { name: "Plan Hogar Básico", tech: "Fibra óptica", speed: "100 Mbps", price: 50000 },
    { name: "Plan Hogar Avanzado", tech: "Fibra óptica", speed: "150 Mbps", price: 75000 },
    { name: "Plan Hogar Premium", tech: "Fibra óptica", speed: "200 Mbps", price: 100000 },
  ],
  empresarial: [
    {
      name: "Empresarial",
      tech: "Fibra óptica",
      speed: "200 Mbps",
      price: 250000,
      beneficios: "SLA hasta 99.9%, soporte 24/7, IP pública fija",
    },
    {
      name: "Empresarial Plus",
      tech: "Fibra óptica",
      speed: "300 Mbps",
      price: 320000,
      beneficios:
        "SLA hasta 99.9%, soporte 24/7, IP pública fija, atención prioritaria",
    },
    {
      name: "Empresarial Premium",
      tech: "Fibra óptica",
      speed: "400 Mbps",
      price: 400000,
      beneficios:
        "SLA hasta 99.9%, soporte 24/7, IP pública fija, atención prioritaria",
    },
  ],
};

// Factores que limitan la velocidad de Internet.
export const speedFactors = {
  internos: [
    "Nivel de ocupación y contención de la red (usuarios conectados simultáneamente).",
    "Capacidad de los enlaces de interconexión y del canal internacional.",
    "Estado y configuración de los equipos de red (nodos, antenas, OLT).",
    "Mantenimientos programados o correctivos sobre la infraestructura.",
    "Tecnología y velocidad máxima del plan contratado (fibra óptica o radio).",
  ],
  externos: [
    "Capacidad del dispositivo del usuario (procesador, memoria, tarjeta de red, antigüedad).",
    "Red WiFi del hogar: distancia al router, paredes, interferencias y número de dispositivos.",
    "Cableado interno y estado de los equipos propios del cliente.",
    "Capacidad de los servidores o sitios web que el usuario visita.",
    "Uso simultáneo de varias aplicaciones, descargas o dispositivos.",
    "Condiciones climáticas severas (en enlaces vía radio).",
    "Fallas eléctricas o del suministro de energía en el domicilio.",
    "Software malicioso o aplicaciones en segundo plano en los equipos del cliente.",
  ],
};

// Prácticas de gestión de tráfico del operador.
export const trafficPractices = [
  "Gestión de la congestión en horas de máxima demanda para distribuir la capacidad de forma equitativa entre los usuarios.",
  "Priorización del tráfico sensible a la latencia (voz y videollamadas) cuando es necesario para preservar la calidad del servicio.",
  "Medidas de seguridad para mitigar ataques de denegación de servicio (DDoS), spam y tráfico malicioso.",
  "Bloqueo de puertos, contenidos o servicios únicamente por seguridad de la red o por orden de autoridad competente.",
  "Respeto a la neutralidad de la red: no se degrada ni bloquea el tráfico por tipo de contenido, aplicación, origen o destino, conforme a la regulación de la CRC.",
  "Los mantenimientos que puedan afectar temporalmente el servicio se informan con la debida antelación cuando es posible.",
];

// Derecho y procedimiento de PQR.
export const pqr = {
  derecho:
    "Como usuario tienes derecho a presentar Peticiones, Quejas, Reclamos y Recursos (PQR) ante TECOLNET de forma gratuita, por cualquiera de los canales dispuestos y sin exigencia de requisitos innecesarios. TECOLNET debe recibir, tramitar y responder tu solicitud dentro de los plazos establecidos por la regulación (CRC y SIC).",
  procedimiento: [
    "Presenta tu PQR por el canal que prefieras: formulario web, WhatsApp, correo electrónico o de forma presencial en nuestra sede.",
    "Recibirás un número de radicado (CUN) como constancia de tu solicitud.",
    "TECOLNET analizará tu caso y te responderá dentro de los 15 días hábiles siguientes (o el plazo que fije la norma vigente).",
    "Si no estás de acuerdo con la respuesta, puedes interponer recurso de reposición y, en subsidio, de apelación.",
    "La Superintendencia de Industria y Comercio (SIC) actúa como segunda instancia para resolver la apelación.",
  ],
};

// Zonas con mapa de cobertura por incrustar (TECOLNET entrega las imágenes).
export const coverageMaps = [
  "Riohacha (zona urbana)",
  "Tomarrazón",
  "Bañaderos",
  "Villa Martín",
  "Monguí",
  "Los Naranjos / Parque Tayrona",
  "Buritaca",
  "Palomino",
  "Uribia",
  "Manaure",
  "Mayapo",
];

// Documentos descargables (PDF/Excel). Vacío = "por publicar" (TECOLNET los sube).
export const docs = {
  pqr: "",
  indicadores: "",
  gestionTrafico: "",
};

export const navLinks = [
  { label: "Inicio", href: "/#inicio" },
  { label: "Planes", href: "/#planes" },
  { label: "Empresas", href: "/#empresas" },
  { label: "Cobertura", href: "/#cobertura" },
  { label: "Velocidad", href: "/#velocidad" },
  { label: "Nosotros", href: "/#nosotros" },
];

export function formatCOP(value: number) {
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    maximumFractionDigits: 0,
  }).format(value);
}
