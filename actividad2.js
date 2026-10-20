// Crear un objeto que almacena datos de una mascota
// desestructurar utilizando un mínimo de 4 variables
// mostrar en consola.

let mascota = {
  nombre: "Toby",
  especie: "perro",
  edad: 3,
  color: "dorado",
};

let { nombre, especie, edad, color } = mascota;

console.log("* Datos de una mascota");
console.log(`  nombre  : ${nombre}`);
console.log(`  especie : ${especie}`);
console.log(`  edad    : ${edad} años`);
console.log(`  color   : ${color}`);
