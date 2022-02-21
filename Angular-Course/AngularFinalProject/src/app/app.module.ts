import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';

import { ListOfTasksModule } from './modules/listOfTask/list-of-task.module'

@NgModule({
      declarations: [AppComponent],
      imports: [BrowserModule, AppRoutingModule, ListOfTasksModule],
      providers: [],
      bootstrap: [AppComponent]
  })

export class AppModule { }


