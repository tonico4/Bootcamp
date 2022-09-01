package com.obspring.ejercicios456;

import javax.persistence.*;

@Entity
@Table(name = "laptop")
public class Laptop {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String brand;
    private String model;
    private Integer yearbuild;
    private String core;

    public Laptop() {
    }

    public Laptop(Long id, String brand, String model, Integer yearbuild, String core) {
        this.id = id;
        this.brand = brand;
        this.model = model;
        this.yearbuild = yearbuild;
        this.core = core;
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

    public String getCore() {
        return core;
    }

    public void setCore(String core) {
        this.core = core;
    }

    @Override
    public String toString() {
        return "Laptop{" +
                "id=" + id +
                ", brand='" + brand + '\'' +
                ", model='" + model + '\'' +
                ", year=" + yearbuild +
                ", core='" + core + '\'' +
                '}';
    }
}
