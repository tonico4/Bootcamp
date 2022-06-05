package IntroProgramacion.Encapsulación;

class Persona {

    private int edad;
    private String nombre;
    private int telefono;

    public void setEdad(int edad) {
        this.edad = edad;
    }

    public int getEdad() {
        return edad;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getNombre() {
        return nombre;
    }

    public void setTelefono(int telefono) {
        this.telefono = telefono;
    }

    public int getTelefono() {
        return telefono;
    }
}    
    
class Main {    
    public static void main(String[] args) {
        Persona persona = new Persona();
        persona.setEdad(28);
        System.out.println(persona.getEdad());
        persona.setNombre("Toni");
        System.out.println(persona.getNombre());
        persona.setTelefono(635864029);
        System.out.println(persona.getTelefono());
    }  
}     