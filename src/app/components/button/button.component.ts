import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  @Input() text:string = '';
  @Input() color:string = 'black';
  @Output() btnClick = new EventEmitter();

  task:string;
  day:string;
  reminder:boolean;
  
  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    this.btnClick.emit();
  }

  onSubmit(){
    if (!this.task) {
      alert('Please fill all fields');
      return;
    }

    const newTask  = {
        text:this.task,
        day:this.day,
        reminder:this.reminder
    }

    
  }

}
