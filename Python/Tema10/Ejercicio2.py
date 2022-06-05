import tkinter
from tkinter import END, Label, ttk
from turtle import color

class Aplicacion(ttk.Frame):
    def __init__(self, ventana):
        super().__init__(ventana)
        ventana.title('Lista de países')

        self.listbox = tkinter.Listbox(self, justify='center')
        self.listbox.pack()

        items = ("España", 
                "Francia",
                "Portugal",
                "Italia",
                "Alemania")
        self.listbox.insert(0, *items)
        print(self.listbox)

        label = Label(text='Lista de países')
        label.pack()

        self.pack()
        

ventana = tkinter.Tk()
app = Aplicacion(ventana)
app.mainloop()