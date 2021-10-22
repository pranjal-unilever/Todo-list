import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';  
import { Todo } from "../../Todo";
import { Router } from '@angular/router';
import { LoginfoService } from 'src/app/loginfo.service';

import { NgStyle } from '@angular/common';



@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  localItem: string;
  todos:Todo[];
  public item ="";
  extraitem: string;
  Count1=0;
  Count2=0;
  Count3=0;
  
  constructor(private router: Router,public logininfoservice : LoginfoService) { 
    
    this.localItem = localStorage.getItem("todos");
    if(this.localItem == null){
    this.todos = [];
    }
    else{ 
      this.todos = JSON.parse(this.localItem); 
    }
    if(this.todos.length==null){
      this.Count3=0;
    }
    console.log("todos works")
    //this.extraitem=localStorage.getItem("todos")
    
    
   }

  ngOnInit(): void {
     
    this.item =this.logininfoservice.getinfo();
    
  }
  /**
   * Takes the todo object 
   * and edit it
   *
   */
  editTodo(todo:Todo){
    const idx = this.todos.indexOf(todo)
    let title = this.todos[idx].title;
    let result = prompt("Edit Task Title", title);
    if (result !== null && result !== ""){
      this.todos[idx].title = result;
    }

  }
 
   /**
    * Takes i index and splice todos array 
    * return that todod array
    */
  
  deleteTodo(i: any){
    const index = i;
    this.todos.splice(index, 1);
    this.Count1=this.todos.length;
    localStorage.setItem("todos", JSON.stringify(this.todos));
    //this.Count1++;
    ///this.logininfoservice.setinfo(this.Count1);
    this.Count2=this.todos.length;
    if(this.todos[index].active){
      this.Count3--;

    }
    
  }
  /**
   * Takes the whole todo object
   * add that todo object in todos
   * array
   */
  
  addTodo(todo:Todo){

    console.log(todo); 
    this.todos.push(todo); 
    this.Count1=this.todos.length;
    localStorage.setItem("todos", JSON.stringify(this.todos));
    this.Count2=this.todos.length;

    //localStorage.setItem("todos"),JSON.stringify(this.ex)
    }

    /**
     * Takes the todo object and its index
     * make it active
     */

  toggleTodo(todo:Todo){ 
    const index = this.todos.indexOf(todo);
    // console.log(index)
    this.todos[index].active = !this.todos[index].active;
    localStorage.setItem("todos", JSON.stringify(this.todos));
    
    console.log(todo);
    if(this.todos[index].active){
      this.Count3++;
      
    }
    else{
      this.Count3--;
      
    }

  }


btnClick() {
    this.router.navigateByUrl('/');
};

}
