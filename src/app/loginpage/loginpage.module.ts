import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';

import { LoginpageComponent } from './loginpage.component';
import { Routes , RouterModule } from '@angular/router';
import { TodosComponent } from '../MyComponents/todos/todos.component';
import { AddTodoComponent } from '../MyComponents/add-todo/add-todo.component';
import { TodoItemComponent } from '../MyComponents/todo-item/todo-item.component';


const routes: Routes = [
  {
    path:'', component:LoginpageComponent
  }

]
@NgModule({
  declarations: [
    LoginpageComponent,
    TodosComponent,
    AddTodoComponent,
    TodoItemComponent

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
