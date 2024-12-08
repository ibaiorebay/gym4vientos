import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ActivityListComponent } from './activity-list/activity-list.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'table', component: ActivityListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
