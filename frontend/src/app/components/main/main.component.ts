import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit{

  protected posts: any[] = [];

  constructor(private mainService: MainService) {}

  ngOnInit(): void {
    this.mainService.getVkPosts().subscribe(
      (data: any) => {
        this.posts = data.items.slice(0, 3);
        console.log(this.posts);
      }
    )
  }
}
