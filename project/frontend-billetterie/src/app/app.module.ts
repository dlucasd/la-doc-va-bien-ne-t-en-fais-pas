import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { MessagesComponent } from './messages/messages.component';
import {ReservationModule} from "./reservations/reservation.module";
import {NoopInterceptor} from "./shared/interceptors/noopinterceptor.interceptor";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReservationModule,
    HttpClientModule,

    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  declarations: [
    AppComponent,
    MessagesComponent,
  ],
  providers: [
    {
        provide: HTTP_INTERCEPTORS,
        useClass: NoopInterceptor,
        multi: true
    }
],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
