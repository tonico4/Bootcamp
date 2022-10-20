package com.obadv.bootcampers.models;

import org.springframework.stereotype.Component;

/**
 * En la clase Bootcamper especificamos las características que queremos que tenga cada usuario y que luego trabajaremos junto a una base de datos.
 */

@Component
public class Bootcamper {

    private String name;
    private String secondName;

    public Bootcamper() {
    }

    public Bootcamper(String name, String secondName) {
        this.name = name;
        this.secondName = secondName;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSecondName() {
        return secondName;
    }

    public void setSecondName(String secondName) {
        this.secondName = secondName;
    }
}
