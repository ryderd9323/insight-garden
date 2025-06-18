import { Component, OnInit } from '@angular/core';
import { EventService, AnalyticsEvent } from '../../services/event.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [CommonModule],
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
      this.eventService.getSession(this.sessionId).subscribe(evts => {
        this.events = evts;
      });
    }
  }
}
