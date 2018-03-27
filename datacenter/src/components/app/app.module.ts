import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { NavBarComponent } from '../navBar/navBar.component';
import { DataCenterService } from '../../services/dataCenter/dataCenter.service';
import { ShowMetricsComponent } from '../showMetrics/showMetrics.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ShowMetricsComponent
],
  imports: [
    BrowserModule,
    NgbModule.forRoot()
  ],
  providers: [DataCenterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
