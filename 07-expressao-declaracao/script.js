/*
 * Curso Udemy gratuito - 32 conceitos que todo desenvolvedor JavaScript deveria saber
 * 7. Expressão e Declaração
 */

/*
 * Expressão: é todo um pedaço de codigo que retorna um valor unico
 * Declaração: são pedaço de codigo que faz alguma coisa
 * Uma expressão pode-se comportar como uma declaração, mas o contrário não
 */

// Expressão
console.log(1 + 1);
console.log(Math.random() + 5);

function expression() {
  return 20 + 2;
}

console.log(expression());

// Declaração

let age = 22;

if (age === 22) {
  age = 23;
}

function add(value) {
  return value + 7;
}

console.log(add(Math.random()));
//console.log(add(if(true){10}));

// Expressão como declaração

let age = 22;

function test() {
  age = 23;
  // return void
}

test();
console.log(age);
