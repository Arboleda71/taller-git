// 📌 Ejercicio 3: Simulador de Cajero Automático
//📌 Descripción:
// ✔ Iniciar con un saldo de $1000.
// ✔ Permitir:
// Consultar saldo.
// Depositar dinero.
// Retirar dinero (sin permitir saldo negativo).
// ✔ Repetir el proceso hasta que el usuario decida salir.

const prompt = require("prompt-sync")();

let saldo = 1000  // Se declaran variables de saldo, deposito, retiro y bandera para salir del menu.
let deposito = 0
let retiro = 0
flag= true

while(flag===true){  // Se entra en ciclo mientras que la bandeja sea true.
    console.log("📑Bienvenido al menu principal")  // Se imprimen mensaje para el menu que visualiza el usuario con sus opciones disponibles.
    console.log("1. ✔ Consultar saldo")
    console.log("2. 🟢 Depositar saldo")
    console.log("3. 🔴 Retirar dinero")
    console.log("4. Salir")


let menu = prompt("Eliga una opciones: ")  // Se declara variable que se usa para guardar opcion del menu que el usuario solicite.

switch(menu){  // Se hace swiche para cada uno de los casos del menu.
    case "1":
        console.log(`Su saldo es ${saldo}$`)  // Consultar saldo.
    break
    case "2":
        console.log(`Su saldo es ${saldo}$`)  // Imprime saldo actual.
        deposito = parseFloat(prompt("Ingrese el valor a depositar: "))  // Se guarda valor ingreso en la variable deposito.

        if(deposito<0 || isNaN(deposito)){  // Se valida que el valor no sea menor que 0 y que sea un numero.
            console.log("Verifique el valor ingresado")  //Se imprime alerta si una de las condiciones se cumple.
        }else {  
            saldo = saldo + deposito  // Si la validacion es correcta se suma el saldo actual con el deposito solicitado.
            console.log(`Ahora su saldo es ${saldo}$`) // Se impirme saldo actual.
        }
        break
    case "3":
        console.log(`Su saldo es ${saldo}$`)  // Impirme saldo actual.
        retiro = parseFloat(prompt("Ingrese valor a retirar: "))  // Se guarda valor ingresado en la variable retiro.

        if(saldo < retiro || isNaN(retiro)){  // Se valida que el retiro no sea mayor a el saldo y que sea un numero.
            console.log("Verifique el monto de su saldo")  // Se imprime alerta si una de las condiciones se cumple.
        }else {
            saldo = saldo - retiro  // Si la validacion es correcta se resta del saldo actual el valor ingresado en retiro.
            console.log(`Ahora su saldo es ${saldo}$`) // Se imprime saldo actual.
        }
        break
    case "4":
        console.log("Saliste del menu.")  // Sale del menu
        flag === false // Se cambia la bandera para acabar el ciclo.
        return
    default: // Se declara default si no ingresa una opcion del menu.
        console.log("Opcion invalida.")
}
}