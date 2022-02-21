import { Injectable } from '@angular/core';
import { ListOfTask } from '../shared/models/listOfTask';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ListOfTaskService {

  listOfTaskUrl="http://localhost:3000/listOFTask";

  getListOfTasks = () : Observable <ListOfTask[]> => {
    return this.http.get<ListOfTask[]>(this.listOfTaskUrl);
  }

  getListOfTaskById = ( id:number ) : Observable <ListOfTask> => {
    return this.http.get<ListOfTask>( this.listOfTaskUrl + "/" + id );
  }

  constructor( private http:HttpClient ) { }
}
