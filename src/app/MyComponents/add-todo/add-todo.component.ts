import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/Todo';
import { DeletecountService } from 'src/app/deletecount.service';


@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  title:string;
  desc:string;
 @Output() todoAdd: EventEmitter<Todo> = new EventEmitter();
 
 Count=0;
 @Output() Countdelete:EventEmitter<number> = new EventEmitter();
  
  constructor(public deletecountservice : DeletecountService) { }

  ngOnInit(): void {
  }
  onSubmit(){
    const todo = {
      sno: 8,
      title: this.title,
     
      active: true
    }
    console.log(this.title);
    this.todoAdd.emit(todo);
    this.title=' ';
    this.Count++;
    //this.Count=this.deletecountservice.setinfo
    }
  

}
