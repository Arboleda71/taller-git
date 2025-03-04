

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
    

