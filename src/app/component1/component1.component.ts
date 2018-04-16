import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '[app-component1]',
  // selector: '.app-component1',
  selector: 'app-component1',
  template: `
    <app-component1></app-component1>`,
  styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnInit {

  constructor() {  }
  ngOnInit() {
  }
}