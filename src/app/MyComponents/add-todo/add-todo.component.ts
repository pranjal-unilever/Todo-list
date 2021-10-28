import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/Todo';
import { todojson } from 'src/app/todojson';


@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  title:string;
  desc:string;
  post1:number
  
 @Output() todoAdd: EventEmitter<Todo> = new EventEmitter();
 
 
 @Output() Countdelete:EventEmitter<number> = new EventEmitter();

 @Output () postid:EventEmitter<number>= new EventEmitter();


  
  constructor() { 
    console.log("add todo works");
  }

  ngOnInit(): void {
    this.postid.emit(this.post1);
  }

  /**
   * Makes todo object
   * call todoAdd method
   */

  onSubmit(){
    const todo = {
      sno: 8,
      title: this.title,
     
      active: true
    }
    console.log(this.title);
    this.todoAdd.emit(todo);
    this.title=' ';
    
    //this.Count=this.deletecountservice.setinfo
    }
  

}
