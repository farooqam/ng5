import { Component } from '@angular/core';
import { StockService, Stock } from '../../services/stock/stock.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  stocks: Array<Stock>;

  constructor(private _stockService: StockService) {
    
    _stockService.load(['MSFT']).subscribe(stocks => {
      console.log(stocks);
      this.stocks = stocks;
    });
  }
}
