import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { NavBarComponent } from '../navBar/navBar.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent
],
  imports: [
    BrowserModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
