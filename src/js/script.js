// 1) Declaração de variáveis
let variavelUndefined;
let variavelVazia = "";
let variavelComValor = "Vinho Tinto";
console.log("Undefined:", variavelUndefined);
console.log("Vazia:", variavelVazia);
console.log("Com valor:", variavelComValor);

// 2) Operadores !=, ==, >=
let x = 5, y = "5";
console.log("x != y →", x != y);   // falso
console.log("x == y →", x == y);   // verdadeiro
console.log("x >= y →", x >= y);   // verdadeiro


// 3 - Cálculo IMC com switch
let peso = 70;
let altura = 1.75;
let imc = peso / (altura * altura);
let faixa;
switch (true) {
    case imc < 18.5:
        faixa = "Abaixo do peso";
        break;
    case imc <= 24.9:
        faixa = "Peso ideal";
        break;
    default:
        faixa = "Acima do peso";
}
console.log("IMC:", imc.toFixed(2), "-", faixa);


// 4 - Repetição até 50
for (let i = 1; i <= 50; i++) {
    console.log("O valor é:", i);
}
