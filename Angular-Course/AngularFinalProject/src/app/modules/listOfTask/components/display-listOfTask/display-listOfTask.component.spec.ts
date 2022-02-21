import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayListOfTaskComponent } from './display-listOfTask.component';

describe('ListComponent', () => {
  let component: DisplayListOfTaskComponent;
  let fixture: ComponentFixture<DisplayListOfTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayListOfTaskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayListOfTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
