import { Component, OnInit } from '@angular/core';
import { ListOfTask } from '../shared/models/listOfTask';
import { ListOfTaskService } from '../services/listOfTask.service';

@Component({
  selector: 'app-listOfTasks',
  templateUrl: './listOfTask.component.html',
  styleUrls: ['./listOfTask.component.css']
})
export class ListOfTaskComponent implements OnInit {

  listOfTasks: ListOfTask[] | undefined;            // errror that I need to fic

  constructor(private listOfTaskData: ListOfTaskService) { 
    this.listOfTaskData.getListOfTasks().subscribe(l => (this.listOfTasks = l));
  }

  ngOnInit(): void {
  }

}


