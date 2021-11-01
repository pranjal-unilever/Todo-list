import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './MyComponents/todos/todos.component';
//import { TodoItemComponent } from './MyComponents/todo-item/todo-item.component';
//import { AddTodoComponent } from './MyComponents/add-todo/add-todo.component';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
//import { HomeComponent } from './home/home.component';

//import { LoginComponent } from './MyComponents/login/login.component';
import { loginModule } from './loginpage/loginpage.module';
// import { addtodoModule } from './MyComponents/add-todo/add-todo.module';
// import { todosModule } from './MyComponents/todos/todos.module';
// import { todoitemModule } from './MyComponents/todo-item/todo-item.module';
import { LoginfoService } from './loginfo.service';
import { PostComponent } from './MyComponents/post/post.component';

//import { PostComponent } from './MyComponents/post/post.component';
//import { LoginpageComponent } from './loginpage/loginpage.component';
//import {HttpMo
@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    loginModule,
    CommonModule,
    HttpClientModule,
   

    
   ],
  providers: [
  LoginfoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
