/*
 * Curso Udemy gratuito - 32 conceitos que todo desenvolvedor JavaScript deveria saber
 * 14. this, call, apply e bind
 */

/*
 * this: referencia o atual contexto no qual está sendo utilizado
 * call: executa uma função emediatamente alterando o seu contexto
 * apply: a mesma coisa do call, porem pode receber um array de argumentos
 * bind: cria uma função com contexto diferente e pode-se executar a qualquer hora
 */

// This

function test() {
  console.log(this);
}

//test();

const data = {
  funcTest: test,
};

//data.funcTest();

const test2 = () => console.log(this);

//test2();

const util = {
  funcTest: test2,
};

util.funcTest();

const argumentsPersonal = [22, "Rosário"];

// call

const data = {
  name: "Rivanildo",
};

const welcome = function (age, city) {
  console.log(`Bem vindo ${this.name}, sua idade é ${age} e mora em ${city}`);
};

welcome.call(data, 22, "Rosário");
welcome.call(data, argumentsPersonal);

// apply

const data2 = {
  name: "Rivanildo",
};

const welcome2 = function (idade, city) {
  console.log(`Bem vindo ${this.name}, sua idade é ${idade} e mora em ${city}`);
};

welcome2.apply(data, argumentsPersonal);
welcome2.apply(data, 22, "Rosário");

// bind

const data3 = {
  name: "Rivanildo",
};

const welcome3 = function (idade, city) {
  console.log(`Bem vindo ${this.name}, sua idade é ${idade} e mora em ${city}`);
};

const bound = welcome3.bind(data3);
bound(22, "Rosário");
