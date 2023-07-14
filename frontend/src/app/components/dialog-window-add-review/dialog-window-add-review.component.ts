import { Component, Output, EventEmitter, OnInit, Input} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ReviewsService } from 'src/app/services/reviews.service';

@Component({
  selector: 'app-dialog-window-add-review',
  templateUrl: './dialog-window-add-review.component.html',
  styleUrls: ['./dialog-window-add-review.component.css'],
})
export class DialogWindowAddReviewComponent implements OnInit {
  @Input() courses: any[] = []
  @Output() protected isOpen: EventEmitter<boolean> = new EventEmitter<boolean>();

  protected reviewForm!: FormGroup;
  protected coursesName: any[] = [];

  constructor(private reviewsService: ReviewsService) {  }

  ngOnInit(): void {
    this.reviewForm = new FormGroup({
      'course': new FormControl('', [Validators.required]),
      'explanation': new FormControl(),

      'overall_score': new FormControl(null, [Validators.required]),
      'interest': new FormControl(null, [Validators.required]),
      'benefit': new FormControl(null, [Validators.required]),
      'understanding': new FormControl(null, [Validators.required]),
    });
    this.courses.forEach((el: any) => {
      this.coursesName.push(el.name);
    })
  }

  protected submit() {
    const form: any = this.reviewForm.getRawValue();
    let idCourse = 0;
    this.courses.forEach((course: any) => {
      if(course.name == form.course) idCourse = course.id 
    });
    this.reviewsService
    .postReview(form.overall_score, form.explanation, form.interest, form.benefit, form.understanding, idCourse )
    .subscribe(
      data => {
        console.log(data)
        this.manageDialog();
      }
    )
  }

  protected manageDialog() {
      this.isOpen.emit(false);
  }
}
