import { Component, OnInit } from '@angular/core';
import { Article } from '../models/article.model';
import { ArticleService } from '../article.service';
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  articles?: Article[];

  constructor(private articleService: ArticleService) {
    this.articles = [];
  }

  ngOnInit() { 
    this.refresh();
  }

  refresh() {
    this.articleService.getArticles().subscribe((articles: Article[])=> {
      this.articles = articles;
    }); 
  }

  delete(article: Article) {
    console.log("deleteArticle" + article.id);

    this.articleService.deleteArticle(article.id).subscribe(() => {
      console.log("article deleted");
    });
    this.refresh();
  }
}
