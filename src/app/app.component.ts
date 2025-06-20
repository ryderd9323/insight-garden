import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EventButtonComponent } from "./components/event-button/event-button.component";
import { TimelineComponent } from "./components/timeline/timeline.component";
import { HeatmapComponent } from "./components/heatmap/heatmap.component";

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, EventButtonComponent, TimelineComponent, HeatmapComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'insight-garden';
}
