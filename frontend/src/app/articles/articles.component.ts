import { Component } from '@angular/core';
import { FilterPipe } from '../pipes/filter.pipe';
import { Router } from '@angular/router';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent {
    protected articles: any[] = [
        {id: 1, title: 'test1', text: 'text1'},
        {id: 2, title: 'test2', text: 'text2'},
        {id: 3, title: 'test3', text: 'text3'},
        {id: 4, title: 'test4', text: 'text4'}
    ];
    protected searchText: string = '';
    protected length: number = 1;
    protected index: number = 0;
    protected itemsPerPage: number = 5;

    constructor(
        // @Inject(EMPLOYEES_TOKEN) protected employees$: Observable<IEmployee[]>,
        // @Inject(DestroyService) protected destroy$: DestroyService,
        private router: Router,
        private filterPipe: FilterPipe
    ) { }

    selectArticle(article: any) {
        console.log(article);
        // this.router.navigate(['article/', article.id]);
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
        this.index = 0;
      }
}
