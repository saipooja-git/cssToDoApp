import { CommonModule } from '@angular/common';
import { Component, EventEmitter,Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

message:string='passedtoparent--message'
passToParent(){
  return this.message;
}

constructor(){}
}
