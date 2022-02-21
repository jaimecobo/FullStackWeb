import { ListOfTasksModule }  from './list-of-task.module';

describe('ListOfTaskModule', () => {
  let moviesModule: ListOfTasksModule;

  beforeEach(() => {
    moviesModule = new ListOfTasksModule();
  });

  it('should create an instance', () => {
    expect(ListOfTasksModule).toBeTruthy();
  });
});
