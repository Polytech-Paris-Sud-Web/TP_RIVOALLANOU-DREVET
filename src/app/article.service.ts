import { Injectable } from '@angular/core';
import { Article, ArticleId } from './models/article.model';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";

@Injectable({
  providedIn: 'root'
})

export class ArticleService {

  constructor(private http : HttpClient) { }

  public getArticles(): Observable<Article[]> {
    return this.http.get<Article[]>("http://localhost:3000/articles");
  }

  public getArticle(id: number): Observable<Article> {
    return this.http.get<Article>(`http://localhost:3000/articles/${id}`);
  }

  public deleteArticle(id: number): Observable<{}> {
    const url = "http://localhost:3000/articles/"+ id
    return this.http.delete(url);
  }

  public createArticle(article: ArticleId): Observable<{}> {
    const url = "http://localhost:3000/articles/"
    return this.http.post(url, article);
  }
}

