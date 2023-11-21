/* 7- Nos piden realizar una agenda telefónica de contactos.
Un contacto está definido por un nombre y un teléfono. Se considera que un contacto es igual a otro cuando sus nombres son iguales.
Una agenda de contactos está formada por un conjunto de contactos. Se podrá crear de dos formas, indicando nosotros el tamaño o con un tamaño por defecto (10).

Los métodos de la agenda serán los siguientes:
aniadirContacto(Contacto): Añade un contacto a la agenda, sino la agenda no puede almacenar más contactos indicar por pantalla.
existeContacto(Contacto): indica si el contacto pasado existe o no.
listarContactos(): Lista toda la agenda
buscarContacto(nombre): busca un contacto por su nombre y muestra su teléfono.
eliminarContacto(Contacto c): elimina el contacto de la agenda, indica si se ha eliminado o no por pantalla
agendaLlena(): indica si la agenda está llena.
huecosLibres(): indica cuántos contactos más podemos ingresar.
Crea un menú con opciones que serán seleccionadas por el usuario usando un prompt, las salidas de las operaciones seleccionadas por el usuario se pueden mostrar en pantalla y  por consola.
*/

class Contacto {
    constructor(nombre, telefono) {
      this.nombre = nombre;
      this.telefono = telefono;
    }
    }
  
  
class Agenda {
    constructor() {
      (this.contactos = []), (this.cantidad = 10);
    }
  
    aniadirContacto(contacto) {
      if (this.contactos.length < this.cantidad) {
        this.contactos.push(contacto);
        alert("Contacto añadido correctamente.");
      } else {
        alert("No se ingreso el contacto. La agenda esta llena.");
      }
    }
  
    existeContacto(contacto) {
      for (let i = 0; i < this.contactos.length; i++) {
        if (this.contactos[i].nombre === contacto.nombre) {
          return true;
        }
      }
      return false;
    }
  
    listarContacto() {
      document.write(`<h1>Lista de Contactos</h1>`);
      for (let i = 0; i < this.contactos.length; i++) {
        document.write(`<ul>
             <li>Nombre: ${this.contactos[i].nombre}</li>
             <li>Telefono: ${this.contactos[i].telefono}</li>
             <hr>
             </ul>`);
      }
    }
  
    buscarContacto(nombre) {
      for (let i = 0; i < this.contactos.length; i++) {
        if (this.contactos[i].nombre === nombre) {
          document.write  (`<p>Se encontro el contacto buscado (${nombre})</p>`);
          document.write(
            `Su telefono es ${this.contactos[i].telefono}`
          );
          return;
        }
      }
      alert(`no se encontro ningun contacto con el nombre ${nombre}`);
    }
  
    eliminarContacto(contacto) {
      for (let i = 0; i < this.contactos.length; i++) {
        if (this.contactos[i].nombre === contacto.nombre) {
          this.contactos.splice(i, 1);
          alert("contacto eliminado correctamente");
          return;
        }
      }
      alert("No se encontro ningun contacto con el nombre señalado para eliminar");
    }
  
    agendaLlena() {
      return this.contactos.length === this.cantidad;
    }
  
    espaciosLibres() {
      return this.cantidad - this.contactos.length;
    }
  }
  
  const agenda = new Agenda();
  
    
  do {
    const opciones = prompt(`Elije una Opción:
  1-Agregar contacto
  2-Buscar contacto
  3-Eliminar contacto
  4-Ver lista de contactos
  5-Ver si la agenda esta llena
  6-Ver espacios libres para agregar contacto
  `);
  
    switch (opciones) {
      case "1":
        const nombre = prompt("Ingrese el nombre del contacto");
        const telefono = parseInt(prompt("Ingrese el número de telefono"));
        const nuevoContacto = new Contacto(nombre, telefono);
        agenda.aniadirContacto(nuevoContacto);
        break;
  
      case "2":
        const buscarNombre = prompt(
          "ingrese el nombre de contacto que quiere buscar"
        );
        agenda.buscarContacto(buscarNombre);
        break;
  
      case "3":
        const nombreEliminar = prompt(
          "Ingrese el nombre del contacto que desea eliminar"
        );
        const contactoEliminar = new Contacto(nombreEliminar, "");
        agenda.eliminarContacto(contactoEliminar);
        break;
  
      case "4":
        agenda.listarContacto();
        break;
  
      case "5":
        console.log(`Agenda llena ${agenda.agendaLlena()}`);
        alert(`Agenda llena ${agenda.agendaLlena()}`);
        break;
        
      case "6":
        console.log(`Espacios libres en la agenda  ${agenda.espaciosLibres()}`);
        alert(`Espacios libres en la agenda  ${agenda.espaciosLibres()}`);
        break;
  
      default:
        alert("Opcion valida");
        break;
    }
  } while (confirm("¿Desea realizar otra acción?"));
   
 
  

  
  

  
  
  
  
  






