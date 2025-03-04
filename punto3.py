"""Ejercicio 3: Simulador de Cajero Automático
📌 Descripción:
 ✔ Iniciar con un saldo de $1000.
 ✔ Permitir:
Consultar saldo.
Depositar dinero.
Retirar dinero (sin permitir saldo negativo).
 ✔ Repetir el proceso hasta que el usuario decida salir.
📌 Ejemplo:
📢 Bienvenido al Cajero  
1. Consultar saldo  
2. Depositar dinero  
3. Retirar dinero  
4. Salir  
> 2  
Ingrese la cantidad a depositar: 500  
✅ Nuevo saldo: $1500 """


def simulador_cajero():
    try:
        ingresar_saldo = int(input("Ingrese el saldo "))

        if ingresar_saldo == "":
            ValueError("Entrada inválida. Debe ingresar un número.")
            return

    except ValueError:
        print("Entrada inválida. Ingrese un número válido.")

    try:
        opciones = input("Ingrese el número de la opción que requiere")

        if ingresar_saldo == "":
            ValueError("Entrada inválida. Debe ingresar un número.")
            return

    except ValueError:
        print("Entrada inválida. Ingrese un número válido.")
    

