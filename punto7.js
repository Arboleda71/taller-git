//📌 Ejercicio 7: Cálculo de Promedio con Validación
//📌 Descripción:
// ✔ Pedir al usuario 5 calificaciones (0 a 100).
// ✔ Si ingresa una calificación fuera del rango, volver a pedirla.
// ✔ Calcular y mostrar el promedio final.

const prompt = require("prompt-sync")();
 
contador = 1
suma = 0

while (contador <=5){
let calificacion = parseFloat(prompt(`Ingrese calificacion ${contador}:`))
    if(isNaN(calificacion) || calificacion<0 || calificacion>100){
        console.log("Calificacion invalida, debe estar entre 0 y 100")
}else {
        suma += calificacion 
    contador++
}
}
console.log(`El promedio es: ${suma/5}`)