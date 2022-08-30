package com.obspring.ejercicios456.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {

    @GetMapping("/saludo")
    public String saludar(){
        return "Hola Mundo";
    }
}
