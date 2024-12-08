import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [],
  templateUrl: './menu.component.html',
})
export class MenuComponent {
  @Input() logo: string = 'https://d3jmn01ri1fzgl.cloudfront.net/photoadking/webp_thumbnail/sky-blue-gym-logo-design-template-177ljr1373716b.webp';
  @Input() titulo: string = '4vGym';

  constructor(private router: Router) {}

  navigateToTable() {
    this.router.navigate(['/table']);
  }
}
