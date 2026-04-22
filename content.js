// Este é o seu "Banco de Dados Fake"
// Você pode editar os textos aqui e o site atualizará automaticamente

const siteContent = {
    services: [
        {
            id: 1,
            category: "Estética",
            title: "Polimento Cristalizado",
            description: "Correção de pintura com proteção profunda e espelhamento premium.",
            image: "polimento.jpg",
            keyword: "#PolimentoAutomotivo"
        },
        {
            id: 2,
            category: "Higienização",
            title: "Higienização Interna",
            description: "Limpeza e desinfecção profunda com padrão de fábrica.",
            image: "higienizacao.jpg",
            keyword: "#LimpezaDeBancos"
        },
        {
            id: 3,
            category: "Reparo",
            title: "Funilaria Express",
            description: "Reparos ágeis de amassados e riscos com secagem em cabine.",
            image: "reparo-rapido.jpg",
            keyword: "#FunilariaExpress"
        }
    ],
    faq: [
        {
            question: "Quanto tempo leva o polimento?",
            answer: "Depende do estado do veículo, mas geralmente leva de 1 a 2 dias para um polimento cristalizado completo."
        },
        {
            question: "Quais as formas de pagamento?",
            answer: "Aceitamos Cartões de Crédito (com parcelamento), PIX e Dinheiro."
        },
        {
            question: "Preciso agendar com antecedência?",
            answer: "Sim, recomendamos o agendamento prévio para garantir a exclusividade do atendimento ao seu veículo."
        }
    ]
};

// Se estivermos no navegador, tornar o conteúdo global
if (typeof window !== 'undefined') {
    window.siteContent = siteContent;
}
