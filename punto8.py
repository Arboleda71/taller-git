""" Ejercicio 8: Contador de Palabras en un Texto
📌 Descripción:
 ✔ Pedir al usuario un párrafo.
 ✔ Contar cuántas palabras tiene el texto.
📌 Ejemplo:
Ingrese un texto: Me gusta programar en Python  
✅ El texto tiene 5 palabras. """


def contador_(): #Creamos la función
    parrafo=input("Ingrese un párrafo  ") 
    base_1=parrafo.strip() #Con la función .strip() Quitamos los espacios de error, el primer y último
    palabras=base_1.split() # El .split() genera espacios o separa las palabras con los espacios
    cantidad=len(palabras) # Con Len() contamos el número de número de elementos 
    print(f"✅ El texto tiene {cantidad} palabras.") #Imprimimos 
   
    

    
contador_()
