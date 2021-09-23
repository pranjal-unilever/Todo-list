import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';  
import { Todo } from "../../Todo";
import { Router } from '@angular/router';
import { logdata } from "../../logdata";



@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  localItem: string;
  todos:Todo[];
  datas:logdata;
  message:string;
  Count1:number;
  Count2:number;
  constructor(private router: Router) { 
    this.localItem = localStorage.getItem("todos");
    if(this.localItem == null){
    this.todos = [];
    }
    else{ 
      this.todos = JSON.parse(this.localItem); 
    }

   }

  ngOnInit(): void {
  }
  editTodo(todo:Todo){
    const idx = this.todos.indexOf(todo)
    let title = this.todos[idx].title;
    let result = prompt("Edit Task Title", title);
    if (result !== null && result !== ""){
      this.todos[idx].title = result;
    }

  }

  deleteTodo(i: any){
    const index = i;
    this.todos.splice(index, 1);
    this.Count1=this.todos.length;
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }
  addlog(logdata:logdata){
    this.message=this.datas.email
    console.log(this.message)


  }

  addTodo(todo:Todo){
    console.log(todo); 
    this.todos.push(todo); 
    this.Count1=this.todos.length;
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }

  toggleTodo(todo:Todo){ 
    const index = this.todos.indexOf(todo);
    // console.log(index)
    this.todos[index].active = !this.todos[index].active;
    localStorage.setItem("todos", JSON.stringify(this.todos));
    console.log(todo)
  }

  btnClick() {
    this.router.navigateByUrl('/');
};




}
