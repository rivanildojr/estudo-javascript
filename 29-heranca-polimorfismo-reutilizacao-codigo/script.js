/*
 * Curso Udemy gratuito - 32 conceitos que todo desenvolvedor JavaScript deveria saber
 * 29. Herança, Polimorfismo e reutilizaçãp de código
 */

/*
 * Herança: feito anterioemente
 * Polimorfismo: Habilidade de chamar o mesmo método em diferente objetos
 */

// Polimorfismo

class Shape {
  draw() {
    console.log("Eu sou uma forma");
  }
}

class Triangle extends Shape {
  draw() {
    console.log("Eu sou uma forma");
  }
}

// Sobrescrita de metodos

class Circle extends Shape {
  draw() {
    console.log("Eu sou uma circulo");
  }
}

const shapes = [new Shape(), new Triangle(), new Circle()];

shapes.forEach((shape) => shape.draw());
