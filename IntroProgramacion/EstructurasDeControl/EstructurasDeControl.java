package IntroProgramacion.EstructurasDeControl;

class EstructurasDeControl {
    public static void main(String[] args) {
        
        //If
        int numeroIf = -4;
        if (numeroIf > 0) {
            System.out.println(numeroIf + " es positivo");
        } else if (numeroIf < 0) {
            System.out.println(numeroIf + " es negativo");
        } else if (numeroIf == 0) {
            System.out.println(numeroIf + "es cero");
        }

        //While
        int numeroWhile = -2;
        while (numeroWhile < 3) {
            System.out.println(numeroWhile);
            numeroWhile++;
        } 

        //Do While
        int numeroDoWhile = 2;
        do {
            System.out.println(numeroDoWhile);
            numeroDoWhile++;
        } while (numeroDoWhile < 3);

        //For
        for (int numeroFor = 0; numeroFor <= 3; numeroFor++) {
            System.out.println(numeroFor);
        }

        //Switch
        String estacion = "otoño";
        switch (estacion) {
            case "primavera":
                System.out.println("Estamos en primavera");
                break;
            case "verano":
                System.out.println("Estamos en verano");
                break;
            case "otoño":
                System.out.println("Estamos en otoño");
                break;
            case "invierno":
                System.out.println("Estamos en invierno");
                break;
            default:
                System.out.println("Elije una estación");
                break;
        }
    }

}