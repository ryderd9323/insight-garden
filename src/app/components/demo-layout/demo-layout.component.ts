import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { EventButtonComponent } from '../event-button/event-button.component';
import { ClickableBannerComponent } from '../clickable-banner/clickable-banner.component';
import { TimelineComponent } from '../timeline/timeline.component';

@Component({
  selector: 'app-demo-layout',
  standalone: true,
  imports: [
    RouterLink,
    EventButtonComponent,
    ClickableBannerComponent,
    TimelineComponent
  ],
  templateUrl: './demo-layout.component.html',
  styleUrl: './demo-layout.component.scss'
})
export class DemoLayoutComponent {
  // Root layout for demo: includes buttons, banner, timeline, and navigation
  
  // Session ID for current user session, passed to child components
  sessionId: string = localStorage.getItem('session_id') || '';
}
