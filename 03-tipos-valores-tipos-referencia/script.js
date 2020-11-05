/*
 * Curso Udemy gratuito - 32 conceitos que todo desenvolvedor JavaScript deveria saber
 * 3. Tipos de valores e tipos de referência
 */

/*
 * Tipos primitivos são tipos de valor
 * Objetos, Array, Functions são tipos de referência
 */

// tipos de valor é criado um local na memoria que contém o valor e é unico e exclusivo para aquela variavel.

let x = 7; // mem.0001 = nome é x, e o valor é 10
let y = x; // mem.0011 = recebe copia do valor de x
x = 20; // mem.0001 = atualizado seu valor

console.log(x, y);

// tipos de referência a variavel recebe a referência desse dado na memoria (trabalha com a ideia de ponteiro).

let objectX = { valor: 7 }; // mem.0101 = {valor: 7}
let objectY = objectX; // mem.0101
objectX.valor = 20; // mem.0101 = {valor: 20}

console.log(objectX, objectY);

objectY.valor = 30;

console.log(objectX, objectY);
