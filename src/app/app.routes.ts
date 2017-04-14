import { TaskGuestDetailsComponent } from './tasks/task-guest-details/task-guest-details.component';
import { TaskAdminComponent } from './tasks/task-admin/task-admin.component';
import { TaskGuestComponent } from './tasks/task-guest/task-guest.component';
import { TasksComponent } from './tasks/tasks.component';
import { NotesComponent } from './notes/notes.component';
import { WidgetComponent } from './widget/widget.component';
import { Routes, RouterModule } from '@angular/router';

const APP_ROUTES: Routes = [
    // { path: '', redirectTo: '/widgets', pathMatch: 'full' },
    // { path: 'widgets', component: WidgetComponent },
    // { path: 'notes', component: NotesComponent },
    // { path: 'tasks', component: TasksComponent, children: [
    //     { path: 'guest', component: TaskGuestComponent },
    //     { path: 'guest/:id', component: TaskGuestDetailsComponent },
    //     { path: 'admin', component: TaskAdminComponent }
    // ] }
];
export const routing = RouterModule.forRoot(APP_ROUTES);