//Almacenar un texto en una variable y luego mostrarlo en orden inverso en la consola
//Ejemplo: "senati" -> "itanes"

// const textoOriginal = "senati";
// const textoInvertido = textoOriginal.split("").reverse().join("");
// console.log(textoInvertido);

function invertirTexto(texto) {
  let textoInverso = "";
  for (let i = texto.length - 1; i >= 0; i--) {
    textoInverso = textoInverso.concat(texto[i]);
  }
  return textoInverso
}

console.log(invertirTexto("senati"));

//Crear una variable donde almacene una dirección de correo electrónico
//verificar si el correo es válido cuando tiene un solo @
//Ejemplo:
// jhon@gmail.com  [correcto]
// luis@gmail@.com [incorrecto]
// mariagmail.com  [incorrecto]

function verificarCorreo(correo) {
  let arrobas = 0;
  for (let i = 0; i < correo.length; i++) {
    if (correo[i] == "@") {
      arrobas++;
    }
  }
  if (arrobas == 1) {
    console.log(`${correo}\t[correcto]`);
  } else {
    console.log(`${correo}\t[incorrecto]`);
  }
}

verificarCorreo("jhon@gmail.com");
verificarCorreo("luis@gmail@.com");
verificarCorreo("mariagmail.com");
