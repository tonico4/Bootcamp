from functools import reduce


def aleatoria(lista):
    resultado = list(filter(lambda x: x % 2, lista))
    print(resultado)
    resultado = reduce(lambda x, y: x + y, resultado)
    print(resultado)

lista = list(range(1, 101))
aleatoria(lista)