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
import { DashboardComponent } from '../dashboard/dashboard.component';
import { ClusterStatusComponent } from '../clusterStatus/clusterStatus.component';
import { NodeListComponent } from '../nodeList/nodeList.component';
import { NodeStatusComponent } from '../nodeStatus/nodeStatus.component';
import { NodeDetailComponent } from '../nodeDetail/nodeDetail.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ShowMetricsComponent,
    MetricComponent,
    DashboardComponent,
    ClusterStatusComponent,
    NodeListComponent,
    NodeStatusComponent,
    NodeDetailComponent
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
