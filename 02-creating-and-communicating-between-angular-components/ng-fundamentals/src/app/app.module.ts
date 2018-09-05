import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { EventAppComponent } from './event-app.component';
import { EventsListComponent } from './events/events-list.component';

@NgModule({
  declarations: [
    EventAppComponent,
    EventsListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [EventAppComponent]
})
export class AppModule { }
