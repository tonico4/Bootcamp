package com.obspringtest.ejercicios789;

import com.obspringtest.ejercicios789.entities.Laptop;
import com.obspringtest.ejercicios789.repository.LaptopRepository;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;

@SpringBootApplication
public class Ejercicios789Application {

	public static void main(String[] args) {

		ApplicationContext context = SpringApplication.run(Ejercicios789Application.class, args);
		LaptopRepository repository = context.getBean(LaptopRepository.class);

		Laptop laptop1 = new Laptop(null, "HP", "Pavilion", 2010);
		Laptop laptop2 = new Laptop(null, "Acer", "Aspire", 2013);

		repository.save(laptop1);
		repository.save(laptop2);
	}

}
