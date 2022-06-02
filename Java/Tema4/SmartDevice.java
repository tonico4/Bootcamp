package Java.Tema4;

public class SmartDevice {

    int width;
    int height;
    String screen;
    String band;
    boolean camera;
    boolean wifi;

    public SmartDevice() {
    }
    
    public SmartDevice(int width, int height, String screen, String band, boolean camera, boolean wifi) {
    }

    public class SmartPhone extends SmartDevice{

        public SmartPhone(){
        }

        public SmartPhone(int width, int height, String screen, String band, boolean camera, boolean wifi) {
        }

    }

    public class SmartWatch extends SmartDevice{

        public SmartWatch() {
        }

        public SmartWatch(int width, int height, String screen, String band, boolean camera, boolean wifi) {
        }

    }

}
