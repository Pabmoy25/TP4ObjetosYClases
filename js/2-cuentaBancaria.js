/* Cuenta bancaria 
2-Escribe un programa que cree un objeto "cuenta" con las siguientes propiedades:
Una propiedad titular con el valor "Alex".
Una propiedad saldo, teniendo como valor inicial 0.
Un método ingresar() que permita añadir dinero a la cuenta, pasando la cantidad como parámetro
Un método extraer() que permita retirar la cantidad pasada como parámetro.
Un método informar() que retorne la información del estado de la cuenta. 

Utiliza este objeto para mostrar la descripción, ingresar y extraer dinero y volver a mostrar la descripción del estado de la cuenta.
*/
class Cuenta {
  constructor(titular, saldo) {
    (this.titular = titular), (this.saldo = saldo);
  }
  usuario() {
    document.write(`<h1>Bienvenido a NewBank</h1>`);
    document.write(
      `<h2>Nombre del titular ${this.titular}, Su Saldo es $ ${this.saldo}</h2>`
    );
  }
  ingresarDinero() {
    let ingresar = parseFloat(prompt("¿Cuanto dinero desea ingresar?"));
    document.write(`<p>Ingreso $${(Cuenta.saldo = ingresar)}</p>`);
    document.write(`<p>Su nuevo saldo es $${(Cuenta.saldo = ingresar)}</p>`);
  }
  extraerDinero() {
    let extraer = parseFloat(prompt("¿Cuanto dinero desea extraer?"));
    if (Cuenta.saldo >= extraer){
    document.write(`<p>Extrajo $${extraer}</p>`);
    document.write(
      `<p>Su nuevo saldo es $${(Cuenta.saldo = Cuenta.saldo - extraer)}</p>`
    );
  }else{document.write(
      `<p>Su saldo es insuficiente para extraer el monto indicado</p>`)}

    }
    
}

let titular = new Cuenta("Alex", 0);

titular.usuario();
titular.ingresarDinero();
titular.extraerDinero();



