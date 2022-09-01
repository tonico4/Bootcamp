package com.obspring.ejercicios456.controller;

import com.obspring.ejercicios456.Laptop;
import com.obspring.ejercicios456.repository.LaptopRepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class LaptopController {

    private LaptopRepository laptopRepository;

    public LaptopController(LaptopRepository laptopRepository) {
        this.laptopRepository = laptopRepository;
    }


    // All items list
    @GetMapping("/repository/laptops")
    public List<Laptop> findAll() {

        return laptopRepository.findAll();
    }

    // Create laptop item
    @PostMapping("/repository/laptops")
    public Laptop create(@RequestBody Laptop laptop) {

        return laptopRepository.save(laptop);
    }
}
