import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EventButtonComponent } from "./components/event-button/event-button.component";
import { TimelineComponent } from "./components/timeline/timeline.component";

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, EventButtonComponent, TimelineComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'insight-garden';
}
