//📌 Ejercicio 5: Contador de Caracteres en una Frase
//📌 Descripción:
// ✔ Pedir al usuario una frase.
// ✔ Contar cuántas letras, números y espacios tiene.

const prompt = require("prompt-sync")();


let contLetras = 0  // Se declaran variables contador para las letras, numeros y espacios.
let contNumeros = 0  
let contEspacios= 0


let frase = prompt("Ingrese un palabra u oracion: ")  // Se pide al usuario ingresar dato.

for (let caracter of frase) {  // Se recorre cada caracter de la frase.
    if (caracter >= 'a' && caracter <= 'z' || caracter >= 'A' && caracter <= 'Z') {  // Se valida letras entre a y z en mayuscula y miniscula.
        contLetras++;  // Aumenta contador si la condicion se cumple.
    } else if (caracter >= '0' && caracter <= '9') {  // Se valida numeros entre 0 y 9.
        contNumeros++;  // Aumenta contator si la condicion se cumple.
    } else if (caracter === ' ') {  // Se valida espacio.
        contEspacios++;  // Aumenta contador si la condicion se cumple.
    }
}
console.log(`Total caracteres: ${frase.length}`)  // Se recorre la frase para validar total de caracteres y se imprime.
console.log(`🆎Letras: ${contLetras}`)  // Se imprimen contadores de letras, numeros y espacios.
console.log(`9️⃣Numeros: ${contNumeros}`)
console.log(`❔Espacios: ${contEspacios}`)