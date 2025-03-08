"""📌 Ejercicio 10: Ordenador de Lista de Nombres
📌 Descripción:
 ✔ Pedir al usuario 5 nombres.
 ✔ Ordenarlos alfabéticamente y mostrarlos.
📌 Ejemplo:
Ingrese 5 nombres: ["Pedro", "Ana", "Luis", "Carlos", "Sofía"]  
✅ Lista ordenada: ["Ana", "Carlos", "Luis", "Pedro", "Sofía"]"""

def ordenador_nombres():
    contador=0
    array=[]
    while contador<5:
        
        nombres=input("Ingrese el nombre ")
        contador+=1
        array.append(nombres)
    array_ordenado=sorted(array)    
    print(f"✅ Lista ordenada: {array_ordenado}")
     

ordenador_nombres()