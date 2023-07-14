import { Component, Output, EventEmitter, Input, OnInit } from '@angular/core';
import { ReviewsService } from 'src/app/services/reviews.service';

@Component({
  selector: 'app-dialog-window-course',
  templateUrl: './dialog-window-course.component.html',
  styleUrls: ['./dialog-window-course.component.css']
})
export class DialogWindowCourseComponent implements OnInit {
  @Output() protected isOpen: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() public course: any = {};

  // {id: 2, reviews: Array(0), name: 'Безопасность жизнедеятельности', description: 'Дисциплина «Безопасность жизнедеятельности» дает с…ководствуясь законодательной и нормативной базой.', number_course: 1, …}

  averageMark: number | string = 0;
  countReview: number = 0;
  averageInterest: number | string = 0;
  averageBenefit: number | string = 0;
  averageUnderstanding: number | string= 0;

  constructor() {  }

  ngOnInit(): void {
    console.log(this.course);
    this.calcAverage();
  }

  protected manageDialog() {
    this.isOpen.emit(false);
  }

  calcAverage() {
    const reviews = this.course.reviews;
    this.countReview = reviews.length;

    let overall_score = 0;
    let interest = 0;
    let benefit = 0;
    let understanding = 0;
    reviews.forEach((review: any) => {
      overall_score += review.overall_score;
      interest += review.interest;
      benefit += review.benefit;
      understanding += review.understanding;
    });

    this.averageMark = Math.ceil(overall_score * 100 / this.countReview) / 100 || '-';
    this.averageInterest = Math.ceil(interest * 100 / this.countReview) / 100 || '-';
    this.averageBenefit = Math.ceil(benefit * 100 / this.countReview) / 100 || '-';
    this.averageUnderstanding = Math.ceil(understanding * 100 / this.countReview) / 100 || '-';
  }
}
