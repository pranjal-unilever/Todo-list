import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private _url: string = "/assets/data/todoget.json";

  constructor(private http:HttpClient) { }
  gettodo(){
    return this.http.get(this._url);

  }
}
