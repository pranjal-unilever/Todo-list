import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { todojson } from './todojson';
import { Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private _url: string = "/assets/data/todocomment.json";

  constructor(private http:HttpClient) { }
  gettodo():Observable<todojson[]>{
    return this.http.get<todojson[]>(this._url);

  }
}
