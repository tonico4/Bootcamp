package EjerciciosTema3;

public class Coche {
    int puertas = 3; //Puertas actuales

    public int añadirPuerta() {
        return puertas++;
    }

    public static void main(String[] args) {
        //Creamos un objeto coche
        Coche seat = new Coche();
        //Le añadimos una puerta con la función
        seat.añadirPuerta();
        //Mostramos la nueva cantidad de puertas
        System.out.println(seat.puertas);
    }
}