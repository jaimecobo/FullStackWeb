import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ListOfTaskDetailsComponent } from './shared/components/list-of-task-details/list-of-task-details.component';
import { DisplayListOfTasksComponent } from './modules/listOfTask/display-listOfTasks/display-listOfTasks.component';

const routes: Routes = [
  {path: 
    "", 
    redirectTo: "listOfTasks", 
    pathMatch: "full"
  },
  {
    path: 'listOfTasks',
    component: DisplayListOfTasksComponent
  },
  {
    path: "details/:id", 
    component: ListOfTaskDetailsComponent
  }

];

@NgModule({
  imports: [
    CommonModule, 
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
