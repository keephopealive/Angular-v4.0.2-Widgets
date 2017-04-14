import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskGuestComponent } from './task-guest.component';

describe('TaskGuestComponent', () => {
  let component: TaskGuestComponent;
  let fixture: ComponentFixture<TaskGuestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskGuestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskGuestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
