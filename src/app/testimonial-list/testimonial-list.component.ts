import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Testimonial {
  name: string;
  country: string;
  image: string;
  text: string;
}

@Component({
  selector: 'app-testimonial-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonial-list.component.html',
  styleUrls: ['./testimonial-list.component.css']
})
export class TestimonialListComponent {
  testimonials: Testimonial[] = [
    {
      name: 'Kelvin Black',
      country: 'From Dallas, USA',
      image: 'https://websitedemos.net/learndash-academy-02/wp-content/uploads/sites/457/2019/05/testimonial4-free-img.jpg',
      text: 'Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.'
    },
    {
      name: 'Zasha Swan',
      country: 'From Australia',
      image: 'https://websitedemos.net/learndash-academy-02/wp-content/uploads/sites/457/2019/05/testimonial1-free-img.jpg',
      text: 'Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.'
    },
    {
      name: 'Frank Jones',
      country: 'From Japan',
      image: 'https://websitedemos.net/learndash-academy-02/wp-content/uploads/sites/457/2019/05/testimonial3-free-img.jpg',
      text: 'Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.'
    },
    {
      name: 'Jack Brownn',
      country: 'From London, UK',
      image: 'https://websitedemos.net/learndash-academy-02/wp-content/uploads/sites/457/2019/05/testimonial2-free-img.jpg',
      text: 'Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.'
    }
  ];
}
