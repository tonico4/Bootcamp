from pickle import dump, load

class Vehiculo:
    def __init__(self, color, puertas):
        self.color = color
        self.puertas = puertas

    def __str__(self):
        return self.color + " " + self.puertas

corsa = Vehiculo('rojo', '5')

guardado = open('coche.dat', 'w+b') # Creamos archivo de guardado binario

dump(corsa, guardado) # Se guarda el objeto creado en el archivo binario

guardado.seek(0) # Leemos los datos guardados
nuevo_corsa = load(guardado)

print(nuevo_corsa)
guardado.close()