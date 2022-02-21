import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ListOfTask } from 'src/app/shared/models/listOfTask';


@Component({
  selector: 'app-display-listOfTask',
  templateUrl: './display-listOfTask.component.html',
  styleUrls: ['./display-listOfTask.component.css']
})
export class DisplayListOfTaskComponent implements OnInit {

  @Input() "listOfTask": ListOfTask;
  @Output() listOfTaskDeleted: EventEmitter<number> = new EventEmitter();
  @Output() listOfTaskView: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() {}

  onClickDelete() {
    this.listOfTaskDeleted.emit(this.listOfTask.id);
  }

  onClickView() {
    this.listOfTaskView.emit("/details/" + this.listOfTask.id);
  }

}
