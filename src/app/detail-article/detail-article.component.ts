import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ArticleService } from '../home/article.service';
import { IArticle } from '../home/article.interface';

@Component({
  selector: 'app-detail-article',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detail-article.component.html',
  styleUrls: ['./detail-article.component.css'],
})
export class DetailArticleComponent implements OnInit {
  @Input() article?: IArticle;
  @Input() articles: IArticle[] = [];
  category: string = '';
  id: number = 0;
  relatedArticles: IArticle[] = [];
  expandedSection: number | null = null;

  constructor(
    private route: ActivatedRoute,
    private articleService: ArticleService
  ) {}

  ngOnInit(): void {
    if (!this.article) {
      this.category = this.route.snapshot.paramMap.get('category') || '';
      const idParam = this.route.snapshot.queryParamMap.get('id');
      this.id = idParam ? +idParam : 0;
      this.article = this.articleService.getArticleById(this.id);
    } else {
      this.category = this.article.category;
      this.id = this.article.id;
    }
    this.relatedArticles = this.articleService.getRelatedArticles(
      this.category,
      this.id
    );
  }

  toggleSection(index: number) {
    this.expandedSection = this.expandedSection === index ? null : index;
  }
}
