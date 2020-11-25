import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css'],
})
export class ClockComponent implements OnInit {

  constructor() {

  }
  ngOnInit(): void {
    setInterval(() => {
      const time = document.querySelector('#time') as HTMLElement;
      const data = document.querySelector('#date') as HTMLElement;
      const date = new Date();
      let hours: any = date.getHours();
      let minutes: any = date.getMinutes();
      let seconds: any = date.getSeconds();
      let daynight = 'AM';

      const day = String(date.getDate()).padStart(2, '0');
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const year = date.getFullYear();

      if (hours > 12) {
          daynight = 'PM';
          hours = hours - 12;
      }
      if (hours < 10) {
          hours = '0' + hours;
      }
      if (minutes < 10) {
          minutes = '0' + minutes;
      }
      if (seconds < 10) {
          seconds = '0' + seconds;
      }

      time.textContent = hours + ':' + minutes + ':' + seconds + ' ' + daynight;
      data.textContent = day + '/' + month + '/' + year;
    });
  }
}
