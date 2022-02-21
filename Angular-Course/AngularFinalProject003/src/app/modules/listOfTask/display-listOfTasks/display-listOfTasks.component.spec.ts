import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {DisplayListOfTasksComponent} from './display-listOfTasks.component';

describe('DisplayListOfTasksComponent', () => {
  let component: DisplayListOfTasksComponent;
  let fixture: ComponentFixture<DisplayListOfTasksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayListOfTasksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayListOfTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
