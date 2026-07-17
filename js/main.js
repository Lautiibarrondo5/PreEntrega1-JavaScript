const nombre = prompt("Ingrese su nombre");
const edad = parseInt(prompt("Ingrese su edad"));
const ciudad = prompt("¿De qué ciudad sos?");

let edadEnCinco = edad + 5;

let mensaje =
    "Hola " +
    nombre +
    ". Vivís en " +
    ciudad +
    " y dentro de 5 años vas a tener " +
    edadEnCinco +
    " años.";

console.log(mensaje);
alert(mensaje);