import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CountdownTimerComponent } from '../countdown-timer/countdown-timer.component';
import { interval, Subscription } from 'rxjs';
import { SoundService } from '../sound.service';

@Component({
  selector: 'app-workout-timer',
  imports: [CommonModule, CountdownTimerComponent],
  templateUrl: './workout-timer.component.html',
  styleUrl: './workout-timer.component.scss'
})
export class WorkoutTimerComponent implements OnInit {
  workoutTime: number = 30;
  breakTime: number = 10;
  isRunning: boolean = false;
  currentTime: number = 0;
  isWorkoutPhase: boolean = true;
  private timerSubscription: Subscription | null = null;
  showSummary: boolean = false;
  totalWorkouts: number = 0;
  totalBreaks: number = 0;

  constructor(private route: ActivatedRoute, private router: Router, private soundService: SoundService) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.workoutTime = +params['workoutTime'] || 30;
      this.breakTime = +params['breakTime'] || 10;
    });
  }

  startTimer() {
    if (this.isRunning) return;
    this.isRunning = true;
    this.showSummary = false;
    this.currentTime = this.isWorkoutPhase ? this.workoutTime : this.breakTime;
    this.timerSubscription = interval(1000).subscribe(() => {
      // Odtwarzaj dźwięk przez ostatnie 5 sekund
      this.soundService.startCountdownSound(this.currentTime);

      this.currentTime--;
      if (this.currentTime <= 0) {
        // Odtwarzaj dźwięk zmiany fazy
        this.soundService.playPhaseTransitionSound();

        if (this.isWorkoutPhase) {
          this.totalWorkouts++;
        } else {
          this.totalBreaks++;
        }
        this.isWorkoutPhase = !this.isWorkoutPhase;
        this.currentTime = this.isWorkoutPhase ? this.workoutTime : this.breakTime;
      }
    });
  }

  stopTimer() {
    this.isRunning = false;
    this.showSummary = true;
    if (this.timerSubscription) {
      this.timerSubscription.unsubscribe();
      this.timerSubscription = null;
    }
    // Zatrzymaj wszystkie dźwięki
    this.soundService.stopAllSounds();
  }

  resetTimer() {
    this.stopTimer();
    this.router.navigate(['/']);
  }
}
