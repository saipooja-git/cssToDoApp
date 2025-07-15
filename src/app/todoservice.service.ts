import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoserviceService {
  

id =2;
  todoTasks =[
    {"id":1,"task":"Task1"},
    {"id":2,"task":"Task2"}
  ];
  addTodo(taskName:any){
    this.todoTasks.push({"id":this.id++,'task':taskName})

  }
deleteTodo(index: number) {
    this.todoTasks.splice(index,1);
  }
}
