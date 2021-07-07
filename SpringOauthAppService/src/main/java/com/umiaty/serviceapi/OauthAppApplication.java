package com.umiaty.serviceapi;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;

import com.umiaty.serviceapi.config.AppProperties;

@SpringBootApplication
@EnableConfigurationProperties(AppProperties.class)
public class OauthAppApplication {

	public static void main(String[] args) {
		SpringApplication.run(OauthAppApplication.class, args);
	}

}
