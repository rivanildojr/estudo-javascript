/*
 * Curso Udemy gratuito - 32 conceitos que todo desenvolvedor JavaScript deveria saber
 * 31. Aplicações Parciais
 */

/*
 * Aplicações Parciais: visa fixar parte do argumento de uma função em outras funções
 */

// Aplicações Parciais

function list(junction, ...items) {
  const separateComma = items.slice(0, -1).join(", ");
  //console.log(separateComma);
  const lastItem = items.pop();
  //console.log(lastItem);
  return `${separateComma} ${junction} ${lastItem}`;
}

// function partial(func, junction){
//   return (...items) => {
//     return func(junction, ...items);
//   }
// }

const partial = (func, junction) => (...items) => func(junction, ...items);

const listAnd = partial(list, "e");
const listOr = partial(list, "ou");
const listMaybe = partial(list, "talvez");

console.log(listAnd("azul", "amarelo", "verde"));
console.log(listOr("azul", "amarelo", "verde"));
console.log(listMaybe("azul", "amarelo", "verde"));

console.log(list("ou", "azul", "amarelo", "verde"));
