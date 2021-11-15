import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { ChartComponent } from './chart/chart.component';
import { FooterComponent } from './footer/footer.component';
import { KarimComponent } from './karim/karim.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    MainNavComponent,
    DashboardComponent,
    ChartComponent,
    FooterComponent,
    KarimComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot()

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
