import { CommonModule } from '@angular/common';
import { Component, ViewChild,AfterViewInit, ViewChildren, Inject} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TestPipe } from "./test.pipe";
import { HeaderComponent } from "./header/header.component";
import { RouterModule } from '@angular/router';
import { Observable } from 'rxjs';
import { TodoListComponent } from "./todo-list/todo-list.component";
import { TodoFormComponent } from "./todo-form/todo-form.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule, TodoListComponent, TodoFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}

