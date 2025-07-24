import { Injectable } from '@angular/core';
import { IArticle } from './article.interface';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  private articles: IArticle[] = [
    {
      id: 1,
      category: 'Science',
      title: 'Social Media Marketing',
      date: 'February 24, 2025',
      price: 'free',
      description1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit pellentesque porta.',
      image: 'https://websitedemos.net/learndash-academy-02/wp-content/uploads/sites/457/2019/05/course-1-free-img.jpg',
      description2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque porta augue tortor.Id placerat libero viverra sit amet. Nulla laoreet mattis orci ut rhoncus. Nullam imperdiet eget lectus ut vehicula. Phasellus lobortis turpis ac est venenatis sodales. Pellentesque auctor vulputate accumsan.',
      keyConcepts: [
        'Developing Strategy',
        'Monitoring',
        'Digital Advertising',
        'Basic Investment',
        'Social Media Influencing',
      ],
      sections: [
        {
          title: 'Developing Strategy',
          topicCount: 3,
          isLocked: true,
          topics: [
            { title: 'This is the First Topic' },
            { title: 'Monitoring & Advertising' },
            { title: 'Basic Investment & Social Media Influencing' },
          ],
        },
        {
          title: 'Monitoring & Digital Advertising',
          topicCount: 2,
          isLocked: false,
          topics: [
            { title: 'Digital Analytics' },
            { title: 'Ad Campaigns' },
          ],
        },
        {
          title: 'Investment & Marketing Final Strategies',
          topicCount: 4,
          isLocked: false,
          topics: [
            { title: 'Investment Basics' },
            { title: 'Advanced Marketing' },
            { title: 'ROI Calculation' },
            { title: 'Final Project' },
          ],
        },
      ],
    },
    {
      id: 2,
      category: 'Science',
      title: 'Email Marketing Strategies',
      date: 'February 24, 2025',
      price: 'free',
      description1: 'In porttitor ipsum eu justo condimentum euismod ullamcorper viverra.',
      image: 'https://websitedemos.net/learndash-academy-02/wp-content/uploads/sites/457/2019/05/course-2-free-img.jpg',
      description2: 'In porttitor ipsum eu justo condimentum euismod. Ut ullamcorper viverra neque a porttitor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec sit amet viverra purus.',
      keyConcepts: [
        'Improving Your Email Strategies',
        'Deliverability',
        'Designing Marketing Emails',
      ],
      sections: [
        {
          title: 'Deliverability Of Your Emails',
          topicCount: 0,
          isLocked: true,
        },
        {
          title: 'Improving & Designing Marketing Emails',
          topicCount: 0,
          isLocked: true,
        },
      ],
    },
    {
      id: 3,
      category: 'Marketing',
      title: 'Content Marketing',
      date: 'February 24, 2025',
      price: '$1.00',
      description1: 'Repellat perspiciatis cum! Doloremque ea viverra eu doloremque.',
      image: 'https://websitedemos.net/learndash-academy-02/wp-content/uploads/sites/457/2016/12/course-3-free-img-600x334.jpg',
      description2: 'Lorem ipsum dolor sit amet, consec tetur adipis cing elit. Ut elit tellus luctus nec ullam corper mattis pulvinar.',
      keyConcepts: [
        'Duis aute irure dolor in',
        'Ut enim ad minim veniam',
        'Excepteur sint occaecat',
        'Mollit anim id est laborum',
        'Consectetur adipiscing elit',
      ],
      sections: [],
    },
  ];

  getArticles(): IArticle[] {
    return this.articles;
  }

  getArticleById(id: number): IArticle | undefined {
    return this.articles.find((a) => a.id === id);
  }

  getRelatedArticles(category: string, id: number): IArticle[] {
    return this.articles.filter((a) => a.category === category && a.id !== id);
  }
} 