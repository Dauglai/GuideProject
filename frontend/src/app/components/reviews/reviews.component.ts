import { Component, OnInit } from '@angular/core';
import { ReviewsService } from '../../services/reviews.service';
import { SearchTeacherPipe } from 'src/app/pipes/search-teacher.pipe';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {
  protected teachers: any[] = [];
  protected reviews: any[] = [];
  protected searchText: string = '';

  protected length: number = 1;
  protected index: number = 0;
  protected itemsPerPage: number = 8;

  public isOpenCourse = false;
  public isOpenFromReview = false;
  public course = {};

  protected courses: any[] = [
    {name: 'Основы проектной деятельности', is_online: true, description: 'text1', difficulty: 3,
  course_number: 1},
    {name: 'Информационные технологии и сервисы', is_online: true, description: 'text2', difficulty: 5,
  course_number: 1},
    {name: 'Основы проектной деятельности', is_online: true, description: 'text1', difficulty: 3,
  course_number: 1},
    {name: 'Информационные технологии и сервисы', is_online: true, description: 'text2', difficulty: 5,
  course_number: 1},
    {name: 'Основы проектной деятельности', is_online: true, description: 'text1', difficulty: 3,
  course_number: 1},
    {name: 'Информационные технологии и сервисы', is_online: true, description: 'text2', difficulty: 5,
  course_number: 1},
    {name: 'Основы проектной деятельности', is_online: true, description: 'text1', difficulty: 3,
  course_number: 1},
    {name: 'Информационные технологии и сервисы', is_online: true, description: 'text2', difficulty: 5,
  course_number: 1},
    {name: 'Основы проектной деятельности', is_online: true, description: 'text1', difficulty: 3,
  course_number: 1},
    {name: 'Информационные технологии и сервисы', is_online: true, description: 'text2', difficulty: 5,
  course_number: 1},
    {name: 'Основы проектной деятельности', is_online: true, description: 'text1', difficulty: 3,
  course_number: 1},
    {name: 'Информационные технологии и сервисы', is_online: true, description: 'text2', difficulty: 5,
  course_number: 1},
  ] 

  items = [
      '-',
      '1',
      '2',
      '3',
      '4',
  ];

  courseNumber = new FormControl();

  ngOnInit(): void {
    this.getReviews();
    this.updatePaginationPages();
  }

  constructor( private searchTeacher: SearchTeacherPipe, private reviewsService: ReviewsService ){}

  selectCourse(course: any) {    
    this.course = course;
    this.showDialogCourse();
}

  public showDialogCourse() {
    this.isOpenCourse = true;
  }

  public showDialogFormReview() {
    this.isOpenFromReview = true;
  }

  protected manageDialogCourse(isOpen: boolean) {
    this.isOpenCourse = false;
  }

  protected manageDialogFormReview(isOpen: boolean) {
    this.isOpenFromReview = false;
  }


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
        this.courseNumber,
      //   this.searchTags,
      );
      this.length = Math.ceil(searchedItems.length / this.itemsPerPage);
      this.index = 0;
  }

  goToPage(index: number): void {
    this.index = index;
  }
} 
