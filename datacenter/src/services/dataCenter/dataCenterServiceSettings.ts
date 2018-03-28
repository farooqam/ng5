import { Injectable } from '@angular/core';
import {environment } from '../../environments/environment';

@Injectable()
export class DataCenterServiceSettings {
    apiBaseUrl: string = environment.apiBaseUrl;
}
