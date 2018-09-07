import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { EventAppComponent } from './event-app.component';
import { EventsListComponent } from './events/events-list.component';
import { EventThumbnailComponent } from './events/event-thumbnail.component';
import { NavBarComponent } from './nav/navbar.component';
import { EventService } from './events/shared/event.service';
import { ToastrService } from './common/toastr.service';

@NgModule({
  declarations: [
    EventAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavBarComponent
  ],
  imports: [BrowserModule],
  providers: [EventService, ToastrService],
  bootstrap: [EventAppComponent]
})
export class AppModule {}
