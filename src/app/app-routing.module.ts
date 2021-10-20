import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
//import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './MyComponents/login/login.component';
import { TodosComponent } from './MyComponents/todos/todos.component';
//import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: '', component:HomeComponent},
  { path: 'TODOS', component:TodosComponent },
  { path: 'logindata', loadChildren:'./loginpage/loginpage.module#LoginpageModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
