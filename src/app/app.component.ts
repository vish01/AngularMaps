import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
})
export class AppComponent {
  title: string = 'Fetching Google Maps API';
  lat: number = 41.637639;
  lng: number = -70.9290092;
}