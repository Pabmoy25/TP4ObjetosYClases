/* 4- Escribe una clase Producto para crear objetos. Estos objetos, deben presentar las propiedades código, nombre y precio, además del método imprime datos, el cual escribe por pantalla los valores de sus propiedades.
Posteriormente, cree tres instancias de este objeto y guárdalas en un array.
Por último, utilice el método imprime datos para mostrar por pantalla los valores de los tres objetos instanciados.
 */

class Producto {
    constructor(codigo, nombre, precio) {
      (this.codigo = codigo), (this.nombre = nombre), (this.precio = precio);
    }

    imprimeDatos() {
      let codigo = this.codigo;
      document.write(`<p>Codigo del producto: 00${codigo}</p>`);
      let nombre = this.nombre;
      document.write(`<p>Nombre: ${nombre}</p>`);
      let precio = this.precio;
      document.write(`<p>Precio: $ ${precio}</p>`);
      document.write(`<hr></hr>`);
    }
  }
  
  const ferreteria = [];
  console.log(ferreteria);
  
  document.write(`<h2>Ferretería</h2>`);
  
  let martillo = new Producto(1, "Martillo", 3000);
  console.log(martillo);
  martillo.imprimeDatos();
  
  let pinza = new Producto(2, "Pinza", 2400);
  console.log(pinza);
  pinza.imprimeDatos();
  
  let destornillador = new Producto(3, "Destornillador", 2200);
  console.log(destornillador);
  destornillador.imprimeDatos();
  
  ferreteria.push(martillo, pinza, destornillador);
