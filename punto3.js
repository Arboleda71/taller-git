// 📌 Ejercicio 3: Simulador de Cajero Automático
//📌 Descripción:
// ✔ Iniciar con un saldo de $1000.
// ✔ Permitir:
// Consultar saldo.
// Depositar dinero.
// Retirar dinero (sin permitir saldo negativo).
// ✔ Repetir el proceso hasta que el usuario decida salir.

const prompt = require("prompt-sync")();

let saldo = 1000
let deposito = 0
let retiro = 0
flag= true

while(flag===true){
    console.log("📑Bienvenido al menu principal")
    console.log("1. ✔ Consultar saldo")
    console.log("2. 🟢 Deposito saldo")
    console.log("3. 🔴 Retirar dinero")
    console.log("4. Salir")


let menu = prompt("Eliga una opciones: ")

switch(menu){
    case "1":
        console.log(`Su saldo es ${saldo}$`)
    break
    case "2":
        console.log(`Su saldo es ${saldo}$`)
        deposito = parseFloat(prompt("Ingrese el valor a depositar: "))

        if(deposito<0 || isNaN(deposito)){
            console.log("Verifique el valor ingresado")
        }else {
            saldo = saldo + deposito
            console.log(`Ahora su saldo es ${saldo}$`)
        }
        break
    case "3":
        console.log(`Su saldo es ${saldo}$`)
        retiro = parseFloat(prompt("Ingrese valor a retirar: "))

        if(saldo < retiro || isNaN(retiro)){
            console.log("Verifique el monto de su saldo")
        }else {
            saldo = saldo - retiro
            console.log(`Ahora su saldo es ${saldo}$`)
        }break
    case "4":
        console.log("Saliste del menu.")
        flag === false
        return
    default:
        console.log("Opcion invalida.")
}
}