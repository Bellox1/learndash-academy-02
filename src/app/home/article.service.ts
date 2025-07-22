import { Injectable } from '@angular/core';
import { IArticle } from '../home/article.interface';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  private articles: IArticle[] = [
      {
        id: 1,
        category: 'Science',
        title: 'The Challenges of Space Exploration in the 21st Century',
        date: 'February 24, 2025',
        image: 'https://websitedemos.net/news-blog-04/wp-content/uploads/sites/1516/2025/02/post-16.jpg',
      }
  ];

  getArticles(): IArticle[] {
    return this.articles;
  }

  getArticleById(id: number): IArticle | undefined {
    return this.articles.find(a => a.id === id);
  }

  getRelatedArticles(category: string, excludeId: number): IArticle[] {
    return this.articles.filter(a => a.category.toLowerCase() === category.toLowerCase() && a.id !== excludeId);
  }
}
