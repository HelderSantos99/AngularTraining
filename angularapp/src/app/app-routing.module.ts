import { ImagesliderComponent } from './components/views/imageslider/imageslider.component';
import { ProgressbarComponent } from './components/views/progressbar/progressbar.component';
import { CalendarComponent } from './components/views/calendar/calendar.component';
import { WeatherComponent } from './components/views/weather/weather.component';
import { HomeComponent } from './components/views/home/home.component';
import { ClockComponent } from './components/views/clock/clock.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalculatorComponent } from './components/views/calculator/calculator.component';



const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'clock',
    component: ClockComponent
  },
  {
    path: 'weather',
    component: WeatherComponent
  },
  {
    path: 'calendar',
    component: CalendarComponent
  },
  {
    path: 'progressbar',
    component: ProgressbarComponent
  },
  {
    path: 'calculator',
    component: CalculatorComponent
  },
  {
    path: 'imageslider',
    component: ImagesliderComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
