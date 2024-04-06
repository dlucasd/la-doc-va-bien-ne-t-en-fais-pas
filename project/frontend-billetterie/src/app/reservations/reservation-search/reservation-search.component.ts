import {Component, OnInit} from '@angular/core';

import {Observable, Subject} from 'rxjs';

import {debounceTime, distinctUntilChanged, switchMap} from 'rxjs/operators';
import {Reservation} from "../../reservation";
import {ReservationService} from "../../reservation.service";


@Component({
    selector: 'app-reservation-search',
    templateUrl: './reservation-search.component.html',
    styleUrls: ['./reservation-search.component.css']
})
export class ReservationSearchComponent implements OnInit {
    reservations$!: Observable<Reservation[]>;
    private searchTerms = new Subject<string>();

    constructor(private reservationService: ReservationService) {
    }

    // Push a search term into the observable stream.
    search(term: string): void {
        this.searchTerms.next(term);
    }

    ngOnInit(): void {
        this.reservations$ = this.searchTerms.pipe(
            // wait 300ms after each keystroke before considering the term
            debounceTime(300),

            // ignore new term if same as previous term
            distinctUntilChanged(),

            // switch to new search observable each time the term changes
            switchMap((term: string) => this.reservationService.searchReservations(term)),
        );
    }
}
