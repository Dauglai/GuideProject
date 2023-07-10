import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-dialog-window-article',
  templateUrl: './dialog-window-article.component.html',
  styleUrls: ['./dialog-window-article.component.css']
})
export class DialogWindowArticleComponent implements OnInit{
    @Output() protected isOpen: EventEmitter<boolean> = new EventEmitter<boolean>();
    @Input() public article: any = {};

    constructor() {  }

    ngOnInit() {
    }

    protected manageDialog() {
        this.isOpen.emit(false);
    }
}
