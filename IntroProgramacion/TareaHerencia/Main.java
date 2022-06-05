package IntroProgramacion.TareaHerencia;

public class Main{
    public static void main(String[] args) {
        Cliente cliente = new Cliente();
        cliente.credito = 1000;
        cliente.edad = 28;
        cliente.telefono = 600000001;
        cliente.nombre = "Jesús";

        System.out.println(cliente.credito);
        System.out.println(cliente.edad);
        System.out.println(cliente.nombre);
        System.out.println(cliente.telefono);

        Trabajador trabajador = new Trabajador();
        trabajador.edad = 35;
        trabajador.nombre = "Manuel";
        trabajador.telefono = 649273823;
        trabajador.salario = 2300;

        System.out.println(trabajador.edad);
        System.out.println(trabajador.nombre);
        System.out.println(trabajador.telefono);
        System.out.println(trabajador.salario);

    }
}

class Persona {

    int edad;
    String nombre;
    int telefono;
    
}

class Cliente extends Persona {
    int credito;
}

class Trabajador extends Persona {
    int salario;
}