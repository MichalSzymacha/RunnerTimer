import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-time-input',
  imports: [],
  templateUrl: './time-input.component.html',
  styleUrl: './time-input.component.scss'
})
export class TimeInputComponent {
  @Input() label: string = '';
  @Input() value: number = 0;
  @Output() valueChange = new EventEmitter<number>();

  onValueChange(event: Event) {
    const target = event.target as HTMLInputElement;
    const newValue = parseInt(target.value, 10);
    if (!isNaN(newValue)) {
      this.valueChange.emit(newValue);
    }
  }
}
