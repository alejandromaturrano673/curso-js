const tradicional = "Hola soy un texto";
const simples = "un gusto conocerte";
const mensaje = `Soy un texto muy especial`;

const nombre = "Jhon";
const carrera = "programador";

const historia = `
Esta es la historia
de ${nombre} un ${carrera}
que solo queria Vibecodear
`;

// console.log(historia);

const longitud = carrera.length;
// console.log(longitud);

const amigos = "Luis, Miguel, Juan, José, Raul, Ernesto";

console.log("concat:", carrera.concat(nombre));
console.log("repeat:", carrera.repeat(3));
console.log("replace:", carrera.replace("a", "@"));
console.log("uppercase:", carrera.toUpperCase());
console.log("lowercase:", carrera.toLowerCase());
console.log("replace all:", carrera.replaceAll("a", "@"));
console.log("split:", amigos.split(", "));
console.log("trim:", carrera.trim());

console.log("3 primeros:", carrera.substring(0, 3));

console.log("caracteres internos:", carrera.substring(3, 8));
