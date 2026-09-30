"use client";

import { useEffect } from "react";

// Movimento da página (no padrão das outras landings): um único listener de scroll passivo
// + rAF escrevendo transforms inline.
//  - [data-reveal] / [data-split] / [data-clip]: revelados ao entrar na tela (classe .in).
//    Só ficam ocultos enquanto <html> tiver a classe .mo (posta antes da pintura por um
//    script inline em app/layout.tsx; sem JS ela é retirada e tudo aparece).
//  - [data-speed] / [data-drift]: parallax vertical / horizontal relativo ao elemento pai.
//  - [data-stack] > [data-card]: cards sticky que diminuem e escurecem quando o próximo cobre.
//  - [data-count]: contador que sobe até o número real quando o bloco é revelado.
//  - [data-progress]: barra de progresso da leitura no header.
// `key` muda quando a frente Paciente/Aluna troca: as seções montam de novo e o efeito
// refaz a varredura.
const STEP = 16; // deslocamento (px) entre cards empilhados — igual ao usado no markup.

export function useMotion(key: unknown) {
  useEffect(() => {
    const root = document.documentElement;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const hiding = root.classList.contains("mo");
    (window as unknown as { __mo?: boolean }).__mo = true;

    const clamp = (v: number, a: number, b: number) => Math.max(a, Math.min(b, v));
    const ease = (t: number) => 1 - Math.pow(1 - t, 3);
    const q = (s: string, el: ParentNode = document) => Array.from(el.querySelectorAll<HTMLElement>(s));

    const header = document.querySelector<HTMLElement>("header");
    const prog = document.querySelector<HTMLElement>("[data-progress]");
    const par = reduce ? [] : q("[data-speed],[data-drift]");
    const stacks = reduce ? [] : q("[data-stack]").map((s) => q("[data-card]", s));
    let pending = hiding ? q("[data-reveal],[data-split],[data-clip]").filter((el) => !el.classList.contains("in")) : [];
    const rafs = new Set<number>();

    const countUp = (el: HTMLElement) => {
      if (el.dataset.counted) return;
      el.dataset.counted = "1";
      const to = parseInt(el.dataset.count || "0", 10);
      const delay = 350, dur = 1400;
      const t0 = performance.now();
      el.textContent = "0";
      const step = (now: number) => {
        const t = clamp((now - t0 - delay) / dur, 0, 1);
        el.textContent = String(Math.round(to * ease(t)));
        if (t < 1) { const id = requestAnimationFrame(step); rafs.add(id); }
      };
      rafs.add(requestAnimationFrame(step));
    };

    const show = (el: HTMLElement) => {
      el.classList.add("in");
      q("[data-count]", el).forEach(countUp);
    };

    const setHdr = () => {
      if (header) root.style.setProperty("--hdr", `${header.offsetHeight}px`);
    };

    const update = () => {
      const vh = window.innerHeight, vw = window.innerWidth;

      if (prog) {
        const max = root.scrollHeight - vh;
        prog.style.transform = `scaleX(${max > 0 ? clamp(window.scrollY / max, 0, 1).toFixed(4) : 0})`;
      }

      const k = vw < 700 ? 0.55 : 1;
      par.forEach((el) => {
        if (el.dataset.desk !== undefined && vw < 900) { el.style.transform = ""; return; }
        const r = el.parentElement!.getBoundingClientRect();
        if (r.bottom < -vh || r.top > vh * 2) return;
        const c = r.top + r.height / 2 - vh / 2;
        const y = -c * parseFloat(el.dataset.speed || "0") * k;
        const x = c * parseFloat(el.dataset.drift || "0") * k;
        el.style.transform = `translate3d(${x.toFixed(1)}px,${y.toFixed(1)}px,0)`;
      });

      stacks.forEach((cards) => {
        const tops = cards.map((c) => c.getBoundingClientRect().top);
        // chegada de cada card sobre o anterior (0 = longe, 1 = encaixado)
        const arrive = tops.map((t, j) => (j === 0 ? 0 : clamp(1 - (t - tops[j - 1] - STEP) / (vh * 0.6), 0, 1)));
        cards.forEach((c, i) => {
          let depth = 0;
          for (let j = i + 1; j < cards.length; j++) depth += arrive[j];
          c.style.transform = depth ? `scale(${(1 - depth * 0.045).toFixed(4)})` : "";
          const sh = c.querySelector<HTMLElement>(".shade");
          if (sh) sh.style.opacity = (Math.min(depth, 2) * (c.dataset.dark !== undefined ? 0.28 : 0.14)).toFixed(3);
        });
      });

      // Rede de segurança: se o observer não disparar, revela o que já está na tela.
      if (pending.length) {
        pending = pending.filter((el) => {
          if (el.classList.contains("in")) return false;
          const r = el.getBoundingClientRect();
          if (r.top < vh * 0.94 && r.bottom > 0) { show(el); return false; }
          return true;
        });
      }
    };

    let raf = 0;
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(() => { raf = 0; update(); });
    };
    const onResize = () => { setHdr(); onScroll(); };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);

    let io: IntersectionObserver | undefined;
    if (pending.length) {
      if ("IntersectionObserver" in window) {
        io = new IntersectionObserver(
          (entries) => entries.forEach((e) => {
            if (e.isIntersecting) { show(e.target as HTMLElement); io!.unobserve(e.target); }
          }),
          { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
        );
        pending.forEach((el) => io!.observe(el));
      } else {
        pending.forEach(show);
        pending = [];
      }
    }

    setHdr();
    update();
    const t1 = setTimeout(onResize, 400); // fontes carregadas mudam alturas
    const t2 = setTimeout(update, 1500);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      io?.disconnect();
      clearTimeout(t1);
      clearTimeout(t2);
      cancelAnimationFrame(raf);
      rafs.forEach((id) => cancelAnimationFrame(id));
      q("[data-count][data-counted]").forEach((el) => { el.textContent = el.dataset.count || ""; });
    };
  }, [key]);
}
