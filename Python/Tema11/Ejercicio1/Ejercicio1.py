from re import A
import sqlite3

conn = sqlite3.connect('db_uno.db')
cursor = conn.cursor()

row = cursor.execute(f'SELECT * FROM Alumnos WHERE nombre="Nayara"')
print(row.fetchall())

cursor.close()
conn.close()


## Instrucciones en consola sqlite
#
# sqlite3 create table Alumnos(id INT primary key, nombre TEXT, apellido TEXT);
#
#insert into Alumnos(id, nombre, apellido) values(num, "nombre", "apellido");
#
#.quit