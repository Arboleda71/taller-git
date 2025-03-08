""" Ejercicio 8: Contador de Palabras en un Texto
📌 Descripción:
 ✔ Pedir al usuario un párrafo.
 ✔ Contar cuántas palabras tiene el texto.
📌 Ejemplo:
Ingrese un texto: Me gusta programar en Python  
✅ El texto tiene 5 palabras. """


def contador_():
    parrafo=input("Ingrese un párrafo  ")
    base_1=parrafo.strip()
    palabras=base_1.split()
    cantidad=len(palabras)
    print(f"✅ El texto tiene {cantidad} palabras.")
   
    

    
contador_()