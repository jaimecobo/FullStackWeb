import { TestBed } from '@angular/core/testing';

import { ListOfTaskService } from './listOfTask.service';

describe('ListOfTaskService', () => {
  let service: ListOfTaskService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListOfTaskService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
