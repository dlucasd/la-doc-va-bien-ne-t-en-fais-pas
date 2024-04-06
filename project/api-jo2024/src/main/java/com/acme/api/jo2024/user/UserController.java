package com.acme.api.jo2024.user;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Tag(name = "Gestion des utilisateurs")
@RestController
@RequestMapping("/users")
public class UserController {

	@Operation(summary = "Rechercher un utilisateur par id")
	@ApiResponses(value = {
			@ApiResponse(responseCode = "200", description = "Utilisateur trouvé",
					content = {@Content(mediaType = "application/json",
							schema = @Schema(implementation = User.class))}),
			@ApiResponse(responseCode = "400", description = "id invalide",
					content = @Content),
			@ApiResponse(responseCode = "404", description = "Utilisateur non trouvé",
					content = @Content)})
	@GetMapping("/{id}")
	public User getUserById(@PathVariable Long id) {
		return null;
	}

	@Operation(summary = "Créer un utilisateur")
	@ApiResponses(value = {
			@ApiResponse(responseCode = "201", description = "Utilisateur créé",
					content = {@Content(mediaType = "application/json",
							schema = @Schema(implementation = User.class))}),
			@ApiResponse(responseCode = "400", description = "Erreur lors de la création",
					content = @Content)})
	@PostMapping
	public User createUser(@RequestBody User user) {
		return null;
	}

}
