package com.acme.api.jo2024;

import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Contact;
import io.swagger.v3.oas.models.info.Info;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class ApiDocumentationConfiguration {

	@Bean
	public OpenAPI apiDocConfig() {
		return new OpenAPI()
				.info(new Info()
						      .title("Billetterie JO 2024 API")
						      .description("API REST de billetterie pour les JO 2024.")
						      .version("1.0.0")
						      .contact(new Contact()
								               .name("Damien Lucas")
								               .email("d.lucas@groupeonepoint.com")));
	}

}
