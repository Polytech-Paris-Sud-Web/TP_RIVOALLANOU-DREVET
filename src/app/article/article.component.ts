import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import {Article} from '../models/article.model';
import { ArticleService } from "../article.service";
import {ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
    
  @Input()
  article? : Article;

  @Output()
  deletedArticle: EventEmitter<Article> = new EventEmitter<Article>();

  constructor(private route: ActivatedRoute, private articleService: ArticleService, private router: Router){
  	
  }

  delete(){

    this.route.url.subscribe(urlSegments => {
      console.log(urlSegments);
      
      if (`${urlSegments[0]?.path}/` === 'article/') {

        // @ts-ignore
        this.articleService.deleteArticle(this.article.id).subscribe(() => {
          this.router.navigate(['/articles']);
        });

      } else {

        this.deletedArticle.emit(this.article);

      }
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if(params.id) {
        this.articleService.getArticle(params.id).subscribe(
          (article: Article) => {
            this.article = article;
          }
        );
      }
    });
  }

}