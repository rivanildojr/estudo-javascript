/*
 * Curso Udemy gratuito - 32 conceitos que todo desenvolvedor JavaScript deveria saber
 * 2. Tipos Primitivos
 */

/*
 * Possui 6 tipos primitivos
 * Boolean, String, Number, Null, Undefined e Symbol
 * São valores unicos e não possui propriedades (porém existe os construtores dos tipos primitivos)
 * Todos os outros são objetos
 */

// typeof verifica o tipo do dado passado
// Sintaxe: typeof dado

console.log(typeof true); // Boolean
console.log(typeof Boolean(true)); // Boolean
console.log(typeof new Boolean(true)); // Object
console.log(typeof new Boolean(true).valueOf()); // Boolean

// Exemplo: Utilizando objeto como tipo primitivo

let valueTen = new Number(10);
let valueSixteen = valueTen + 6;

console.log(typeof valueTen);
console.log(valueTen);
console.log(typeof valueSixteen);
console.log(valueSixteen);

// Exemplo: Utilizando propriedades de objeto em tipo primitivo

let name = "Rivanildo";
let idade = 22;

console.log(name);
console.log(name.length);
console.log(idade);
console.log(idade.valueOf());

// Obs: O JavaScript cria-se uma copia do dado para utilizar como primitivo ou as propriedades de objeto
