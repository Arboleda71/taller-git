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
        temperatura = int(input("Ingrese la temperatura en °C Celsius: "))

        if temperatura == "":
            print("Entrada inválida. Debe ingresar un número.")
            return

        fahrenheit = (temperatura * 9/5) + 32
        kelvin= temperatura+273.15
        print(f"🌡️ Fahrenheit:  {fahrenheit}°F")
        print(f"🌡️ Kelvin:  {kelvin}°K")

    except ValueError:
        print("Entrada inválida. Ingrese un número válido.")


conversor()       
