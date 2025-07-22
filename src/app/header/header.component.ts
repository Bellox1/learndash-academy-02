import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isHomeActive = true;

  constructor(private router: Router) {
    // Initialisation correcte
    this.isHomeActive = this.isHomeUrl(this.router.url);
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      this.isHomeActive = this.isHomeUrl(event.urlAfterRedirects || event.url);
    });
  }

  private isHomeUrl(url: string): boolean {
    return url === '/' || url === '' || url.startsWith('/?');
  }
}
