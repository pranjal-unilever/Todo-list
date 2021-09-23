import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginfoService {
  datamain:any;
  constructor() { }
 

   public set info(val) {
    this.datamain = val;
  }

  public get info() {
    return this.datamain;
  }
   
  
}




