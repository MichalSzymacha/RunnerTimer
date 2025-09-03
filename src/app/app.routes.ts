import { Routes } from '@angular/router';
import { WorkoutSetupComponent } from './workout-setup/workout-setup.component';
import { WorkoutTimerComponent } from './workout-timer/workout-timer.component';

export const routes: Routes = [
  { path: '', component: WorkoutSetupComponent },
  { path: 'timer', component: WorkoutTimerComponent },
  { path: '**', redirectTo: '' }
];
