import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { Component1Component } from './component1/component1.component';
import { Component2Component } from './component2/component2.component';

import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent,
    Component1Component,
    Component2Component
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyD91YzeXd_2nEoqEBFJZbyumbNEdEYRY5s'
    })
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule {}