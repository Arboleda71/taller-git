const prompt = require("prompt-sync")();

let contDados = prompt("Cuantos dados va a lanzar: ")

let resultados = []
for (let i = 0; i< contDados; i++){
    resultados.push(Math.floor(Math.random() * 6) + 1)
}

console.log(`🎲Resultado de dados:  ${resultados.join(", ")}`)