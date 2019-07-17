import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable,of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TodoService {
url="https://jsonplaceholder.typicode.com/todos"
removeId:number=0;
constructor(private http: HttpClient) { }
   getToDoList(){
 
return this.http.get(this.url)
     
  }
removeTask(list:any[]){
list.forEach((todo)=>{
  if(todo.id===this.removeId){
    list.splice(list.indexOf(todo),1);
  }
})
}

}
