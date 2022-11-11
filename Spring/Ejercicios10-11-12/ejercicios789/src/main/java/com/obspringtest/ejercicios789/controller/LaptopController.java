package com.obspringtest.ejercicios789.controller;

import com.obspringtest.ejercicios789.entities.Laptop;
import com.obspringtest.ejercicios789.repository.LaptopRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

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

    // One item by ID
    @GetMapping("/repository/{id}")
    public ResponseEntity<Laptop> findOneById(@PathVariable Long id) {

        Optional<Laptop> laptopOpt = laptopRepository.findById(id);
        if (laptopOpt.isPresent()){
            return ResponseEntity.ok(laptopOpt.get());
        } else {
            return null;
        }
    }

    // Update laptop
    @PutMapping("/repository/laptops")
    public ResponseEntity<Laptop> update(@RequestBody Laptop laptop) {

        if(laptop.getId() == null){
            return ResponseEntity.badRequest().build();
        }
        if(!laptopRepository.existsById(laptop.getId())){
            return ResponseEntity.notFound().build();
        }

        Laptop result = laptopRepository.save(laptop);
        return ResponseEntity.ok(result);
    }

    // Create laptop
    @PostMapping("/repository/laptops")
    public Laptop create(@RequestBody Laptop laptop) {

        return laptopRepository.save(laptop);
    }

    // Delete laptop
    @DeleteMapping("/repository/{id}")
    public ResponseEntity<Laptop> delete(@PathVariable Long id) {

        if(!laptopRepository.existsById(id)){
            return ResponseEntity.notFound().build();
        }

        laptopRepository.deleteById(id);

        return ResponseEntity.noContent().build();
    }

    // Delete all
    @DeleteMapping("/repository/laptops")
    public ResponseEntity<Laptop> deleteAll() {

        laptopRepository.deleteAll();

        return ResponseEntity.noContent().build();
    }

}