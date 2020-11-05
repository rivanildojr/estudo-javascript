/*
 * Curso Udemy gratuito - 32 conceitos que todo desenvolvedor JavaScript deveria saber
 * 21. High Order Functions
 */

/*
* High Order Functions: são funções que podem receber outras funções como argumento ou retornam função
Como exemplo: callback
*/

function showAlert() {
  alert("Clicou na logo");
}

//document.getElementById("logo-default").addEventListener("click", mostrarAlert);

const upperCase = function (text) {
  return text.toUpperCase();
};

console.log(upperCase("Rivanildo"));

function callAlert() {
  return showAlert;
}

callAlert()();
