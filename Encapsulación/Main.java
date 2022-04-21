package Encapsulación;

class Persona {

    private int edad = 28;
    private static String nombre = "Toni";
    private int telefono = 612345678;

    public void setEdad(int edad) {
        this.edad = edad;
    }

    public int getEdad() {
        return edad;
    }

    public void setNombre(String nombre) {
        Persona.nombre = nombre;
    }

    public String getNombre(String string) {
        return nombre;
    }

    public void setTelefono(int telefono) {
        this.telefono = telefono;
    }

    public int getTelefono() {
        return telefono;
    }
    
    public static void main(String[] args) {
        Persona persona = new Persona();
        System.out.println(persona.getEdad());
        System.out.println(persona.getNombre(nombre));
        System.out.println(persona.getTelefono());
    }    
}