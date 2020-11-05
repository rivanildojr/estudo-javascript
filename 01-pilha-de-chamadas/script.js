/*
 * Curso Udemy gratuito - 32 conceitos que todo desenvolvedor JavaScript deveria saber
 * 1. Pilha de chamadas
 */

// FIFO - First in First out
// LIFO - Last in First out

/*
 * funcao3();
 * funcao2();
 * funcao1();
 */

function funcao1() {
  funcao2();
  console.log("Executou função 1");
}

function funcao2() {
  funcao3();
  console.log("Executou função 2");
}

function funcao3() {
  console.log("Executou função 3");
}

funcao1();
