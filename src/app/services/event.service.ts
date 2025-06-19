import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface AnalyticsEvent {
  session_id: string;
  type: string;
  page: string;
  x?: number;
  y?: number;
  timestamp: string;
}

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private apiUrl = 'http://localhost:3000/event';

  constructor(private http: HttpClient) {}

  sendEvent(event: AnalyticsEvent): Observable<void> {
    return this.http.post<void>(this.apiUrl, event);
  }

  getSession(sessionId: string): Observable<AnalyticsEvent[]> {
    return this.http.get<AnalyticsEvent[]>(`http://localhost:3000/session/${sessionId}`);
  }

  getHeatmap(page: string): Observable<AnalyticsEvent[]> {
    return this.http.get<AnalyticsEvent[]>(`http://localhost:3000/heatmap/${page}`);
  }
}
