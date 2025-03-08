"""Ejercicio 1: Convertidor de Temperatura
📌 Descripción:
 ✔ Pedir al usuario una temperatura en grados Celsius.
 ✔ Convertirla a Fahrenheit y Kelvin.
 ✔ Mostrar los resultados.
📌 Fórmulas:
 ✔ Fahrenheit = (Celsius × 9/5) + 32
 ✔ Kelvin = Celsius + 273.15
📌 Ejemplo:
Ingrese la temperatura en °C: 25  
🌡️ Fahrenheit: 77°F  
🌡️ Kelvin: 298.15K """

def conversor():
    try:
        temperatura = int(input("Ingrese la temperatura en °C Celsius: "))  #Se pide al usuario una temperatura en grados Celsius.

        if temperatura == "":
            print("Entrada inválida. Debe ingresar un número.") #Se valida con la primer condición que no esté vacío el input
            return

        fahrenheit = (temperatura * 9/5) + 32
        kelvin= temperatura+273.15           #Se aplica formula 
        print(f"🌡️ Fahrenheit:  {fahrenheit}°F")
        print(f"🌡️ Kelvin:  {kelvin}°K")      #Se imprimen resultados 

    except ValueError:
        print("Entrada inválida. Ingrese un número válido.")  #Se imprime entrada invalida si no coicide con los formatos correctos para input


conversor()       
