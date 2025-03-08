// 📌 Ejercicio 3: Simulador de Cajero Automático
//📌 Descripción:
// ✔ Iniciar con un saldo de $1000.
// ✔ Permitir:
// Consultar saldo.
// Depositar dinero.
// Retirar dinero (sin permitir saldo negativo).
// ✔ Repetir el proceso hasta que el usuario decida salir.

const prompt = require("prompt-sync")();

let saldo = 1000  // Se declaran variables de saldo inicial.
flag= true  // Se declara bandera para cierre de ciclo.

while(flag===true){  // Se entra en ciclo mientras que la bandeja sea true.
    console.log("\n📑Bienvenido al menu principal")  // Se imprimen menu.
    console.log("1. ✔ Consultar saldo")
    console.log("2. 🟢 Depositar saldo")
    console.log("3. 🔴 Retirar dinero")
    console.log("4. Salir")


let menu = prompt("\nEliga una opciones: ")  // Se solicita opcion del usuario.

switch(menu){  // Se hace swiche para cada uno de los casos del menu.
    case "1":
        console.log(`\nSu saldo es ${saldo}$`)  // Consultar saldo.
    break
    case "2":
        console.log(`\nSu saldo es ${saldo}$`)  // Imprime saldo actual.
        deposito = parseFloat(prompt("Ingrese el valor a depositar: "))  // Se guarda valor ingreso en la variable deposito.

        if(deposito<=0 || isNaN(deposito)){  // Se valida que el valor no sea menor que 0 y que sea un numero.
            console.log(" ⚠️ Verifique el monto ingresado, debe ser un numero positivo")  //Se imprime alerta si una de las condiciones se cumple.
        }else {  
            saldo += deposito  // Si la validacion es correcta se suma el saldo actual con el deposito solicitado.
            console.log(`✅Deposito exitoso. Ahora su saldo es ${saldo}$`) // Se impirme saldo actual.
        }
        break
    case "3":
        console.log(`\nSu saldo es ${saldo}$`)  // Impirme saldo actual.
        retiro = parseFloat(prompt("Ingrese valor a retirar: "))  // Se guarda valor ingresado en la variable retiro.

        if(retiro > saldo || isNaN(retiro)){  // Se valida que el retiro no sea mayor a el saldo y que sea un numero.
            console.log(" ⚠️ Verifique que el monto ingresado no supere su saldo actual.")  // Se imprime alerta si una de las condiciones se cumple.
        }else {
            saldo -= retiro  // Si la validacion es correcta se resta del saldo actual el valor ingresado en retiro.
            console.log(`✅Retiro exitoso. Ahora su saldo es ${saldo}$`) // Se imprime saldo actual.
        }
        break
    case "4":
        console.log("\n✋Gracias por preferirnos.")  // Mensaje de despedida.
        flag = false // Se cambia la bandera para acabar el ciclo.
        return
    default: // Se declara default si no ingresa una opcion del menu.
        console.log("Opcion invalida.")
}
}