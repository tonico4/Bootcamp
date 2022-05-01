from cmath import pi


def area_triangulo(base, altura):
    area = base * altura / 2
    print(area)

def area_circulo(radio):
    area = 2 * pi * (radio**2)
    print(area)

area_triangulo(4, 5)
area_circulo(3)