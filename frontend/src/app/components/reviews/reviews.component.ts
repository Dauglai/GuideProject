import { Component, OnInit } from '@angular/core';
import { ReviewsService } from '../../services/reviews.service';
import { SearchTeacherPipe } from 'src/app/pipes/search-teacher.pipe';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css'],
})
export class ReviewsComponent implements OnInit {
  protected teachers: any[] = [];
  protected reviews: any[] = [];
  protected searchText: string = '';
  protected searchNumberCourse: string = '';

  protected length: number = 1;
  protected index: number = 0;
  protected itemsPerPage: number = 12;

  public isOpenCourse = false;
  public isOpenFromReview = false;

  public course = {};
  protected courses: any[] = [] 

  items = ['-', '1', '2', '3', '4'];

  readonly testValue = new FormControl(null);
  courseNumber = new FormControl();

  ngOnInit(): void {
    this.getReviews();
    this.getCourses();
    this.onChangesTopic();
  }

  constructor( private searchTeacher: SearchTeacherPipe, private reviewsService: ReviewsService ){}

  onChangesTopic() {
    this.courseNumber.valueChanges.subscribe(
      (value: any) => {
        this.searchNumberCourse = value;
        this.updatePaginationPages();
      }
    )
  }

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
    this.getCourses();
  }

  getReviews(): void {
    this.reviewsService.getReviews().subscribe(
      (data: any) => {
        this.reviews = data;
        this.updatePaginationPages();
      },
      (error: any) => {
        console.log(error);
      }
    )
  }

  getCourses(): void {
    this.reviewsService.getCourses().subscribe(
      (data: any) => {
        console.log(data);
        this.courses = data;
        this.updatePaginationPages();
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
      this.searchNumberCourse,
    );
    this.length = Math.ceil(searchedItems.length / this.itemsPerPage);
    this.index = 0;
  }

  goToPage(index: number): void {
    this.index = index;
  }
} 
