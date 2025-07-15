import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TodoserviceService } from '../todoservice.service';

@Component({
  selector: 'app-todo-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './todo-form.component.html',
  styleUrl: './todo-form.component.css'
})
export class TodoFormComponent {
constructor(private ts:TodoserviceService){

}
todoInput='';

addTask() {
this.ts.addTodo(this.todoInput);
  
}

resetForm(){
this.todoInput='';
}
}
