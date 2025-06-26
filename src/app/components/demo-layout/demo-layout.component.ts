import { Component, OnInit } from '@angular/core';
import { EventButtonComponent } from '../event-button/event-button.component';
import { ClickableBannerComponent } from '../clickable-banner/clickable-banner.component';
import { TimelineComponent } from '../timeline/timeline.component';
import { EventService, AnalyticsEvent } from '../../services/event.service';

@Component({
  selector: 'app-demo-layout',
  standalone: true,
  imports: [
    EventButtonComponent,
    ClickableBannerComponent,
    TimelineComponent
  ],
  templateUrl: './demo-layout.component.html',
  styleUrl: './demo-layout.component.scss'
})
export class DemoLayoutComponent implements OnInit {
  sessionId = '';

  constructor(private eventService: EventService) {}

  ngOnInit(): void {
    // Initialize session ID from localStorage or generate a new one
    this.sessionId = localStorage.getItem('session_id') || this.newSession();
      
  }
  
  private newSession(): string {
    const id = crypto.randomUUID();
    localStorage.setItem('session_id', id);
    return id;
  }

  /*
   * Fetches the full timeline for the current session,
   * triggers a download of the JSON file, then resets the session and reloads.
   */
  exportTimeline(): void {
    this.eventService.getSession(this.sessionId).subscribe({
      next: (events: AnalyticsEvent[]) => {
        // Serioalize events to JSON and download
        const json = JSON.stringify(events, null, 2);
        const blob = new Blob([json], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `timeline-${this.sessionId}.json`;
        a.click();
        URL.revokeObjectURL(url);
      },
      error: err => console.error('Failed to export session:', err)
    })
  }
  
  resetSession(): void {
    // Reset session ID
    this.sessionId = this.newSession();

    // Reset heatmap
    
  
    // Reload page so TimelineComponent re-inits with fresh session
    window.location.reload();
    
  }
}
