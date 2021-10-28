import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostidService {
  mainid:number;

  constructor() { }
  public setid(val) : void{
    this.mainid=val;
  }

  public getid():number{
    return this.mainid;

  }
}
