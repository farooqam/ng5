import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Stock } from './stock';
import { StockServiceSettings } from './stockServiceSettings';

@Injectable()
export class StockService {

    stocks: Observable<Stock[]>;

    constructor(
        private _settings: StockServiceSettings,
        private _http: HttpClient) { 
        }

    get(): Array<string> {
        return this._settings.stocks.slice();
    }

    add(stock): Array<string> {
        this._settings.stocks.push(stock);
        console.log(this._settings.stocks);
        return this.get();
    }

    remove(stock): Array<string> {
        this._settings.stocks.splice(this._settings.stocks.indexOf(stock), 1);
        return this.get();
    }

    loadAll(): Observable<Stock[]> {
        let fullUrl = `${this._settings.apiBaseUrl}/snapshot?symbols=${this._settings.stocks.join()}`;
        return this._http.get<Array<Stock>>(fullUrl);
    }
}