public class Coche {
    int numRuedas;
    int numPuertas;
    String marca;
    String motor;

    public Coche(int numRuedas, int numPuertas, String marca, String motor) {
        this.numRuedas = numRuedas;
        this.numPuertas = numPuertas;
        this.marca = marca;
        this.motor = motor;
    }

    public int getNumRuedas() {
        return numRuedas;
    }

    public int getNumPuertas() {
        return numPuertas;
    }

    public String getMarca() {
        return marca;
    }

    public String motor() {
        return motor;
    }

    @Override
    public String toString() {
        return "Coche{" +
                "numRuedas=" + numRuedas +
                ", numPuertas=" + numPuertas +
                ", marca='" + marca + '\'' +
                ", motor='" + motor + '\'' +
                '}';
    }
}
