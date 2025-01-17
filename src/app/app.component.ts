import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, MenuComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {}
