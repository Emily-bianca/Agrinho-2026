// =========================
// CAMADAS DO SOLO
// =========================

function mostrarInfo(camada){

const info = {

o: `
<h3>Horizonte O – Camada Orgânica 🍂</h3>

<p>
É a camada mais superficial do solo. Ela é formada por folhas, galhos, restos de plantas e animais em decomposição. Essa matéria orgânica fornece nutrientes importantes para o solo e para as plantas.
</p>
`,

a: `
<h3>Horizonte A – Camada Fértil 🌱</h3>

<p>
É a camada onde as plantas crescem com mais facilidade. Nela há uma mistura de matéria orgânica, minerais, água e ar. Por ser rica em nutrientes, é considerada a parte mais fértil do solo.
</p>
`,

b: `
<h3>Horizonte B – Subsolo 🟤</h3>

<p>
Fica abaixo da camada fértil. Possui menos matéria orgânica e mais minerais acumulados ao longo do tempo. Suas características ajudam a armazenar água e nutrientes.
</p>
`,

c: `
<h3>Horizonte C – Rocha Alterada 🪨</h3>

<p>
É uma camada formada por fragmentos de rochas que começaram a se desgastar pela ação da natureza. Ela possui poucas características de solo e representa uma etapa intermediária entre a rocha e o solo formado.
</p>
`,

r: `
<h3>Rocha Matriz ⛰️</h3>

<p>
É a rocha original que dá origem ao solo. Com a ação da chuva, do vento, do calor, do frio e de organismos vivos, essa rocha vai se desgastando lentamente até formar as camadas do solo.
</p>
`

};

document.getElementById("infoSolo").innerHTML = info[camada];

}

// =========================
// QUIZ
// =========================

function corrigirQuiz(){

let pontos = 0;

// respostas corretas
const respostas = {
q1: "b",
q2: "c",
q3: "a",
q4: "b",
q5: "a"
};

for(let pergunta in respostas){

const marcada =
document.querySelector(
`input[name="${pergunta}"]:checked`
);

if(
marcada &&
marcada.value === respostas[pergunta]
){
pontos++;
}

}

let mensagem = "";

if(pontos === 5){

mensagem =
"🌟 Excelente! Você conhece muito bem a importância da conservação do solo.";

}
else if(pontos >= 3){

mensagem =
"👏 Muito bom! Você já possui um bom conhecimento sobre o tema.";

}
else{

mensagem =
"📚 Continue estudando. O solo é essencial para a vida e para a sustentabilidade.";

}

document.getElementById("resultadoQuiz").innerHTML =

`
<h3>${pontos} de 5 acertos</h3>
<p>${mensagem}</p>
`;

}

// =========================
// MODO ESCURO
// =========================

const darkBtn =
document.getElementById("darkMode");

if(darkBtn){

    darkBtn.addEventListener("click", ()=>{

        document.body.classList.remove("contrast");
        document.body.classList.toggle("dark");

        });
    }

// =========================
// ALTO CONTRASTE
// =========================

const contrastBtn =
document.getElementById("contrast");

if(contrastBtn){

contrastBtn.addEventListener("click", ()=>{

    document.body.classList.remove("dark");
    document.body.classList.toggle("contrast");

    });
}

// =========================
// TAMANHO DA FONTE
// =========================

let tamanhoFonte = 16;

const aumentar =
document.getElementById("increaseFont");

const diminuir =
document.getElementById("decreaseFont");

if(aumentar){

aumentar.addEventListener("click", ()=>{

tamanhoFonte += 2;

document.body.style.fontSize =
tamanhoFonte + "px";

});

}

if(diminuir){

diminuir.addEventListener("click", ()=>{

if(tamanhoFonte > 12){

tamanhoFonte -= 2;

document.body.style.fontSize =
tamanhoFonte + "px";

}

});

}

// =========================
// ANIMAÇÕES AO ROLAR
// =========================

const elementos =
document.querySelectorAll(
".card, .section"
);

const observador =
new IntersectionObserver(

(entradas)=>{

entradas.forEach((entrada)=>{

if(entrada.isIntersecting){

entrada.target.classList.add(
"mostrar"
);

}

});

},

{
threshold:0.2
}

);

elementos.forEach((elemento)=>{

observador.observe(elemento);

});

// =========================
// MENSAGEM DE BOAS-VINDAS
// =========================

window.addEventListener("load", ()=>{

console.log(
"🌱 Site O Chão que Produz é o Chão que Protege carregado com sucesso!"
);

});