/*
 * Curso Udemy gratuito - 32 conceitos que todo desenvolvedor JavaScript deveria saber
 * 19. Pure Function, Side Effects e State Mutation
 */

/*
 * Pure Function: função na qual ao receber o mesmo tipo de dados, retorna os mesmo tipos de valores, dependendo apenas dos argumentos que recebe sem efeitos colaterais
 * State Mutation:
 */

// Side Effects
let name = "";
let updateName = (newNome) => {
  name = newNome;
};

// Pure Functions

const add = (valueX, valueY) => valueX + valueY;

const user = {
  name: "Rivanildo",
  point: 0,
};

const updateUser = (user) => {
  user.name = user.name.toUpperCase();
  user.point += 1;
  return user;
};

updateUser(user);
console.log(user);

const upperCase = (name) => name.toUpperCase();
const incrementPoint = (point) => ++point;

user.name = upperCase(user.name);
user.point = incrementPoint(user.point);

console.log(user);

// State Mutation
// tudo além de tipos primario é mutavel

const order = {
  title: "meu pedido",
  status: false,
};

const copyOrder = (order) => {
  order.status = true;
  return order;
};

//const newOrder = copyOrder(order);
//newOrder.title = "segundo pedido";
//console.log(order);
//console.log(newOrder);

const copyOrder2 = (order) => {
  const newOrder = Object.assign({}, order);
  newOrder.status = true;
  return newOrder;
};

const newOrder2 = copyOrder2(order);
newOrder2.title = "segundo pedido";
console.log(order);
console.log(newOrder2);

// blibioteca js - immutable.js
// puglin vscode - eslint-plugin-immutable
