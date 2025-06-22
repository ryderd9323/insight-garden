import { Routes } from '@angular/router';
import { DemoLayoutComponent } from './components/demo-layout/demo-layout.component';
import { HeatmapComponent } from './components/heatmap/heatmap.component';

export const routes: Routes = [
  {
    path: '',
    component: DemoLayoutComponent,
    title: 'Demo Layout',
  },
  {
    path: 'heatmap',
    component: HeatmapComponent,
    title: 'Heatmap',
  },
  {
    path: '**',
    // Wildcard route redirects unknown paths to home
    redirectTo: ''
  }
];
