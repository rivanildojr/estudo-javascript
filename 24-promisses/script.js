/*
 * Curso Udemy gratuito - 32 conceitos que todo desenvolvedor JavaScript deveria saber
 * 24. Promises
 */

/*
 * Promises: possui 3 estados: pedente, realizada e rejeitada
 */

const momRemembered = true;

const buyPen = new Promise((resolve, reject) => {
  if (momRemembered) {
    resolve(true);
  } else {
    reject(false);
  }
});

buyPen
  .then((remembered) => {
    console.log("Lembrou");
  })
  .catch((notRemembered) => {
    console.log("Não Lembrou");
  });

const outPlay = (result) => {
  return new Promise((resolve) => {
    if (result) {
      resolve("Sair para jogar");
    } else {
      resolve("Não sairei para jogar");
    }
  });
};

console.log("indo no mercado");
buyPen
  .then(outPlay)
  .catch(outPlay)
  .then((result) => {
    console.log(result);
  });
console.log("voltando do mercado");

// Cuidado com o callBack hell - varias chamadas que retornam promessas
