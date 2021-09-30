import { Injectable } from '@angular/core';
import {HttpClient}from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FieldsServiceService {
  _URL = 'https://opendata.arcgis.com/datasets/11388debff0f4b61b9f60ba81cf569c8_0/FeatureServer/0/query?where=1%3D1&outFields=*&outSR=4326&f=json';
  
  token = `11388debff0f4b61b9f60ba81cf569c8_0`

  constructor( public http: HttpClient) { }
  getFields(searchTerm: string): Observable<any>{
    return this.http.get(this._URL + searchTerm + this.token)
  }
}