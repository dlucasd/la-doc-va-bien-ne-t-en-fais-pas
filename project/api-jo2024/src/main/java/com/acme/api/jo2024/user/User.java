package com.acme.api.jo2024.user;

import com.acme.api.jo2024.reservation.Reservation;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

import java.util.List;

public record User(@NotBlank @Size(min = 3, max = 20) String login,
                   @NotBlank @Size(min = 5, max = 50) String mail,
                   List<Reservation> reservations) {
}
