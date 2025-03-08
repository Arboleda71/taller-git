// 📌 Ejercicio 4: Generador de Tablas de Multiplicar
// 📌 Descripción:
// ✔ Pedir al usuario un número entero positivo.
// ✔ Mostrar su tabla de multiplicar del 1 al 10.

const prompt = require("prompt-sync")();
let i=1
let multi
let numero = parseInt(prompt("Ingrese numero entero positivo: "))

if(isNaN(numero) || numero <0){
    console.log("Entrada invalida, verifique el dato ingresado")
}else {
    console.log(`Tabla de ${numero}`)
    for(i=1;i<=10;i++){
        multi = numero*i
        console.log(`${numero} x ${i }= ${multi} `)
    }
}