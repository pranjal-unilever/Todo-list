import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginfoService {
  datamain:string;
  constructor() { }
 

   public setinfo(val) : void{
    this.datamain = val;
  }

  public getinfo():string {
    return this.datamain;
  }
   
  
}




