"use client";

// Markup convertido do Claude Design (Dra Rafaela Purri - Previa.dc.html).
// Textos de listas e contatos ficam em content/site.ts; comportamento em useLanding.ts.
import { Fragment } from "react";
import ImageSlot from "./ImageSlot";
import { useLanding } from "./useLanding";

export default function Landing() {
  const { aluBg, aluFg, cursos, faqKicker, faqs, floatHref, floatLabel, goAlu, goPac, headA, headB, isAlu, isPac, notes, pacBg, pacFg, procs, waAlu, waLaser, waMent, waPac } = useLanding();
  return (
    <>
      <header style={{ position: "sticky", top: "0", zIndex: "20", background: "rgba(42,15,61,.94)", backdropFilter: "blur(10px)", WebkitBackdropFilter: "blur(10px)", borderBottom: "1px solid rgba(183,155,224,.18)" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "10px clamp(16px,4vw,48px)", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px", flexWrap: "wrap" }}>
          <a href="#topo" style={{ display: "flex", alignItems: "center", gap: "12px", color: "#F6F4F1" }}>
            <span style={{ fontFamily: "var(--font-pinyon),cursive", fontSize: "34px", lineHeight: "1", color: "#B79BE0", paddingTop: "4px" }}>
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
            <button onClick={goPac} style={{ border: "0", cursor: "pointer", borderRadius: "999px", padding: "10px 16px", minHeight: "40px", font: "500 11px/1 var(--font-montserrat),sans-serif", letterSpacing: ".16em", background: `${pacBg}`, color: `${pacFg}`, transition: "background .3s,color .3s" }}>
              {"PACIENTE"}
            </button>
            <button onClick={goAlu} style={{ border: "0", cursor: "pointer", borderRadius: "999px", padding: "10px 16px", minHeight: "40px", font: "500 11px/1 var(--font-montserrat),sans-serif", letterSpacing: ".16em", background: `${aluBg}`, color: `${aluFg}`, transition: "background .3s,color .3s" }}>
              {"ALUNA"}
            </button>
          </div>
        </div>
      </header>
      <section id="topo" data-screen-label="01 Hero" style={{ background: "radial-gradient(120% 80% at 85% 0%,#3D1A5B 0%,#2A0F3D 55%,#210a31 100%)", color: "#F6F4F1", padding: "clamp(48px,8vw,96px) clamp(20px,5vw,72px) clamp(40px,6vw,72px)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,420px),1fr))", gap: "clamp(40px,6vw,80px)", alignItems: "end" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
            <span style={{ font: "italic 300 12px/1.4 var(--font-montserrat),sans-serif", letterSpacing: ".24em", color: "#B79BE0" }}>
              {"HARMONIZAÇÃO FACIAL · BELO HORIZONTE"}
            </span>
            {(headA) && (<>
              <h1 style={{ margin: "0", fontFamily: "var(--font-bodoni),serif", fontWeight: "500", fontSize: "clamp(48px,8.4vw,112px)", lineHeight: ".92", letterSpacing: "-.01em", textTransform: "uppercase", textWrap: "balance" }}>
                {"Nasci para fazer "}
                <span style={{ display: "block", fontFamily: "var(--font-pinyon),cursive", textTransform: "none", color: "#B79BE0", fontWeight: "400", fontSize: "1.12em", lineHeight: "1.05", letterSpacing: "0", marginTop: ".06em" }}>
                  {"Arte."}
                </span>
              </h1>
            </>)}
            {(headB) && (<>
              <h1 style={{ margin: "0", fontFamily: "var(--font-bodoni),serif", fontWeight: "500", fontSize: "clamp(44px,7.2vw,96px)", lineHeight: ".95", letterSpacing: "-.01em", textTransform: "uppercase", textWrap: "balance" }}>
                {"Um rosto "}
                <span style={{ fontFamily: "var(--font-pinyon),cursive", color: "#B79BE0", fontWeight: "400", textTransform: "none" }}>
                  {"&"}
                </span>
                {" um mundo de possibilidades."}
              </h1>
            </>)}
            <p style={{ margin: "0", maxWidth: "30em", font: "300 clamp(16px,1.5vw,19px)/1.6 var(--font-montserrat),sans-serif", color: "rgba(246,244,241,.86)", textWrap: "pretty" }}>
              {"Harmonização facial com precisão & planejamento. E a formação de profissionais que querem fazer o mesmo."}
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px 24px", font: "italic 400 11px/1.4 var(--font-montserrat),sans-serif", letterSpacing: ".2em", color: "#B79BE0" }}>
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
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div style={{ width: "min(100%,420px)", aspectRatio: "4/5", borderRadius: "999px 999px 0 0", background: "repeating-linear-gradient(135deg,rgba(183,155,224,.16) 0 10px,rgba(183,155,224,0) 10px 20px)", border: "1px solid rgba(183,155,224,.4)", display: "flex", alignItems: "flex-end", justifyContent: "center", padding: "24px", font: "500 10px/1.5 ui-monospace,Menlo,monospace", letterSpacing: ".08em", color: "#B79BE0", textAlign: "center" }}>
              {"RETRATO DE ESTÚDIO · VESTIDO PRETO"}
              <br />
              {"(foto profissional da cliente)"}
            </div>
          </div>
        </div>
        <div style={{ maxWidth: "1200px", margin: "clamp(48px,7vw,80px) auto 0", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,300px),1fr))", borderTop: "1px solid rgba(183,155,224,.3)" }}>
          <button className="hv1" onClick={goPac} style={{ all: "unset", cursor: "pointer", display: "flex", flexDirection: "column", gap: "14px", padding: "32px 28px 36px 0", borderBottom: "1px solid rgba(183,155,224,.3)", transition: "padding .35s,background .35s" }}>
            <span style={{ font: "italic 300 11px/1 var(--font-montserrat),sans-serif", letterSpacing: ".24em", color: "#B79BE0" }}>
              {"01 · PARA PACIENTES"}
            </span>
            <span style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "16px", fontFamily: "var(--font-bodoni),serif", fontSize: "clamp(28px,3.4vw,44px)", lineHeight: "1", textTransform: "uppercase", color: "#F6F4F1" }}>
              {"Quero ser paciente "}
              <span style={{ fontFamily: "var(--font-montserrat),sans-serif", fontWeight: "300", color: "#B79BE0" }}>
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
            <span style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "16px", fontFamily: "var(--font-bodoni),serif", fontSize: "clamp(28px,3.4vw,44px)", lineHeight: "1", textTransform: "uppercase", color: "#F6F4F1" }}>
              {"Quero ser aluna "}
              <span style={{ fontFamily: "var(--font-montserrat),sans-serif", fontWeight: "300", color: "#B79BE0" }}>
                {"→"}
              </span>
            </span>
            <span style={{ font: "300 15px/1.5 var(--font-montserrat),sans-serif", color: "rgba(246,244,241,.78)" }}>
              {"Técnica, prática & visão de negócio."}
            </span>
          </button>
        </div>
      </section>
      <div id="conteudo" />
      {(isPac) && (<>
        <section data-screen-label="P1 Manifesto" style={{ padding: "clamp(72px,10vw,120px) clamp(20px,5vw,72px)", background: "#F6F4F1", color: "#2A0F3D" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,420px),1fr))", gap: "clamp(32px,6vw,96px)", alignItems: "end" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <span style={{ font: "italic 400 11px/1 var(--font-montserrat),sans-serif", letterSpacing: ".24em", color: "#3D1A5B" }}>
                {"PARA PACIENTES"}
              </span>
              <h2 style={{ margin: "0", fontFamily: "var(--font-bodoni),serif", fontWeight: "500", fontSize: "clamp(38px,5.6vw,76px)", lineHeight: ".98", textTransform: "uppercase", textWrap: "balance" }}>
                {"O segredo nunca esteve na quantidade."}
              </h2>
              <p style={{ margin: "0", fontFamily: "var(--font-bodoni),serif", fontStyle: "italic", fontSize: "clamp(24px,2.6vw,34px)", lineHeight: "1.2", color: "#3D1A5B" }}>
                {"Está no planejamento."}
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "28px", alignItems: "flex-start" }}>
              <p style={{ margin: "0", font: "400 17px/1.7 var(--font-montserrat),sans-serif", color: "#111", maxWidth: "32em", textWrap: "pretty" }}>
                {"Cada rosto pede um olhar, um planejamento & escolhas diferentes. Por isso, todo atendimento começa por uma avaliação facial completa — para tratar o que precisa, sem perder o que já é seu."}
              </p>
              <a className="hv3" href={waPac} target="_blank" rel="noopener" style={{ display: "inline-flex", alignItems: "center", gap: "12px", minHeight: "52px", padding: "0 28px", borderRadius: "999px", background: "#2A0F3D", color: "#F6F4F1", font: "500 12px/1 var(--font-montserrat),sans-serif", letterSpacing: ".18em", transition: "background .3s" }}>
                {"AGENDAR MINHA AVALIAÇÃO "}
                <span style={{ color: "#B79BE0" }}>
                  {"→"}
                </span>
              </a>
            </div>
          </div>
        </section>
        <section data-screen-label="P2 Metodo" style={{ padding: "0 clamp(20px,5vw,72px) clamp(72px,10vw,120px)", background: "#F6F4F1", color: "#2A0F3D" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,280px),1fr))", borderTop: "1px solid rgba(42,15,61,.2)" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "14px", padding: "36px 28px 0 0" }}>
              <span style={{ fontFamily: "var(--font-bodoni),serif", fontSize: "44px", lineHeight: "1", color: "#B79BE0" }}>
                {"I"}
              </span>
              <h3 style={{ margin: "0", fontFamily: "var(--font-bodoni),serif", fontWeight: "500", fontSize: "26px", textTransform: "uppercase" }}>
                {"Avaliação"}
              </h3>
              <p style={{ margin: "0", font: "400 15px/1.65 var(--font-montserrat),sans-serif", color: "#111" }}>
                {"Um olhar atento para o rosto como um todo: proporções, perfil & expressão."}
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "14px", padding: "36px 28px 0 0" }}>
              <span style={{ fontFamily: "var(--font-bodoni),serif", fontSize: "44px", lineHeight: "1", color: "#B79BE0" }}>
                {"II"}
              </span>
              <h3 style={{ margin: "0", fontFamily: "var(--font-bodoni),serif", fontWeight: "500", fontSize: "26px", textTransform: "uppercase" }}>
                {"Planejamento"}
              </h3>
              <p style={{ margin: "0", font: "400 15px/1.65 var(--font-montserrat),sans-serif", color: "#111" }}>
                {"Um plano estratégico, do ajuste pontual ao full face, com a indicação honesta do que o seu rosto pede."}
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "14px", padding: "36px 28px 0 0" }}>
              <span style={{ fontFamily: "var(--font-bodoni),serif", fontSize: "44px", lineHeight: "1", color: "#B79BE0" }}>
                {"III"}
              </span>
              <h3 style={{ margin: "0", fontFamily: "var(--font-bodoni),serif", fontWeight: "500", fontSize: "26px", textTransform: "uppercase" }}>
                {"Precisão"}
              </h3>
              <p style={{ margin: "0", font: "400 15px/1.65 var(--font-montserrat),sans-serif", color: "#111" }}>
                {"Execução técnica com foco em naturalidade. Pequenos ajustes, grandes mudanças na forma como você se enxerga."}
              </p>
            </div>
          </div>
        </section>
        <section data-screen-label="P3 12ml" style={{ padding: "clamp(80px,11vw,140px) clamp(20px,5vw,72px)", background: "#2A0F3D", color: "#F6F4F1" }}>
          <div style={{ maxWidth: "1000px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "36px" }}>
            <span style={{ fontFamily: "var(--font-pinyon),cursive", fontSize: "56px", lineHeight: ".6", color: "#B79BE0" }}>
              {"“"}
            </span>
            <p style={{ margin: "0", fontFamily: "var(--font-bodoni),serif", fontWeight: "500", fontSize: "clamp(36px,6vw,84px)", lineHeight: "1", textTransform: "uppercase", textWrap: "balance" }}>
              {"Não se assuste se eu te indicar 12 ml."}
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,300px),1fr))", gap: "24px 64px", borderTop: "1px solid rgba(183,155,224,.3)", paddingTop: "28px" }}>
              <p style={{ margin: "0", fontFamily: "var(--font-bodoni),serif", fontStyle: "italic", fontSize: "24px", lineHeight: "1.3", color: "#B79BE0" }}>
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
            <div style={{ display: "flex", flexDirection: "column", gap: "20px", alignSelf: "start", position: "sticky", top: "96px" }}>
              <span style={{ font: "italic 400 11px/1 var(--font-montserrat),sans-serif", letterSpacing: ".24em", color: "#3D1A5B" }}>
                {"PROCEDIMENTOS"}
              </span>
              <h2 style={{ margin: "0", fontFamily: "var(--font-bodoni),serif", fontWeight: "500", fontSize: "clamp(36px,4.6vw,60px)", lineHeight: "1", textTransform: "uppercase" }}>
                {"Cada rosto pede "}
                <span style={{ fontFamily: "var(--font-pinyon),cursive", textTransform: "none", color: "#3D1A5B", fontWeight: "400" }}>
                  {"o seu"}
                </span>
                {" plano."}
              </h2>
              <p style={{ margin: "0", font: "400 15px/1.65 var(--font-montserrat),sans-serif", color: "#111", maxWidth: "26em" }}>
                {"Indicações definidas somente após avaliação. Investimento sob consulta."}
              </p>
              <a className="hv4" href={waPac} target="_blank" rel="noopener" style={{ alignSelf: "flex-start", display: "inline-flex", alignItems: "center", gap: "12px", minHeight: "48px", padding: "0 24px", borderRadius: "999px", border: "1px solid #2A0F3D", color: "#2A0F3D", font: "500 11px/1 var(--font-montserrat),sans-serif", letterSpacing: ".18em", transition: "background .3s,color .3s" }}>
                {"AGENDAR AVALIAÇÃO →"}
              </a>
              {(notes) && (<>
                <span style={{ alignSelf: "flex-start", font: "600 10px/1.4 ui-monospace,Menlo,monospace", letterSpacing: ".04em", background: "#E3C04A", color: "#111", padding: "4px 7px", borderRadius: "2px" }}>
                  {"VALIDAR · lista de procedimentos & anúncio de rinomodelação (CFBM)"}
                </span>
              </>)}
            </div>
            <div style={{ display: "flex", flexDirection: "column", borderTop: "1px solid rgba(42,15,61,.2)" }}>
              {(procs).map((p: any, $index: number) => (<Fragment key={$index}>
                <div className="hv5" style={{ display: "grid", gridTemplateColumns: "44px 1fr", gap: "4px 16px", padding: "22px 0", borderBottom: "1px solid rgba(42,15,61,.2)", transition: "padding .3s,background .3s" }}>
                  <span style={{ font: "italic 300 13px/1.9 var(--font-montserrat),sans-serif", color: "#3D1A5B" }}>
                    {p.n}
                  </span>
                  <span style={{ fontFamily: "var(--font-bodoni),serif", fontWeight: "500", fontSize: "clamp(22px,2.4vw,30px)", lineHeight: "1.1", textTransform: "uppercase" }}>
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
                <span style={{ font: "italic 400 11px/1 var(--font-montserrat),sans-serif", letterSpacing: ".24em", color: "#3D1A5B" }}>
                  {"RESULTADOS"}
                </span>
                <h2 style={{ margin: "0", fontFamily: "var(--font-bodoni),serif", fontWeight: "500", fontSize: "clamp(36px,5vw,68px)", lineHeight: "1", textTransform: "uppercase" }}>
                  {"Naturalidade "}
                  <span style={{ fontFamily: "var(--font-pinyon),cursive", textTransform: "none", fontWeight: "400" }}>
                    {"&"}
                  </span>
                  {" precisão."}
                </h2>
              </div>
              <p style={{ margin: "0", maxWidth: "26em", font: "400 15px/1.65 var(--font-montserrat),sans-serif", color: "#111" }}>
                {"Quando bem feitos, os procedimentos não mudam quem você é. Ajudam a preservar o que você já tem de bonito."}
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,260px),1fr))", gap: "16px" }}>
              <div style={{ aspectRatio: "4/5", background: "repeating-linear-gradient(135deg,rgba(42,15,61,.07) 0 10px,rgba(42,15,61,0) 10px 20px)", border: "1px solid rgba(42,15,61,.18)", display: "flex", alignItems: "flex-end", justifyContent: "center", padding: "20px", font: "500 10px/1.5 ui-monospace,Menlo,monospace", letterSpacing: ".08em", color: "#3D1A5B", textAlign: "center" }}>
                {"ANTES & DEPOIS · LÁBIOS"}
                <br />
                {"(perfil, touca de cetim lilás)"}
              </div>
              <div style={{ aspectRatio: "4/5", background: "repeating-linear-gradient(135deg,rgba(42,15,61,.07) 0 10px,rgba(42,15,61,0) 10px 20px)", border: "1px solid rgba(42,15,61,.18)", display: "flex", alignItems: "flex-end", justifyContent: "center", padding: "20px", font: "500 10px/1.5 ui-monospace,Menlo,monospace", letterSpacing: ".08em", color: "#3D1A5B", textAlign: "center" }}>
                {"ANTES & DEPOIS · CONTORNO"}
                <br />
                {"(frente, touca de cetim lilás)"}
              </div>
              <div style={{ aspectRatio: "4/5", background: "repeating-linear-gradient(135deg,rgba(42,15,61,.07) 0 10px,rgba(42,15,61,0) 10px 20px)", border: "1px solid rgba(42,15,61,.18)", display: "flex", alignItems: "flex-end", justifyContent: "center", padding: "20px", font: "500 10px/1.5 ui-monospace,Menlo,monospace", letterSpacing: ".08em", color: "#3D1A5B", textAlign: "center" }}>
                {"ANTES & DEPOIS · PERFIL"}
                <br />
                {"(perfiloplastia, touca lilás)"}
              </div>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", alignItems: "center", justifyContent: "space-between" }}>
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
          <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "24px" }}>
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "16px 28px" }}>
              <span style={{ font: "600 11px/1 var(--font-montserrat),sans-serif", letterSpacing: ".2em", background: "#E3C04A", color: "#111", padding: "9px 14px", borderRadius: "999px" }}>
                {"AGENDA ABERTA"}
              </span>
              <span style={{ fontFamily: "var(--font-bodoni),serif", fontWeight: "500", fontSize: "clamp(26px,3.6vw,44px)", lineHeight: "1", textTransform: "uppercase" }}>
                {"Laser Day · 21 "}
                <span style={{ fontFamily: "var(--font-pinyon),cursive", textTransform: "none", color: "#B79BE0", fontWeight: "400" }}>
                  {"&"}
                </span>
                {" 22 de outubro"}
              </span>
            </div>
            <a className="hv6" href={waLaser} target="_blank" rel="noopener" style={{ display: "inline-flex", alignItems: "center", gap: "12px", minHeight: "50px", padding: "0 26px", borderRadius: "999px", background: "#B79BE0", color: "#2A0F3D", font: "600 11px/1 var(--font-montserrat),sans-serif", letterSpacing: ".18em", transition: "background .3s" }}>
              {"RESERVAR MEU HORÁRIO →"}
            </a>
          </div>
        </section>
      </>)}
      {(isAlu) && (<>
        <section data-screen-label="A1 Mundo RP" style={{ padding: "clamp(72px,10vw,120px) clamp(20px,5vw,72px)", background: "#CFC3B5", color: "#2A0F3D" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,400px),1fr))", gap: "clamp(40px,6vw,96px)", alignItems: "center" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "24px", alignItems: "flex-start" }}>
              <span style={{ fontFamily: "var(--font-bodoni),serif", fontWeight: "600", fontSize: "15px", letterSpacing: ".34em" }}>
                {"MUNDO RP"}
              </span>
              <h2 style={{ margin: "0", fontFamily: "var(--font-bodoni),serif", fontWeight: "500", fontSize: "clamp(38px,5.4vw,74px)", lineHeight: ".98", textTransform: "uppercase", textWrap: "balance" }}>
                {"Tudo para se tornar uma profissional completa."}
              </h2>
              <p style={{ margin: "0", font: "italic 400 17px/1.7 var(--font-montserrat),sans-serif", color: "#111", maxWidth: "32em", textWrap: "pretty" }}>
                {"Um ecossistema de formação que une técnica, prática & visão de crescimento — criado por quem atende na própria clínica e sabe o que enche uma agenda."}
              </p>
              <a className="hv7" href={waAlu} target="_blank" rel="noopener" style={{ display: "inline-flex", alignItems: "center", gap: "12px", minHeight: "52px", padding: "0 28px", borderRadius: "999px", background: "#2A0F3D", color: "#F6F4F1", font: "500 12px/1 var(--font-montserrat),sans-serif", letterSpacing: ".18em", transition: "background .3s" }}>
                {"QUERO CONHECER OS CURSOS "}
                <span style={{ color: "#B79BE0" }}>
                  {"→"}
                </span>
              </a>
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div style={{ width: "min(100%,400px)", aspectRatio: "4/5", borderRadius: "999px 999px 0 0", background: "#E4DBD0", border: "1px solid rgba(42,15,61,.15)", display: "flex", alignItems: "flex-end", justifyContent: "center", padding: "24px", font: "500 10px/1.5 ui-monospace,Menlo,monospace", letterSpacing: ".08em", color: "#3D1A5B", textAlign: "center", backgroundImage: "repeating-linear-gradient(135deg,rgba(42,15,61,.06) 0 10px,rgba(42,15,61,0) 10px 20px)" }}>
                {"RAFA EM AULA · ARCO & PEDESTAL"}
                <br />
                {"(foto do Mundo RP)"}
              </div>
            </div>
          </div>
        </section>
        <section data-screen-label="A2 Estrategia" style={{ padding: "clamp(80px,11vw,140px) clamp(20px,5vw,72px)", background: "#2A0F3D", color: "#F6F4F1" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "48px" }}>
            <h2 style={{ margin: "0", maxWidth: "14em", fontFamily: "var(--font-bodoni),serif", fontWeight: "500", fontSize: "clamp(36px,5.8vw,80px)", lineHeight: "1", textTransform: "uppercase", textWrap: "balance" }}>
              {"O problema não é o algoritmo. "}
              <span style={{ color: "#B79BE0" }}>
                {"É a falta de estratégia."}
              </span>
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,280px),1fr))", gap: "0", borderTop: "1px solid rgba(183,155,224,.3)" }}>
              <div style={{ padding: "28px 28px 0 0", display: "flex", flexDirection: "column", gap: "10px" }}>
                <span style={{ font: "italic 300 11px/1 var(--font-montserrat),sans-serif", letterSpacing: ".24em", color: "#B79BE0" }}>
                  {"VOCÊ JÁ PENSOU"}
                </span>
                <p style={{ margin: "0", fontFamily: "var(--font-bodoni),serif", fontStyle: "italic", fontSize: "26px", lineHeight: "1.25" }}>
                  {"“Tenho seguidores, mas não vendo.”"}
                </p>
              </div>
              <div style={{ padding: "28px 28px 0 0", display: "flex", flexDirection: "column", gap: "10px" }}>
                <span style={{ font: "italic 300 11px/1 var(--font-montserrat),sans-serif", letterSpacing: ".24em", color: "#B79BE0" }}>
                  {"OU ENTÃO"}
                </span>
                <p style={{ margin: "0", fontFamily: "var(--font-bodoni),serif", fontStyle: "italic", fontSize: "26px", lineHeight: "1.25" }}>
                  {"“A paciente tem interesse, mas não fecha.”"}
                </p>
              </div>
              <div style={{ padding: "28px 0 0 0", display: "flex", flexDirection: "column", gap: "10px" }}>
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
              <span style={{ font: "italic 400 11px/1 var(--font-montserrat),sans-serif", letterSpacing: ".24em", color: "#3D1A5B" }}>
                {"A TRILHA MUNDO RP"}
              </span>
              <h2 style={{ margin: "0", fontFamily: "var(--font-bodoni),serif", fontWeight: "500", fontSize: "clamp(34px,4.8vw,64px)", lineHeight: "1", textTransform: "uppercase" }}>
                {"Do domínio da técnica "}
                <span style={{ fontFamily: "var(--font-pinyon),cursive", textTransform: "none", fontWeight: "400" }}>
                  {"ao"}
                </span>
                {" negócio que cresce."}
              </h2>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,320px),1fr))", gap: "16px", alignItems: "stretch" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "20px", padding: "32px 28px", border: "1px solid rgba(42,15,61,.2)", background: "#fff" }}>
                <span style={{ font: "italic 300 13px/1 var(--font-montserrat),sans-serif", color: "#3D1A5B" }}>
                  {"01"}
                </span>
                <h3 style={{ margin: "0", fontFamily: "var(--font-bodoni),serif", fontWeight: "500", fontSize: "30px", lineHeight: "1.05", textTransform: "uppercase" }}>
                  {"Cursos presenciais de HOF"}
                </h3>
                <p style={{ margin: "0", font: "italic 400 15px/1.5 var(--font-montserrat),sans-serif", color: "#111" }}>
                  {"Para dominar a técnica, com prática em paciente modelo."}
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  {(cursos).map((c: any, $index: number) => (<Fragment key={$index}>
                    <span style={{ font: "500 11px/1.3 var(--font-montserrat),sans-serif", letterSpacing: ".06em", padding: "8px 12px", borderRadius: "999px", border: "1px solid rgba(42,15,61,.25)", color: "#2A0F3D" }}>
                      {c}
                    </span>
                  </Fragment>))}
                </div>
                <a className="hv8" href={waAlu} target="_blank" rel="noopener" style={{ marginTop: "auto", alignSelf: "flex-start", display: "inline-flex", alignItems: "center", minHeight: "48px", padding: "0 22px", borderRadius: "999px", border: "1px solid #2A0F3D", color: "#2A0F3D", font: "500 11px/1 var(--font-montserrat),sans-serif", letterSpacing: ".18em", transition: "background .3s,color .3s" }}>
                  {"QUERO SABER DAS TURMAS →"}
                </a>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "20px", padding: "32px 28px", background: "#2A0F3D", color: "#F6F4F1", position: "relative" }}>
                <span style={{ position: "absolute", top: "-1px", right: "24px", font: "600 10px/1 var(--font-montserrat),sans-serif", letterSpacing: ".2em", background: "#B79BE0", color: "#2A0F3D", padding: "8px 10px" }}>
                  {"PARA QUEM JÁ ATUA"}
                </span>
                <span style={{ font: "italic 300 13px/1 var(--font-montserrat),sans-serif", color: "#B79BE0" }}>
                  {"02"}
                </span>
                <h3 style={{ margin: "0", fontFamily: "var(--font-bodoni),serif", fontWeight: "500", fontSize: "30px", lineHeight: "1.05", textTransform: "uppercase" }}>
                  {"Purple Mentory"}
                </h3>
                <p style={{ margin: "0", font: "italic 400 15px/1.5 var(--font-montserrat),sans-serif", color: "#B79BE0" }}>
                  {"Mentoria de negócio para quem já domina a técnica."}
                </p>
                <div style={{ display: "flex", flexDirection: "column", borderTop: "1px solid rgba(183,155,224,.3)" }}>
                  <span style={{ padding: "12px 0", borderBottom: "1px solid rgba(183,155,224,.3)", fontFamily: "var(--font-bodoni),serif", fontSize: "20px", textTransform: "uppercase" }}>
                    {"Faturamento"}
                  </span>
                  <span style={{ padding: "12px 0", borderBottom: "1px solid rgba(183,155,224,.3)", fontFamily: "var(--font-bodoni),serif", fontSize: "20px", textTransform: "uppercase" }}>
                    {"Posicionamento"}
                  </span>
                  <span style={{ padding: "12px 0", borderBottom: "1px solid rgba(183,155,224,.3)", fontFamily: "var(--font-bodoni),serif", fontSize: "20px", textTransform: "uppercase" }}>
                    {"Crescimento"}
                  </span>
                </div>
                <a className="hv9" href={waMent} target="_blank" rel="noopener" style={{ marginTop: "auto", alignSelf: "flex-start", display: "inline-flex", alignItems: "center", minHeight: "48px", padding: "0 22px", borderRadius: "999px", background: "#B79BE0", color: "#2A0F3D", font: "600 11px/1 var(--font-montserrat),sans-serif", letterSpacing: ".18em", transition: "background .3s" }}>
                  {"QUERO A MENTORIA →"}
                </a>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "20px", padding: "32px 28px", border: "1px solid rgba(42,15,61,.2)", background: "#fff" }}>
                <span style={{ font: "italic 300 13px/1 var(--font-montserrat),sans-serif", color: "#3D1A5B" }}>
                  {"03"}
                </span>
                <h3 style={{ margin: "0", fontFamily: "var(--font-bodoni),serif", fontWeight: "500", fontSize: "30px", lineHeight: "1.05", textTransform: "uppercase" }}>
                  {"Online"}
                </h3>
                <p style={{ margin: "0", font: "italic 400 15px/1.5 var(--font-montserrat),sans-serif", color: "#111" }}>
                  {"Para vender melhor, no seu ritmo."}
                </p>
                <div style={{ display: "flex", flexDirection: "column", borderTop: "1px solid rgba(42,15,61,.2)" }}>
                  <span style={{ padding: "12px 0", borderBottom: "1px solid rgba(42,15,61,.2)", fontFamily: "var(--font-bodoni),serif", fontSize: "19px", lineHeight: "1.2", textTransform: "uppercase" }}>
                    {"Aprenda a ter um Instagram que vende"}
                  </span>
                  <span style={{ padding: "12px 0", borderBottom: "1px solid rgba(42,15,61,.2)", fontFamily: "var(--font-bodoni),serif", fontSize: "19px", lineHeight: "1.2", textTransform: "uppercase" }}>
                    {"Consulta que vende"}
                  </span>
                </div>
                <p style={{ margin: "0", font: "400 13px/1.6 var(--font-montserrat),sans-serif", color: "#3D1A5B" }}>
                  {"E-books: Simplificando o Botox · Quebre o ciclo · Estética segura · Campanhas sazonais · Abrindo portas."}
                </p>
                <div style={{ marginTop: "auto", display: "flex", flexWrap: "wrap", gap: "10px", alignItems: "center" }}>
                  <a className="hv10" href={waAlu} target="_blank" rel="noopener" style={{ display: "inline-flex", alignItems: "center", minHeight: "48px", padding: "0 22px", borderRadius: "999px", border: "1px solid #2A0F3D", color: "#2A0F3D", font: "500 11px/1 var(--font-montserrat),sans-serif", letterSpacing: ".18em", transition: "background .3s,color .3s" }}>
                    {"VER CURSOS ONLINE →"}
                  </a>
                  {(notes) && (<>
                    <span style={{ font: "600 10px/1.4 ui-monospace,Menlo,monospace", background: "#E3C04A", color: "#111", padding: "4px 7px", borderRadius: "2px" }}>
                      {"PENDENTE · link Kiwify"}
                    </span>
                  </>)}
                </div>
              </div>
            </div>
          </div>
        </section>
        <section data-screen-label="A4 Feedback" style={{ padding: "clamp(72px,10vw,120px) clamp(20px,5vw,72px)", background: "#3D1A5B", color: "#F6F4F1" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,380px),1fr))", gap: "clamp(40px,6vw,80px)", alignItems: "start" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
              <span style={{ font: "italic 400 11px/1 var(--font-montserrat),sans-serif", letterSpacing: ".24em", color: "#B79BE0" }}>
                {"FEEDBACK DE ALUNAS"}
              </span>
              <h2 style={{ margin: "0", fontFamily: "var(--font-bodoni),serif", fontWeight: "500", fontSize: "clamp(36px,5vw,68px)", lineHeight: "1", textTransform: "uppercase" }}>
                {"Excelência não se explica. "}
                <span style={{ fontFamily: "var(--font-pinyon),cursive", textTransform: "none", color: "#B79BE0", fontWeight: "400" }}>
                  {"Se vive."}
                </span>
              </h2>
              <div style={{ display: "flex", flexDirection: "column", borderTop: "1px solid rgba(183,155,224,.3)" }}>
                <p style={{ margin: "0", padding: "24px 0", borderBottom: "1px solid rgba(183,155,224,.3)", fontFamily: "var(--font-bodoni),serif", fontStyle: "italic", fontSize: "clamp(22px,2.4vw,30px)", lineHeight: "1.3" }}>
                  {"“Aplicando suas dicas, só essa semana foram 10 atendimentos marcados.”"}
                </p>
                <p style={{ margin: "0", padding: "24px 0", borderBottom: "1px solid rgba(183,155,224,.3)", fontFamily: "var(--font-bodoni),serif", fontStyle: "italic", fontSize: "clamp(22px,2.4vw,30px)", lineHeight: "1.3" }}>
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
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
              <div style={{ aspectRatio: "9/16", background: "repeating-linear-gradient(135deg,rgba(183,155,224,.16) 0 10px,rgba(183,155,224,0) 10px 20px)", border: "1px solid rgba(183,155,224,.4)", display: "flex", alignItems: "flex-end", justifyContent: "center", padding: "16px", font: "500 10px/1.5 ui-monospace,Menlo,monospace", letterSpacing: ".08em", color: "#B79BE0", textAlign: "center" }}>
                {"PRINT WHATSAPP"}
                <br />
                {"ALUNA · 01"}
              </div>
              <div style={{ aspectRatio: "9/16", marginTop: "48px", background: "repeating-linear-gradient(135deg,rgba(183,155,224,.16) 0 10px,rgba(183,155,224,0) 10px 20px)", border: "1px solid rgba(183,155,224,.4)", display: "flex", alignItems: "flex-end", justifyContent: "center", padding: "16px", font: "500 10px/1.5 ui-monospace,Menlo,monospace", letterSpacing: ".08em", color: "#B79BE0", textAlign: "center" }}>
                {"PRINT WHATSAPP"}
                <br />
                {"ALUNA · 02"}
              </div>
            </div>
          </div>
        </section>
      </>)}
      <section data-screen-label="S Sobre" style={{ padding: "clamp(72px,10vw,120px) clamp(20px,5vw,72px)", background: "#F6F4F1", color: "#2A0F3D" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,380px),1fr))", gap: "clamp(40px,6vw,96px)", alignItems: "center" }}>
          <div style={{ width: "min(100%,440px)", aspectRatio: "4/5", borderRadius: "999px 999px 0 0", background: "repeating-linear-gradient(135deg,rgba(42,15,61,.07) 0 10px,rgba(42,15,61,0) 10px 20px)", border: "1px solid rgba(42,15,61,.18)", display: "flex", alignItems: "flex-end", justifyContent: "center", padding: "24px", font: "500 10px/1.5 ui-monospace,Menlo,monospace", letterSpacing: ".08em", color: "#3D1A5B", textAlign: "center" }}>
            {"RETRATO · BLUSA FLORAL"}
            <br />
            {"(estúdio, meio corpo)"}
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            <span style={{ font: "italic 400 11px/1 var(--font-montserrat),sans-serif", letterSpacing: ".24em", color: "#3D1A5B" }}>
              {"QUEM É"}
            </span>
            <h2 style={{ margin: "0", fontFamily: "var(--font-bodoni),serif", fontWeight: "500", fontSize: "clamp(40px,5.4vw,72px)", lineHeight: ".95", textTransform: "uppercase" }}>
              {"Rafaela Purri "}
              <span style={{ display: "block", fontFamily: "var(--font-pinyon),cursive", textTransform: "none", fontWeight: "400", fontSize: ".8em", color: "#3D1A5B" }}>
                {"Rafa"}
              </span>
            </h2>
            <p style={{ margin: "0", font: "400 17px/1.7 var(--font-montserrat),sans-serif", color: "#111", maxWidth: "32em", textWrap: "pretty" }}>
              {"Biomédica esteta, CRBM-3 18357. Há cerca de cinco anos faz da harmonização facial o seu ofício — e, da formação de outras profissionais, a sua missão. Atende em clínica própria em Belo Horizonte, com equipe treinada por ela."}
            </p>
            <p style={{ margin: "0", fontFamily: "var(--font-bodoni),serif", fontStyle: "italic", fontSize: "clamp(22px,2.4vw,30px)", lineHeight: "1.25", borderLeft: "0", paddingTop: "20px", borderTop: "1px solid rgba(42,15,61,.2)" }}>
              {"A profissional que ensina outras profissionais."}
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px 20px", alignItems: "center", padding: "16px 20px", background: "#2A0F3D", color: "#F6F4F1" }}>
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
            <span style={{ font: "italic 400 11px/1 var(--font-montserrat),sans-serif", letterSpacing: ".24em", color: "#3D1A5B" }}>
              {faqKicker}
            </span>
            <h2 style={{ margin: "0", fontFamily: "var(--font-bodoni),serif", fontWeight: "500", fontSize: "clamp(36px,4.6vw,60px)", lineHeight: "1", textTransform: "uppercase" }}>
              {"Perguntas frequentes"}
            </h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", borderTop: "1px solid rgba(42,15,61,.2)" }}>
            {(faqs).map((f: any, $index: number) => (<Fragment key={$index}>
              <div style={{ borderBottom: "1px solid rgba(42,15,61,.2)" }}>
                <button className="hv11" onClick={f.toggle} style={{ all: "unset", cursor: "pointer", width: "100%", boxSizing: "border-box", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "20px", padding: "22px 0", minHeight: "44px", fontFamily: "var(--font-bodoni),serif", fontWeight: "500", fontSize: "clamp(19px,2vw,24px)", lineHeight: "1.25", color: "#2A0F3D", transition: "color .3s" }}>
                  <span>
                    {f.q}
                  </span>
                  <span style={{ flex: "none", width: "32px", height: "32px", borderRadius: "999px", border: "1px solid rgba(42,15,61,.3)", display: "flex", alignItems: "center", justifyContent: "center", font: "300 18px/1 var(--font-montserrat),sans-serif" }}>
                    {f.icon}
                  </span>
                </button>
                {(f.open) && (<>
                  <p style={{ margin: "0", padding: "0 48px 24px 0", font: "400 16px/1.7 var(--font-montserrat),sans-serif", color: "#111", textWrap: "pretty" }}>
                    {f.a}
                  </p>
                </>)}
              </div>
            </Fragment>))}
          </div>
        </div>
      </section>
      {(isPac) && (<>
        <section data-screen-label="C CTA paciente" style={{ padding: "clamp(88px,12vw,150px) clamp(20px,5vw,72px)", background: "radial-gradient(100% 90% at 50% 0%,#3D1A5B 0%,#2A0F3D 60%,#210a31 100%)", color: "#F6F4F1", textAlign: "center" }}>
          <div style={{ maxWidth: "960px", margin: "0 auto", display: "flex", flexDirection: "column", alignItems: "center", gap: "28px" }}>
            <span style={{ fontFamily: "var(--font-pinyon),cursive", fontSize: "48px", lineHeight: "1", color: "#B79BE0" }}>
              {"RP"}
            </span>
            <h2 style={{ margin: "0", fontFamily: "var(--font-bodoni),serif", fontWeight: "500", fontSize: "clamp(38px,6vw,84px)", lineHeight: "1", textTransform: "uppercase", textWrap: "balance" }}>
              {"Pequenos ajustes. Grandes mudanças."}
            </h2>
            <p style={{ margin: "0", fontFamily: "var(--font-bodoni),serif", fontStyle: "italic", fontSize: "clamp(20px,2.2vw,28px)", color: "#B79BE0" }}>
              {"Na forma como você se enxerga."}
            </p>
            <a className="hv12" href={waPac} target="_blank" rel="noopener" style={{ display: "inline-flex", alignItems: "center", gap: "12px", minHeight: "56px", padding: "0 34px", borderRadius: "999px", background: "#B79BE0", color: "#2A0F3D", font: "600 12px/1 var(--font-montserrat),sans-serif", letterSpacing: ".2em", transition: "background .3s" }}>
              {"AGENDAR MINHA AVALIAÇÃO →"}
            </a>
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
      </>)}
      {(isAlu) && (<>
        <section data-screen-label="C CTA aluna" style={{ padding: "clamp(88px,12vw,150px) clamp(20px,5vw,72px)", background: "#CFC3B5", color: "#2A0F3D", textAlign: "center" }}>
          <div style={{ maxWidth: "960px", margin: "0 auto", display: "flex", flexDirection: "column", alignItems: "center", gap: "28px" }}>
            <span style={{ fontFamily: "var(--font-bodoni),serif", fontWeight: "600", fontSize: "15px", letterSpacing: ".34em" }}>
              {"MUNDO RP"}
            </span>
            <h2 style={{ margin: "0", fontFamily: "var(--font-bodoni),serif", fontWeight: "500", fontSize: "clamp(34px,5.4vw,76px)", lineHeight: "1", textTransform: "uppercase", textWrap: "balance" }}>
              {"Sua técnica abre a porta. Sua estratégia enche a agenda."}
            </h2>
            <a className="hv13" href={waAlu} target="_blank" rel="noopener" style={{ display: "inline-flex", alignItems: "center", gap: "12px", minHeight: "56px", padding: "0 34px", borderRadius: "999px", background: "#2A0F3D", color: "#F6F4F1", font: "600 12px/1 var(--font-montserrat),sans-serif", letterSpacing: ".2em", transition: "background .3s" }}>
              {"QUERO CONHECER OS CURSOS "}
              <span style={{ color: "#B79BE0" }}>
                {"→"}
              </span>
            </a>
          </div>
        </section>
      </>)}
      <footer style={{ padding: "56px clamp(20px,5vw,72px) 112px", background: "#111", color: "rgba(246,244,241,.72)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "36px" }}>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "24px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
              <span style={{ fontFamily: "var(--font-pinyon),cursive", fontSize: "44px", lineHeight: "1", color: "#B79BE0" }}>
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
