import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ArticleComponent } from './article/article.component';
import { ArticlesComponent } from './articles/articles.component';
import { ArticleService } from './article.service';
import { ArticleCreationComponent } from './article-creation/article-creation.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: 'create', component: ArticleCreationComponent },
  { path: 'articles', component: ArticlesComponent },
  { path: '', component: ArticlesComponent },
  { path: 'article/:id', component: ArticleComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    ArticlesComponent,
    ArticleCreationComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [ArticleService],
  bootstrap: [AppComponent]
})
export class AppModule { }

