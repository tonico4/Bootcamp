package com.bootcamp.ejercicios252627.controllers;

import com.bootcamp.ejercicios252627.entities.Car;
import com.bootcamp.ejercicios252627.services.CarService;
import org.springframework.stereotype.Component;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import java.util.List;

@Component
@Path("/")
public class CarController {
    private final CarService carService;

    public CarController(CarService carService) {
        this.carService = carService;
    }

    @GET
    @Path("/cars")
    @Produces(MediaType.APPLICATION_JSON)
    public List<Car> searchAllCars() {
        return carService.searchAllCars();
    }
}

