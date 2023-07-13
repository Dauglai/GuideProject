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

  constructor() {  }

  ngOnInit(): void {
    console.log(this.course);
  }

  protected manageDialog() {
    this.isOpen.emit(false);
  }
}
