import { Component, OnInit, Input } from '@angular/core';
import { Stock } from '../../../services/stock/stock';

@Component({
  selector: 'stock-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {

  @Input() stock: Stock;

  constructor() { }

  ngOnInit() {
  }

  isNegative(): boolean {
    return this.stock && this.stock.change < 0;
  }

  isPositive(): boolean {
    return !this.isNegative();
  }

}
