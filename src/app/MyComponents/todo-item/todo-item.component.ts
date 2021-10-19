import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Todo } from 'src/app/Todo';
import { LoginfoService } from 'src/app/loginfo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  @Input() i: number;
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();
  @Output() todoCheckbox: EventEmitter<Todo> = new EventEmitter();
  @Output() todoedit: EventEmitter<Todo> = new EventEmitter();
  todos:Todo[];
  public value="";
  

  constructor( public logininfoservice : LoginfoService) {

  }

  ngOnInit(): void {
    this.value = this.logininfoservice.getinfo();
    console.log(this.value);
  }

  /**
   * emit todo to tododelete event
   */
  
  onClick(todo: Todo){
    this.todoDelete.emit(todo);
    console.log("onClick has been triggerd")
  }
  
  /**
   * emit todo to oncheckboxClick event
   */
  onCheckboxClick(todo){
    console.log(todo)
    this.todoCheckbox.emit(todo);
  }
  /**
   * emit todo to todoedit event
   */
  onClickedit(todo){
    this.todoedit.emit(todo);

  }
}
