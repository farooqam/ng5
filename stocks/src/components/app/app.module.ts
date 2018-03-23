import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { SummaryComponent } from '../summary/summary/summary.component';
import { StockService } from '../../services/stock/stock.service';
import { StockServiceSettings } from '../../services/stock/stockServiceSettings';

@NgModule({
  declarations: [
    AppComponent,
    SummaryComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [StockService, StockServiceSettings],
  bootstrap: [AppComponent]
})
export class AppModule { }
