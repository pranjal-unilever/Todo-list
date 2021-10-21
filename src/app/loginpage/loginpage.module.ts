import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';

import { LoginpageComponent } from './loginpage.component';
import { Routes , RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path:'', component:LoginpageComponent
  }

]
@NgModule({
  declarations: [
    LoginpageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    
    
    RouterModule.forChild(routes)
  ],

  exports: [
    LoginpageComponent
  ]
  
})
export class loginModule {
  
 }
