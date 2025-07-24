import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive,CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isHomeActive = true;
  isAllCoursesActive = false;
  isAboutActive = false;
  isContactActive = false;
  isMyAccountActive = false;
  isDetailArticleActive = false;
  isDesktop = window.innerWidth >= 768;
  mobileMenuOpen = false;
  commonPageText: string = 'Ut elit tellus, luctus nec ullamcorper mattis.';
  commonCardsText: string = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
  constructor(private router: Router) {
    this.updateActiveRoutes(this.router.url);
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      this.updateActiveRoutes(event.urlAfterRedirects || event.url);
    });
    window.addEventListener('resize', () => {
      this.isDesktop = window.innerWidth >= 768;
    });
  }

  private updateActiveRoutes(url: string): void {
    this.isHomeActive = this.isHomeUrl(url);
    this.isAllCoursesActive = this.isAllCoursesUrl(url);
    this.isAboutActive = this.isAboutUrl(url);
    this.isContactActive = this.isContactUrl(url);
    this.isMyAccountActive = this.isMyAccountUrl(url);
    this.isDetailArticleActive = this.isDetailArticleUrl(url);
  }

  private isHomeUrl(url: string): boolean {
    return url === '/' || url === '' || url.startsWith('/?');
  }

  private isAllCoursesUrl(url: string): boolean {
    return url.startsWith('/allcourses');
  }

  private isAboutUrl(url: string): boolean {
    return url.startsWith('/about');
  }

  private isContactUrl(url: string): boolean {
    return url.startsWith('/contact');
  }

  private isMyAccountUrl(url: string): boolean {
    return url.startsWith('/myaccount');
  }

  private isDetailArticleUrl(url: string): boolean {
    return url.startsWith('/detail-article/');
  }

  toggleMobileMenu(): void {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  closeMobileMenu(): void {
    this.mobileMenuOpen = false;
  }

  get menuIcon(): string {
    return this.mobileMenuOpen ?
      'M6 18L18 6M6 6l12 12' :
      'M4 6h16M4 12h16M4 18h16';
  }

  get mobileMenuTop(): number {
    if (this.isDetailArticleActive) {
      return 100; // hauteur du header sur la page de détail
    } else if (this.isHomeActive && this.isDesktop) {
      return 500; // hauteur du header home desktop
    } else {
      return 350; // hauteur du header sur les autres pages
    }
  }
}
