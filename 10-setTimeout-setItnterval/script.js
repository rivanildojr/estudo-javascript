/*
 * Curso Udemy gratuito - 32 conceitos que todo desenvolvedor JavaScript deveria saber
 * 10. setTimeout, setInterval e resquestAnimationFrame
 */

/*
 * setTimeout: executa um codigo apenas uma vez, depois de um determinado tempo.
 * setInterval: executa o mesmo codigo repedidamente no intervalo passado até ser cancelado, a primeira execução não é emediata.
 * resquestAnimationFrame: executa o método toda vez em que o navegador estiver apto a fazer o re-paint da tela
 */

// setTimeout
// Recebe uma função de callBack no primeiro parâmentro e o tempo em ms no segundo

/*setTimeout(() => {
  alert("Rivanildo - 2s");
}, 2000);*/

const showAlert1 = () => {
  alert("Rivanildo1 - 2s");
};

const showAlert2 = (name) => {
  alert(`${name}- 2s`);
};

setTimeout(showAlert2, 2000, "Rivanildo");

const timeout = setTimeout(showAlert2, 2000, "Rivanildo");
setTimeout(() => {
  clearTimeout(timeout);
}, 1000);

setTimeout(showAlert1(), 2000);
setTimeout(showAlert1, 2000);

// setInterval
// mesma sintaxe do setTimeout

let count = 0;
/*setInterval(() => {
  ++count;
  console.log("Rivanildo" + count);
}, 1000);*/

const interval = setInterval(() => {
  ++count;
  console.log("Rivanildo " + count);
}, 1000);

setTimeout(() => {
  clearInterval(interval);
}, 5000); // 5500

// resquestAnimationFrame
// recebe por parâmetro um callBack
// precisa-se se recursivo

let count2 = 0;

function animation() {
  count2 += 1;
  console.log(count2);
  loop = resquestAnimationFrame(animation);
}

let loop = requestAnimationFrame(animation);

setTimeout(() => {
  cancelAnimationFrame(loop);
}, 5000);
