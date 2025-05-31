const height = document.querySelector('#height');
const weight = document.querySelector('#weight');
const btnEnviar = document.querySelector('#action-btn');
const btnLimpar = document.querySelector('#clean-btn');
const btnVoltar = document.querySelector('#back-btn');

const calcContainer = document.querySelector('#calc-container');
const resultContainer = document.querySelector('#result-container');

const imcNumero = resultContainer.querySelectorAll('span')[0];
const imcClassificacao = resultContainer.querySelectorAll('span')[1];

const imcData = [
    { min: 0.0, max: 16.9, classification: "Muito abaixo do peso" },
    { min: 17.0, max: 18.4, classification: "Abaixo do peso" },
    { min: 18.5, max: 24.9, classification: "Peso normal" },
    { min: 25.0, max: 29.9, classification: "Sobrepeso" },
    { min: 30.0, max: 34.9, classification: "Obesidade grau I" },
    { min: 35.0, max: 39.9, classification: "Obesidade grau II" },
    { min: 40.0, max: Infinity, classification: "Obesidade grau III (mórbida)" }
];

function formatarAltura(valor) {
    valor = valor.trim();
    if (valor.length >= 3 && !valor.includes('.')) {
        valor = valor.slice(0, 1) + '.' + valor.slice(1);
    }
    return valor;
}

height.addEventListener("blur", () => {
    height.value = formatarAltura(height.value);
});

btnLimpar.addEventListener("click", () => {
    height.value = "";
    weight.value = "";
});

btnEnviar.addEventListener("click", () => {
    let h = formatarAltura(height.value);
    const w = parseFloat(weight.value);

    h = parseFloat(h);

    if (isNaN(h) || isNaN(w) || h <= 0 || w <= 0) {
        alert("Por favor, insira valores válidos para altura e peso.");
        return;
    }

    const imc = w / (h * h);
    const imcFixed = imc.toFixed(2);

    const classificacao = imcData.find(item => imc >= item.min && imc <= item.max)?.classification || "Classificação desconhecida";

    imcNumero.textContent = imcFixed;
    imcClassificacao.textContent = classificacao;

    calcContainer.classList.add('hide');
    resultContainer.classList.remove('hide');
});

btnVoltar.addEventListener("click", () => {
    calcContainer.classList.remove('hide');
    resultContainer.classList.add('hide');
    height.value = "";
    weight.value = "";
});
