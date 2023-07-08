import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-articles',
  templateUrl: './search-articles.component.html',
  styleUrls: ['./search-articles.component.css']
})
export class SearchArticlesComponent {
  @Output()
  public searchEvent$: EventEmitter<string> = new EventEmitter<string>();

  public value: string = "";

  searchText() {
    this.searchEvent$.next(this.value);
    console.log(this.value);
  }
}
