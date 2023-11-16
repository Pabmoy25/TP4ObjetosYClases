class Persona {
  constructor(nombre, edad, profesion) {
    (this.nombre = nombre), (this.edad = edad), (this.profesion = profesion);
  }
  saludar() {
    document.write(
      `<p>Hola soy ${this.nombre}, tengo ${this.edad} años y soy ${this.profesion}</p>`
    );
  }
  despedirse() {
    document.write(
      `<p>Hasta luego, que tengas un lindo día.</p>`
    );
    document.write(
        `<hr></hr>`
      );
  }
}

let pablo = new Persona("Pablo", 42, "Administrativo de Ventas");

pablo.saludar();
pablo.despedirse();


let cynthia = new Persona("Cynthia", 41, "Ingeniera Mecánica");
cynthia.saludar();
cynthia.despedirse();


let juampy = new Persona("Juan Pablo", 22, "Peluquero");
juampy.saludar();
juampy.despedirse();

