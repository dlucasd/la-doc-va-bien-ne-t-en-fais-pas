package com.acme.api.jo2024.evenement;

import jakarta.validation.constraints.NotBlank;

import java.time.LocalDateTime;

public record Evenement(@NotBlank Adresse adresse,
                        @NotBlank LocalDateTime debut,
                        @NotBlank LocalDateTime fin,
                        String description) {
}
