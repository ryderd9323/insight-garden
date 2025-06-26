import { Component, Input } from '@angular/core';
import { EventService } from '../../services/event.service';

@Component({
  selector: 'app-clickable-banner',
  standalone: true,
  imports: [],
  templateUrl: './clickable-banner.component.html',
  styleUrl: './clickable-banner.component.scss'
})
export class ClickableBannerComponent {
  @Input() sessionID!: string;

  constructor(private eventService: EventService) {}

  // Handles clicks on banner and sends custom event
  handleClick(event: MouseEvent): void {
    const rect = document.getElementById('heatmap-area')!.getBoundingClientRect();

    const x = event.clientX - rect.left + window.scrollX;
    const y = event.clientY - rect.top + window.scrollY;

    const customEvent = {
      session_id: this.sessionID,
      type: 'banner-click', // Custom event type
      page: 'demo-page',
      x,
      y,
      timestamp: new Date().toISOString(),
    };

    this.eventService.sendEvent(customEvent).subscribe({
      next: () => {
        console.log('Banner click event sent at', x, y);
      },
      error: (err) => console.error('Error sending banner click event:', err)
    });
  }
}
