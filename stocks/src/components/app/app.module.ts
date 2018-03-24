import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {NgbModule, NgbTooltip} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { SummaryComponent } from '../summary/summary/summary.component';
import { StockService } from '../../services/stock/stock.service';
import { StockServiceSettings } from '../../services/stock/stockServiceSettings';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { NoPriceDataComponent } from '../noPriceData/noPriceData.component';

@NgModule({
  declarations: [
    AppComponent,
    SummaryComponent,
    DashboardComponent,
    NoPriceDataComponent
],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule.forRoot() 
  ],
  providers: [NgbTooltip, StockService, StockServiceSettings],
  bootstrap: [AppComponent]
})
export class AppModule { }
