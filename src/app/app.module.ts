import { routing } from './app.routes';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { WidgetComponent } from './widget/widget.component';
import { WidgetListComponent } from './widget/widget-list/widget-list.component';
import { WidgetNewComponent } from './widget/widget-new/widget-new.component';
import { WidgetDetailsComponent } from './widget/widget-details/widget-details.component';
import { WidgetService } from './widget/widget.service';
import { NotesComponent } from './notes/notes.component';
import { TasksComponent } from './tasks/tasks.component';
import { TaskAdminComponent } from './tasks/task-admin/task-admin.component';
import { TaskGuestComponent } from './tasks/task-guest/task-guest.component';
import { TaskGuestDetailsComponent } from './tasks/task-guest-details/task-guest-details.component';
import { WidgetEditComponent } from './widget/widget-edit/widget-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    WidgetComponent,
    WidgetListComponent,
    WidgetNewComponent,
    WidgetDetailsComponent,
    NotesComponent,
    TasksComponent,
    TaskAdminComponent,
    TaskGuestComponent,
    TaskGuestDetailsComponent,
    WidgetEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [WidgetService],
  bootstrap: [AppComponent]
})
export class AppModule { }
