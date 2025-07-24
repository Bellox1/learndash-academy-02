import { Component } from '@angular/core';
import { TestimonialListComponent } from '../testimonial-list/testimonial-list.component';

export interface Testimonial {
  name: string;
  country: string;
  image: string;
  text: string;
}

@Component({
  selector: 'app-allcourses',
  imports: [TestimonialListComponent],
  templateUrl: './allcourses.component.html',
  styleUrl: './allcourses.component.css'
})
export class AllcoursesComponent {
  testimonials: Testimonial[] = [
    {
      name: 'Kelvin Black',
      country: 'From Dallas, USA',
      image: 'https://randomuser.me/api/portraits/men/32.jpg',
      text: 'Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.'
    },
    {
      name: 'Zasha Swan',
      country: 'From Australia',
      image: 'https://randomuser.me/api/portraits/women/44.jpg',
      text: 'Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.'
    },
    {
      name: 'Frank Jones',
      country: 'From Japan',
      image: 'https://randomuser.me/api/portraits/men/54.jpg',
      text: 'Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.'
    },
    {
      name: 'Jack Brownn',
      country: 'From London, UK',
      image: 'https://randomuser.me/api/portraits/men/65.jpg',
      text: 'Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.'
    }
  ];
}
