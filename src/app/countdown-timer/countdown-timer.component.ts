import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-countdown-timer',
  imports: [],
  templateUrl: './countdown-timer.component.html',
  styleUrl: './countdown-timer.component.scss'
})
export class CountdownTimerComponent {
  @Input() time: number = 0;
  @Input() isWorkoutPhase: boolean = true;
}
