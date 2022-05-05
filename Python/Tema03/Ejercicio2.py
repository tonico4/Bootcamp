peso = float(input('Introduce tu peso en kg'))
estatura = float(input('Introduce tu estatura en metros'))
imc = round(peso/estatura, 2)

print('Tu IMC es ' + str(imc))
