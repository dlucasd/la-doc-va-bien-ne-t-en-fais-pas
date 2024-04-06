package com.acme.api.jo2024.evenement;

import com.acme.api.jo2024.user.User;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@Tag(name = "Recherche d'événements")
@RestController
public class EvenementController {

	@Operation(summary = "Recherche des événements")
	@ApiResponses(value = {
			@ApiResponse(responseCode = "200", description = "Recherche effectuée",
					content = {@Content(mediaType = "application/json")}),
			@ApiResponse(responseCode = "400", description = "Erreur lors de la recherche",
					content = @Content),
			@ApiResponse(responseCode = "404", description = "Aucun événement trouvé",
					content = @Content)})
	@PostMapping("/evenements/{idEvenement}")
	@GetMapping("/evenements")
	public List<Evenement> getAllEvenements(@RequestParam(value = "nom", required = false) String nom,
	                                        @RequestParam(value = "lieu", required = false) String lieu) {
		return null;
	}

	@Operation(summary = "Rechercher un événement par id")
	@ApiResponses(value = {
			@ApiResponse(responseCode = "200", description = "Evénement trouvé",
					content = {@Content(mediaType = "application/json",
							schema = @Schema(implementation = User.class))}),
			@ApiResponse(responseCode = "400", description = "id invalide",
					content = @Content),
			@ApiResponse(responseCode = "404", description = "Evénement non trouvé",
					content = @Content)})
	@GetMapping("/{id}")
	public Evenement getEvenementById(@PathVariable Long id) {
		return null;
	}

}
