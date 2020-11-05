/*
 * Curso Udemy gratuito - 32 conceitos que todo desenvolvedor JavaScript deveria saber
 * 31. Currying, Compose e Pipe
 */

/*
 * Currying: Transforma uma função com multiplos argumentos e uma serie de execuções de funções
 * Compose: Compor uma função usando outras funções como argumento
 * Pipe: outra forma de escrever o compose, mas utilizando outra função como intermediaria, recebendo as funções que devem ser executadas e os argumentos passadas a elas
 */

// Currying

const dragon = (name, length, element) => {
  return `${name} é um dragão ${length} e cospe ${element}!`;
};

console.log(dragon("Mushu", "pequeno", "fogo"));

const dragon2 = (name) => (length) => (element) => {
  return `${name} é um dragão ${length} e cospe ${element}!`;
};

console.log(dragon2("Mushu")("pequeno")("fogo"));

const mushu = dragon2("mushu");
console.log(mushu("grande")("gelo"));
console.log(mushu("mediano")("fogo"));

const mushuSmall = mushu("pequeno");
console.log(mushuSmall("gelo"));

// Compose

const increment = (x) => x + 1;
const double = (x) => x * 2;
const value = increment(3);
const result = double(value);
console.log(result);

const value2 = 3;
const result2 = double(increment(value2));
console.log(result2);

// Pipe

const pipe = (increment, double) => (args) => double(increment(args));
const incrementAndDouble = pipe(increment, double);
const result3 = incrementAndDouble(3);
console.log(result3);
