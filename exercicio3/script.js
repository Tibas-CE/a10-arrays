//EXERCÍCIO 3

const numeros = [3, 5, 1, 2, 6, 4];

const strings = ["luva", "pedra", "lua", "flores"];

const mista = [30, "Tibas", true];

//CRIE CÓPIAS DAS 3 ARRAYS

const numerosCopia = numeros.slice();
const stringsCopia = strings.slice();
const mistaCopia = mista.slice();

//Adicione um item `number` ao primeiro array

console.log("Adicione um item ao primeiro array");
numerosCopia.push(7);
console.log("Original", numeros);
console.log("Copia", numerosCopia);

//Remova o último item do segundo array.

console.log("Remova o último item do segundo array");
stringsCopia.pop();
console.log("Original", strings);
console.log("Copia", stringsCopia);

//Remova o segundo item do terceiro array.

console.log("Remova o segundo item do terceiro array.");
mistaCopia.splice(1, 1);
console.log("Original", mista);
console.log("Copia", mistaCopia);
