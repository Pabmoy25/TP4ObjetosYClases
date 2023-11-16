/* 3-Escribe una clase que permita crear distintos objetos “rectángulos”, 
con las propiedades de alto y ancho, mas los métodos necesarios para modificar 
y mostrar sus propiedades, calcular el perímetro y el área
(a + b )*2 = Perimetro, cm
(a * b)  = centimetros cuadrados 
 */

const ladoA = parseFloat(prompt(`Ingrese el alto`));
const ladoB = parseFloat(prompt(`Ingrese el ancho`));

class Rectangulos {
  constructor(alto, ancho) {
    this.alto = alto;
    this.ancho = ancho;
  }

  datosDelRectangudo(){
    document.write(`<H2>Si el alto del rectangulo es ${this.alto} y el ancho es ${this.ancho}</H2>`)
  }

  perimetro(){
    let resultadoPerimetro = (this.alto + this.ancho) * 2
    document.write(`<p>Su Perimetro es ${resultadoPerimetro}</p>`)
  }

  area(){
    let resultadoArea = this.alto * this.ancho
    document.write(`<p>Su Area es ${resultadoArea}</p>`)
  }
  }

  const rectangulo1 = new Rectangulos(ladoA, ladoB)

  rectangulo1.datosDelRectangudo()
  rectangulo1.perimetro()
  rectangulo1.area()


