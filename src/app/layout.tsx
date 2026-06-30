import type { Metadata } from "next";
import { Sora, Manrope, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "TecolNet — Conectamos tu mundo | Internet de fibra en La Guajira",
  description:
    "Internet de fibra rápido y estable para hogares y empresas en La Guajira y toda Colombia. Planes desde $50.000, router incluido y soporte 7 días a la semana.",
  keywords: [
    "internet Riohacha",
    "fibra óptica La Guajira",
    "proveedor de internet Colombia",
    "TecolNet",
    "planes de internet hogar y empresa",
  ],
  openGraph: {
    title: "TecolNet — Conectamos tu mundo",
    description:
      "Internet de fibra rápido y estable para hogares y empresas. Cerrando brechas, construyendo futuro.",
    type: "website",
    locale: "es_CO",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${sora.variable} ${manrope.variable} ${jetbrains.variable} h-full antialiased`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
