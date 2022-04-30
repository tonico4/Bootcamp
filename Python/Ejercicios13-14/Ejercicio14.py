class Alumno:
    def __init__(self):
        self.nombre = 'José Moreno'
        self.nota = 7

alumno = Alumno()
if alumno.nota >= 5:
    print(alumno.nombre, 'ha aprobado con un', alumno.nota)
else:
    print(alumno.nombre, 'ha suspendido con un', alumno.nota)