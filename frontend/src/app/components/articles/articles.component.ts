import { Component, OnInit } from '@angular/core';
import { FilterPipe } from '../../pipes/filter.pipe';
import { Router } from '@angular/router';
import { ArticlesService } from 'src/app/services/articles.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit{
    protected articles: any[] = [];
    protected topics: any[] = [];
    protected article: {} = {};

    protected searchText: string = '';
    topic = new FormControl();
    protected searchTopic: string = '';
    
    protected length: number = 1;
    protected index: number = 0;
    protected itemsPerPage: number = 6;

    public isOpen = false;

    items = [
      '-',
    ];

    constructor( private router: Router, private filterPipe: FilterPipe, private articlesService: ArticlesService ) {}

    ngOnInit(): void {
      this.getArticles();
      this.getTopics();
      this.onChangesTopic();
    }

    onChangesTopic() {
      this.topic.valueChanges.subscribe(
        (value: any) => {
          this.searchTopic = value;
          this.updatePaginationPages();
        }
      )
    }

    public showDialog() {
      this.isOpen = true;
    }

    protected manageDialog(isOpen: boolean) {
      this.isOpen = false;
    }

    getArticles(): void {
      this.articlesService.getArticles().subscribe(
        (data: any) => {
          this.articles = data;
          this.updatePaginationPages();
        },
        (error: any) => {
          console.log(error);
        }
      )
    }

    getTopics(): void {
      this.articlesService.getTopics().subscribe(
        (data: any) => {
          console.log(data);
          this.topics = data;
          this.topics.forEach((topic: any) => {
            this.items.push(topic.name);
          })
        },
        (error: any) => {
          console.log(error);
        }
      )
    }

    selectArticle(article: any) {    
      this.article = article;
      this.router.navigate([`articles/article/`, article.id]);
    }

    applySearch(value: string): void {
      this.searchText = value;
      this.updatePaginationPages();
    }

    updatePaginationPages(): void {
      const searchedItems: any[] = this.filterPipe.transform(
        this.articles,
        this.searchText,
        this.searchTopic,
      );
      this.length = Math.ceil(searchedItems.length / this.itemsPerPage);
      this.index = 0;
    }

    goToPage(index: number): void {
      this.index = index;
    }
}
