package com.obspring.ejercicios456;

import com.obspring.ejercicios456.repository.LaptopRepository;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;

@SpringBootApplication
public class Ejercicios456Application {

	public static void main(String[] args) {

		ApplicationContext context = SpringApplication.run(Ejercicios456Application.class, args);
		LaptopRepository repository = context.getBean(LaptopRepository.class);

		Laptop laptop1 = new Laptop(null, "HP", "Pavilion", 2006, "i5-2800K");
		Laptop laptop2 = new Laptop(null, "Microsoft", "Surface Pro 4", 2012, "i5-2500");

		repository.save(laptop1);
		repository.save(laptop2);

		System.out.println(repository.findAll().size());
	}

}
