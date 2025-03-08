"""📌 Ejercicio 7: Cálculo de Promedio con Validación
📌 Descripción:
 ✔ Pedir al usuario 5 calificaciones (0 a 100).
 ✔ Si ingresa una calificación fuera del rango, volver a pedirla.
 ✔ Calcular y mostrar el promedio final.
📌 Ejemplo:
Ingrese la calificación 1: 85  
Ingrese la calificación 2: 95  
Ingrese la calificación 3: 120  
❌ Calificación inválida. Debe estar entre 0 y 100.  
Ingrese la calificación 3: 90  
📊 Promedio final: 90 

Hacerlo en Python"""

def agregar_estudiante():
    contador=1
    acumulador=0
    while contador<6:
        try:
            calificacion = float(input(f"Ingrese la calificacion {contador}: "))
            
            if calificacion <0 or calificacion>100:
               print("Calificacion invalida. Debe ser entre 0 y 100")
               
            else:
                acumulador+=calificacion
                contador+=1  
        except ValueError:
            print("Entrada invalida. Debe de ingresar un numero")
    print(f"📊 Promedio final: {acumulador/contador}")
        
agregar_estudiante()      