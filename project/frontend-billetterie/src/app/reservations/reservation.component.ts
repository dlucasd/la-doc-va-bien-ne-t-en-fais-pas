import { Component, OnInit } from '@angular/core';

import { Reservation } from '../reservation';
import { ReservationService } from '../reservation.service';

@Component({
  selector: 'app-reservations',
  providers: [ReservationService],
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.css']
})
export class ReservationComponent implements OnInit {
  reservations: Reservation[] = [];

  constructor(private reservationService: ReservationService) { }

  ngOnInit(): void {
    this.getReservations();
  }

  getReservations(): void {
    this.reservationService.getReservations()
    .subscribe(reservations => this.reservations = reservations);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.reservationService.addReservation({ name } as Reservation)
      .subscribe(reservation => {
        this.reservations.push(reservation);
      });
  }

  delete(reservation: Reservation): void {
    this.reservations = this.reservations.filter(h => h !== reservation);
    this.reservationService.deleteReservation(reservation.id).subscribe();
  }

}
