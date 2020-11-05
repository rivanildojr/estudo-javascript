/*
 * Curso Udemy gratuito - 32 conceitos que todo desenvolvedor JavaScript deveria saber
 * 27. Expensive Operation e Big O Notation
 */

/*
 * Big O Notation: representa o quanto um operação pode ser custosa, em questão do tempo que ela demora para ser executada com uma determinada entrada de dados
 * O: representa "ordem de", mostra o pior e melhor caso da execução do algoritmo
 */

// O(1)
// Algoritmo de tempo constante

const data = [0, 1, 2, 3, 4, 5, 6];
const number = data.pop();
console.log(number);

// O(n)
// Algoritmo de tempo linear

function o_n(input, number) {
  for (let i = 0, max = input.length; i < max; i++) {
    if (input[i] === number) {
      return i;
    }
  }
  return -1;
}

console.log(o_n(data, 5));

// O(n)²
// Algoritmo de tempo dobrado e cresce exponencialmente

function o_n_Square(input) {
  const matriz = [];
  for (let i = 0, max = input.length; i < max; i++) {
    matriz[i] = [];
    for (let j = 0, maxJ = input.length; j < maxJ; j++) {
      matriz[i].push(j);
    }
  }
  return matriz;
}

console.log(o_n_Square(data));

// O(n log n)
// Algoritmo de tempo logaritmo

const data2 = ["q", "a", "z", "w", "s", "x", "e", "d", "c", "r"];

function quickSort(input) {
  if (input.length < 2) {
    return input;
  }
  let pivo = input[0];
  let left = [];
  let right = [];
  console.log(pivo);

  for (let i = 1, max = input.length; i < max; i++) {
    if (input[i] < pivo) {
      left.push(input[i]);
    } else {
      right.push(input[i]);
    }
  }
  console.log(left, right);
  return [...quickSort(left), pivo, ...quickSort(right)];
}

console.log(quickSort(data2));

// Considere apenas como uma estimativa
