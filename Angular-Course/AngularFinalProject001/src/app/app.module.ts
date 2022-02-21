import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListOfTaskComponent } from './listOfTask/listOfTask.component';

import{ HttpClientModule} from '@angular/common/http';
import { ListOfTaskDetailsComponent } from './shared/components/list-of-task-details/list-of-task-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ListOfTaskComponent,
    ListOfTaskDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
