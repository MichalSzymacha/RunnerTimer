import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkoutSetupComponent } from './workout-setup.component';

describe('WorkoutSetupComponent', () => {
  let component: WorkoutSetupComponent;
  let fixture: ComponentFixture<WorkoutSetupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkoutSetupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkoutSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
