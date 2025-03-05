// 📌 Ejercicio 2: Verificación de Número Perfecto
// 📌 Descripción:
// ✔ Pedir al usuario un número entero positivo.
// ✔ Determinar si es un número perfecto (la suma de sus divisores propios es igual al número).

const prompt = require("prompt-sync")();

let numero = parseInt(prompt("Ingrese un numero entero positivo: "));
let resto
let suma = 0, i=1

if(isNaN(numero)|| numero==="" || numero <=0){
    console.log("Entrada invalida. Verifique que sea un numero positivo o que el valor no quede vacio.")
    return;
}   

for(i=1; i<numero;i++){
    resto = numero % i
    if(resto == 0){
        suma = suma + i
    }
}
if(numero == suma){
    console.log(`✅ El numero ${numero} es perfecto`)
}else {
    console.log(`⚕❌ El numero ${numero} no es perfecto`)
}