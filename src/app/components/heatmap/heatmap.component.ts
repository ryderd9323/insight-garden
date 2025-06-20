import { Component, OnInit } from '@angular/core';
import { EventService, AnalyticsEvent } from '../../services/event.service';

@Component({
  selector: 'app-heatmap',
  standalone: true,
  imports: [],
  templateUrl: './heatmap.component.html',
  styleUrl: './heatmap.component.scss'
})
export class HeatmapComponent implements OnInit {
  events: AnalyticsEvent[] = [];
  page = 'event-button';  // TODO: change to 'demo-page' after we make it

  constructor(private eventService: EventService) {}

  ngOnInit(): void {
    this.eventService.getHeatmap(this.page).subscribe(evts => {
      this.events = evts;
    });
  }

}
