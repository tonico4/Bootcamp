import time

hora = time.strftime('%H')
minutos = time.strftime('%M')

if int(hora) >= 19:
    print('Deberías estar en casa')
else:
    print('Quedan', 18 - int(hora), 'horas', 59 - int(minutos), 'minutos para irte a casa')