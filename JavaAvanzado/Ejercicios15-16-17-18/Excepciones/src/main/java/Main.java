import java.io.File;
import java.util.ArrayList;
import java.util.Scanner;

public class Main {
    public static int dividir(int a, int b) throws Exception {
        if (b == 0) {
            throw new Exception("No se puede dividir por cero");
        }
        return a / b;
    }

    public static void muestraQuintoElemento() throws Exception {
        int lista[] = new int[] {1, 2, 3};
        if (lista.length > 2 || lista.length < 0) {
            throw new Exception("Está fuera de rango");
        }
        System.out.println(lista[-1]);
    }

    public static void leerArchivo() throws Exception {
        File archivo = new File("C:\\Users\\toni_\\Desktop\\Bootcamp\\ejercicio.txt");
        Scanner obj = new Scanner(archivo);

        while (obj.hasNextLine())
            System.out.println(obj.nextLine());

        if (archivo == null) {
            throw new Exception("No se encuentra el archivo");
        }
    }

    public static void main(String[] args) {
        try {
            dividir(4, 0);
        } catch (Exception e) {
            System.out.println(e.getMessage());
        }

        try {
            muestraQuintoElemento();
        } catch (Exception e) {
            System.out.println(e.getMessage());
        }

        try {
            leerArchivo();
        } catch (Exception e) {
            System.out.println(e.getMessage());
        }
    }
}
