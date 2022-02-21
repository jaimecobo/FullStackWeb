import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfTaskDetailsComponent } from './list-of-task-details.component';

describe('ListOfTaskDetailsComponent', () => {
  let component: ListOfTaskDetailsComponent;
  let fixture: ComponentFixture<ListOfTaskDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListOfTaskDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfTaskDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
