import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { ActivityListComponent } from './app/activity-list/activity-list.component';

const routes = [
  { path: '', component: AppComponent }, // Página principal
  { path: 'table', component: ActivityListComponent } // Página de la tabla
];

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes) // Proporciona las rutas aquí
  ]
}).catch(err => console.error(err));
