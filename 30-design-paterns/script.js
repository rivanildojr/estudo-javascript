/*
 * Curso Udemy gratuito - 32 conceitos que todo desenvolvedor JavaScript deveria saber
 * 30. Design Paterns: Module Prototype
 */

/*
 * Design Paterns: são formas criadas para resolver problemas recorrentes, modo de escrita de código
 * Module: criação de modulos para separar os arquivos e obter melhor reutilização de código e manutenlabilidade
 * Prototype: cria-se um esqueleto e a partir dele instaciar ou criar novos objetos com o mesmo prototype
 */

// Module

// feito em aulas anteriores

// Prototype

const Car = {
  traction: "4x4",
  ligar() {
    return "ligou";
  },
};

const myCar = Object.create(Car, { owner: { value: "Rivanildo" } });
Car.__proto__.desligar = function () {
  return "desligar";
};

console.log(myCar.ligar());
console.log(myCar.desligar());

/*
 * Curso Udemy gratuito - 32 conceitos que todo desenvolvedor JavaScript deveria saber
 * 30. Design Paterns: Observer e Singleton
 */

/*
 * Observer:
 * Singleton:
 */

// Observer

class Subject {
  constructor() {
    this.observers = [];
  }

  signObservable(observer) {
    this.observers.push(observer);
  }

  notifyObserver(observer) {
    const index = this.observers.indexOf(observer);
    if (index > -1) {
      this.observers[index].notify(index);
    } else {
      console.log("Esse observador não existe");
    }
  }

  notifyObservers() {
    this.observers.forEach((observer, index) => observer.notify(index));
  }
}

class Observer {
  notify(index) {
    console.log(`Observador ${index} foi notificado`);
  }
}

const subject = new Subject();
const observer1 = new Observer();
const observer2 = new Observer();
const observer3 = new Observer();
const observer4 = new Observer();

subject.signObservable(observer1);
subject.signObservable(observer2);
subject.signObservable(observer3);
subject.signObservable(observer4);

subject.notifyObserver(observer1);
subject.notifyObservers();

// Singleton

const printer = (function () {
  let instancePrinter;

  function create() {
    function print() {
      console.log("Imprimindo documento");
    }

    function turnOn() {
      console.log("Ligando impressora");
    }

    return { print, turnOn };
  }

  return {
    getInstance: function () {
      if (!instancePrinter) {
        instancePrinter = create();
      }

      return instancePrinter;
    },
  };
})();

const printerCompany1 = printer.getInstance();
const printerCompany2 = printer.getInstance();

printerCompany1.turnOn();
console.log(printerCompany1);
console.log(printerCompany1 === printerCompany2);
printerCompany1.print();
