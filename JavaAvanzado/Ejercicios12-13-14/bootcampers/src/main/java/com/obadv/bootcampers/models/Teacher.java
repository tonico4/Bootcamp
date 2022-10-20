package com.obadv.bootcampers.models;

import org.springframework.stereotype.Component;

/**
 * Esta clase implementa el patrón singleton para un usuario específico que no queremos repetir.
 */

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
