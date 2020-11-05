/*
 * Curso Udemy gratuito - 32 conceitos que todo desenvolvedor JavaScript deveria saber
 * 11. Operadores Bitwise
 */

/*
 * Operadores Bitwise: trabalhando em cada bit dos caracteres comparados
 */

console.log(Number(113).toString(2));
console.log(parseInt("1110001", 2));

/*
 * Operadores Lógicos: || e &&
 * Operadores Bitwise: | e &
 */

// 00000001 = 1
// 00000010 = 2
// 00000011 = 3 // respota do bitwise |

console.log(1 | 2);
console.log(parseInt(11, 2)); // 00000011

// 00000001 = 1
// 00000010 = 2
// 00000000 = 0 // respota do bitwise &

console.log(1 & 2);
console.log(parseInt(0, 2)); // 00000011
