package com.example;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class Main {

    public static void main(String[] args) {

        ApplicationContext context = new ClassPathXmlApplicationContext("beans.xml");

        NotificationService notificacion = context.getBean(NotificationService.class);
        UserService user = new UserService(notificacion);
        String saludo = user.notificacion.imprimirSaludo();

        System.out.println(saludo);
    }
}
