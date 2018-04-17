import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
})
export class AppComponent {
  title1: string = 'Fetching Google Maps API';
  title2: string ='Two Way Data Binding';
  lat: number = 41.637639;
  lng: number = -70.9290092;

  itemCount: number = 2;
  btnText: string = 'Add an Item';
  goalText: string = 'My first life goal';
  
  constructor() { }

  ngOnInit() {
  }
}