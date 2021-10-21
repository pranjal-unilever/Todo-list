import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
//import { AppComponent } from './app.component';
//import { HomeComponent } from './home/home.component';
//import { LoginComponent } from './MyComponents/login/login.component';
//import { TodosComponent } from './MyComponents/todos/todos.component';
//import { HomeComponent } from './home/home.component';


const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: '/logindata',
  //   pathMatch: 'full'
  // },
  
  { path: '', loadChildren:'src/app/loginpage/loginpage.module#loginModule'},
  { path: 'TODOS', loadChildren:'src/app/MyComponents/todos/todos.module#todosModule'},
  //{ path: 'TODOS', component:TodosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
