import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListOfTaskComponent } from './listOfTask/listOfTask.component';
import { ListOfTaskDetailsComponent } from './shared/components/list-of-task-details/list-of-task-details.component';

const routes: Routes = [
  {path: "", redirectTo: "list", pathMatch: "full"},
  {path: "list", component: ListOfTaskComponent},
  {path: "details/:id", component: ListOfTaskDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
