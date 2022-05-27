package Java.Tema2;

class Main {

    public static void main(String[] args) {
        System.out.println(pvp(100));
    }

    static float pvp(float price) {
        float iva = price * 21 / 100;
        float total = price + iva;
        return total;
    }

}