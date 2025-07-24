import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IArticle } from './article.interface';
import { ArticleService } from './article.service';
import { CommonModule } from '@angular/common';
import { DetailArticleComponent } from '../detail-article/detail-article.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
  articles: IArticle[];
  selectedArticle?: IArticle;

  constructor(private router: Router, private articleService: ArticleService) {
    this.articles = this.articleService.getArticles();
  }

  navigateToDetail(article: IArticle) {
     const category = article.category.toLowerCase();
     this.router.navigate([`/detail-article/${category}`], { queryParams: { id: article.id } });
  }

  selectArticle(article: IArticle) {
    this.selectedArticle = article;
  }

  closeDetail() {
    this.selectedArticle = undefined;
  }
}
