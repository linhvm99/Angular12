import { Component, OnInit } from '@angular/core';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  public loginName = 'user';
  public counter = 0;
  public counterSquare = 0;

  constructor(private common: CommonService) { }

  ngOnInit(): void {
    this.counter = this.common.getCounter();
    this.counterSquare = this.common.square(this.counter);
    this.common.setCounter(this.common.getCounter() + 1);
  }

}
