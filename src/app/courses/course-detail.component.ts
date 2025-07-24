import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-course-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent {
  course: any;
  courses = [
    {
      id: 1,
      title: 'Social Media Marketing',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit pellentesque porta.',
      image: 'https://websitedemos.net/learndash-academy-02/wp-content/uploads/sites/457/2019/05/course-1-free-img.jpg',
      badge: 'Free',
      price: null
    },
    {
      id: 2,
      title: 'Email Marketing Strategies',
      description: 'In porttitor ipsum eu justo condimentum euismod ullamcorper viverra.',
      image: 'https://websitedemos.net/learndash-academy-02/wp-content/uploads/sites/457/2019/05/course-2-free-img-768x428.jpg',
      badge: 'Free',
      price: null
    },
    {
      id: 3,
      title: 'Content Marketing',
      description: 'Repellat perspiciatis cum! Doloremque ea viverra eu doloremque.',
      image: 'https://websitedemos.net/learndash-academy-02/wp-content/uploads/sites/457/2016/12/course-3-free-img-600x334.jpg',
      badge: null,
      price: '$1.00'
    }
  ];

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      const id = +params['id'];
      this.course = this.courses.find(c => c.id === id);
    });
  }
} 