class Vehiculo:
    def __init__(self, color, ruedas, puertas):
        self.color = color
        self.ruedas = ruedas
        self.puertas = puertas

class Coche(Vehiculo):
    def __init__(self, color, ruedas, puertas, velocidad, cilindrada):
        self.color = color
        self.ruedas = ruedas
        self.puertas = puertas
        self.velocidad = velocidad
        self.cilindrada = cilindrada

coche = Coche('Red', 4, 5, 120, 125)
print(coche)