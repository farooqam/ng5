import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Cluster } from './cluster';
import { DataCenterServiceSettings } from './dataCenterServiceSettings';

@Injectable()
export class DataCenterService {

    constructor(
        private _settings: DataCenterServiceSettings, 
        private _http: HttpClient) {
    }

    getClusters(): Observable<Cluster[]> {
        const clusters = this._http.get<Array<Cluster>>(this._settings.apiBaseUrl);
        return clusters;
    }
}
