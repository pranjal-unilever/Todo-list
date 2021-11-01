import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { todojson } from './todojson';
import { todocommentjson } from './todocommentjson';
import { Observable, observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PostcommentService {
  private _url:string = "/assets/data/todocomment.json";

  constructor(private http:HttpClient) { }
  gettodocomment():Observable<todocommentjson[]>{
    return this.http.get<todocommentjson[]>(this._url);
  }
}
