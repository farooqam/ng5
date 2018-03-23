import { Injectable } from '@angular/core';
import {environment } from '../../environments/environment';

@Injectable()
export class StockServiceSettings {
    apiBaseUrl: string = environment.apiBaseUrl;
    stocks: Array<string> = environment.stocks.split(',');
}

