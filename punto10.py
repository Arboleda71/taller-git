"""📌 Ejercicio 10: Ordenador de Lista de Nombres
📌 Descripción:
 ✔ Pedir al usuario 5 nombres.
 ✔ Ordenarlos alfabéticamente y mostrarlos.
📌 Ejemplo:
Ingrese 5 nombres: ["Pedro", "Ana", "Luis", "Carlos", "Sofía"]  
✅ Lista ordenada: ["Ana", "Carlos", "Luis", "Pedro", "Sofía"]"""

def ordenador_nombres(): #Se crea la función
    contador=0
    array=[]   #inicializamos un contador y una lista
    while contador<5: #while que nos asegura que pidan 5 números como lo pedido en el ejercicio
        
        nombres=input("Ingrese el nombre ")
        contador+=1
        array.append(nombres)#Se agregan los string ingresados a la lista con la función append
    array_ordenado=sorted(array)    #Se envían a otra lista ordenada
    print(f"✅ Lista ordenada: {array_ordenado}") #Se imprime lista
     

ordenador_nombres()
