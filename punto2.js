// 📌 Ejercicio 2: Verificación de Número Perfecto
// 📌 Descripción:
// ✔ Pedir al usuario un número entero positivo.
// ✔ Determinar si es un número perfecto (la suma de sus divisores propios es igual al número).

const prompt = require("prompt-sync")();

let numero = parseInt(prompt("Ingrese un numero entero positivo: "));  // Se pide numero entero al usuario.
let resto  // Se declara variable resto para el calculo.
let suma = 0, i=1  // Se declara variable para sumar los valores y se empieza el ciclo desde el 1.

if(isNaN(numero)|| numero==="" || numero <=0){  // Se valida numero que si sea un numero, que no este vacio y que sea mayor que 0.
    console.log(" ⚠️ Entrada invalida. Verifique que sea un numero positivo o que el valor no quede vacio.")  // Se imprime alerta alguna de las condiciones se cumple.
    return; 
}   

for(i=1; i<numero;i++){ // Se hace un ciclo desde el 1 hasta el numero ingresado, aumentando de 1 en 1.
    resto = numero % i  // Se calcula resto del numero con el valor de i.
    if(resto == 0){  // Se hace condicion para validar si es un divisor propio con el calculo del resto.
        suma = suma + i // Se suma valor de i si la condicion de cumple.
    }
}
if(numero == suma){  // Se hace condicion para validar si el numero es igual a la suma de i y se imprime mensaje de numero perfecto.
    console.log(`✅ El numero ${numero} es perfecto`)
}else {  // Sino se imprime mensaje de que no es perfecto.
    console.log(`⚕❌ El numero ${numero} no es perfecto`)
}