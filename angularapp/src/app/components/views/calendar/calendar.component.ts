import { Component } from '@angular/core';
import {CalendarOptions, DateSelectArg, EventClickArg, EventApi} from '@fullcalendar/angular';
import { INITIAL_EVENTS, createEventId} from '../../../event-utils';
@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent{

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth'
    },
    initialEvents: INITIAL_EVENTS,
    weekends: true,
    editable: true,
    selectable: true,
    selectMirror: true,
    dayMaxEvents: true,
    select: this.handleDateSelect.bind(this),
    eventClick: this.handleEventClick.bind(this),
    eventsSet: this.handleEvents.bind(this)
  };
  currentEvents: EventApi[] = [];

  handleDateSelect(selectInfo: DateSelectArg): void {
    const title = prompt('Insira um título para o evento:');
    const calendarApi = selectInfo.view.calendar;

    calendarApi.unselect(); // clear date selection

    if (title) {
      calendarApi.addEvent({
        id: createEventId(),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay
      });
    }
  }

    handleEventClick(clickInfo: EventClickArg): any {
      if (confirm(`Tem a certeza que quer eliminar o evento '${clickInfo.event.title}'?`)) {
        clickInfo.event.remove();
      }
    }

    handleEvents(events: EventApi[]): any {
      this.currentEvents = events;
    }


}
