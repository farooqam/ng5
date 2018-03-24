import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormBuilder, ReactiveFormsModule  } from '@angular/forms';
import {NgbModule, NgbTooltip} from '@ng-bootstrap/ng-bootstrap';
import { AppRoutes } from './app.routes';
import { AppComponent } from './app.component';
import { SummaryComponent } from '../summary/summary/summary.component';
import { StockService } from '../../services/stock/stock.service';
import { StockServiceSettings } from '../../services/stock/stockServiceSettings';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { NoPriceDataComponent } from '../noPriceData/noPriceData.component';
import { ManageComponent } from '../user/profile/manage/manage.component';

@NgModule({
  declarations: [
    AppComponent,
    SummaryComponent,
    DashboardComponent,
    NoPriceDataComponent,
    ManageComponent
],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule.forRoot(),
    AppRoutes
  ],
  providers: [FormBuilder, NgbTooltip, StockService, StockServiceSettings],
  bootstrap: [AppComponent]
})
export class AppModule { }
