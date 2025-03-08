//📌 Ejercicio 5: Contador de Caracteres en una Frase
//📌 Descripción:
// ✔ Pedir al usuario una frase.
// ✔ Contar cuántas letras, números y espacios tiene.

const prompt = require("prompt-sync")();


let contLetras = 0  // Se declaran variables contador para las letras, numeros y espacios.
let contNumeros = 0  
let contEspacios= 0


let frase = prompt("Ingrese un palabra u oracion: ")  // Se pide al usuario ingresar dato

for (let caracter of frase) {
    if (caracter >= 'a' && caracter <= 'z' || caracter >= 'A' && caracter <= 'Z') {
        contLetras++;
    } else if (caracter >= '0' && caracter <= '9') {
        contNumeros++;
    } else if (caracter === ' ') {
        contEspacios++;
    }
}
console.log(`Total caracteres: ${frase.length}`)
console.log(`Letras: ${contLetras}`)
console.log(`Numeros: ${contNumeros}`)
console.log(`Espacios: ${contEspacios}`)