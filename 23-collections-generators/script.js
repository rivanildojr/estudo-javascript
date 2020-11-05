/*
 * Curso Udemy gratuito - 32 conceitos que todo desenvolvedor JavaScript deveria saber
 * 23. Collections e Generators
 */

/*
 * Collections: Objetos iteraveis
 * Generators: são funções que podem ser utilizadas para controlar iterações
 */

// Collections:
// Suprir as seguintes caracteristicas: método para iterar por eles, forma de evitar colisões entre propriedades e uma forma de esconder as propriedade para não serem acessadas usando uma chave das propriedades
// Métodos: Set e Map

// Set
// É uma coleção de valores, é mutavel e tem os metodos proprios (inserção, leitura ...)
// não permeti dados repetidos
// não tem indexação de dados

const alphabet = new Set(["a", "b", "c", "d"]);

console.log(alphabet);

alphabet.add("a");

console.log(alphabet);

alphabet.has("a");

console.log(alphabet);

//alphabet[0];

alphabet.delete("a");

console.log(alphabet);

alphabet.forEach((letter) => console.log(letter));

let data = [1, 2, 3, 3, 4, 4, 5];

const number = new Set(data);

console.log(number);

data = Array.from(number);

console.log(data);

// Map
// chave e valor
// semelhante ao Set

const data2 = new Map([
  ["name", "Rivanildo"],
  ["age", "22"],
]);

console.log(data2);

data2.set("city", "Rosário");

console.log(data2);

console.log(data2.get("name"));

data2.forEach((info, key) => console.log(key, info));

let data3 = Array.from(data2);

console.log(data3);

// Generators:
// * identifica um generator
// yield é parecido com o return, porem ele não para a execução
// bom para pegar items de acordo com a iteração dos usuarios

function iterateNumbers(total) {
  for (let i = 1; i <= total; i++) {
    console.log(i);
  }
}

iterateNumbers(10);

function* iterateGenerator(total) {
  for (let i = 1; i <= total; i++) {
    yield console.log(i);
  }
}

// É necessario atribuir a variavel
const totalGenerator = iterateGenerator(10);
console.log(totalGenerator.next());

function* iterateGenerator2(total) {
  const name = "Rivanildo";
  name = name.toUpperCase();
  yield name;
  for (let i = 1; i <= total; i++) {
    yield i;
  }
}

const totalGenerator = iterateGenerator2(3);
console.log(totalGenerator2.next().value);
