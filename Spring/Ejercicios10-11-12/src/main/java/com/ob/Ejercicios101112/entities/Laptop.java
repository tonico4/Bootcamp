package com.ob.Ejercicios101112.entities;

import javax.persistence.*;

@Entity
@Table(name = "laptops")
public class Laptop {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String brand;
    private String model;
    private Integer yearbuild;

    public Laptop() {
    }

    public Laptop(Long id, String brand, String model, Integer yearbuild) {
        this.id = id;
        this.brand = brand;
        this.model = model;
        this.yearbuild = yearbuild;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getBrand() {
        return brand;
    }

    public void setBrand(String brand) {
        this.brand = brand;
    }

    public String getModel() {
        return model;
    }

    public void setModel(String model) {
        this.model = model;
    }

    public Integer getYearbuild() {
        return yearbuild;
    }

    public void setYearbuild(Integer yearbuild) {
        this.yearbuild = yearbuild;
    }
}