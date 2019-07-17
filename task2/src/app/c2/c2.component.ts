import { Component, OnInit, Input } from '@angular/core';
import {TodoService} from '../todo.service'

@Component({
  selector: 'app-c2',
  templateUrl: './c2.component.html',
  styleUrls: ['./c2.component.css']
})
export class C2Component implements OnInit {
@Input('todo') todoTask;
constructor(private todoService:TodoService) {
    
}

  ngOnInit() {
  }
completedTask(){
  console.log(this.todoTask.title+"    is SELECTED")
  this.todoService.removeId=this.todoTask.id;
  console.log(this.todoService.removeId)
}
}
