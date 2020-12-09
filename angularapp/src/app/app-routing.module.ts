import { BoardComponent } from './components/views/board/board.component';
import { ImagesliderComponent } from './components/views/imageslider/imageslider.component';
import { FormProgressComponent } from './components/views/formprogress/formprogress.component';
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
    path: 'formprogress',
    component: FormProgressComponent
  },
  {
    path: 'calculator',
    component: CalculatorComponent
  },
  {
    path: 'imageslider',
    component: ImagesliderComponent
  },
  {
    path: 'tictactoe',
    component: BoardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
