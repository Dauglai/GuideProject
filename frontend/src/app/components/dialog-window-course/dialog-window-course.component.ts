import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-dialog-window-course',
  templateUrl: './dialog-window-course.component.html',
  styleUrls: ['./dialog-window-course.component.css']
})
export class DialogWindowCourseComponent {
  @Output() protected isOpen: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() public course: any = {};

  constructor() {  }

  protected manageDialog() {
      this.isOpen.emit(false);
  }
}
