const prompt = require("prompt-sync")(); 

let contDados = parseInt(prompt("🎲 ¿Cuántos dados desea lanzar? "))  // Se solicita al usuario cuantosdados quiere lanzar.


if (isNaN(contDados) || contDados <= 0) {   // Se valida que ingrese un numero y que no sea negativo.
    console.log("⚠️ Entrada inválida. Ingrese un número entero positivo.") // Mensaje de alerta si el dato no es valido.
} else {
    let resultados = [] // Se declara array donde se guardaran los valores aleatrios.
    for (let i = 0; i < contDados; i++) { // Se recorre un ciclo para los dados.
        resultados.push(Math.floor(Math.random() * 6) + 1)  // Se hacen numeros aleatorios entre 1 y 6.
    }

    console.log(`🎲 Resultados de los dados: ${resultados.join(", ")}`); // Se imprime resultados de dados almacenados en el array.
}
