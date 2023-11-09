package com.example.guest;


import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

import org.springframework.context.annotation.ComponentScan;





@SpringBootApplication

@EnableDiscoveryClient
@ComponentScan(basePackages= {"com.*"})

public class GuestdetailsApplication {

	public static void main(String[] args) {
		SpringApplication.run(GuestdetailsApplication.class, args);
	}
	
}