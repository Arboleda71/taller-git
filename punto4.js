// 📌 Ejercicio 4: Generador de Tablas de Multiplicar
// 📌 Descripción:
// ✔ Pedir al usuario un número entero positivo.
// ✔ Mostrar su tabla de multiplicar del 1 al 10.

const prompt = require("prompt-sync")();
let i=1  // Se declaran variables para i, multiplicacion y numero ingresado.
let multi
let numero = parseInt(prompt("Ingrese numero entero positivo: "))

if(isNaN(numero) || numero <0){  // Se valida que el valor sea un numero y no sea negativo.
    console.log(" ⚠️ Entrada invalida, verifique el dato ingresado")  // Se imprime alerta si el numero es invalido.
}else {  
    console.log(`Tabla de ${numero}`)  // Se imprime mensaje con el numero ingresado.
    for(i=1;i<=10;i++){  // Se hace ciclo desde 1 hasta 10.
        multi = numero*i // Se multiplica numero * el valor de i y se guarda en la variable multi.
        console.log(`${numero} x ${i }= ${multi} `)  // Se imprime la multiplicacion y su resultado.
    }
}