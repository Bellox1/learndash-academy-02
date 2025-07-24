import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from '../courses/courses.component';

@Component({
  selector: 'app-myaccount',
  standalone: true,
  imports: [CommonModule, CoursesComponent],
  templateUrl: './myaccount.component.html',
  styleUrl: './myaccount.component.css'
})
export class MyaccountComponent {
  showLoginModal = false;

  openLoginModal() {
    this.showLoginModal = true;
  }

  closeLoginModal() {
    this.showLoginModal = false;
  }
}
