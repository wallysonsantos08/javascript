// variaveis em js
// declaração let x;
// atribuição x = 100;

//IMPORTANTE NO JS VOCE NÃO PRECISA ESPECIFICAR OQ UMA VARIAVEL É DE FATO, ELE ENTENDE POR SI SÓ, SE VOCE DECLARA UMA VARIAVEL let idade = 10; O CODIGO ENTENDE QUE É UM NUMERO, SE VOCE DECLARA UMA VARIAVEL DE TEXTO É SÓ COLOCAR AS ASPAS DUPLAS DENTRO DO TEXTO E JÁ ERA, E PARA BOOLEANOS, VOCE COLOCA O VALOR DA VARIAVEL true/false E O JS JÁ VAI ENTENDER TUDO!!!!

let x;
x = 100;

console.log(x);
let nome = "Wallyson";
let booleano = true;
let age = 25;
console.log(age);
//para exibir uma variavel dentro de um texto no console.log(); temos que usar o: ${} exemplo:
console.log(`Minha idade é de: ${age} anos`);
//para querer analisar qual o tipo de variavel, usamos o (typeof) exemplo:
console.log(typeof age);//vai retonar number
console.log(typeof nome);//vai retonar string
console.log(typeof booleano);//vai retornar boleano

document.getElementById("p1").textContent = nome;

document.getElementById("p2").textContent = age;

document.getElementById("p3").textContent = booleano;

document.getElementById("p4").textContent = `meu nome é ${nome}, tenho ${age} anos, e sou um estudante: ${booleano}`;
