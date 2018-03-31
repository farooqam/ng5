import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { NavBarComponent } from '../navBar/navBar.component';
import { DataCenterService } from '../../services/dataCenter/dataCenter.service';
import { ShowMetricsComponent } from '../showMetrics/showMetrics.component';
import { DataCenterServiceSettings } from '../../services/dataCenter/dataCenterServiceSettings';
import { MetricComponent } from '../metric/metric.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ShowMetricsComponent,
    MetricComponent
],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule.forRoot()
  ],
  providers: [DataCenterService, DataCenterServiceSettings],
  bootstrap: [AppComponent]
})
export class AppModule { }
