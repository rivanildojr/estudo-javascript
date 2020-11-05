/*
 * Curso Udemy gratuito - 32 conceitos que todo desenvolvedor JavaScript deveria saber
 * 20. Closures
 */

/*
* Closures: função também são closures, podendo acessar variaveis criadas em cima(fora) dela.
Guarda a referência do escopo de fora
*/

let name = "Rivanildo";

function helloPeople() {
  console.log("Olá " + name);
}

name = "Júnior";
helloPeople();

function searchItem() {
  let numberItem = 150;
  fetch("/minha/url/do/banco?item=" + numberItem, {
    method: "GET",
  }).then((result) => {
    console.log("Busca pelo item " + numberItem + " deu certo!");
  });
}

function soma(a, b, fn) {
  return fn(a + b);
}

function multiplica(multi) {
  return function (numero) {
    return numero * multi;
  };
}
