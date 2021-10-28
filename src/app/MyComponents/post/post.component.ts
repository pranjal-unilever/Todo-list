import { Component, Input, OnInit } from '@angular/core';
import { TodoService } from 'src/app/todo.service';
import { todojson } from 'src/app/todojson';
import { PostidService } from 'src/app/postid.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  comments: any = [];
  id1:number;
  
  constructor(private todoservice:TodoService,private postidservice :PostidService) { }

  ngOnInit(): void {
    this.todoservice.gettodo().subscribe(data => this.comments=data);
    this.id1=this.postidservice.getid();
    console.log(this.id1);
  }

}
