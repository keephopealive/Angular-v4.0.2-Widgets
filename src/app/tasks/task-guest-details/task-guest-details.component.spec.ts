import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskGuestDetailsComponent } from './task-guest-details.component';

describe('TaskGuestDetailsComponent', () => {
  let component: TaskGuestDetailsComponent;
  let fixture: ComponentFixture<TaskGuestDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskGuestDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskGuestDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
