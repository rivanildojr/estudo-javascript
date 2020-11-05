/*
 * Curso Udemy gratuito - 32 conceitos que todo desenvolvedor JavaScript deveria saber
 * 16. prototype inheritance e prototype chain
 */

/*
 * prototype inheritance:
 * prototype chain:
 */

//prototype inheritance

const User = function (name) {
  this.name = name;
};

const rivanildo = new User("Rivanildo");

User.prototype.getNome = function () {
  console.log(this.name);
};

// busca a função no seu prototipo caso não exista no objeto atual
// seu prototipo é uma referência ao prototipo do construtor que o criou
rivanildo.getNome();

rivanildo.__proto__;
