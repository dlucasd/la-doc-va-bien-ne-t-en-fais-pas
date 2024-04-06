package com.acme.api.jo2024.reservation;

import jakarta.validation.constraints.NotBlank;

public record Reservation(@NotBlank Long idEvenement,
                          @NotBlank Long idUtilisateur) {
}
