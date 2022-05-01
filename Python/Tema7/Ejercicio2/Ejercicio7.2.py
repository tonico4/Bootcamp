import time

hora = time.strftime('%H')
minutos = time.strftime('%M')

if int(hora) >= 19:
    print('Deberías estar en casa')
else:
    print('Quedan {} horas y {} minutos para irte a casa'.format(18- int(hora), 59- int(minutos)))