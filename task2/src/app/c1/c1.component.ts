import { Component, OnInit } from '@angular/core';
import {TodoService} from '../todo.service'
@Component({
  selector: 'app-c1',
  templateUrl: './c1.component.html',
  styleUrls: ['./c1.component.css']
})
export class C1Component implements OnInit {
todoList:any[]
  constructor(private todoService:TodoService) {
    
   }

  ngOnInit() {
  this.todoService.getToDoList().subscribe((data:any[])=>{
    this.todoList=data;
  })
  }
completedTask(){
  this.todoService.removeTask(this.todoList);

}
}
