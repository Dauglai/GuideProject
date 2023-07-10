import { Component, OnInit } from '@angular/core';
import { ReviewsService } from '../../services/reviews.service';
import { SearchTeacherPipe } from 'src/app/pipes/search-teacher.pipe';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {
  protected teachers: any[] = [];
  protected reviews: any[] = [];
  protected searchText: string = '';
  protected courses: any[] = [
    {name: 'Основы проектной деятельности', is_online: true, description: 'text1', difficulty: 3},
    {name: 'Информационные технологии и сервисы', is_online: true, description: 'text2', difficulty: 5}
  ] 

  ngOnInit(): void {
    this.getReviews();
  }

  constructor( private searchTeacher: SearchTeacherPipe, private reviewsService: ReviewsService ){}

  getReviews(): void {
    this.reviewsService.getReviews().subscribe(
      (data: any) => {
        console.log(data);
        this.reviews = data;
      },
      (error: any) => {
        console.log(error);
      }
    )
  }

  applySearch(value: string): void {
    this.searchText = value;
    this.updatePaginationPages();
}

  updatePaginationPages(): void {
      const searchedItems: any[] = this.searchTeacher.transform(
        this.courses,
        this.searchText,
      //   this.searchTags,
      );
      // this.length = Math.ceil(searchedItems.length / this.itemsPerPage);
      // this.index = 0;
  }
} 