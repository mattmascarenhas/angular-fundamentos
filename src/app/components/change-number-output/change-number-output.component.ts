import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-change-number-output',
  templateUrl: './change-number-output.component.html',
  styleUrls: ['./change-number-output.component.css'],
})
export class ChangeNumberOutputComponent {
  @Output() changeNumber: EventEmitter<any> = new EventEmitter();

  handleClick(): void {
    this.changeNumber.emit();
  }
}
