/*
 * Curso Udemy gratuito - 32 conceitos que todo desenvolvedor JavaScript deveria saber
 * 4. Implícito, Explicito e chamada de métodos
 */

/*
 * Coerção: JavaScript tenta converter um valor em um tipo esperado.
 * Com a coerção só é possível obter três tipos: String, Number e Boolean.
 */

// Coerção no JavaScript

console.log("7" - 7); // Converteu a String ("7") em Number
console.log("7" + 7); // Converteu a Number (7) em String
console.log(true + 1); // Converteu o Boolean (true) em Number
console.log(false + 1); // Converteu o Boolean (false) em Number
console.log(true + true); // Converteu os Boolean (true) em Number
console.log([] + {}); // Converteu o Array ([]) e o Object ({}) em String
console.log([] + []); // Converteu os Array ([]) em String

// Implícito
console.log(+"7");
console.log(7 + "");
console.log(777 && "olá");
console.log("" && "olá");
console.log(null || true);

// Explícito
console.log(Number("77"));
console.log(String(77));

// Chamada de métodos
// Conceito de Duck Type (Se anda como um pato e fala como um pato, então só pode ser um pato)

function somaNumeros(a, b) {
  return a + b;
}
console.log(somaNumeros(7, 7)); // Correto
console.log(somaNumeros("7", 7)); // Errado
console.log(somaNumeros(true, 7)); // Errado
