package com.example;

import org.springframework.stereotype.Component;

@Component
public class NotificationService {

    public NotificationService() {
    }

    public String imprimirSaludo(){
        return "Hello World";
    }
}
