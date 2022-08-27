package com.example;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;

@SpringBootApplication
public class App {

	public static void main(String[] args) {

		ApplicationContext context = SpringApplication.run(App.class, args);
		MoldeRepository repository = context.getBean(MoldeRepository.class);

		Molde sombrero = new Molde(null, 680, "Tapas Llaza", 2);

		repository.save(sombrero);

		System.out.println(repository.findAll());
	}

}
