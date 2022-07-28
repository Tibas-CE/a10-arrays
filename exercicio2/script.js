// EXERCÍCIO 2

const numeros = [3, 5, 1, 2, 6, 4];

const strings = ["luva", "pedra", "lua", "flores"];

const mista = [30, "Tibas", true];

//Imprima a quantidade de itens de cada array

console.log("Imprima a quantidade de itens de cada array");
console.log(numeros.length, numeros);
console.log(strings.length, strings);
console.log(mista.length, mista);

//Imprima o primeiro item do primeiro array

console.log("Imprima o primeiro item do primeiro array");
console.log(numeros[0]);

//Imprima o segundo item do segundo array

console.log("Imprima o segundo item do segundo array");
console.log(strings[1]);

//Imprima o terceiro item do terceiro array

console.log("Imprima o terceiro item do terceiro array");
console.log(mista[2]);

//Imprima uma informação booleana verdadeira sobre a **inclusão** de um item do primeiro array

console.log("O número 6 está na array numeros?");
console.log(numeros.includes(6));

//Imprima uma informação booleana falsa sobre a **inclusão** de um item ao terceiro array

console.log("O booleano false está na array mista?");
console.log(mista.includes(false));