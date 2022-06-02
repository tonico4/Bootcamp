package Java.Tema4;

import Java.Tema4.SmartDevice.SmartPhone;
import Java.Tema4.SmartDevice.SmartPhone.SmartWatch;

public class Ejercicio {
    
    public static void main(String[] args) {
        SmartPhone phone = new SmartPhone("Apple", "iPhone11", "blanco", 8, "IOS10", 13);
        SmartWatch watch = new SmartWatch("Samsung", "Galaxy Gear", "negro", "round", "female");

        System.out.println(phone);
        System.out.println(watch);
    }
}

class SmartDevice{
    
    String marca;
    String modelo;
    String color;

    public SmartDevice() {

    }

    public SmartDevice(String marca, String modelo, String color) {
        this.marca = marca;
        this.modelo = modelo;
        this.color = color;
    }

    @Override
    public String toString() {
        return "color= " + color + 
                ", marca= " + marca +
                ", modelo= " + modelo;
    }

    public static class SmartPhone extends SmartDevice {
        int ram;
        String os;
        float camera;

        public SmartPhone() {

        }

        public SmartPhone(String marca, String modelo, String color, int ram, String os, float camera) {
            super(marca, modelo, color);
            this.ram = ram;
            this.os = os;
            this.camera = camera;
        }

        @Override
        public String toString() {
            return "SmartPhone [marca= " + marca + 
                ", modelo= " + modelo + 
                ", color= " + color +
                ", camera= " + camera + 
                "mpx, os= " + os + 
                ", ram= " + ram + 
                "GB]";
        }

        public static class SmartWatch extends SmartDevice {
            String typeOfScreen;
            String genre;

            public SmartWatch() {

            }

            public SmartWatch(String marca, String modelo, String color, String typeOfScreen, String genre) {
                super(marca, modelo, color);
                this.typeOfScreen = typeOfScreen;
                this.genre = genre;
            }

            @Override
            public String toString() {
                return "SmartWatch [marca= " + marca +
                    ", modelo= " + modelo +
                    ", color= " + color +
                    ", genre= " + genre + 
                    ", typeOfScreen= " + typeOfScreen +
                    "]";
            }
        }
    }
}