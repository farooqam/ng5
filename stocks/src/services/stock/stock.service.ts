import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

let stocks: Array<string> = ['MSFT', 'AAPL', 'GOOG', 'FB'];
let apiBaseUrl: string = 'https://angular2-in-action-api.herokuapp.com/stocks';

export interface Stock {
    symbol: string,
    lastTradePriceOnly: number,
    change: number,
    changeInPercent: number
}

@Injectable()
export class StockService {

    constructor(private _http: HttpClient) { }

    get(): Array<string> {
        return stocks.slice();
    }

    add(stock): Array<string> {
        stocks.push(stock);
        return this.get();
    }

    remove(stock): Array<string> {
        stocks.splice(stocks.indexOf(stock), 1);
        return this.get();
    }

    load(symbols): Observable<Stock[]> {
        if(!symbols) {
            return;
        }

        let fullUrl = `${apiBaseUrl}/snapshot?symbols=${symbols.join()}`;
        return this._http.get<Array<Stock>>(fullUrl);
    }
}