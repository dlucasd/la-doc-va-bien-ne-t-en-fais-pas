package com.acme.api.jo2024.evenement;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public record Adresse(@NotBlank @Size(min = 3, max = 20) String adresse,
                      String ville,
                      @NotBlank int codePostal) {
}
