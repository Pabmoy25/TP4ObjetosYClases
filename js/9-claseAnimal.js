/* 9- Crea una clase llamada "Animal" que tenga las propiedades "nombre" y "edad", 
y el método "emitirSonido". Luego, crea dos clases hijas llamadas "Perro" y "Gato" 
que hereden de "Animal" y tengan su propio método "emitirSonido". Finalmente, crea
 dos objetos, uno de la clase "Perro" y otro de la clase "Gato", y llama a sus 
 métodos "emitirSonido" para verificar que cada animal emite el sonido adecuado.*/

class Animal {
  constructor(nombre, edad, sonido) {
    (this.nombre = nombre), (this.edad = edad), (this.sonido = sonido);
  }
  emitirSonido() {
    document.write(`El Animal esta ${this.sonido}`);
  }
}

class Perro extends Animal {
  constructor(nombre, edad, sonido, tipoDeAnimal) {
    super(nombre, edad, sonido);
    this.tipoDeAnimal = tipoDeAnimal;
  }

  emitirSonido() {
    document.write(`<h2>Animal: ${this.tipoDeAnimal}</h2>
  <ul>
  <li>Nombre: ${this.nombre}</li>
  <li>Edad: ${this.edad} años</li>
  <li>Sonido: ${this.sonido}</li>
  </ul>
  `);
  }
}

class Gato extends Animal {
  constructor(nombre, edad, sonido, tipoDeAnimal) {
    super(nombre, edad, sonido);
    this.tipoDeAnimal = tipoDeAnimal;
  }
  emitirSonido() {
    document.write(`<h2>Animal: ${this.tipoDeAnimal}</h2>
          <ul>
          <li>Nombre: ${this.nombre}</li>
          <li>Edad: ${gato.edad} años</li>
          <li>Sonido: ${this.sonido}</li>
          </ul>
          `);
  }
}

let perro = new Perro("Cookie", 4, "Guau", "Perro");

console.log(perro);
perro.emitirSonido();

let gato = new Gato("Tao", 2, "Miau", "Gato");

console.log(gato);
gato.emitirSonido();
