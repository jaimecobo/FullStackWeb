import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { ListOfTaskService } from 'src/app/services/listOfTask.service';
import { ListOfTask } from '../../models/listOfTask';


@Component({
  selector: 'app-list-of-task-details',
  templateUrl: './list-of-task-details.component.html',
  styleUrls: ['./list-of-task-details.component.css']
})
export class ListOfTaskDetailsComponent implements OnInit {
  @Input() "listOfTask": ListOfTask;
  @Output() listOfTaskDeleted: EventEmitter<number> = new EventEmitter();
  
  "myList": ListOfTask;
  "id": number;
  
  
  constructor(private listOfTaskData: ListOfTaskService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = +params["id"];
      this.listOfTaskData.getListOfTaskById(this.id).subscribe(l => (this.myList = l));
    });
  }
  
  onClickDelete() {
    this.listOfTaskDeleted.emit(this.listOfTask.id);
  }
}






