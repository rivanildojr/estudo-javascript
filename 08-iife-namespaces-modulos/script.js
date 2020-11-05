/*
 * Curso Udemy gratuito - 32 conceitos que todo desenvolvedor JavaScript deveria saber
 * 8. IIFE e Namespaces
 */

/*
 * IIFE: função que é executada automaticamento com é lida
 */

// IIFE

function alerta() {
  alert("Olá Mundo!");
}

alerta();

const alerta2 = function () {
  alert("Olá Mundo2!");
};

alerta2();

// Primeira Escrita de uma IIFE

!(function () {
  alert("Olá Mundo3!");
})();

// Primeira Escrita de uma IIFE (mais recorrente)

(function () {
  alert("Olá Mundo4!");
})();

// IIFE nomeada
!(function test() {
  alert("Olá Mundo5!");
})();

let name = "Rivanildo";
!(function test() {
  name = `${name} Júnior`;
})();

console.log(name);
// test();

// Namespaces

// Exemplo de utilização da IIFE

let data = (function () {
  let cont = 0;
  return {
    increment: function () {
      cont++;
      return cont;
    },
  };
})();

console.log(data);
console.log(data.increment);
console.log(data.increment());
console.log(data.contador);

//Com função normal

let data2 = function () {
  let cont = 0;
  return {
    increment: function () {
      cont++;
      return cont;
    },
  };
};

console.log(data2);
console.log(data2().increment);
console.log(data2().increment());
console.log(data2().contador);
