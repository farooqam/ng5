import { Injectable } from '@angular/core';

@Injectable()
export class StockServiceSettings {
    apiBaseUrl: string = 'https://angular2-in-action-api.herokuapp.com/stocks';
    stocks: Array<string> = ['MSFT', 'AAPL', 'GOOG', 'FB'];
}

