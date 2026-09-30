"use client";

// Markup convertido do Claude Design (Dra Rafaela Purri - Previa.dc.html).
// Textos de listas e contatos ficam em content/site.ts; comportamento em useLanding.ts;
// movimento (revelações, parallax, pilha de cards) em useMotion.ts + app/motion.css.
import { Fragment, type CSSProperties } from "react";
import { useLanding } from "./useLanding";
import { useMotion } from "./useMotion";

type CSSVars = CSSProperties & { [k: `--${string}`]: string | number };

const BODONI = "var(--font-bodoni),serif";
const PINYON = "var(--font-pinyon),cursive";

// Divide um trecho de título em palavras mascaradas (revelação palavra a palavra).
// `i` é o índice da primeira palavra, para a sequência continuar entre trechos.
function W({ t, i = 0 }: { t: string; i?: number }) {
  let k = i;
  return (
    <>
      {t.split(/(\s+)/).map((p, j) =>
        p === "" ? null : /^\s+$/.test(p) ? (
          <Fragment key={j}>{p}</Fragment>
        ) : (
          <span key={j} className="w">
            <span className="wi" style={{ "--i": k++ } as CSSVars}>{p}</span>
          </span>
        ),
      )}
    </>
  );
}

const METODO = [
  { n: "I", t: "Avaliação", p: "Um olhar atento para o rosto como um todo: proporções, perfil & expressão.", bg: "#fff", fg: "#2A0F3D", tx: "#111", line: "rgba(42,15,61,.14)" },
  { n: "II", t: "Planejamento", p: "Um plano estratégico, do ajuste pontual ao full face, com a indicação honesta do que o seu rosto pede.", bg: "#EDE7F4", fg: "#2A0F3D", tx: "#111", line: "rgba(42,15,61,.14)" },
  { n: "III", t: "Precisão", p: "Execução técnica com foco em naturalidade. Pequenos ajustes, grandes mudanças na forma como você se enxerga.", bg: "#2A0F3D", fg: "#F6F4F1", tx: "rgba(246,244,241,.86)", line: "rgba(183,155,224,.25)", dark: true },
];

const stackTop = (k: number) => `calc(var(--hdr,64px) + 20px + ${k * 16}px)`;

const kicker: CSSProperties = { font: "italic 400 11px/1 var(--font-montserrat),sans-serif", letterSpacing: ".24em", color: "#3D1A5B" };

export default function Landing() {
  const { aluBg, aluFg, cursos, faqKicker, faqs, floatHref, floatLabel, goAlu, goPac, headA, headB, isAlu, isPac, notes, pacBg, pacFg, procs, waAlu, waLaser, waMent, waPac } = useLanding();
  useMotion(isPac);
  const marquee: string[] = isPac ? procs.map((p: { name: string }) => p.name) : cursos;
  return (
    <>
      <header style={{ position: "sticky", top: "0", zIndex: "20", background: "rgba(42,15,61,.94)", backdropFilter: "blur(10px)", WebkitBackdropFilter: "blur(10px)", borderBottom: "1px solid rgba(183,155,224,.18)" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "10px clamp(16px,4vw,48px)", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px", flexWrap: "wrap" }}>
          <a href="#topo" style={{ display: "flex", alignItems: "center", gap: "12px", color: "#F6F4F1" }}>
            <span style={{ fontFamily: PINYON, fontSize: "34px", lineHeight: "1", color: "#B79BE0", paddingTop: "4px" }}>
              {"RP"}
            </span>
            <span style={{ display: "flex", flexDirection: "column", gap: "3px" }}>
              <span style={{ font: "500 12px/1 var(--font-montserrat),sans-serif", letterSpacing: ".24em" }}>
                {"DRA. RAFAELA PURRI"}
              </span>
              <span style={{ font: "italic 300 10px/1 var(--font-montserrat),sans-serif", letterSpacing: ".18em", color: "#B79BE0" }}>
                {"BIOMÉDICA ESTETA · CRBM-3 18357"}
              </span>
            </span>
          </a>
          <div style={{ display: "flex", padding: "3px", border: "1px solid rgba(183,155,224,.35)", borderRadius: "999px" }}>
            <button onClick={goPac} aria-pressed={isPac} style={{ border: "0", cursor: "pointer", borderRadius: "999px", padding: "10px 16px", minHeight: "40px", font: "500 11px/1 var(--font-montserrat),sans-serif", letterSpacing: ".16em", background: `${pacBg}`, color: `${pacFg}`, transition: "background .4s,color .4s" }}>
              {"PACIENTE"}
            </button>
            <button onClick={goAlu} aria-pressed={isAlu} style={{ border: "0", cursor: "pointer", borderRadius: "999px", padding: "10px 16px", minHeight: "40px", font: "500 11px/1 var(--font-montserrat),sans-serif", letterSpacing: ".16em", background: `${aluBg}`, color: `${aluFg}`, transition: "background .4s,color .4s" }}>
              {"ALUNA"}
            </button>
          </div>
        </div>
        <span data-progress className="prog" aria-hidden="true" />
      </header>
      <section id="topo" data-screen-label="01 Hero" style={{ position: "relative", overflow: "hidden", background: "radial-gradient(120% 80% at 85% 0%,#3D1A5B 0%,#2A0F3D 55%,#210a31 100%)", color: "#F6F4F1", padding: "clamp(48px,8vw,96px) clamp(20px,5vw,72px) clamp(40px,6vw,72px)" }}>
        <span className="deco" data-speed=".14" aria-hidden="true" style={{ width: "min(90vw,820px)", height: "min(90vw,820px)", right: "-18%", top: "-22%", borderRadius: "50%", background: "radial-gradient(circle,rgba(183,155,224,.16) 0%,rgba(183,155,224,0) 62%)" }} />
        <span className="deco" data-speed="-.2" aria-hidden="true" style={{ right: "-4%", top: "2%", fontFamily: PINYON, fontSize: "clamp(260px,40vw,640px)", color: "rgba(183,155,224,.06)" }}>
          {"RP"}
        </span>
        <div style={{ position: "relative", maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,420px),1fr))", gap: "clamp(40px,6vw,80px)", alignItems: "end" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
            <span data-hin="1" style={{ font: "italic 300 12px/1.4 var(--font-montserrat),sans-serif", letterSpacing: ".24em", color: "#B79BE0" }}>
              {"HARMONIZAÇÃO FACIAL · BELO HORIZONTE"}
            </span>
            {(headA) && (<>
              <h1 data-hero style={{ margin: "0", fontFamily: BODONI, fontWeight: "500", fontSize: "clamp(48px,8.4vw,112px)", lineHeight: ".92", letterSpacing: "-.01em", textTransform: "uppercase", textWrap: "balance" }}>
                <W t="Nasci para fazer " />
                <span className="wf" style={{ display: "block", fontFamily: PINYON, textTransform: "none", color: "#B79BE0", fontWeight: "400", fontSize: "1.12em", lineHeight: "1.05", letterSpacing: "0", marginTop: ".06em", "--i": 3 } as CSSVars}>
                  {"Arte."}
                </span>
              </h1>
            </>)}
            {(headB) && (<>
              <h1 data-hero style={{ margin: "0", fontFamily: BODONI, fontWeight: "500", fontSize: "clamp(44px,7.2vw,96px)", lineHeight: ".95", letterSpacing: "-.01em", textTransform: "uppercase", textWrap: "balance" }}>
                <W t="Um rosto " />
                <span className="wf" style={{ fontFamily: PINYON, color: "#B79BE0", fontWeight: "400", textTransform: "none", "--i": 2 } as CSSVars}>
                  {"&"}
                </span>
                <W t=" um mundo de possibilidades." i={3} />
              </h1>
            </>)}
            <p data-hin="2" style={{ margin: "0", maxWidth: "30em", font: "300 clamp(16px,1.5vw,19px)/1.6 var(--font-montserrat),sans-serif", color: "rgba(246,244,241,.86)", textWrap: "pretty" }}>
              {"Harmonização facial com precisão & planejamento. E a formação de profissionais que querem fazer o mesmo."}
            </p>
            <div data-hin="3" style={{ display: "flex", flexWrap: "wrap", gap: "10px 24px", font: "italic 400 11px/1.4 var(--font-montserrat),sans-serif", letterSpacing: ".2em", color: "#B79BE0" }}>
              <span>
                {"BIOMÉDICA ESTETA"}
              </span>
              <span>
                {"CRBM-3 18357"}
              </span>
              <span>
                {"CLÍNICA PRÓPRIA EM BH"}
              </span>
            </div>
          </div>
          <div data-speed=".07" style={{ display: "flex", justifyContent: "center" }}>
            <div data-hclip style={{ width: "min(100%,420px)", aspectRatio: "4/5", borderRadius: "999px 999px 0 0", background: "repeating-linear-gradient(135deg,rgba(183,155,224,.16) 0 10px,rgba(183,155,224,0) 10px 20px)", border: "1px solid rgba(183,155,224,.4)", display: "flex", alignItems: "flex-end", justifyContent: "center", padding: "24px", font: "500 10px/1.5 ui-monospace,Menlo,monospace", letterSpacing: ".08em", color: "#B79BE0", textAlign: "center" }}>
              {"RETRATO DE ESTÚDIO · VESTIDO PRETO"}
              <br />
              {"(foto profissional da cliente)"}
            </div>
          </div>
        </div>
        <div data-hin="4" style={{ position: "relative", maxWidth: "1200px", margin: "clamp(48px,7vw,80px) auto 0", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,300px),1fr))", borderTop: "1px solid rgba(183,155,224,.3)" }}>
          <button className="hv1" onClick={goPac} style={{ all: "unset", cursor: "pointer", display: "flex", flexDirection: "column", gap: "14px", padding: "32px 28px 36px 0", borderBottom: "1px solid rgba(183,155,224,.3)", transition: "padding .35s,background .35s" }}>
            <span style={{ font: "italic 300 11px/1 var(--font-montserrat),sans-serif", letterSpacing: ".24em", color: "#B79BE0" }}>
              {"01 · PARA PACIENTES"}
            </span>
            <span style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "16px", fontFamily: BODONI, fontSize: "clamp(28px,3.4vw,44px)", lineHeight: "1", textTransform: "uppercase", color: "#F6F4F1" }}>
              {"Quero ser paciente "}
              <span className="arr" style={{ fontFamily: "var(--font-montserrat),sans-serif", fontWeight: "300", color: "#B79BE0" }}>
                {"→"}
              </span>
            </span>
            <span style={{ font: "300 15px/1.5 var(--font-montserrat),sans-serif", color: "rgba(246,244,241,.78)" }}>
              {"Avaliação facial com planejamento estratégico."}
            </span>
          </button>
          <button className="hv2" onClick={goAlu} style={{ all: "unset", cursor: "pointer", display: "flex", flexDirection: "column", gap: "14px", padding: "32px 28px 36px 28px", borderBottom: "1px solid rgba(183,155,224,.3)", borderLeft: "1px solid rgba(183,155,224,.3)", transition: "padding .35s,background .35s" }}>
            <span style={{ font: "italic 300 11px/1 var(--font-montserrat),sans-serif", letterSpacing: ".24em", color: "#B79BE0" }}>
              {"02 · PARA PROFISSIONAIS · MUNDO RP"}
            </span>
            <span style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "16px", fontFamily: BODONI, fontSize: "clamp(28px,3.4vw,44px)", lineHeight: "1", textTransform: "uppercase", color: "#F6F4F1" }}>
              {"Quero ser aluna "}
              <span className="arr" style={{ fontFamily: "var(--font-montserrat),sans-serif", fontWeight: "300", color: "#B79BE0" }}>
                {"→"}
              </span>
            </span>
            <span style={{ font: "300 15px/1.5 var(--font-montserrat),sans-serif", color: "rgba(246,244,241,.78)" }}>
              {"Técnica, prática & visão de negócio."}
            </span>
          </button>
        </div>
      </section>
      <div className="mqw" aria-hidden="true" style={{ overflow: "hidden", background: "#F6F4F1", borderBottom: "1px solid rgba(42,15,61,.12)", padding: "clamp(16px,2.2vw,24px) 0" }}>
        <div className="mq" key={isPac ? "p" : "a"}>
          {[0, 1].map((r) => (<Fragment key={r}>
            {marquee.map((m, i) => (
              <span key={i} style={{ display: "inline-flex", alignItems: "center", gap: "clamp(20px,3vw,40px)", paddingRight: "clamp(20px,3vw,40px)", fontFamily: BODONI, fontWeight: "500", fontSize: "clamp(18px,2.2vw,28px)", lineHeight: "1", textTransform: "uppercase", color: "#2A0F3D", whiteSpace: "nowrap" }}>
                {m}
                <span style={{ width: "7px", height: "7px", borderRadius: "999px", border: "1px solid #B79BE0" }} />
              </span>
            ))}
          </Fragment>))}
        </div>
      </div>
      <div id="conteudo" />
      {(isPac) && (<div key="pac" className="ff">
        <section data-screen-label="P1 Manifesto" style={{ padding: "clamp(72px,10vw,120px) clamp(20px,5vw,72px)", background: "#F6F4F1", color: "#2A0F3D" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,420px),1fr))", gap: "clamp(32px,6vw,96px)", alignItems: "end" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <span data-reveal style={kicker}>
                {"PARA PACIENTES"}
              </span>
              <h2 data-split style={{ margin: "0", fontFamily: BODONI, fontWeight: "500", fontSize: "clamp(38px,5.6vw,76px)", lineHeight: ".98", textTransform: "uppercase", textWrap: "balance" }}>
                <W t="O segredo nunca esteve na quantidade." />
              </h2>
              <p data-reveal="3" style={{ margin: "0", fontFamily: BODONI, fontStyle: "italic", fontSize: "clamp(24px,2.6vw,34px)", lineHeight: "1.2", color: "#3D1A5B" }}>
                {"Está no planejamento."}
              </p>
            </div>
            <div data-reveal="2" style={{ display: "flex", flexDirection: "column", gap: "28px", alignItems: "flex-start" }}>
              <p style={{ margin: "0", font: "400 17px/1.7 var(--font-montserrat),sans-serif", color: "#111", maxWidth: "32em", textWrap: "pretty" }}>
                {"Cada rosto pede um olhar, um planejamento & escolhas diferentes. Por isso, todo atendimento começa por uma avaliação facial completa — para tratar o que precisa, sem perder o que já é seu."}
              </p>
              <a className="hv3" href={waPac} target="_blank" rel="noopener" style={{ display: "inline-flex", alignItems: "center", gap: "12px", minHeight: "52px", padding: "0 28px", borderRadius: "999px", background: "#2A0F3D", color: "#F6F4F1", font: "500 12px/1 var(--font-montserrat),sans-serif", letterSpacing: ".18em", transition: "background .3s" }}>
                {"AGENDAR MINHA AVALIAÇÃO "}
                <span className="arr" style={{ color: "#B79BE0" }}>
                  {"→"}
                </span>
              </a>
            </div>
          </div>
        </section>
        <section data-screen-label="P2 Metodo" style={{ padding: "0 clamp(20px,5vw,72px) clamp(72px,10vw,120px)", background: "#F6F4F1", color: "#2A0F3D" }}>
          <div data-stack style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "clamp(28px,9vh,96px)", paddingTop: "clamp(28px,4vw,48px)", borderTop: "1px solid rgba(42,15,61,.2)" }}>
            {METODO.map((m, k) => (
              <div key={m.n} data-card data-dark={m.dark ? "" : undefined} className="stk" style={{ position: "sticky", top: stackTop(k), minHeight: "clamp(280px,50vh,440px)", display: "flex", flexDirection: "column", justifyContent: "space-between", gap: "32px", padding: "clamp(28px,4.4vw,56px)", background: m.bg, color: m.fg, border: `1px solid ${m.line}`, boxShadow: "0 -28px 60px -44px rgba(42,15,61,.5)", overflow: "hidden" }}>
                <span style={{ fontFamily: BODONI, fontSize: "clamp(72px,11vw,156px)", lineHeight: ".8", color: "#B79BE0" }}>
                  {m.n}
                </span>
                <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", gap: "14px 48px" }}>
                  <h3 style={{ margin: "0", fontFamily: BODONI, fontWeight: "500", fontSize: "clamp(26px,3.4vw,44px)", lineHeight: "1", textTransform: "uppercase" }}>
                    {m.t}
                  </h3>
                  <p style={{ margin: "0", maxWidth: "30em", font: "400 15px/1.65 var(--font-montserrat),sans-serif", color: m.tx }}>
                    {m.p}
                  </p>
                </div>
                <span className="shade" aria-hidden="true" />
              </div>
            ))}
          </div>
        </section>
        <section data-screen-label="P3 12ml" style={{ position: "relative", overflow: "hidden", padding: "clamp(80px,11vw,140px) clamp(20px,5vw,72px)", background: "#2A0F3D", color: "#F6F4F1" }}>
          <span className="deco" data-drift=".22" aria-hidden="true" style={{ left: "-6%", bottom: "-.12em", fontFamily: PINYON, fontSize: "clamp(160px,26vw,420px)", color: "rgba(183,155,224,.07)" }}>
            {"precisão"}
          </span>
          <div style={{ position: "relative", maxWidth: "1000px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "36px" }}>
            <span data-speed=".12" style={{ fontFamily: PINYON, fontSize: "56px", lineHeight: ".6", color: "#B79BE0" }}>
              {"“"}
            </span>
            <p data-split style={{ margin: "0", fontFamily: BODONI, fontWeight: "500", fontSize: "clamp(36px,6vw,84px)", lineHeight: "1", textTransform: "uppercase", textWrap: "balance" }}>
              <W t="Não se assuste se eu te indicar " />
              <span className="w"><span className="wi" data-count="12" style={{ "--i": 7 } as CSSVars}>{"12"}</span></span>
              {" "}
              <W t="ml." i={8} />
            </p>
            <div data-reveal="2" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,300px),1fr))", gap: "24px 64px", borderTop: "1px solid rgba(183,155,224,.3)", paddingTop: "28px" }}>
              <p style={{ margin: "0", fontFamily: BODONI, fontStyle: "italic", fontSize: "24px", lineHeight: "1.3", color: "#B79BE0" }}>
                {"Harmonizar não é sobre quantidade. É sobre precisão."}
              </p>
              <p style={{ margin: "0", font: "300 16px/1.7 var(--font-montserrat),sans-serif", color: "rgba(246,244,241,.86)", textWrap: "pretty" }}>
                {"Às vezes o certo é pouco; às vezes, é mais. Quem define é o planejamento — nunca um número fixo."}
              </p>
            </div>
          </div>
        </section>
        <section data-screen-label="P4 Procedimentos" style={{ padding: "clamp(72px,10vw,120px) clamp(20px,5vw,72px)", background: "#F6F4F1", color: "#2A0F3D" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,320px),1fr))", gap: "clamp(32px,6vw,96px)" }}>
            <div className="stickyCol" style={{ display: "flex", flexDirection: "column", gap: "20px", alignSelf: "start", position: "sticky", top: "calc(var(--hdr,64px) + 32px)" }}>
              <span data-reveal style={kicker}>
                {"PROCEDIMENTOS"}
              </span>
              <h2 data-split style={{ margin: "0", fontFamily: BODONI, fontWeight: "500", fontSize: "clamp(36px,4.6vw,60px)", lineHeight: "1", textTransform: "uppercase" }}>
                <W t="Cada rosto pede " />
                <span className="wf" style={{ fontFamily: PINYON, textTransform: "none", color: "#3D1A5B", fontWeight: "400", "--i": 3 } as CSSVars}>
                  {"o seu"}
                </span>
                <W t=" plano." i={4} />
              </h2>
              <p data-reveal="2" style={{ margin: "0", font: "400 15px/1.65 var(--font-montserrat),sans-serif", color: "#111", maxWidth: "26em" }}>
                {"Indicações definidas somente após avaliação. Investimento sob consulta."}
              </p>
              <div data-reveal="3" style={{ display: "flex", flexDirection: "column", gap: "20px", alignItems: "flex-start" }}>
                <a className="hv4" href={waPac} target="_blank" rel="noopener" style={{ display: "inline-flex", alignItems: "center", gap: "12px", minHeight: "48px", padding: "0 24px", borderRadius: "999px", border: "1px solid #2A0F3D", color: "#2A0F3D", font: "500 11px/1 var(--font-montserrat),sans-serif", letterSpacing: ".18em", transition: "background .3s,color .3s" }}>
                  {"AGENDAR AVALIAÇÃO "}
                  <span className="arr">{"→"}</span>
                </a>
                {(notes) && (<>
                  <span style={{ font: "600 10px/1.4 ui-monospace,Menlo,monospace", letterSpacing: ".04em", background: "#E3C04A", color: "#111", padding: "4px 7px", borderRadius: "2px" }}>
                    {"VALIDAR · lista de procedimentos & anúncio de rinomodelação (CFBM)"}
                  </span>
                </>)}
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", borderTop: "1px solid rgba(42,15,61,.2)" }}>
              {(procs).map((p: any, $index: number) => (<Fragment key={$index}>
                <div className="hv5" data-reveal style={{ display: "grid", gridTemplateColumns: "44px 1fr", gap: "4px 16px", padding: "22px 0", borderBottom: "1px solid rgba(42,15,61,.2)", "--rd": `${($index % 4) * 0.08}s`, transition: "padding .3s,background .3s,opacity 1s var(--ease) var(--rd),transform 1.1s var(--ease) var(--rd)" } as CSSVars}>
                  <span style={{ font: "italic 300 13px/1.9 var(--font-montserrat),sans-serif", color: "#3D1A5B" }}>
                    {p.n}
                  </span>
                  <span style={{ fontFamily: BODONI, fontWeight: "500", fontSize: "clamp(22px,2.4vw,30px)", lineHeight: "1.1", textTransform: "uppercase" }}>
                    {p.name}
                  </span>
                  <span />
                  <span style={{ font: "italic 300 15px/1.5 var(--font-montserrat),sans-serif", color: "#111" }}>
                    {p.line}
                  </span>
                </div>
              </Fragment>))}
            </div>
          </div>
        </section>
        <section data-screen-label="P5 Resultados" style={{ padding: "clamp(72px,10vw,120px) clamp(20px,5vw,72px)", background: "#EDE7F4", color: "#2A0F3D" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "40px" }}>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "end", gap: "24px" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                <span data-reveal style={kicker}>
                  {"RESULTADOS"}
                </span>
                <h2 data-split style={{ margin: "0", fontFamily: BODONI, fontWeight: "500", fontSize: "clamp(36px,5vw,68px)", lineHeight: "1", textTransform: "uppercase" }}>
                  <W t="Naturalidade " />
                  <span className="wf" style={{ fontFamily: PINYON, textTransform: "none", fontWeight: "400", "--i": 1 } as CSSVars}>
                    {"&"}
                  </span>
                  <W t=" precisão." i={2} />
                </h2>
              </div>
              <p data-reveal="2" style={{ margin: "0", maxWidth: "26em", font: "400 15px/1.65 var(--font-montserrat),sans-serif", color: "#111" }}>
                {"Quando bem feitos, os procedimentos não mudam quem você é. Ajudam a preservar o que você já tem de bonito."}
              </p>
            </div>
            <div data-reveal="1" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,260px),1fr))", gap: "16px" }}>
              <div data-speed="-.03" data-desk style={{ aspectRatio: "4/5", background: "repeating-linear-gradient(135deg,rgba(42,15,61,.07) 0 10px,rgba(42,15,61,0) 10px 20px)", border: "1px solid rgba(42,15,61,.18)", display: "flex", alignItems: "flex-end", justifyContent: "center", padding: "20px", font: "500 10px/1.5 ui-monospace,Menlo,monospace", letterSpacing: ".08em", color: "#3D1A5B", textAlign: "center" }}>
                {"ANTES & DEPOIS · LÁBIOS"}
                <br />
                {"(perfil, touca de cetim lilás)"}
              </div>
              <div data-speed=".05" data-desk style={{ aspectRatio: "4/5", background: "repeating-linear-gradient(135deg,rgba(42,15,61,.07) 0 10px,rgba(42,15,61,0) 10px 20px)", border: "1px solid rgba(42,15,61,.18)", display: "flex", alignItems: "flex-end", justifyContent: "center", padding: "20px", font: "500 10px/1.5 ui-monospace,Menlo,monospace", letterSpacing: ".08em", color: "#3D1A5B", textAlign: "center" }}>
                {"ANTES & DEPOIS · CONTORNO"}
                <br />
                {"(frente, touca de cetim lilás)"}
              </div>
              <div data-speed="-.03" data-desk style={{ aspectRatio: "4/5", background: "repeating-linear-gradient(135deg,rgba(42,15,61,.07) 0 10px,rgba(42,15,61,0) 10px 20px)", border: "1px solid rgba(42,15,61,.18)", display: "flex", alignItems: "flex-end", justifyContent: "center", padding: "20px", font: "500 10px/1.5 ui-monospace,Menlo,monospace", letterSpacing: ".08em", color: "#3D1A5B", textAlign: "center" }}>
                {"ANTES & DEPOIS · PERFIL"}
                <br />
                {"(perfiloplastia, touca lilás)"}
              </div>
            </div>
            <div data-reveal style={{ display: "flex", flexWrap: "wrap", gap: "12px", alignItems: "center", justifyContent: "space-between" }}>
              <p style={{ margin: "0", font: "italic 300 12px/1.5 var(--font-montserrat),sans-serif", letterSpacing: ".06em", color: "#3D1A5B" }}>
                {"Imagens publicadas com autorização das pacientes. Resultados variam de pessoa para pessoa."}
              </p>
              {(notes) && (<>
                <span style={{ font: "600 10px/1.4 ui-monospace,Menlo,monospace", letterSpacing: ".04em", background: "#E3C04A", color: "#111", padding: "4px 7px", borderRadius: "2px" }}>
                  {"VALIDAR COM A CLIENTE · autorização + regras CFBM"}
                </span>
              </>)}
            </div>
          </div>
        </section>
        <section data-screen-label="P6 Laser Day" style={{ padding: "clamp(40px,6vw,64px) clamp(20px,5vw,72px)", background: "#3D1A5B", color: "#F6F4F1" }}>
          <div data-reveal style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "24px" }}>
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "16px 28px" }}>
              <span className="pulse" style={{ font: "600 11px/1 var(--font-montserrat),sans-serif", letterSpacing: ".2em", background: "#E3C04A", color: "#111", padding: "9px 14px", borderRadius: "999px" }}>
                {"AGENDA ABERTA"}
              </span>
              <span style={{ fontFamily: BODONI, fontWeight: "500", fontSize: "clamp(26px,3.6vw,44px)", lineHeight: "1", textTransform: "uppercase" }}>
                {"Laser Day · 21 "}
                <span style={{ fontFamily: PINYON, textTransform: "none", color: "#B79BE0", fontWeight: "400" }}>
                  {"&"}
                </span>
                {" 22 de outubro"}
              </span>
            </div>
            <a className="hv6" href={waLaser} target="_blank" rel="noopener" style={{ display: "inline-flex", alignItems: "center", gap: "12px", minHeight: "50px", padding: "0 26px", borderRadius: "999px", background: "#B79BE0", color: "#2A0F3D", font: "600 11px/1 var(--font-montserrat),sans-serif", letterSpacing: ".18em", transition: "background .3s" }}>
              {"RESERVAR MEU HORÁRIO "}
              <span className="arr">{"→"}</span>
            </a>
          </div>
        </section>
      </div>)}
      {(isAlu) && (<div key="alu" className="ff">
        <section data-screen-label="A1 Mundo RP" style={{ padding: "clamp(72px,10vw,120px) clamp(20px,5vw,72px)", background: "#CFC3B5", color: "#2A0F3D" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,400px),1fr))", gap: "clamp(40px,6vw,96px)", alignItems: "center" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "24px", alignItems: "flex-start" }}>
              <span data-reveal style={{ fontFamily: BODONI, fontWeight: "600", fontSize: "15px", letterSpacing: ".34em" }}>
                {"MUNDO RP"}
              </span>
              <h2 data-split style={{ margin: "0", fontFamily: BODONI, fontWeight: "500", fontSize: "clamp(38px,5.4vw,74px)", lineHeight: ".98", textTransform: "uppercase", textWrap: "balance" }}>
                <W t="Tudo para se tornar uma profissional completa." />
              </h2>
              <p data-reveal="2" style={{ margin: "0", font: "italic 400 17px/1.7 var(--font-montserrat),sans-serif", color: "#111", maxWidth: "32em", textWrap: "pretty" }}>
                {"Um ecossistema de formação que une técnica, prática & visão de crescimento — criado por quem atende na própria clínica e sabe o que enche uma agenda."}
              </p>
              <div data-reveal="3">
                <a className="hv7" href={waAlu} target="_blank" rel="noopener" style={{ display: "inline-flex", alignItems: "center", gap: "12px", minHeight: "52px", padding: "0 28px", borderRadius: "999px", background: "#2A0F3D", color: "#F6F4F1", font: "500 12px/1 var(--font-montserrat),sans-serif", letterSpacing: ".18em", transition: "background .3s" }}>
                  {"QUERO CONHECER OS CURSOS "}
                  <span className="arr" style={{ color: "#B79BE0" }}>
                    {"→"}
                  </span>
                </a>
              </div>
            </div>
            <div data-speed=".06" style={{ display: "flex", justifyContent: "center" }}>
              <div data-clip style={{ width: "min(100%,400px)", aspectRatio: "4/5", borderRadius: "999px 999px 0 0", background: "#E4DBD0", border: "1px solid rgba(42,15,61,.15)", display: "flex", alignItems: "flex-end", justifyContent: "center", padding: "24px", font: "500 10px/1.5 ui-monospace,Menlo,monospace", letterSpacing: ".08em", color: "#3D1A5B", textAlign: "center", backgroundImage: "repeating-linear-gradient(135deg,rgba(42,15,61,.06) 0 10px,rgba(42,15,61,0) 10px 20px)" }}>
                {"RAFA EM AULA · ARCO & PEDESTAL"}
                <br />
                {"(foto do Mundo RP)"}
              </div>
            </div>
          </div>
        </section>
        <section data-screen-label="A2 Estrategia" style={{ position: "relative", overflow: "hidden", padding: "clamp(80px,11vw,140px) clamp(20px,5vw,72px)", background: "#2A0F3D", color: "#F6F4F1" }}>
          <span className="deco" data-drift="-.2" aria-hidden="true" style={{ right: "-8%", top: "-.08em", fontFamily: PINYON, fontSize: "clamp(150px,24vw,400px)", color: "rgba(183,155,224,.07)" }}>
            {"estratégia"}
          </span>
          <div style={{ position: "relative", maxWidth: "1200px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "48px" }}>
            <h2 data-split style={{ margin: "0", maxWidth: "14em", fontFamily: BODONI, fontWeight: "500", fontSize: "clamp(36px,5.8vw,80px)", lineHeight: "1", textTransform: "uppercase", textWrap: "balance" }}>
              <W t="O problema não é o algoritmo. " />
              <span style={{ color: "#B79BE0" }}>
                <W t="É a falta de estratégia." i={6} />
              </span>
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,280px),1fr))", gap: "0", borderTop: "1px solid rgba(183,155,224,.3)" }}>
              <div data-reveal style={{ padding: "28px 28px 0 0", display: "flex", flexDirection: "column", gap: "10px" }}>
                <span style={{ font: "italic 300 11px/1 var(--font-montserrat),sans-serif", letterSpacing: ".24em", color: "#B79BE0" }}>
                  {"VOCÊ JÁ PENSOU"}
                </span>
                <p style={{ margin: "0", fontFamily: BODONI, fontStyle: "italic", fontSize: "26px", lineHeight: "1.25" }}>
                  {"“Tenho seguidores, mas não vendo.”"}
                </p>
              </div>
              <div data-reveal="1" style={{ padding: "28px 28px 0 0", display: "flex", flexDirection: "column", gap: "10px" }}>
                <span style={{ font: "italic 300 11px/1 var(--font-montserrat),sans-serif", letterSpacing: ".24em", color: "#B79BE0" }}>
                  {"OU ENTÃO"}
                </span>
                <p style={{ margin: "0", fontFamily: BODONI, fontStyle: "italic", fontSize: "26px", lineHeight: "1.25" }}>
                  {"“A paciente tem interesse, mas não fecha.”"}
                </p>
              </div>
              <div data-reveal="2" style={{ padding: "28px 0 0 0", display: "flex", flexDirection: "column", gap: "10px" }}>
                <span style={{ font: "italic 300 11px/1 var(--font-montserrat),sans-serif", letterSpacing: ".24em", color: "#B79BE0" }}>
                  {"A RESPOSTA"}
                </span>
                <p style={{ margin: "0", font: "300 16px/1.7 var(--font-montserrat),sans-serif", color: "rgba(246,244,241,.88)" }}>
                  {"Se a paciente tem interesse e não fecha, tem algo errado na consulta. Isso se aprende — assim como a técnica."}
                </p>
              </div>
            </div>
          </div>
        </section>
        <section data-screen-label="A3 Trilha" style={{ padding: "clamp(72px,10vw,120px) clamp(20px,5vw,72px)", background: "#F6F4F1", color: "#2A0F3D" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "40px" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <span data-reveal style={kicker}>
                {"A TRILHA MUNDO RP"}
              </span>
              <h2 data-split style={{ margin: "0", fontFamily: BODONI, fontWeight: "500", fontSize: "clamp(34px,4.8vw,64px)", lineHeight: "1", textTransform: "uppercase" }}>
                <W t="Do domínio da técnica " />
                <span className="wf" style={{ fontFamily: PINYON, textTransform: "none", fontWeight: "400", "--i": 4 } as CSSVars}>
                  {"ao"}
                </span>
                <W t=" negócio que cresce." i={5} />
              </h2>
            </div>
            <div data-stack style={{ display: "flex", flexDirection: "column", gap: "clamp(28px,9vh,96px)" }}>
              <div data-card className="stk" style={{ position: "sticky", top: stackTop(0), display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,300px),1fr))", gap: "24px clamp(24px,5vw,72px)", alignItems: "start", padding: "clamp(28px,4vw,48px) clamp(24px,4vw,48px)", border: "1px solid rgba(42,15,61,.2)", background: "#fff", boxShadow: "0 -28px 60px -44px rgba(42,15,61,.5)", overflow: "hidden" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                  <span style={{ font: "italic 300 13px/1 var(--font-montserrat),sans-serif", color: "#3D1A5B" }}>
                    {"01"}
                  </span>
                  <h3 style={{ margin: "0", fontFamily: BODONI, fontWeight: "500", fontSize: "clamp(30px,3.4vw,44px)", lineHeight: "1.05", textTransform: "uppercase" }}>
                    {"Cursos presenciais de HOF"}
                  </h3>
                  <p style={{ margin: "0", font: "italic 400 15px/1.5 var(--font-montserrat),sans-serif", color: "#111" }}>
                    {"Para dominar a técnica, com prática em paciente modelo."}
                  </p>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "20px", alignItems: "flex-start" }}>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                    {(cursos).map((c: any, $index: number) => (<Fragment key={$index}>
                      <span style={{ font: "500 11px/1.3 var(--font-montserrat),sans-serif", letterSpacing: ".06em", padding: "8px 12px", borderRadius: "999px", border: "1px solid rgba(42,15,61,.25)", color: "#2A0F3D" }}>
                        {c}
                      </span>
                    </Fragment>))}
                  </div>
                  <a className="hv8" href={waAlu} target="_blank" rel="noopener" style={{ display: "inline-flex", alignItems: "center", gap: "10px", minHeight: "48px", padding: "0 22px", borderRadius: "999px", border: "1px solid #2A0F3D", color: "#2A0F3D", font: "500 11px/1 var(--font-montserrat),sans-serif", letterSpacing: ".18em", transition: "background .3s,color .3s" }}>
                    {"QUERO SABER DAS TURMAS "}
                    <span className="arr">{"→"}</span>
                  </a>
                </div>
                <span className="shade" aria-hidden="true" />
              </div>
              <div data-card data-dark className="stk" style={{ position: "sticky", top: stackTop(1), display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,300px),1fr))", gap: "24px clamp(24px,5vw,72px)", alignItems: "start", padding: "clamp(40px,4vw,48px) clamp(24px,4vw,48px) clamp(28px,4vw,48px)", background: "#2A0F3D", color: "#F6F4F1", boxShadow: "0 -28px 60px -44px rgba(42,15,61,.6)", overflow: "hidden" }}>
                <span style={{ position: "absolute", top: "-1px", right: "24px", font: "600 10px/1 var(--font-montserrat),sans-serif", letterSpacing: ".2em", background: "#B79BE0", color: "#2A0F3D", padding: "8px 10px" }}>
                  {"PARA QUEM JÁ ATUA"}
                </span>
                <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                  <span style={{ font: "italic 300 13px/1 var(--font-montserrat),sans-serif", color: "#B79BE0" }}>
                    {"02"}
                  </span>
                  <h3 style={{ margin: "0", fontFamily: BODONI, fontWeight: "500", fontSize: "clamp(30px,3.4vw,44px)", lineHeight: "1.05", textTransform: "uppercase" }}>
                    {"Purple Mentory"}
                  </h3>
                  <p style={{ margin: "0", font: "italic 400 15px/1.5 var(--font-montserrat),sans-serif", color: "#B79BE0" }}>
                    {"Mentoria de negócio para quem já domina a técnica."}
                  </p>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "20px", alignItems: "flex-start" }}>
                  <div style={{ alignSelf: "stretch", display: "flex", flexDirection: "column", borderTop: "1px solid rgba(183,155,224,.3)" }}>
                    <span style={{ padding: "12px 0", borderBottom: "1px solid rgba(183,155,224,.3)", fontFamily: BODONI, fontSize: "20px", textTransform: "uppercase" }}>
                      {"Faturamento"}
                    </span>
                    <span style={{ padding: "12px 0", borderBottom: "1px solid rgba(183,155,224,.3)", fontFamily: BODONI, fontSize: "20px", textTransform: "uppercase" }}>
                      {"Posicionamento"}
                    </span>
                    <span style={{ padding: "12px 0", borderBottom: "1px solid rgba(183,155,224,.3)", fontFamily: BODONI, fontSize: "20px", textTransform: "uppercase" }}>
                      {"Crescimento"}
                    </span>
                  </div>
                  <a className="hv9" href={waMent} target="_blank" rel="noopener" style={{ display: "inline-flex", alignItems: "center", gap: "10px", minHeight: "48px", padding: "0 22px", borderRadius: "999px", background: "#B79BE0", color: "#2A0F3D", font: "600 11px/1 var(--font-montserrat),sans-serif", letterSpacing: ".18em", transition: "background .3s" }}>
                    {"QUERO A MENTORIA "}
                    <span className="arr">{"→"}</span>
                  </a>
                </div>
                <span className="shade" aria-hidden="true" />
              </div>
              <div data-card className="stk" style={{ position: "sticky", top: stackTop(2), display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,300px),1fr))", gap: "24px clamp(24px,5vw,72px)", alignItems: "start", padding: "clamp(28px,4vw,48px) clamp(24px,4vw,48px)", border: "1px solid rgba(42,15,61,.2)", background: "#fff", boxShadow: "0 -28px 60px -44px rgba(42,15,61,.5)", overflow: "hidden" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                  <span style={{ font: "italic 300 13px/1 var(--font-montserrat),sans-serif", color: "#3D1A5B" }}>
                    {"03"}
                  </span>
                  <h3 style={{ margin: "0", fontFamily: BODONI, fontWeight: "500", fontSize: "clamp(30px,3.4vw,44px)", lineHeight: "1.05", textTransform: "uppercase" }}>
                    {"Online"}
                  </h3>
                  <p style={{ margin: "0", font: "italic 400 15px/1.5 var(--font-montserrat),sans-serif", color: "#111" }}>
                    {"Para vender melhor, no seu ritmo."}
                  </p>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                  <div style={{ display: "flex", flexDirection: "column", borderTop: "1px solid rgba(42,15,61,.2)" }}>
                    <span style={{ padding: "12px 0", borderBottom: "1px solid rgba(42,15,61,.2)", fontFamily: BODONI, fontSize: "19px", lineHeight: "1.2", textTransform: "uppercase" }}>
                      {"Aprenda a ter um Instagram que vende"}
                    </span>
                    <span style={{ padding: "12px 0", borderBottom: "1px solid rgba(42,15,61,.2)", fontFamily: BODONI, fontSize: "19px", lineHeight: "1.2", textTransform: "uppercase" }}>
                      {"Consulta que vende"}
                    </span>
                  </div>
                  <p style={{ margin: "0", font: "400 13px/1.6 var(--font-montserrat),sans-serif", color: "#3D1A5B" }}>
                    {"E-books: Simplificando o Botox · Quebre o ciclo · Estética segura · Campanhas sazonais · Abrindo portas."}
                  </p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", alignItems: "center" }}>
                    <a className="hv10" href={waAlu} target="_blank" rel="noopener" style={{ display: "inline-flex", alignItems: "center", gap: "10px", minHeight: "48px", padding: "0 22px", borderRadius: "999px", border: "1px solid #2A0F3D", color: "#2A0F3D", font: "500 11px/1 var(--font-montserrat),sans-serif", letterSpacing: ".18em", transition: "background .3s,color .3s" }}>
                      {"VER CURSOS ONLINE "}
                      <span className="arr">{"→"}</span>
                    </a>
                    {(notes) && (<>
                      <span style={{ font: "600 10px/1.4 ui-monospace,Menlo,monospace", background: "#E3C04A", color: "#111", padding: "4px 7px", borderRadius: "2px" }}>
                        {"PENDENTE · link Kiwify"}
                      </span>
                    </>)}
                  </div>
                </div>
                <span className="shade" aria-hidden="true" />
              </div>
            </div>
          </div>
        </section>
        <section data-screen-label="A4 Feedback" style={{ padding: "clamp(72px,10vw,120px) clamp(20px,5vw,72px)", background: "#3D1A5B", color: "#F6F4F1" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,380px),1fr))", gap: "clamp(40px,6vw,80px)", alignItems: "start" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
              <span data-reveal style={{ ...kicker, color: "#B79BE0" }}>
                {"FEEDBACK DE ALUNAS"}
              </span>
              <h2 data-split style={{ margin: "0", fontFamily: BODONI, fontWeight: "500", fontSize: "clamp(36px,5vw,68px)", lineHeight: "1", textTransform: "uppercase" }}>
                <W t="Excelência não se explica. " />
                <span className="wf" style={{ fontFamily: PINYON, textTransform: "none", color: "#B79BE0", fontWeight: "400", "--i": 4 } as CSSVars}>
                  {"Se vive."}
                </span>
              </h2>
              <div style={{ display: "flex", flexDirection: "column", borderTop: "1px solid rgba(183,155,224,.3)" }}>
                <p data-reveal style={{ margin: "0", padding: "24px 0", borderBottom: "1px solid rgba(183,155,224,.3)", fontFamily: BODONI, fontStyle: "italic", fontSize: "clamp(22px,2.4vw,30px)", lineHeight: "1.3" }}>
                  {"“Aplicando suas dicas, só essa semana foram 10 atendimentos marcados.”"}
                </p>
                <p data-reveal="1" style={{ margin: "0", padding: "24px 0", borderBottom: "1px solid rgba(183,155,224,.3)", fontFamily: BODONI, fontStyle: "italic", fontSize: "clamp(22px,2.4vw,30px)", lineHeight: "1.3" }}>
                  {"“Fechei 13 pacientes novas.”"}
                </p>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {(notes) && (<>
                  <span style={{ font: "600 10px/1.4 ui-monospace,Menlo,monospace", background: "#E3C04A", color: "#111", padding: "4px 7px", borderRadius: "2px" }}>
                    {"VALIDAR · autorização dos prints"}
                  </span>
                </>)}
                {(notes) && (<>
                  <span style={{ font: "600 10px/1.4 ui-monospace,Menlo,monospace", background: "#E3C04A", color: "#111", padding: "4px 7px", borderRadius: "2px" }}>
                    {"PENDENTE · nº de alunas formadas"}
                  </span>
                </>)}
              </div>
            </div>
            <div data-reveal="1" style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) minmax(0,1fr)", gap: "12px" }}>
              <div data-speed=".04" style={{ aspectRatio: "9/16", background: "repeating-linear-gradient(135deg,rgba(183,155,224,.16) 0 10px,rgba(183,155,224,0) 10px 20px)", border: "1px solid rgba(183,155,224,.4)", display: "flex", alignItems: "flex-end", justifyContent: "center", padding: "16px", font: "500 10px/1.5 ui-monospace,Menlo,monospace", letterSpacing: ".08em", color: "#B79BE0", textAlign: "center" }}>
                {"PRINT WHATSAPP"}
                <br />
                {"ALUNA · 01"}
              </div>
              <div data-speed="-.05" style={{ aspectRatio: "9/16", marginTop: "48px", background: "repeating-linear-gradient(135deg,rgba(183,155,224,.16) 0 10px,rgba(183,155,224,0) 10px 20px)", border: "1px solid rgba(183,155,224,.4)", display: "flex", alignItems: "flex-end", justifyContent: "center", padding: "16px", font: "500 10px/1.5 ui-monospace,Menlo,monospace", letterSpacing: ".08em", color: "#B79BE0", textAlign: "center" }}>
                {"PRINT WHATSAPP"}
                <br />
                {"ALUNA · 02"}
              </div>
            </div>
          </div>
        </section>
      </div>)}
      <section data-screen-label="S Sobre" style={{ padding: "clamp(72px,10vw,120px) clamp(20px,5vw,72px)", background: "#F6F4F1", color: "#2A0F3D" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,380px),1fr))", gap: "clamp(40px,6vw,96px)", alignItems: "center" }}>
          <div data-speed=".06">
            <div data-clip style={{ width: "min(100%,440px)", aspectRatio: "4/5", borderRadius: "999px 999px 0 0", background: "repeating-linear-gradient(135deg,rgba(42,15,61,.07) 0 10px,rgba(42,15,61,0) 10px 20px)", border: "1px solid rgba(42,15,61,.18)", display: "flex", alignItems: "flex-end", justifyContent: "center", padding: "24px", font: "500 10px/1.5 ui-monospace,Menlo,monospace", letterSpacing: ".08em", color: "#3D1A5B", textAlign: "center" }}>
              {"RETRATO · BLUSA FLORAL"}
              <br />
              {"(estúdio, meio corpo)"}
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            <span data-reveal style={kicker}>
              {"QUEM É"}
            </span>
            <h2 data-split style={{ margin: "0", fontFamily: BODONI, fontWeight: "500", fontSize: "clamp(40px,5.4vw,72px)", lineHeight: ".95", textTransform: "uppercase" }}>
              <W t="Rafaela Purri " />
              <span className="wf" style={{ display: "block", fontFamily: PINYON, textTransform: "none", fontWeight: "400", fontSize: ".8em", color: "#3D1A5B", "--i": 2 } as CSSVars}>
                {"Rafa"}
              </span>
            </h2>
            <p data-reveal="2" style={{ margin: "0", font: "400 17px/1.7 var(--font-montserrat),sans-serif", color: "#111", maxWidth: "32em", textWrap: "pretty" }}>
              {"Biomédica esteta, CRBM-3 18357. Há cerca de cinco anos faz da harmonização facial o seu ofício — e, da formação de outras profissionais, a sua missão. Atende em clínica própria em Belo Horizonte, com equipe treinada por ela."}
            </p>
            <p data-reveal="3" style={{ margin: "0", fontFamily: BODONI, fontStyle: "italic", fontSize: "clamp(22px,2.4vw,30px)", lineHeight: "1.25", borderLeft: "0", paddingTop: "20px", borderTop: "1px solid rgba(42,15,61,.2)" }}>
              {"A profissional que ensina outras profissionais."}
            </p>
            <div data-reveal="4" style={{ display: "flex", flexWrap: "wrap", gap: "10px 20px", alignItems: "center", padding: "16px 20px", background: "#2A0F3D", color: "#F6F4F1" }}>
              <span style={{ font: "600 10px/1 var(--font-montserrat),sans-serif", letterSpacing: ".2em", color: "#B79BE0" }}>
                {"NOVA CLÍNICA EM BREVE"}
              </span>
              <span style={{ font: "300 14px/1.5 var(--font-montserrat),sans-serif" }}>
                {"Estamos em reforma para receber você ainda melhor."}
              </span>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {(notes) && (<>
                <span style={{ font: "600 10px/1.4 ui-monospace,Menlo,monospace", background: "#E3C04A", color: "#111", padding: "4px 7px", borderRadius: "2px" }}>
                  {"PENDENTE · ano exato de formatura"}
                </span>
              </>)}
              {(notes) && (<>
                <span style={{ font: "600 10px/1.4 ui-monospace,Menlo,monospace", background: "#E3C04A", color: "#111", padding: "4px 7px", borderRadius: "2px" }}>
                  {"PENDENTE · endereço & data da reinauguração"}
                </span>
              </>)}
            </div>
          </div>
        </div>
      </section>
      <section data-screen-label="F FAQ" style={{ padding: "clamp(72px,10vw,120px) clamp(20px,5vw,72px)", background: "#fff", color: "#2A0F3D" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,320px),1fr))", gap: "clamp(32px,6vw,96px)" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <span data-reveal style={kicker}>
              {faqKicker}
            </span>
            <h2 data-split style={{ margin: "0", fontFamily: BODONI, fontWeight: "500", fontSize: "clamp(36px,4.6vw,60px)", lineHeight: "1", textTransform: "uppercase" }}>
              <W t="Perguntas frequentes" />
            </h2>
          </div>
          <div key={faqKicker} className="ff" style={{ display: "flex", flexDirection: "column", borderTop: "1px solid rgba(42,15,61,.2)" }}>
            {(faqs).map((f: any, $index: number) => (<Fragment key={$index}>
              <div style={{ borderBottom: "1px solid rgba(42,15,61,.2)" }}>
                <button className="hv11" onClick={f.toggle} aria-expanded={f.open} style={{ all: "unset", cursor: "pointer", width: "100%", boxSizing: "border-box", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "20px", padding: "22px 0", minHeight: "44px", fontFamily: BODONI, fontWeight: "500", fontSize: "clamp(19px,2vw,24px)", lineHeight: "1.25", color: "#2A0F3D", transition: "color .3s" }}>
                  <span>
                    {f.q}
                  </span>
                  <span style={{ flex: "none", width: "32px", height: "32px", borderRadius: "999px", border: "1px solid rgba(42,15,61,.3)", display: "flex", alignItems: "center", justifyContent: "center", font: "300 18px/1 var(--font-montserrat),sans-serif", background: f.open ? "#2A0F3D" : "transparent", color: f.open ? "#F6F4F1" : "inherit", transition: "background .35s,color .35s" }}>
                    {f.icon}
                  </span>
                </button>
                {(f.open) && (<>
                  <p className="faq-a" style={{ margin: "0", padding: "0 48px 24px 0", font: "400 16px/1.7 var(--font-montserrat),sans-serif", color: "#111", textWrap: "pretty" }}>
                    {f.a}
                  </p>
                </>)}
              </div>
            </Fragment>))}
          </div>
        </div>
      </section>
      {(isPac) && (<div key="cta-pac" className="ff">
        <section data-screen-label="C CTA paciente" style={{ position: "relative", overflow: "hidden", padding: "clamp(88px,12vw,150px) clamp(20px,5vw,72px)", background: "radial-gradient(100% 90% at 50% 0%,#3D1A5B 0%,#2A0F3D 60%,#210a31 100%)", color: "#F6F4F1", textAlign: "center" }}>
          <span className="deco" data-speed="-.18" aria-hidden="true" style={{ left: "50%", top: "50%", marginLeft: "-.5em", marginTop: "-.5em", width: "1em", textAlign: "center", fontFamily: PINYON, fontSize: "clamp(320px,52vw,760px)", color: "rgba(183,155,224,.05)" }}>
            {"RP"}
          </span>
          <div style={{ position: "relative", maxWidth: "960px", margin: "0 auto", display: "flex", flexDirection: "column", alignItems: "center", gap: "28px" }}>
            <span data-reveal style={{ fontFamily: PINYON, fontSize: "48px", lineHeight: "1", color: "#B79BE0" }}>
              {"RP"}
            </span>
            <h2 data-split style={{ margin: "0", fontFamily: BODONI, fontWeight: "500", fontSize: "clamp(38px,6vw,84px)", lineHeight: "1", textTransform: "uppercase", textWrap: "balance" }}>
              <W t="Pequenos ajustes. Grandes mudanças." />
            </h2>
            <p data-reveal="3" style={{ margin: "0", fontFamily: BODONI, fontStyle: "italic", fontSize: "clamp(20px,2.2vw,28px)", color: "#B79BE0" }}>
              {"Na forma como você se enxerga."}
            </p>
            <div data-reveal="4">
              <a className="hv12" href={waPac} target="_blank" rel="noopener" style={{ display: "inline-flex", alignItems: "center", gap: "12px", minHeight: "56px", padding: "0 34px", borderRadius: "999px", background: "#B79BE0", color: "#2A0F3D", font: "600 12px/1 var(--font-montserrat),sans-serif", letterSpacing: ".2em", transition: "background .3s" }}>
                {"AGENDAR MINHA AVALIAÇÃO "}
                <span className="arr">{"→"}</span>
              </a>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", justifyContent: "center", alignItems: "center" }}>
              <p style={{ margin: "0", font: "300 14px/1.6 var(--font-montserrat),sans-serif", color: "rgba(246,244,241,.8)" }}>
                {"Quer participar como paciente modelo dos cursos? "}
                <a href="#" style={{ color: "#B79BE0", borderBottom: "1px solid rgba(183,155,224,.5)" }}>
                  {"Entre no grupo"}
                </a>
              </p>
              {(notes) && (<>
                <span style={{ font: "600 10px/1.4 ui-monospace,Menlo,monospace", background: "#E3C04A", color: "#111", padding: "4px 7px", borderRadius: "2px" }}>
                  {"PENDENTE · link do grupo"}
                </span>
              </>)}
            </div>
          </div>
        </section>
      </div>)}
      {(isAlu) && (<div key="cta-alu" className="ff">
        <section data-screen-label="C CTA aluna" style={{ padding: "clamp(88px,12vw,150px) clamp(20px,5vw,72px)", background: "#CFC3B5", color: "#2A0F3D", textAlign: "center" }}>
          <div style={{ maxWidth: "960px", margin: "0 auto", display: "flex", flexDirection: "column", alignItems: "center", gap: "28px" }}>
            <span data-reveal style={{ fontFamily: BODONI, fontWeight: "600", fontSize: "15px", letterSpacing: ".34em" }}>
              {"MUNDO RP"}
            </span>
            <h2 data-split style={{ margin: "0", fontFamily: BODONI, fontWeight: "500", fontSize: "clamp(34px,5.4vw,76px)", lineHeight: "1", textTransform: "uppercase", textWrap: "balance" }}>
              <W t="Sua técnica abre a porta. Sua estratégia enche a agenda." />
            </h2>
            <div data-reveal="3">
              <a className="hv13" href={waAlu} target="_blank" rel="noopener" style={{ display: "inline-flex", alignItems: "center", gap: "12px", minHeight: "56px", padding: "0 34px", borderRadius: "999px", background: "#2A0F3D", color: "#F6F4F1", font: "600 12px/1 var(--font-montserrat),sans-serif", letterSpacing: ".2em", transition: "background .3s" }}>
                {"QUERO CONHECER OS CURSOS "}
                <span className="arr" style={{ color: "#B79BE0" }}>
                  {"→"}
                </span>
              </a>
            </div>
          </div>
        </section>
      </div>)}
      <footer style={{ padding: "56px clamp(20px,5vw,72px) 112px", background: "#111", color: "rgba(246,244,241,.72)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "36px" }}>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "24px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
              <span style={{ fontFamily: PINYON, fontSize: "44px", lineHeight: "1", color: "#B79BE0" }}>
                {"RP"}
              </span>
              <span style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                <span style={{ font: "500 12px/1 var(--font-montserrat),sans-serif", letterSpacing: ".26em", color: "#F6F4F1" }}>
                  {"DRA. RAFAELA PURRI | BIOMÉDICA ESTETA"}
                </span>
                <span style={{ font: "italic 300 11px/1 var(--font-montserrat),sans-serif", letterSpacing: ".18em" }}>
                  {"CRBM-3 18357 · BELO HORIZONTE, MG"}
                </span>
              </span>
            </div>
            <nav style={{ display: "flex", flexWrap: "wrap", gap: "8px 28px", font: "500 11px/1 var(--font-montserrat),sans-serif", letterSpacing: ".18em" }}>
              <a className="hv14" href="https://www.instagram.com/drarafaelapurri/" target="_blank" rel="noopener" style={{ color: "#F6F4F1", padding: "12px 0" }}>
                {"INSTAGRAM"}
              </a>
              <a className="hv15" href={waPac} target="_blank" rel="noopener" style={{ color: "#F6F4F1", padding: "12px 0" }}>
                {"WHATSAPP"}
              </a>
              <button className="hv16" onClick={goAlu} style={{ all: "unset", cursor: "pointer", color: "#F6F4F1", padding: "12px 0", letterSpacing: ".18em" }}>
                {"MUNDO RP"}
              </button>
            </nav>
          </div>
          <p style={{ margin: "0", paddingTop: "24px", borderTop: "1px solid rgba(246,244,241,.14)", font: "300 12px/1.7 var(--font-montserrat),sans-serif", maxWidth: "60em" }}>
            {"Dra. Rafaela Purri é biomédica esteta, registrada no CRBM-3 sob o nº 18357. Os resultados dos procedimentos variam de pessoa para pessoa. As informações deste site não substituem a avaliação individual."}
          </p>
          <span style={{ font: "italic 300 10px/1 var(--font-montserrat),sans-serif", letterSpacing: ".2em", color: "rgba(246,244,241,.45)" }}>
            {"POSICIONAMENTO PROFISSIONAL POR GR ONE"}
          </span>
        </div>
      </footer>
      <a className="hv17" href={floatHref} target="_blank" rel="noopener" style={{ position: "fixed", right: "clamp(14px,3vw,28px)", bottom: "clamp(14px,3vw,28px)", zIndex: "30", display: "inline-flex", alignItems: "center", gap: "10px", minHeight: "52px", padding: "0 22px", borderRadius: "999px", background: "#B79BE0", color: "#2A0F3D", font: "600 11px/1 var(--font-montserrat),sans-serif", letterSpacing: ".16em", boxShadow: "0 24px 60px -24px rgba(42,15,61,.7)", transition: "transform .3s,background .3s" }}>
        <span style={{ width: "8px", height: "8px", borderRadius: "999px", background: "#2A0F3D" }} />
        {floatLabel}
      </a>
    </>
  );
}
