import { Component, OnInit } from '@angular/core';
import { FilterPipe } from '../../pipes/filter.pipe';
import { Router } from '@angular/router';
import { ArticlesService } from 'src/app/services/articles.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit{
    protected articles: any[] = [];
    // [
    //     {id: 1, title: 'test1', text: 'text1'},
    //     {id: 2, title: 'test2', text: 'text2'},
    //     {id: 3, title: 'test3', text: 'text3'},
    //     {id: 4, title: 'test4', text: 'text4'},
    //     {id: 5, title: 'test11', text: 'text11'},
    //     {id: 6, title: 'test12', text: 'text12'}
    // ];
    protected article: {} = {};

    protected searchText: string = '';
    protected length: number = 1;
    protected index: number = 0;
    protected itemsPerPage: number = 8;

    public isOpen = false;

    constructor( private router: Router, private filterPipe: FilterPipe, private articlesService: ArticlesService ) { }

    ngOnInit(): void {
      this.getArticles();
      this.updatePaginationPages();
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
          console.log(data);
          this.articles = data;
          this.updatePaginationPages();
        },
        (error: any) => {
          console.log(error);
        }
      )
    }

    selectArticle(article: any) {    
      this.article = article;  
      console.log(article)
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
      //   this.searchTags,
      );
      this.length = Math.ceil(searchedItems.length / this.itemsPerPage);
      console.log(this.length);
      this.index = 0;
    }

    goToPage(index: number): void {
      this.index = index;
    }
}
