/*
 * Curso Udemy gratuito - 32 conceitos que todo desenvolvedor JavaScript deveria saber
 * 6. Escopo global, Escopo de função, Escopo de bloco e Escopo léxico
 */

/*
 * Escopo: determina a visibilidade das variaveis e outros recursos nos bloco de código
 * var: respeita o escopo de uma função, e fora dela respeita o escopo global
 * let: respeita o escopo de bloco
 * const: respeita o escopo de bloco e não pode sofrer alterações em tipos primitivos
 * Escopo léxico: cenário com funções aninhadas, os recursos e variaveis de funções mais a cima estão disponivel nas funções mais a dentro
 * Escopo Global: escopo do objeto window (janela), tudo declarado nesse escopo estará disponivel na totalidade do seu código
 * Escopo Função: igual ao escopo léxico, o que é declarado dentro dela, não estará disponivel fora dela
 * Escopo Bloco: se existe declarações dentro dessas chaves, só estará disponivel entre elas e no seu interior
 * Hosting: o JavaScript joga as declarações de variaveis para o inicio do codigo
 */

// var, let e const

var name = "Rivanildo";

function test() {
  var nickname = "Júnior";
  if (nickname === "Júnior") {
    var value1 = 5;
    let value2 = 7;
    const value3 = 10;
  }
  console.log(nickname);
  console.log(value1);
  //console.log(value2)
  //console.log(value3)
}

if (name === "Rivanildo") {
  var value5 = 2;
}

console.log(name);
test();
console.log(value5);
console.log(nickname);

// Escopo léxico

function lexico() {
  var name = "Rivanildo";
  function test() {
    name = "Júnior";
    console.log(name);
  }
  console.log(name);
  test();
  console.log(name);
}

lexico();

// Escopo Global

var name = "Rivanildo";

function update() {
  console.log(name);
  name = "Júnior";
}

console.log(name);
update();
console.log(name);

// Escopo função

function func() {
  var name1 = "Rivanildo";
  function test() {
    console.log(name1);
    var name2 = "Evelyn";
    function test2() {
      console.log(name2);
    }
    test2();
  }
  console.log(name1);
  test();
}

func();

// Escopo bloco

function block() {
  var name = "Rivanildo";
  if (true) {
    name = "Júnior";
    var nickname1 = "Santos";
    let nickname2 = "Andrade";
  }
  console.log(name);
  console.log(nickname1);
  console.log(nickname2);
}

block();
