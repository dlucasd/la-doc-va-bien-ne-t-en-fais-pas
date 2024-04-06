import { NgModule } from '@angular/core';


import { ReservationDetailComponent } from './reservation-detail/reservation-detail.component';
import { ReservationSearchComponent } from './reservation-search/reservation-search.component';
import { ReservationComponent } from './reservation.component';
import {DashboardModule} from "../dashboard/dashboard.module";

/**
 * The about module
 *
 * Just embedding <about> component and it's routing definition in {@link AboutRoutingModule}
 */
@NgModule({
    declarations: [ReservationComponent, ReservationDetailComponent, ReservationSearchComponent],
    imports: [
        DashboardModule,
    ]
})
export class ReservationModule {}
