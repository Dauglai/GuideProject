import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { ArticlesService } from 'src/app/services/articles.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit{
  public article?: any;
  
  constructor(private route: ActivatedRoute, private articlesService: ArticlesService) {}

  ngOnInit(){
    this.route.params.subscribe((params: Params) => {
      this.articlesService.getArticle(params['id']).subscribe((article: any) => { 
          this.article = article;
          console.log(this.article);
        },
          (error: Error) => {
            console.log(error)
        } 
      );
    });
  }
}
