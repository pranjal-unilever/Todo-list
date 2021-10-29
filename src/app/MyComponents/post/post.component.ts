import { Component, Input, OnInit } from '@angular/core';
import { TodoService } from 'src/app/todo.service';
import { todojson } from 'src/app/todojson';
import { PostidService } from 'src/app/postid.service';
import { formatCurrency } from '@angular/common';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  comments = [];
  comment:string
  commentdata:'';
  
  
  id1:number;
  
  
  constructor(private todoservice:TodoService,private postidservice :PostidService) {
    
   }

  ngOnInit(): void {
    this.id1=this.postidservice.getid();
    this.todoservice.gettodo().subscribe((data: any) => 
        { for(let i=0;i<data.length;i++){
        if(data[i].id==this.id1){
          this.commentdata=data[i];
          this.comments.push(this.commentdata);
        }
      }
  
      })
   
      // this.question = (data[i].question);
      // this.questions.push(this.question);
  

 
   
    
    
  }
  // comment1data(){
  //   this.todoservice.gettodo().subscribe((data: any) => 
  //       { for(let i=0;i<data.length;i++){
  //       if(data[i].id==this.id1){
  //         this.comments=data[i]
  
  //       }
  //     }
  
  //     })

    


  // }
  
  

}
