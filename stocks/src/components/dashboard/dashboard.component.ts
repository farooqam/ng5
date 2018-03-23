import { Component, OnInit } from '@angular/core';
import { Stock } from '../../services/stock/stock';
import { StockService } from '../../services/stock/stock.service';

@Component({
  selector: 'stock-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  stocks: Array<Stock>;
  symbols: Array<string>;

  constructor(private _stockService: StockService) {
    this.symbols = this._stockService.get();
   }

  ngOnInit() {
    this._stockService.stocks.subscribe(stocks => this.stocks = stocks);
  }

}
