// 3. Crie um algoritmo que recebe o valor da altura e do peso de uma pessoa e retorna seu IMC.
// IMC = peso / altura²

let altura = Number(prompt("Qual é a sua altura? "));
let peso = Number(prompt("Qual é o seu peso? "));

let imc = (peso / (altura * altura)); // altura * altura = altura ** 2 = Math.sqr(altura).

console.log("O seu IMC é de " + imc.toFixed(2) + "."); // A cadeia de string e a variavel são parametros da função .log().


// Mostrar se a pessoa está dentro do peso ou não.

const baixoImc = 18.5;
const altoImc = 25;

if ((imc >= baixoImc) && (imc <= altoImc)) { // se o imc for maior ou igual a 18.5 E menor ou igual a 25
  // se for verdade esse comando será executado.
  console.log("Pelo IMC, você está dentro do peso recomendado para sua altura.") 
} else {
  // se for falso, esse comnandp será executado.
  console.log ("Pelo IMC, você não está dentro do peso recomendado para sua altura.") // se for falso, esse comando será executado.
}
