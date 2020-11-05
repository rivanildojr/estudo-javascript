/*
 * Curso Udemy gratuito - 32 conceitos que todo desenvolvedor JavaScript deveria saber
 * 5. == vs === vs typeof
 */

/*
 * ==: utiliza-se da coerção.
 * ===: compara o valor e o tipo, não existe coerção.
 * typeof: otimo para validação de tipos
 */

// ==
/*
 * 1º Se ambos são do mesmo tipo
 * null == undefined, se for, ele retorna true
 * number == string, se for, ele converter a string em number
 * boolean == number, se for, ele converte o boolean num numero
 * boolean == string, se for, ele converte a string pra boolean
 * objeto == primitivo, se for, ele converte o objeto numa string
 */

console.log(null == undefined);
console.log("7" == "7");
console.log(7 == "7");
console.log(true == 7);
console.log(true == 1);
console.log(Boolean(7));
console.log(true == "7");
console.log(Boolean("7"));

// ===
console.log(7 === "7");
console.log(7 === 7);

// typeof
// Otimo para validação de tipos

console.log(typeof "Rivanildo" === "string");
console.log(typeof "Rivanildo" === "String");
console.log(typeof 7 === "number");
console.log(typeof 7 === "Number");
