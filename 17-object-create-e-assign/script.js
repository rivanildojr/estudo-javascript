/*
 * Curso Udemy gratuito - 32 conceitos que todo desenvolvedor JavaScript deveria saber
 * 17. Object.create e Object.assign
 */

/*
 * Object.create: uma alternativa para criar objetos no JavaScript
 * Object.assign: recebe objetos e junta em um só, sem a referência dos objetos que foram utilizados para criá-lo (exceto o do alvo)
 */

// Object.create
// primeiro argumento: prototype que ele deve herdar
// segundo argumento: propriedade do objeto (propriedades descritoras)

let User = function (name, age) {
  this.name = name;
  this.age = age;
};

const rivanildo = new User("Rivanildo", 22);
const newRivanildo = Object.create(rivanildo);

console.log(newRivanildo instanceof User);
console.log(newRivanildo.name); // herança do prototipo

function Car(color) {
  this.color = color;
  this.description = description;
}

Car.prototype.getInformation = function () {
  return this.description + "e a cor " + this.color;
};

let myCar = Object.create(Car.prototype);
myCar.color = "azul";
console.log(myCar.getInformation());

const newCar = Object.create(Car, {
  color: {
    writable: true,
    configurable: true,
    value: "vermelho",
  },
  descriptionDefault: {
    writable: false,
    configurable: true,
    value: "Meu carro",
  },
  description: {
    configurable: true,
    get: function () {
      return this.descriptionDefault.toUpperCase();
    },
    set: function (value) {
      this.descriptionDefault = value.toLowerCase();
    },
  },
});

newCar.descriptionDefault = "Nova Descrição";
console.log(newCar.description);

// Object.assign
// Recebe por parametros os objetos que serão juntados
// O primeiro objeto é o objeto alvo no qual todos irão juntar nele

const target = {
  a: 1,
  b: 2,
};

const data = {
  b: 5,
  c: 4,
};

const result = Object.assign(target, data);
console.log(result);

result.a = 7;
console.log(result);
console.log(target);

result.c = 10;
console.log(result);
console.log(data);

const object1 = {
  a: 1,
  b: 2,
};

const object2 = {
  c: 3,
  d: 4,
};

const result2 = Object.assign({}, object1, object2);
console.log(result2);

result2.a = 11;
console.log(result2);
console.log(object1);
