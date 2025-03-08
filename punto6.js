// 📌 Ejercicio 6: Filtro de Números Pares e Impares
// 📌 Descripción:
// ✔ Pedir al usuario 10 números.
// ✔ Separarlos en pares e impares y mostrarlos en dos listas.

const prompt = require("prompt-sync")();

let pares = [] // Se declara array para almacenar numeros pares.
let impares = []  // Se declara array para almacenar numeros impares.

for(let i=0; i<10; i++){  // Se hace ciclo para solicitar 10 veces el numero.

    let numero = parseInt(prompt("Ingrese un numero: "))  // Solicita numero y lo convierte en entero.
    if (isNaN(numero)) {  // Valida si el numero si sea un numero. 
        console.log("⚠️ Entrada inválida. Intente nuevamente."); // Imprime alerta si no es un numero.
        i-- // Restar 1 para que el intento no cuente.
        continue // Volver a pedir el número.
    }  
    if(numero % 2 === 0){  // Valida si el numero es par con el calculo del resto.
        pares.push(numero)  // Agrega el numero a el array pares.
    }
    else {  // Sino agrega el numero a el array impares.
        impares.push(numero)
    }
    
}

console.log(`Numeros pares= [${pares}]`)  // Se imprime valores pares.
console.log(`Numeros impares= [${impares}]`)  // Se impirme valores impares.