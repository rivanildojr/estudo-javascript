/*
 * Curso Udemy gratuito - 32 conceitos que todo desenvolvedor JavaScript deveria saber
 * 13. Factories
 */

/*
 * Factories: é uma função (sem ser classe ou construtor) que retorna um objeto
 */

const Mammal = function (name, sound) {
  return { name, sound };
};

const dog = Mammal("Cachorro", "Au Au");

console.log(dog);

/*
 * Curso Udemy gratuito - 32 conceitos que todo desenvolvedor JavaScript deveria saber
 * 13. Classes
 */

/*
 * Classes: é um objeto e vem do ES6
 */

// Class
class Animal {
  constructor(foot) {
    this.foot = foot;
  }

  quantFoot() {
    console.log("Eu tenho " + this.foot + " pés/patas");
  }
}

//inheritance
const Mammal = class extends Animal {
  constructor(name, sound, foot) {
    super(foot);
    this.name = name;
    this.sound = sound;
  }

  showSound() {
    console.log("Esse animal faz " + this.sound);
  }
};

const dog2 = new Mammal("Cachorro", "Au Au", 4);
dog2.showSound();
dog2.quantFoot();
