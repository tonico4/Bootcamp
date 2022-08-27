package com.example;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Molde {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Integer number;
    private String name;
    private Integer numOfPieces;

    public Molde() {

    }

    public Molde(Long id, Integer number, String name, Integer numOfPieces) {
        this.id = id;
        this.number = number;
        this.name = name;
        this.numOfPieces = numOfPieces;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Integer getNumber() {
        return number;
    }

    public void setNumber(Integer number) {
        this.number = number;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Integer getNumOfPieces() {
        return numOfPieces;
    }

    public void setNumOfPieces(Integer numOfPieces) {
        this.numOfPieces = numOfPieces;
    }

    @Override
    public String toString() {
        return "Molde{" +
                "id=" + id +
                ", number=" + number +
                ", name='" + name + '\'' +
                ", numOfPieces=" + numOfPieces +
                '}';
    }
}
