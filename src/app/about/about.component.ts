import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  teamMembers = [
    {
      name: 'Lisa Green - CMO',
      img: 'https://websitedemos.net/learndash-academy-02/wp-content/uploads/sites/457/2019/05/about-1-free-img.jpg',
      cardClass: 'z-10',
      cardStyle: 'md:ml-0 md:mt-0',
    },
    {
      name: 'Dr. John Smith — Founder & CEO.',
      img: 'https://websitedemos.net/learndash-academy-02/wp-content/uploads/sites/457/2019/05/about-2-free-img.jpg',
      cardClass: 'z-0',
      cardStyle: 'md:ml-32 md:mt-16',
    },
  ];

  instructors = [
    {
      name: 'Jack Lee',
      img: 'https://websitedemos.net/learndash-academy-02/wp-content/uploads/sites/457/2019/06/instructor-1-free-img.jpg',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      name: 'Zoya Hank',
      img: 'https://websitedemos.net/learndash-academy-02/wp-content/uploads/sites/457/2019/06/instructor-2-free-img.jpg',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      name: 'Alex Jones',
      img: 'https://websitedemos.net/learndash-academy-02/wp-content/uploads/sites/457/2019/06/instructor-3-free-img.jpg',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      name: 'Chris Parker',
      img: 'https://websitedemos.net/learndash-academy-02/wp-content/uploads/sites/457/2019/06/instructor-4-free-img.jpg',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
  ];

  numbers = [
    { value: '10+', label: 'Awards' },
    { value: '5+', label: 'Countries' },
    { value: '12+', label: 'Partners' },
    { value: '7K+', label: 'Students' },
  ];

  testimonials = [
    {
      text: 'Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
      img: 'https://websitedemos.net/learndash-academy-02/wp-content/uploads/sites/457/2019/05/testimonial4-free-img.jpg',
      name: 'Kelvin Black',
      location: 'From Dallas, USA',
    },
    {
      text: 'Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
      img: 'https://websitedemos.net/learndash-academy-02/wp-content/uploads/sites/457/2019/05/testimonial1-free-img.jpg',
      name: 'Zasha Swan',
      location: 'From Australia',
    },
    {
      text: 'Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
      img: 'https://websitedemos.net/learndash-academy-02/wp-content/uploads/sites/457/2019/05/testimonial3-free-img.jpg',
      name: 'Frank Jones',
      location: 'From Japan',
    },
    {
      text: 'Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
      img: 'https://websitedemos.net/learndash-academy-02/wp-content/uploads/sites/457/2019/05/testimonial2-free-img.jpg',
      name: 'Jack Browwn',
      location: 'From London, UK',
    },
  ];
}
