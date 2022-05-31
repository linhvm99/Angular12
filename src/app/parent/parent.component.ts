import { Component, OnInit, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  public chatMessage = '';
  @ViewChild('liianli') liianli: ChildComponent | undefined;
  @ViewChild('michael') michael: ChildComponent | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  public sayHi(name: string){
    console.log('Who\'s calling me ', name);
    this.chatMessage = 'Hi child (' + name + ')';
  }

  public sendMoney() {
    this.liianli?.sendMoney(10);
    this.michael?.sendMoney(20);
  }

}
