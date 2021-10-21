import { TodoItemComponent } from './todo-item.component';
import { Routes , RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { Todo } from 'src/app/Todo';


const routes: Routes = [
  {
    path:'', component:TodoItemComponent
  }

]
@NgModule({
  declarations: [
    TodoItemComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],

  exports: [
    TodoItemComponent
  ]
  
})
export class todoitemModule {
  
 }