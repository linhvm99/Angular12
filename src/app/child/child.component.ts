import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent implements OnInit {
  @Input() name: string = '';
  @Output() sayHi: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  public hiDad(){
    console.log('Hi dad')
    this.sayHi.emit(this.name);
  }

  public sendMoney(amount: number){
    console.log('I am ' + this.name + '. Thanks for ' + amount + 'USD');
  }
}
