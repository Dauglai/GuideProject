import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dialog-window-add-review',
  templateUrl: './dialog-window-add-review.component.html',
  styleUrls: ['./dialog-window-add-review.component.css']
})
export class DialogWindowAddReviewComponent implements OnInit {
  @Output() protected isOpen: EventEmitter<boolean> = new EventEmitter<boolean>();
  protected reviewForm!: FormGroup;

  ngOnInit(): void {
    this.reviewForm = new FormGroup({
      'course': new FormControl('', [Validators.required]),
      'explanation': new FormControl(),

      'overall_score': new FormControl('', [Validators.required]),
      'interest': new FormControl('', [Validators.required]),
      'benefit': new FormControl('', [Validators.required]),
      'understanding': new FormControl('', [Validators.required]),
    });
  }

  constructor() {  }

  protected submit() {
    console.log(this.reviewForm.getRawValue());
  }

  protected manageDialog() {
      this.isOpen.emit(false);
  }
}
