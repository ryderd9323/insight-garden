import { Component } from '@angular/core';

import { EventService, AnalyticsEvent } from '../../services/event.service';

@Component({
    selector: 'app-event-button',
    standalone: true,
    imports: [],
    templateUrl: './event-button.component.html',
    styleUrl: './event-button.component.scss'
})
export class EventButtonComponent {
  constructor(private eventService: EventService) {}

  sendEvent() {
    const event: AnalyticsEvent = {
      session_id: this.getSessionId(),
      type: 'click',
      page: 'demo-page',
      x: 100, // Example coordinates
      y: 200, // Example coordinates
      timestamp: new Date().toISOString(),
    };

    this.eventService.sendEvent(event).subscribe({
      next: () => console.log('Event sent successfully'),
      error: (err) => console.error('Error sending event:', err)
    });
  }

  sendSecondEvent(): void {
    const event: AnalyticsEvent = {
      session_id: this.getSessionId(),
      type: 'click',
      page: 'demo-page',
      x: 200, // Example coordinates
      y: 300, // Example coordinates
      timestamp: new Date().toISOString(),
    };
    this.eventService.sendEvent(event).subscribe({
      next: () => console.log('Second event sent successfully'),
      error: (err) => console.error('Error sending second event:', err)
    });
  }

  private getSessionId(): string {
    let id = localStorage.getItem('session_id');
    if (!id) {
      id = crypto.randomUUID();
      localStorage.setItem('session_id', id);
    }
    return id;
  }
}
