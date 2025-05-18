// 1. Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar
// utilizando uma estrutura de controle if.

const prompt = require("prompt-sync")();

// let numero = prompt("Digite um número para saber se ele é par ou ímpar: ");

// if (numero % 2 === 0) {
//   console.log(`O número ${numero} é par.`);
// } else {
//   console.log(`O número ${numero} é ímpar.`);
// }

// 2.Crie um programa que classifica a idade de uma pessoa em categorias (criança,
//adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de
//controle if-else.

// let idade = prompt("Digite a sua idade: ");

// if (idade < 12) {
//   console.log(`Você é uma criança.`);
// } else if (idade >= 12 && idade <= 18) {
//   console.log(`Você é um(a) adolescente.`);
// } else if (idade > 18 && idade < 60) {
//   console.log(`Você é um(a) adulto.`);
// } else {
//   console.log(`Você é um( idoso.`);
// }

//3. Implemente um programa que recebe uma nota de 0 a 10 e classifica como
//"Aprovado", "Recuperação", ou "Reprovado" utilizando if-else i

// let nota = prompt("Digite a sua nota (entre 0 e 10): ");

// if (nota >= 6) {
//   console.log(`Aprovado(a)!`);
// } else if (nota < 6 && nota >= 4) {
//   console.log(`Recuperação.`);
// } else {
//   console.log(`Reprovado.`);
// }

// 4. Crie um menu interativo no console que oferece ao usuário a escolha de três opções.
// Utilize switch-case para implementar a lógica de cada opção selecionada.

// let opcao = Number(prompt("Digite uma opção (1, 2 ou 3): "));

// switch (opcao) {
//   case 1:
//     console.log("Você selecionou a  opção 1");
//     break;
//   case 2:
//     console.log("Você selecionou a  opção 2");
//     break;
//   case 3:
//     console.log("Você selecionou a  opção 3");
//     break;
//   default:
//     console.log("Esta opção não é válida");
//     break;
// }

// 5. Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e
//  determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade)
//  utilizando if-else.

// let peso = Number(prompt("Digite o seu peso em kg: "));
// let altura = Number(prompt("Digite a sua altura em metros: "));

// let imc = peso / (altura * altura);

// if (imc < 18.5) {
//   console.log(`O seu IMC é ${imc} e a classificação é BAIXO PESO`);
// } else if (imc >= 18.5 && imc <= 24.9) {
//   console.log(`O seu IMC é ${imc} e a classificação é NORMAL`);
// } else if (imc >= 25 && imc <= 29.9) {
//   console.log(`O seu IMC é ${imc} e a classificação é SOBREPESO`);
// } else {
//   console.log(`O seu IMC é ${imc} e a classificação é OBESIDADE`);
// }

//  6. Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos
//  formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:
//  Isósceles, escaleno ou eqüilátero.

// let lado1 = Number(prompt("Digite a medida do primeiro lado do triângulo: "));
// let lado2 = Number(prompt("Digite a medida do segundo lado do triângulo: "));
// let lado3 = Number(prompt("Digite a medida do terceiro lado do triângulo: "));

// if (lado1 + lado2 > lado3 && lado1 + lado3 > lado2 && lado2 + lado3 > lado1) {
//   if (lado1 === lado2 && lado2 === lado3) {
//     console.log(
//       `As medidas informadas satisfazem as condições e formam um triângulo, e ele é do tipo EQUILÁTERO`
//     );
//   } else if (
//     (lado1 === lado2 && lado2 !== lado3) ||
//     (lado1 === lado3 && lado3 !== lado2) ||
//     (lado2 === lado3 && lado3 !== lado1)
//   ) {
//     console.log(
//       `As medidas informadas satisfazem as condições e formam um triângulo, e ele é do tipo ISÓSCELES`
//     );
//   } else {
//     console.log(
//       `As medidas informadas satisfazem as condições e formam um triângulo, e ele é do tipo ESCALENO`
//     );
//   }
// }

//  7. As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, eR$0,25se
//  forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
//  compradas, calcule e escreva o valor total da compra.

// let macasCompradas = Number(
//   prompt("Digite o número de maçãs que deseja comprar: ")
// );
// let valorDaCompra;
// if (macasCompradas < 12) {
//   valorDaCompra = macasCompradas * 0.3;
//   console.log(`O valor total da compra é ${valorDaCompra}`);
// } else {
//   valorDaCompra = macasCompradas * 0.25;
//   console.log(`O valor total da compra é ${valorDaCompra}`);
// }

// 8. Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)
//  e escreve-los em ordem crescente.

// let numero1 = Number(prompt(`Digite um valor: `));
// let numero2 = Number(prompt(`Digite outro valor: `));

// if (numero1 === numero2) {
//   console.log(`Os valores não podem ser iguais!`);
// } else if (numero1 > numero2) {
//   console.log(`Os valores em ordem crescente são: ${numero2} e ${numero1}`);
// } else {
//   console.log(`Os valores em ordem crescente são: ${numero1} e ${numero2}`);
// }

// 9. Implemente um programa que exibe uma contagem regressiva de 10 até 1noconsole
//  utilizando um loop for.

// for (let i = 10; i > 0; i--) {
//   console.log(i);
// }

// 10. Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.

// let numero = Number(prompt("Digite um numero inteiro: "));

// for (let i = 0; i < 10; i++) {
//   console.log(numero);
// }

// 11. Escreva um programa que solicita ao usuário 5 números e calcula a soma total
//  utilizando um loop for.
// let soma = 0;
// for (let i = 0; i < 5; i++) {
//   let valor = Number(prompt(`Digite um valor: `));
//   soma += valor;
// }

// console.log(`A soma total é ${soma}`);

//  12. Crie um programa que exibe a tabuada de um número fornecido pelousuário (de 1 a
//  10) utilizando um loop for.

// let numero = Number(prompt(`Digite um número que você deseja saber a tabuada: `));

// for (let i = 1; i < 11; i++) {
//   console.log(`${i}x${numero} = ${i * numero}`);
// }

//  13. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer
//  a média aritmética desses números.

// let numeros = [];
// let valor;
// do {
//   valor = Number(prompt(`Digite um valor (digite 0 quando desejar parar): `));
//   numeros.push(valor);
// } while (valor !== 0);

// let somaTotal = numeros.reduce((acumulador, valorAtual) => {
//   return acumulador + valorAtual;
// }, 0);

// console.log(`A média dos valores é ${somaTotal / (numeros.length - 1)}`);

// 14. Crie um programa que calcula o fatorial de um número fornecido pelo usuário
//  utilizando um loop for ou while.

// let fatorial = 1;

// let numero = Number(prompt("Informe um número para calcular o fatorial: "));
// for (let i = 1; i <= numero; i++) {
//   fatorial *= i;
// }

// console.log(fatorial);

//  15. Escreva um programa que gera e imprime os primeiros 10 números da sequência de
//  Fibonacci utilizando um loop for.

// let primeiroNumero = 1;
// let segundoNumero = 1;
// let soma = 0;
// console.log(primeiroNumero);
// console.log(segundoNumero);

// for (let i = 1; i < 14; i++) {
//   soma = primeiroNumero + segundoNumero;
//   console.log(soma);
//   segundoNumero = primeiroNumero;
//   primeiroNumero = soma;
// }
