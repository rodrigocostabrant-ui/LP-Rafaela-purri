"use client";

import { useState } from "react";
import { flushSync } from "react-dom";
import { site } from "@/content/site";

type Frente = "paciente" | "aluna";

// Comportamento portado do Claude Design: alternância Paciente/Aluna e FAQ.
export function useLanding() {
  const [front, setFront] = useState<Frente>(site.frenteInicial);
  const [faq, setFaq] = useState(-1);

  const wa = (msg: string) => {
    const num = site.whatsapp.replace(/\D/g, "");
    return num ? `https://wa.me/${num}?text=${encodeURIComponent(msg)}` : site.whatsappLink;
  };
  const go = (f: Frente) => {
    flushSync(() => { setFront(f); setFaq(-1); });
    const el = document.getElementById("conteudo");
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 60, behavior: "smooth" });
  };

  const isPac = front === "paciente";
  const M = site.mensagens;
  const on = { bg: "#B79BE0", fg: "#2A0F3D" }, off = { bg: "transparent", fg: "#F6F4F1" };
  const faqs = (isPac ? site.faqPaciente : site.faqAluna).map(([q, a], i) => ({
    q, a, open: faq === i, icon: faq === i ? "−" : "+",
    toggle: () => setFaq((s) => (s === i ? -1 : i)),
  }));

  return {
    isPac, isAlu: !isPac,
    headA: site.headline === "A", headB: site.headline === "B",
    notes: site.mostrarPendencias,
    goPac: () => go("paciente"), goAlu: () => go("aluna"),
    pacBg: isPac ? on.bg : off.bg, pacFg: isPac ? on.fg : off.fg,
    aluBg: !isPac ? on.bg : off.bg, aluFg: !isPac ? on.fg : off.fg,
    waPac: wa(M.pac), waLaser: wa(M.laser), waAlu: wa(M.alu), waMent: wa(M.ment),
    floatHref: wa(isPac ? M.pac : M.alu),
    floatLabel: isPac ? "AGENDAR AVALIAÇÃO" : "FALAR SOBRE OS CURSOS",
    faqKicker: isPac ? "PARA PACIENTES" : "PARA ALUNAS · MUNDO RP",
    faqs,
    procs: site.procedimentos.map(([name, line], i) => ({ n: String(i + 1).padStart(2, "0"), name, line })),
    cursos: site.cursos,
  };
}
