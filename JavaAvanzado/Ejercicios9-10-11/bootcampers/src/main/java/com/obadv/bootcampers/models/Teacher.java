package com.obadv.bootcampers.models;

import org.springframework.stereotype.Component;

@Component
public class Teacher {
    private static Teacher teacher;
    public String name;

    private Teacher(String name) {
    }

    public static Teacher getInstance(String name){
        return teacher == null ? teacher = new Teacher(name) : teacher;
    }
}
