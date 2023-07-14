import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ReviewsService } from 'src/app/services/reviews.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent {
  public course?: any;
  public reviews?: any;
  averageMark: number | string = 0;
  countReview: number = 0;
  averageInterest: number | string = 0;
  averageBenefit: number | string = 0;
  averageUnderstanding: number | string= 0;
  
  constructor(private route: ActivatedRoute, private reviewsService: ReviewsService) {}

  ngOnInit(){
    this.route.params.subscribe((params: Params) => {
      this.reviewsService.getCourse(params['id']).subscribe((course: any) => { 
          this.course = course;
          this.reviews = this.course.reviews;
          this.countReview = this.course.reviews.length;
          console.log(this.course);
        },
          (error: Error) => {
            console.log(error)
        } 
      );
    });
    this.calcAverage();
  }

  calcAverage() {
    let overall_score = 0;
    let interest = 0;
    let benefit = 0;
    let understanding = 0;
    this.reviews.forEach((review: any) => {
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
