import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class Servicio1Service {

  constructor( private _httpClient: HttpClient) { }

  async request1(): Promise<any> {
    return this._httpClient.get("https://datausa.io/api/data?drilldowns=Nation&measures=Population").pipe().toPromise();
  }
}
