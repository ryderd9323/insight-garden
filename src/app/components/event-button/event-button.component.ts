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

  sendEvent(event: MouseEvent): void {
    // Get button's bounding rectangle
    const rect = document.getElementById('heatmap-area')!.getBoundingClientRect();

    // Calculate relative click position
    const x = event.clientX - rect.left + window.scrollX;
    const y = event.clientY - rect.top + window.scrollY;

    // Build and send event
    const evt: AnalyticsEvent = {
      session_id: localStorage.getItem('session_id') || '',
      type: 'clickA',
      page: 'demo-page',
      x,
      y,
      timestamp: new Date().toISOString(),
    };

    this.eventService.sendEvent(evt).subscribe({
      next: () => console.log('Event A sent at', x, y),
      error: (err) => console.error('Error sending event A:', err)
    });
  }

  sendSecondEvent(event: MouseEvent): void {
    // Get button's bounding rectangle
    const rect = document.getElementById('heatmap-area')!.getBoundingClientRect();

    // Calculate relative click position
    const x = event.clientX - rect.left + window.scrollX;
    const y = event.clientY - rect.top + window.scrollY;

    // Build and send event
    const evt: AnalyticsEvent = {
      session_id: localStorage.getItem('session_id') || '',
      type: 'clickB',
      page: 'demo-page',
      x,
      y,
      timestamp: new Date().toISOString(),
    };

    this.eventService.sendEvent(evt).subscribe({
      next: () => console.log('Event B sent at', x, y),
      error: (err) => console.error('Error sending event B:', err)
    });
  }
}
