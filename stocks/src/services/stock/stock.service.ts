import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Stock } from './stock';
import { StockServiceSettings } from './stockServiceSettings';

@Injectable()
export class StockService {

    constructor(
        private _settings: StockServiceSettings,
        private _http: HttpClient) { 
            
        }

    get(): Array<string> {
        return this._settings.stocks.slice();
    }

    add(stock): Array<string> {
        this._settings.stocks.push(stock);
        return this.get();
    }

    remove(stock): Array<string> {
        this._settings.stocks.splice(this._settings.stocks.indexOf(stock), 1);
        return this.get();
    }

    load(symbols): Observable<Stock[]> {
        if(!symbols) {
            return;
        }

        let fullUrl = `${this._settings.apiBaseUrl}/snapshot?symbols=${symbols.join()}`;
        return this._http.get<Array<Stock>>(fullUrl);
    }
}