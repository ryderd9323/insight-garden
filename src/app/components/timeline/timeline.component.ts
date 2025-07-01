import { Component, OnInit } from '@angular/core';
import { EventService, AnalyticsEvent } from '../../services/event.service';


@Component({
    selector: 'app-timeline',
    standalone: true,
    imports: [],
    templateUrl: './timeline.component.html',
    styleUrl: './timeline.component.scss'
})
export class TimelineComponent implements OnInit {
  events: AnalyticsEvent[] = [];
  sessionId = '';

  constructor(private eventService: EventService) {}

  ngOnInit(): void {
    this.sessionId = localStorage.getItem('session_id') || '';
    if (this.sessionId) {
      this.eventService.getSession(this.sessionId).subscribe({
        next: evts => this.events = evts || [],
        error: _ => this.events = []
      });
    }
  }
}
