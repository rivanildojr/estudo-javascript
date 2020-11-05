/*
* Curso Udemy gratuito - 32 conceitos que todo desenvolvedor JavaScript deveria saber
* 32. Clean code
*/

/*
* Clean Code: Codigo de fácil entendimentos para humanos
*/


// Variaveis
// nomes que retratam bem o que a variavel guarda

// bad
let c = 0;
var time = 15;

//good
let callMadeToAPI = 0;
var timeToWaitResponse = 15;
const CALL_MADE_TO_API = 0;

// Funções
// nomes que retratam bem o que a função faz e deve realizar apenas uma coisa

//bad
function updateUserLocal(id) {
  http.get("url?id=" + id).then(dataUser => {
    this.user = dataUser;
  });
}

//good
async function searchUserById(id){
  return await http.get("url?id=" + id);
}
this.user = searchUserById(1);

// controle de argumentos passados
thid.user = updateUserLocal({
  name: "Rivanildo",
  age: "22",
  telephone: "79 99999-9999",
  address: "em casa"
})

// Comentarios
/*
* Atualiza o usuario local a partir dos dados recebidos por argumento params
* usuario dados do usuario
*/
updateUserLocal(user){
  user.name, user.telephone;
}

//Objetos
function createdUser(name){
  this._name = name;
  getName = () => this.name;
  setName = (name) => this.name = name;
  
  return {getName, setName};
}

const rivanildo = createdUser("Rivanildo");

// Classes

class Utilities {
  constructor(){
    this.text = "";
  }
  
  getText = () => this.text;

  setText = (text) => {
    this.text = text;
    return this;
  }
  
  uppercase = () => {
    this.text = this.text.toUpperCase();
    return this;
  }
  
  revert = () => {
    this.text = this.text.split("").reverse().join("");
    return this;
  }
}

const _utilities = new Utilities();
let text = _utilities.setText("Rivanildo").revert().uppercase().getText();
console.log(text);

// Estudar o livro Clean Code e verificar e utilizat o JSLint