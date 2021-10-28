import { Component, Input, OnInit } from '@angular/core';
import { TodoService } from 'src/app/todo.service';
import { todojson } from 'src/app/todojson';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  public comments =  [];
  
  constructor(private todoservice:TodoService) { }

  ngOnInit(): void {
    this.todoservice.gettodo().subscribe(data => this.comments=data);
  }

}
