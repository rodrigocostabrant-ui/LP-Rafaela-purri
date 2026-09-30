// Conteúdo e configurações da landing. Edite aqui sem mexer no layout.

export const siteUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : "http://localhost:3000";

export const site = {
  nome: "Dra. Rafaela Purri",
  titulo: "Harmonização Facial em BH | Dra. Rafaela Purri — Biomédica Esteta",
  descricao:
    "Harmonização facial com precisão & planejamento em Belo Horizonte. Dra. Rafaela Purri, Biomédica Esteta CRBM-3 18357. Conheça também o Mundo RP, formação para profissionais da estética.",

  // Número no formato 5531XXXXXXXXX ativa as mensagens pré-preenchidas.
  // Vazio: todos os botões usam o link curto do WhatsApp Business abaixo.
  whatsapp: "",
  whatsappLink: "https://wa.me/message/5RVDYIWOZIH7A1",
  mensagens: {
    pac: "Olá, Dra. Rafaela! Vim pelo site e gostaria de agendar uma avaliação facial.",
    laser: "Olá! Vim pelo site e quero reservar um horário no Laser Day (21 ou 22/10).",
    alu: "Olá, Rafa! Vim pelo site e quero conhecer os cursos presenciais do Mundo RP.",
    ment: "Olá, Rafa! Já atuo na estética e quero saber mais sobre a Purple Mentory.",
  },

  // "A" = "Nasci para fazer Arte." · "B" = "Um rosto & um mundo de possibilidades."
  headline: "A" as "A" | "B",
  // Etiquetas amarelas VALIDAR/PENDENTE do design. Desligue antes de ir ao ar para o público.
  mostrarPendencias: true,
  // Frente exibida ao abrir a página.
  frenteInicial: "paciente" as "paciente" | "aluna",

  faqPaciente: [
    ["Quantos ml eu preciso?", "Não existe número padrão. A quantidade nasce do planejamento feito na avaliação — às vezes é pouco, às vezes é mais."],
    ["Tenho 21 anos. Não sou muito nova?", "Idade não define indicação; o que define é a avaliação do seu rosto. Às vezes, a melhor resposta é esperar."],
    ["Vou ficar artificial?", "O objetivo é o contrário: preservar os seus traços & tratar apenas o que precisa."],
    ["Qual o investimento?", "Sob consulta. O valor é definido após a avaliação, junto com o seu plano."],
    ["Onde é a clínica?", "Em Belo Horizonte. A clínica está em reforma; o novo endereço é informado no agendamento."],
    ["Quem realiza os procedimentos?", "Dra. Rafaela Purri, biomédica esteta, CRBM-3 18357."],
  ],
  faqAluna: [
    ["Preciso já atuar na estética?", "Os cursos presenciais são para dominar a técnica. A Purple Mentory é para quem já domina e quer crescer no negócio."],
    ["Os cursos têm prática?", "Sim. As aulas contam com pacientes modelo."],
    ["Quem pode fazer?", "Profissionais da estética habilitadas para cada procedimento, conforme as regras do seu conselho."],
    ["Qual o investimento?", "Sob consulta. As condições de cada turma são enviadas pelo WhatsApp."],
    ["Quando são as próximas turmas?", "As datas são enviadas pelo WhatsApp. Chame e receba o calendário."],
  ],

  procedimentos: [
    ["Preenchimento labial", "Um lábio bem feito não passa despercebido."],
    ["Toxina botulínica", "Prevenção é envelhecer da melhor forma possível."],
    ["Rinomodelação", "Proporção & equilíbrio para o perfil."],
    ["Perfiloplastia", "O rosto em harmonia, também de lado."],
    ["Malar, mento & mandíbula", "A moldura do seu rosto."],
    ["Full face", "O rosto planejado como um todo."],
    ["Laser", "Tecnologia a favor da pele."],
    ["Corporal", "O mesmo cuidado, além do rosto."],
  ],

  cursos: [
    "Perfiloplastia",
    "Toxina botulínica",
    "Preenchimento labial",
    "ELITE · bigode chinês & olheiras",
    "ARTE · malar, mento & mandíbula",
    "Intradermoterapia",
    "Anatomia & intercorrências",
    "Microagulhamento",
    "Limpeza de pele",
  ],
};
