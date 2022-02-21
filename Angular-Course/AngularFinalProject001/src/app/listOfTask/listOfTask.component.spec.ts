import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfTaskComponent } from './listOfTask.component';

describe('ListComponent', () => {
  let component: ListOfTaskComponent;
  let fixture: ComponentFixture<ListOfTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListOfTaskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
