/*
 * Curso Udemy gratuito - 32 conceitos que todo desenvolvedor JavaScript deveria saber
 * 25. Async/Await
 */

/*
 * Async/Await:
 */

let momRemembered = true;

const buyPen = new Promise((resolve, reject) => {
  if (momRemembered) {
    resolve(true);
  } else {
    reject(false);
  }
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

async function goStore() {
  try {
    const momRemembered = await buyPen;
    const message = await outPlay(momRemembered);
    console.log(message);
  } catch (notRemembered) {
    const message = await outPlay(momRemembered);
    console.log(message);
  }
}
