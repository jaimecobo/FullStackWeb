import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { DisplayListOfTaskComponent } from './components/display-listOfTask/display-listOfTask.component';
import { DisplayListOfTasksComponent } from './display-listOfTasks/display-listOfTasks.component';


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [DisplayListOfTasksComponent, DisplayListOfTaskComponent],
  exports: [DisplayListOfTasksComponent]
})
export class ListOfTasksModule { }
