package com.bootcamp.ejercicios252627.repositories;

import com.bootcamp.ejercicios252627.entities.Car;

import java.util.ArrayList;

public class CarDBMemory extends CarDB{
    ArrayList<Car> cars = new ArrayList<>();

    @Override
    public ArrayList<Car> searchAllCars() {
        return cars;
    }

    @Override
    public Car searchCarByModel(Car car) {
        for (Car currentCar : searchAllCars()) {
            if (currentCar.model.equalsIgnoreCase(car.model)) {
                return car;
            }
        }

        return null;
    }

    @Override
    public void addCar(Car car) {
        for (Car currentCar : cars) {
            if (currentCar.model.equalsIgnoreCase(car.model)) {
                return;
            }
        }

        cars.add(car);
    }

    @Override
    public void deleteCarByModel(Car car) {
        for (Car currentCar : cars) {
            if (currentCar.model.equalsIgnoreCase(car.model)) {
                cars.remove(car);
            }
        }
    }

    @Override
    public void deleteAllCars() {
        cars.removeAll(cars);
    }
}
