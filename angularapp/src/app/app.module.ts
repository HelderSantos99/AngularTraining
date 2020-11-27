import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {MatToolbarModule} from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule} from '@angular/material/button';
import { MatListModule} from '@angular/material/list';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {MatStepperModule} from '@angular/material/stepper';
import {MatFormFieldModule} from '@angular/material/form-field';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/template/header/header.component';
import { NavComponent } from './components/template/nav/nav.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { ClockComponent } from './components/views/clock/clock.component';
import { HomeComponent } from './components/views/home/home.component';
import { WeatherComponent } from './components/views/weather/weather.component';
import { CalendarComponent } from './components/views/calendar/calendar.component';
import { FormProgressComponent } from './components/views/formprogress/formprogress.component';
import { CalculatorComponent } from './components/views/calculator/calculator.component';
import { ImagesliderComponent } from './components/views/imageslider/imageslider.component';
import { TictactoeComponent } from './components/views/tictactoe/tictactoe.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    FooterComponent,
    ClockComponent,
    HomeComponent,
    WeatherComponent,
    CalendarComponent,
    FormProgressComponent,
    CalculatorComponent,
    ImagesliderComponent,
    TictactoeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatSidenavModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    MatButtonModule,
    MatListModule,
    MatStepperModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
