import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DeletecountService {
  count1:number;

  constructor() { }

  public setinfo(val) : void{
    this.count1 = val;
  }

  public getinfo():number {
    return this.count1;
  }


}
