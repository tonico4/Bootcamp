package com.bootcamp.ejercicios252627.entities;

public class GasCar extends Car {
    private String brand;
    private String model;
    private int numDoors;
    private String motorType = "Gas";

    public GasCar() {
    }

    public GasCar(String brand, String model, int numDoors) {
        this.brand = brand;
        this.model = model;
        this.numDoors = numDoors;
    }

    public String getBrand() {
        return brand;
    }

    public String getModel() {
        return model;
    }

    public int getNumDoors() {
        return numDoors;
    }

    public String getMotorType() {
        return motorType;
    }

    @Override
    public String toString() {
        return "GasCar{" +
                "brand='" + brand + '\'' +
                ", model='" + model + '\'' +
                ", numDoors=" + numDoors +
                ", motorType='" + getMotorType() + '\'' +
                '}';
    }
}
