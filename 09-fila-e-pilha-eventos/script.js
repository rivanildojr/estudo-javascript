/*
 * Curso Udemy gratuito - 32 conceitos que todo desenvolvedor JavaScript deveria saber
 * 9. Fila de eventos e Pilha de eventos
 */

/*
 * Single Thread: processa uma requisição por vez (sequencial)
 * Call Stack: Executa os codigos sem callback um por vez
 * Event Loop: Após a Call Stack está fazia o Event Loop pega os callback e coloca na Call Stack para ser executado novamente
 * Event Queue: os callback serão enviados para cá
 */

function loopEvent() {
  console.log("Rivanildo");
  for (let i = 1; i <= 4; i++) {
    console.log("Júnior - " + i);
  }
  console.log("dos");
  setTimeout(() => {
    console.log("Santos");
  }, 0);
  console.log("Andrade");
}

loopEvent();
