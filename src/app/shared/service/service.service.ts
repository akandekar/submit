import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {event} from '../model/event';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  URL:string="http://localhost:3000/event"
  constructor(private _http:HttpClient) { }
  getEventdata(){
    return this._http.get<event[]>(this.URL);
  }

  insertEvent(even:event){
    return this._http.post(this.URL,even);
  }
}
