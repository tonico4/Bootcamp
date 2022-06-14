import java.io.FileInputStream;
import java.io.InputStream;
import java.io.PrintStream;
import java.util.ArrayList;
import java.util.LinkedList;
import java.util.Scanner;
import java.util.Vector;

public class Main {

    public static class Reverse{

        public static void main(String[] args) {
            //Creamos una cadena vacía
            String n = "";

            //Escaneamos el texto a revertir
            Scanner sc = new Scanner(System.in);
            System.out.println("Introduce un texto: ");
            String texto = sc.nextLine();

            //Bucle que separa los char del texto y los añade a la cadena vacía
            for (int i = 0; i < texto.length(); i++) {
                char c = texto.charAt(i);

                // IMPORTANTE!!!
                // Ordena al revés los char
                // Añade el nuevo char a la cadena existente, ej de los dos primeros char:
                // o + H = oH
                n = c + n;
            }
            System.out.print(n);
        }
    }

    public static class Unidimensional {

        public static void main(String[] args) {
            String nombres[] = {"Jose", "Álvaro", "María", "Ana", "Beatriz"};

            for (String nombre : nombres) {
                System.out.println(nombres);
            }
        }
    }

    public static class Bidimensional {

        public static void main(String[] args) {
            Integer[][] bidi ={
                    {1, 2, 3},
                    {1, 2, 3}
            };

            for (int i = 0; i < bidi.length; i++){
                for (int j = 0; j < bidi[i].length; j++) {
                    System.out.println("Valor de la fila: " + i + " y Valor de la columna: " + j);
                }
            }
        }
    }

    public static class Vectors {

        public static void main(String[] args) {
            Vector vector = new Vector();

            vector.add(1);
            vector.add(2);
            vector.add(3);
            vector.add(4);
            vector.add(5);

            System.out.println("Vector inicial: " + vector);

            vector.remove(2);
            vector.remove(3);

            System.out.println("Vector sin 2a y 3a posición: " + vector);

            /* Indica cuál es el problema de utilizar un Vector
            con la capacidad por defecto si tuviésemos 1000 elementos
            para ser añadidos al mismo. */

            /* Respuesta:
            * Tendríamos problemas de memoria ya que cuando hay overflow
            * se duplica el vector.
            * */
        }
    }

    public static class LinkedL {

        public static void main(String[] args) {
            ArrayList<String> paises = new ArrayList<>();
            paises.add("España");
            paises.add("Francia");
            paises.add("Portugal");
            paises.add("Italia");

            LinkedList<String> lista = new LinkedList<>();

            for (int i = 0; i < paises.size(); i++) {
                lista.add(i, paises.get(i));
            }

            System.out.println(paises);
            System.out.println(lista);
        }
    }

    public static class ArregloEntero {

        public static void main(String[] args) {
            ArrayList<Integer> enteros = new ArrayList<>();
            for (int i = 1; i <= 10; i++) {
                enteros.add(i);
            }
            System.out.println(enteros);

            for (int num = 0; num < enteros.size(); num++) {
                if (enteros.get(num) % 2 == 0) {
                    enteros.remove(num);
                }
            }
            System.out.println(enteros);
        }
    }

    public static class DividePorCero {

        public static void main(String[] args) {
            try{
                dividir(2, 0);
            } catch (ArithmeticException e) {
                System.out.println("Esto no puede hacerse");
            } finally {
                System.out.println("Demo de código");
            }
        }

        public static int dividir(int a, int b) throws ArithmeticException {
            return a / b;
        }
    }

    public static class Streams {

        public static void main(String[] args) {
            Scanner sc = new Scanner(System.in);
            System.out.println("Introduce un fichero origen");
            String fileIn = sc.nextLine();
            System.out.println("Introduce el fichero destino");
            String fileOut = sc.nextLine();
            copia(fileIn, fileOut);

        }

        private static void copia(String fileIn, String fileOut) {
            try {
                InputStream in = new FileInputStream(fileIn); // Creamos objeto de lectura
                byte[] datos = in.readAllBytes(); // Leemos los datos y los guardamos en un array
                in.close();

                PrintStream out = new PrintStream(fileOut); // Creamos objeto de escritura
                out.write(datos); // Escribimos los datos que hemos guardado en el array
                out.close();
            } catch (Exception e) {
                System.out.println(e.getMessage());
            }
        }
    }
}

