/*
 * Curso Udemy gratuito - 32 conceitos que todo desenvolvedor JavaScript deveria saber
 * 22. Recursion
 */

/*
 * Recursion: Habilidade de uma função chamar ela mesma dentro dela
 */

//function test(){
//test();
//}

//test();

function count(number) {
  console.log(number);
  if (number > 0) {
    count(number - 1);
  }
}

count(5);

function count2(number) {
  for (; number >= 0; number--) {
    console.log(number);
  }
}

count2(5);
