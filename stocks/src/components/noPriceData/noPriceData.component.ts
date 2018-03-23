import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'stock-no-price-data',
  templateUrl: './noPriceData.component.html',
  styleUrls: ['./noPriceData.component.css']
})
export class NoPriceDataComponent implements OnInit {

  @Input() symbol: string;

  constructor() { }

  ngOnInit() {
  }

}
