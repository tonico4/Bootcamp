package Java.Tema4;

import Java.Tema4.SmartDevice.SmartPhone;
import Java.Tema4.SmartDevice.SmartWatch;

public class Main {

    public static void main(String[] args) {
        
        SmartPhone phone = new SmartPhone(5, 13, "OLED", "5G", true, true);

        SmartWatch watch = new SmartWatch(2, 2, "LED", "Only wifi", false, true);

        System.out.println(phone);
        System.out.println(watch);
    }
    
}
