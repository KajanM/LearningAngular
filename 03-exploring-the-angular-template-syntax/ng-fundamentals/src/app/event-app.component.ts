import { Component } from '@angular/core';

@Component({
  selector: 'app-events',
  template: `
    <app-nav-bar></app-nav-bar>
    <app-events-list></app-events-list>
  `
})
export class EventAppComponent {
  title = 'app';
}
