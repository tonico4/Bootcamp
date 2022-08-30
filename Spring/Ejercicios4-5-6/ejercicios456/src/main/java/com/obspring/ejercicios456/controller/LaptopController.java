package com.obspring.ejercicios456.controller;

import com.obspring.ejercicios456.Laptop;
import com.obspring.ejercicios456.repository.LaptopRepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class LaptopController {

    private LaptopRepository laptopRepository;

    public LaptopController(LaptopRepository laptopRepository) {
        this.laptopRepository = laptopRepository;
    }

    @GetMapping("/repository/laptops")
    public List<Laptop> findAll(){

        return laptopRepository.findAll();
    }
}
