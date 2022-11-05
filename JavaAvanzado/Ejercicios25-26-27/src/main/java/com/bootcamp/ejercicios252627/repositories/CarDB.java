package com.bootcamp.ejercicios252627.repositories;

import com.bootcamp.ejercicios252627.entities.Car;

import java.util.ArrayList;

public abstract class CarDB {
    abstract public ArrayList<Car> searchAllCars();
    abstract public Car searchCarByModel(Car car);
    abstract public void addCar(Car car);
    abstract public void deleteCarByModel(Car car);
    abstract public void deleteAllCars();
    }