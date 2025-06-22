import { Component, OnInit } from '@angular/core';
import { EventService, AnalyticsEvent } from '../../services/event.service';

@Component({
  selector: 'app-heatmap',
  standalone: true,
  templateUrl: './heatmap.component.html',
  styleUrl: './heatmap.component.scss'
})
export class HeatmapComponent implements OnInit {
  events: AnalyticsEvent[] = [];
  bgImage: string | null = null;
  page = 'heatmap';

  constructor(private eventService: EventService) {}

  ngOnInit(): void {
    // Set placeholder or real background
    // bgImage = 'assets/demo-page.png';

    // Fetch heatmap data for the current page
    this.eventService.getHeatmap('demo-page').subscribe({
      next: (data) => {
        this.events = data;
        console.log('Heatmap data loaded:', this.events);
      },
      error: (err) => console.error('Failed to load heatmap data', err)
    });
  }

}
