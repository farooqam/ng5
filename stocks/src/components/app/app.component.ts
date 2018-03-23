import { Component } from '@angular/core';
import { StockService } from '../../services/stock/stock.service';
import { Stock } from '../../services/stock/stock';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  stocks: Array<Stock>;

  constructor(private _stockService: StockService) {
    _stockService.stocks.subscribe(stocks => this.stocks = stocks);
  }
}
