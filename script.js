const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Seu gato prefere passar o dia em ambientes internos ou externos?",
        alternativas: [
        {
        texto: "Interno",
        afirmacao: [
        "Gatos que preferem ficar dentro de casa geralmente gostam de rotinas e conforto.",
        ],
        proxima: 1,
        },
        {
        texto: " Externo",
        afirmacao: [
        "Os gatos que preferem sair têm um espírito aventureiro e curiosidade pelo desconhecido.",
        
        ],
        proxima: 2,
        },
    ]
        },
        {
        enunciado: "Seu gato gosta de ser acariciado por longos períodos ou apenas por alguns instantes?",
        alternativas: [
        {
        texto: " Longos períodos",
        
        afirmacao: [
        "Se ele gosta de carinho prolongado, provavelmente é um gato mais afetuoso e paciente. ",
        
        ],
        proxima: 3,
        },
        {
        texto: " Alguns instantes",
        
        afirmacao: [
        "Se prefere momentos curtos, ele valoriza seu espaço e independência.",
        
        ],
        proxima: 4,
        },
        ]
        },
        {
        enunciado: "Seu gato é mais ativo durante o dia ou à noite?",
        alternativas: [
        {
        texto: " Dia",
        
        afirmacao: [
        "Gatos mais ativos de dia são mais sociáveis e adaptados à rotina dos humanos.",
    
        ],
        proxima: 3,
        },
        {
        
        texto: " Noite",
        
        afirmacao: [
        " Os gatos noturnos seguem seus instintos mais naturais e caçadores.",
        
        ],
        proxima: 4,
        },
        ]
        },
        {
        enunciado: "Seu gato prefere brinquedos com movimento ou brinquedos estáticos (como arranhadores)?",
        alternativas: [
        {
        texto: " Com movimento",
        
        afirmacao: [
        "Gatos que preferem movimento são mais enérgicos e caçadores natos. ",
        
        ],
        proxima: 5,
        },
        {
        texto: " Estáticos",
        
        afirmacao: [
        " Já os que gostam de brinquedos estáticos são mais tranquilos e contemplativo.",
        
        ],
        proxima: 6,
        },
        ]
        },
        
        {
        enunciado: "Seu gato se dá bem com outros animais ou prefere ficar sozinho?",
        alternativas: [
        {
        texto: " Dá-se bem com outros animais",
        
        afirmacao: [
        "Gatos sociáveis com outros animais são geralmente mais extrovertidos e seguros.",
        
        ],
        proxima: 5,
        },
        {
        texto: " Prefere ficar sozinho",
        
        afirmacao: [
        "Os gatos que preferem solidão valorizam seu espaço e tendem a ser mais territoriais.",
        
        ],
        proxima: 6,
        },
        ]
        },
        {
        enunciado: "Seu gato é curioso com visitas ou se esconde quando chega alguém novo?",
        alternativas: [
        {
        texto: " Curioso",
        
        afirmacao: [
        
        " Um gato curioso com visitas é confiante e sociável.",
        
        ],
        proxima: 7,
        
        },
        {
        texto: " Se esconde",
        
        afirmacao: [
        " Os gatos que se escondem são mais reservados e preferem ambientes familiares.",
        
        ],
        proxima: 7,
        },
        ]
        },
        {
        enunciado: "Seu gato prefere comida seca ou úmida?",
        alternativas: [
        {
        texto: "Seca",
        
        afirmacao: [
        "Gatos que preferem comida seca podem ser mais independentes e seletivos.",
        
        ],
        proxima: 7,
        },
        {
        texto: "Úmida",
        
        afirmacao: [
        "Os gatos que preferem comida úmida são mais ligados a conforto e variedade de sabores.",
        
        ],
        proxima: 7,
        },
        ]
        },
        
        {
        enunciado: "Seu gato gosta de dormir em lugares altos ou em locais mais escondidos?",
        alternativas: [
        {
        texto: " Lugares altos",
        afirmacao: [
        " Gatos que dormem em lugares altos são mais vigilantes e dominantes.",
         
        ],
        },
        {
        texto: " Locais escondidos",
        
        afirmacao: [
        "Os gatos que preferem se esconder são mais cautelosos e gostam de segurança.",
          
        ],
        },
        ]
        }
        ];

    let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Obrigada por responder";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();