package com.bootcamp.ejercicios252627.controllers;

import com.bootcamp.ejercicios252627.entities.Car;
import com.bootcamp.ejercicios252627.services.CarService;
import org.springframework.stereotype.Component;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import java.net.URI;
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

    @GET
    @Path("/cars/{model}")
    @Produces(MediaType.APPLICATION_JSON)
    public Car searchCarBymodel(@PathParam("model") String model) {
        return carService.searchModelCar(model);
    }

    @POST
    @Path("/cars")
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    public Response addCar(Car car) {
        carService.addCar(car);

        return Response.created(
                URI.create("/cars/" + car.model)
        ).build();
    }

    @DELETE
    @Path("/cars/{model}")
    @Consumes(MediaType.APPLICATION_JSON)
    public Response deleteCarByModel(@PathParam("model") String model) {
        carService.deleteCarByModel(model);

        return Response.ok().build();
    }

    @DELETE
    @Path("/cars")
    public Response deleteAllCars() {
        carService.deleteAllCars();

        return Response.ok().build();
    }
}

