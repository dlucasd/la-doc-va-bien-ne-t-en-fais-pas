import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Reservation } from '../reservation';
import {ReservationService} from "../../reservation.service";

@Component({
  selector: 'app-reservation-detail',
  templateUrl: './reservation-detail.component.html',
  styleUrls: [ './reservation-detail.component.css' ]
})
export class ReservationDetailComponent implements OnInit {
  reservation: Reservation | undefined;

  constructor(
    private route: ActivatedRoute,
    private reservationService: ReservationService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getReservation();
  }

  getReservation(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    this.reservationService.getReservation(id)
      .subscribe(reservation => this.reservation = reservation);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    if (this.reservation) {
      this.reservationService.updateReservation(this.reservation)
        .subscribe(() => this.goBack());
    }
  }
}
