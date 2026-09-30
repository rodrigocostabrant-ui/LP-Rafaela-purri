import type { Metadata, Viewport } from "next";
import { Bodoni_Moda, Montserrat, Pinyon_Script } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { site, siteUrl } from "@/content/site";
import "./globals.css";
import "./hover.css";

const bodoni = Bodoni_Moda({ subsets: ["latin"], style: ["normal", "italic"], axes: ["opsz"], variable: "--font-bodoni", display: "swap" });
const montserrat = Montserrat({ subsets: ["latin"], style: ["normal", "italic"], variable: "--font-montserrat", display: "swap" });
const pinyon = Pinyon_Script({ subsets: ["latin"], weight: "400", variable: "--font-pinyon", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: site.titulo,
  description: site.descricao,
  openGraph: { type: "website", locale: "pt_BR", siteName: site.nome, title: site.titulo, description: site.descricao },
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = { themeColor: "#2A0F3D" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${bodoni.variable} ${montserrat.variable} ${pinyon.variable}`}>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
