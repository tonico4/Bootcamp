country = []

def addcountry():
    new_country = input('Escribe un país')
    country.append(new_country)

def continuacion():
    entrada = int(input('Pulsa 1 e Intro si desea escribir otro país o pulsa 2 e Intro si desea terminar'))
    if entrada == 1:
        addcountry()
        continuacion()
    elif entrada == 2:
        finish()

def finish():
    rmlist = set(country)
    print(sorted(rmlist))

addcountry()
continuacion()
finish()