public class Main {

    public static void main(String[] args) {
        Singleton objeto1 = Singleton.getInstance();
        Singleton objeto2 = Singleton.getInstance();

        System.out.println(objeto1);
        System.out.println(objeto2);
    }
}
