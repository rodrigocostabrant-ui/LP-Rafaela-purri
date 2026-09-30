import type { Metadata, Viewport } from "next";
import { Hanken_Grotesk, Instrument_Serif } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { site, siteUrl } from "@/content/site";
import "./globals.css";
import "./hover.css";
import "./motion.css";

// Liga as animações antes da primeira pintura (evita o conteúdo piscar). Se o JS da página
// não iniciar em 5s, a classe sai e tudo fica visível. Nunca liga com movimento reduzido.
const motionBoot = `(function(){try{var d=document.documentElement;if(window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;d.classList.add("mo");setTimeout(function(){if(!window.__mo)d.classList.remove("mo")},5000)}catch(e){}})();`;

const display = Instrument_Serif({ subsets: ["latin"], weight: "400", style: ["normal", "italic"], variable: "--font-display", display: "swap" });
const sans = Hanken_Grotesk({ subsets: ["latin"], style: ["normal", "italic"], variable: "--font-sans", display: "swap" });

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
    <html lang="pt-BR" className={`${display.variable} ${sans.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: motionBoot }} />
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
