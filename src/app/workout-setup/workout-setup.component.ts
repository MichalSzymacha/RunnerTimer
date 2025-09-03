import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TimeInputComponent } from '../time-input/time-input.component';

@Component({
  selector: 'app-workout-setup',
  imports: [TimeInputComponent],
  templateUrl: './workout-setup.component.html',
  styleUrl: './workout-setup.component.scss'
})
export class WorkoutSetupComponent {
  workoutTime: number = 30;
  breakTime: number = 10;

  constructor(private router: Router) {}

  onWorkoutTimeChange(time: number) {
    this.workoutTime = time;
  }

  onBreakTimeChange(time: number) {
    this.breakTime = time;
  }

  startWorkout() {
    // Przejście do timera z parametrami
    this.router.navigate(['/timer'], {
      queryParams: { workoutTime: this.workoutTime, breakTime: this.breakTime }
    });
  }
}
