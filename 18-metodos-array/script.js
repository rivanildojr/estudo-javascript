/*
 * Curso Udemy gratuito - 32 conceitos que todo desenvolvedor JavaScript deveria saber
 * 18. map, filter e reduce
 */

/*
 * map: iterar por um array e manipula cada valor e no final da execução retorna um array novo com os valores manipulados
 * filter: iterar por um array atraves de uma condição, e retorna um novo array novo com os valores que passarão pela a condições
 * reduce: pega os valores do array e reduz ele, retornando um unico valor
 */

const data = [
  {
    name: "lulu",
    age: 4,
    type: "dog",
  },
  {
    name: "bili",
    age: 7,
    type: "dog",
  },
  {
    name: "flips",
    age: 3,
    type: "cat",
  },
  {
    name: "rakan",
    age: 1,
    type: "cat",
  },
  {
    name: "valentão",
    age: 6,
    type: "dog",
  },
];

// map

const ageReal = data.map((dog) => ({
  name: dog.name,
  age: dog.age * 7,
}));

//console.log(ageReal);

// filter
// index retorna a posição que está interando

const dogs = data.filter((info, index) => info.type == "dog");

//console.log(dogs);

// reduce

const totalAge = ageReal.reduce((soma = 0, info) => {
  return soma + info.age;
}, 0);

//console.log(totalAge);

const age = data
  .filter((info, index) => info.type == "dog")
  .map((dog) => ({ name: dog.name, age: dog.age * 7 }))
  .reduce((soma = 0, info) => {
    return soma + info.age;
  }, 0);

console.log(age);
