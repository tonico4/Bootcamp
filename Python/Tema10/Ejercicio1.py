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
#frame.grid(row=5)
#root.columnconfigure(0, weight=1)
#root.rowconfigure(0, weight=1)

## Radiobuttons
seleccion = StringVar()
seleccion.set(None)
opcion1 = ttk.Radiobutton(root, text='Opcion 1', value=1, variable=seleccion, command=mostrar)
opcion2 = ttk.Radiobutton(root, text='Opcion 2', value=2, variable=seleccion, command=mostrar)
opcion3 = ttk.Radiobutton(root, text='Opcion 3', value=3, variable=seleccion, command=mostrar)
opcion4 = ttk.Radiobutton(root, text='Opcion 4', value=4, variable=seleccion, command=mostrar)

#opcion1.grid(column=0, row=0, sticky='N')
#opcion2.grid(column=0, row=1, sticky='N')
#opcion3.grid(column=0, row=2, sticky='N')
#opcion4.grid(column=0, row=3, sticky='N')
opcion1.pack(fill='both', padx=100)
opcion2.pack(fill='both', padx=100)
opcion3.pack(fill='both', padx=100)
opcion4.pack(fill='both', padx=100)

##Button

reset = ttk.Button(root, text='RESET', command=resetear)
#reset.grid(column=0, row=4, sticky='N')
reset.pack()

root.mainloop()