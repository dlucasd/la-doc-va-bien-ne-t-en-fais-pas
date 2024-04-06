package com.acme.api.jo2024.reservation;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@Tag(name = "Réservations")
@RestController
@RequestMapping("/reservations")
public class ReservationController {

	@Operation(summary = "Réserver une place à un événement")
	@ApiResponses(value = {
			@ApiResponse(responseCode = "200", description = "Réservation effectuée",
					content = {@Content(mediaType = "application/json",
							schema = @Schema(implementation = Reservation.class))}),
			@ApiResponse(responseCode = "400", description = "Erreur lors de la réservation",
					content = @Content),
			@ApiResponse(responseCode = "404", description = "Utilisateur ou événement non trouvé",
					content = @Content)})
	@PostMapping("/evenements/{idEvenement}")
	public Reservation reserver(@PathVariable Long idEvenement, @RequestParam Long idUtilisateur) {
		return null;
	}

	@Operation(summary = "Annuler une réservation")
	@ApiResponses(value = {
			@ApiResponse(responseCode = "200", description = "Réservation annulée"),
			@ApiResponse(responseCode = "400", description = "Erreur lors de l'annulation"),
			@ApiResponse(responseCode = "404", description = "Réservation non trouvé")})
	@DeleteMapping("/{id}")
	public void annulerReservation(@PathVariable Long id) {
	}

}
