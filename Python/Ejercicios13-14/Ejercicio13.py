class Vehiculo:
    color = 'red'
    puertas = 5
    ruedas = 4

class Coche(Vehiculo):
    velocidad = 0
    cilindrada = 125

coche = Coche()
print(coche)