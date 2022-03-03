import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import the FormsModule:
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FavoritePlacesComponent } from './favorite-places/favorite-places.component';

import { PlacesService } from './services/places.service';
import { PlaceFormComponent } from './place-form/place-form.component';

@NgModule({
  declarations: [
    AppComponent,
    FavoritePlacesComponent,
    PlaceFormComponent
  ],
  //include the FormsModule within the imports array:
  imports: [BrowserModule, FormsModule],
  providers: [PlacesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
