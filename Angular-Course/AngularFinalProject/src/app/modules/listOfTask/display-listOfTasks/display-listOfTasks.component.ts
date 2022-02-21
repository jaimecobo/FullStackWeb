import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { of } from 'rxjs';
import { ListOfTask } from '../../../shared/models/listOfTask'

@Component({
  selector: 'app-display-listOfTasks',
  templateUrl: './display-listOfTasks.component.html',
  styleUrls: ['./display-listOfTasks.component.css']
})
export class DisplayListOfTasksComponent implements OnInit {
  private listOfTasksRoute = 'http://localhost:3000/listOftask';
  public "listOfTasks": ListOfTask[]                    // Why ""?

  constructor(private http: HttpClient) {}


  getListOfTasks() {
    this.http.get<ListOfTask[]>(this.listOfTasksRoute).subscribe(listOfTasks => {
    this.listOfTasks = listOfTasks;
      console.log('list of tasks', this.listOfTasks);
    });
  }

  ngOnInit() {
    this.getListOfTasks();
  }
  onListOfTaskDeleted(listOfTaskId: number) {           // Why do I need to specify type of variable listOfTaskId
    let listOfTaskIndex = 0;
    for(let task of this.listOfTasks) {
      if(task.id === listOfTaskId) {
        this.listOfTasks.splice(listOfTaskIndex, 1);
        break;
      }
      listOfTaskIndex++;
    }
  }

  onListOfTaskView(url: any) {   // Why do I need to specify type of variable url
    window.open(url);
  }

}

