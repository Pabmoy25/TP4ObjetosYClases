/* Crear objetos
Crea un objeto llamado auto que tenga algunas características como el color, marca, modelo y si está encendido o apagado. Crea los métodos necesarios para permitir encender y apagar el auto.

Output:

objeto.encender();
objeto.apadar()
auto encendido
El auto se apagó
 */

const auto = {
    color: "Rojo",
    marca: "Ford",
    modelo: "Ka SEL",
    motor: "1,5",
    
    encendido: function(){
      document.write(`<h2>...Auto encendido</h2>`)
    },
    apagado: function(){
      document.write(`<h2>El auto se apago...</h2>`)
    },
  }
  
  console.log(auto);

  document.write(`<h1>Auto</h1>`)
  
  document.write(`<p>Marca: ${auto.marca}</p>`)
  document.write(`<p>Color: ${auto.color}</p>`)
  document.write(`<p>Modelo: ${auto.modelo}</p>`)
  document.write(`<p>motor: ${auto.motor}</p>`)
  
  auto.encendido();
  
  auto.apagado();