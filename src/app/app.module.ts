import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './MyComponents/todos/todos.component';
import { TodoItemComponent } from './MyComponents/todo-item/todo-item.component';
//import { AddTodoComponent } from './MyComponents/add-todo/add-todo.component';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
//import { HomeComponent } from './home/home.component';

import { LoginComponent } from './MyComponents/login/login.component';
import { loginModule } from './loginpage/loginpage.module';
import { addtodoModule } from './MyComponents/add-todo/add-todo.module';
import { todosModule } from './MyComponents/todos/todos.module';
import { todoitemModule } from './MyComponents/todo-item/todo-item.module';

@NgModule({
  declarations: [
    AppComponent,
    
   
   
    LoginComponent,
  
   
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    loginModule,
    addtodoModule,
    todosModule,
    todoitemModule
   
    
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
