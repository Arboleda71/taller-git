// 📌 Ejercicio 6: Filtro de Números Pares e Impares
// 📌 Descripción:
// ✔ Pedir al usuario 10 números.
// ✔ Separarlos en pares e impares y mostrarlos en dos listas.

const prompt = require("prompt-sync")();

let pares = [] 
let impares = []

for(let i=0; i<10; i++){

    let numero = prompt("Ingrese un numeros: ")
    if(isNaN(numero)){
        console.log("Entrada invalida")
        return
    }else {
    if(numero % 2 === 0){
        pares.push(numero)
    }
    else {
        impares.push(numero)
    }
    }
}

console.log(`Numeros pares= [${pares}]`)
console.log(`Numeros impares= [${impares}]`)