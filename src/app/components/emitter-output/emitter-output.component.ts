import { Component } from '@angular/core';

@Component({
  selector: 'app-emitter-output',
  templateUrl: './emitter-output.component.html',
  styleUrls: ['./emitter-output.component.css'],
})
export class EmitterOutputComponent {
  myNumber: number = 0;

  onChangeNumber(): void {
    this.myNumber = Math.floor(Math.random() * 100);
  }
}
