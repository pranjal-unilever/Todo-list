import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/Todo';


@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  title:string;
  desc:string;
  @Input () delteme : number;
  
  
 

  @Output() todoAdd: EventEmitter<Todo> = new EventEmitter();
 
  Count=0;
  
  
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(){
    const todo = {
      sno: 8,
      title: this.title,
     
      active: true
    }
    this.todoAdd.emit(todo);
    this.title=' ';
    this.Count++;

  }
  

}
