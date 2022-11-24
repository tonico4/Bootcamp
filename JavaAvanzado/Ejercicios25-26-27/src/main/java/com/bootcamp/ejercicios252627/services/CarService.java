package com.bootcamp.ejercicios252627.services;

import com.bootcamp.ejercicios252627.entities.Car;
import com.bootcamp.ejercicios252627.repositories.CarDBMemory;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class CarService {
    CarDBMemory carDBMemory = new CarDBMemory();

    public void Cars(CarDBMemory carDBMemory) {
        this.carDBMemory = carDBMemory;
    }

    private void Cars() {
    }

    public ArrayList<Car> searchAllCars() {
        return carDBMemory.searchAllCars();
    }

    public Car searchModelCar(String model) {
        Car car = new Car();
        car.brand = car.brand;
        car.model = model;
        car.numDoors = car.numDoors;
        car.motorType = car.motorType;

        return carDBMemory.searchCarByModel(car);
    }

    public void addCar(Car car) {
        if (carDBMemory.searchCarByModel(car) != null) {
            return;
        }

        carDBMemory.addCar(car);
    }

    public void deleteCarByModel(String model) {
        Car car = new Car();
        car.model = model;

        carDBMemory.deleteCarByModel(car);
    }

    public void deleteAllCars() {
        carDBMemory.deleteAllCars();
    }
}
