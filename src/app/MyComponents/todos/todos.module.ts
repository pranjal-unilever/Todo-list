import { TodosComponent } from './todos.component';
import { Routes , RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { Todo } from 'src/app/Todo';
import { addtodoModule } from '../add-todo/add-todo.module';
import { todoitemModule } from '../todo-item/todo-item.module';
import { loginModule } from 'src/app/loginpage/loginpage.module';
import { LoginfoService } from 'src/app/loginfo.service';

const routes: Routes = [
  {
    path:'', component:TodosComponent
  }

]
@NgModule({
  declarations: [
    TodosComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    addtodoModule,
    todoitemModule,
    loginModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    // DataService,
    LoginfoService,
    Todo
],

  exports: [
    TodosComponent
  ]
  
})
export class todosModule {
  
 }