from tkinter import StringVar, Tk, ttk
from turtle import title, width

def mostrar():
    seleccion.get()

def resetear():
    seleccion.set(None)
    
root = Tk()
root.title("RadioList")

frame = ttk.Frame(root)
frame.pack()

## Radiobuttons
seleccion = StringVar()
seleccion.set(None)
opcion1 = ttk.Radiobutton(root, text='Opcion 1', value=1, variable=seleccion, command=mostrar)
opcion2 = ttk.Radiobutton(root, text='Opcion 2', value=2, variable=seleccion, command=mostrar)
opcion3 = ttk.Radiobutton(root, text='Opcion 3', value=3, variable=seleccion, command=mostrar)
opcion4 = ttk.Radiobutton(root, text='Opcion 4', value=4, variable=seleccion, command=mostrar)

opcion1.pack(fill='both', padx=100)
opcion2.pack(fill='both', padx=100)
opcion3.pack(fill='both', padx=100)
opcion4.pack(fill='both', padx=100)

##Button
reset = ttk.Button(root, text='RESET', command=resetear)
reset.pack()

root.mainloop()