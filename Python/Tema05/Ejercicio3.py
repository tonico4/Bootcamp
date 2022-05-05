def año_bisiesto(año):
    if año % 4 == 0 and (año % 100 != 0 or año % 400 != 0):
        print(año, 'es bisiesto')
    else:
        print(año, 'no es bisiesto')

año_bisiesto(2004)