import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    offsetFlag = true;
    previous: number = 0;
    ngOnInit(){}

    @HostListener('window:scroll', ['$event']) getScrollHeight(event: any) {
        // console.log(window.scrollY,this.previous);
        if(window.scrollY < this.previous){
            this.offsetFlag = true;
            this.previous = window.scrollY;
        }
        else if(window.scrollY > 0){
            this.offsetFlag = false;
            this.previous = window.scrollY;
        }
        else
            this.offsetFlag = true;
    }
}
