package EjerciciosTema3;

public class Coche {
    int puertas = 3; //Puertas actuales

    public int añadirPuerta() {
        return puertas++;
    }

    public static void main(String[] args) {
        Coche seat = new Coche();
        seat.añadirPuerta();

        System.out.println(seat.puertas);
    }
}