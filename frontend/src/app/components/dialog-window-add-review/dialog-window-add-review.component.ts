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

      'overall_score': new FormControl(1, [Validators.required]),
      'interest': new FormControl(1, [Validators.required]),
      'benefit': new FormControl(1, [Validators.required]),
      'understanding': new FormControl(1, [Validators.required]),
    });
    console.log(this.courses);
    this.courses.forEach((el: any) => {
      this.coursesName.push(el.name)
      console.log(el.name);
    })
  }

  protected submit() {
    const form: {} = this.reviewForm.getRawValue()
    console.log(form);
    this.reviewsService.postReview(1, 1, 1, 1, 1 ).subscribe(
      data => console.log(data)
    )
  }

  protected manageDialog() {
      this.isOpen.emit(false);
  }
}
