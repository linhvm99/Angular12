import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public name = 'Manh Linh';
  public age = 20;
  public fruits = ['Chuối', 'Nho'];
  public authors = [
    {
      id: 1,
      firstName: 'Flora',
      lastName: 'Twell',
      email: 'ftwell0@phoca.cz',
      gender: 'Female',
      ipAddress: '99.180.237.33',
      salary: 2200
    },
    {
      id: 2,
      firstName: 'Priscella',
      lastName: 'Signe',
      email: 'psigne1@berkeley.edu',
      gender: 'Female',
      ipAddress: '183.243.228.65',
      salary: 1000
    },
    // more data
  ];

  constructor() {}

  ngOnInit(): void {
    console.log('Trái cây: ', this.fruits);
  }

  public resetName(): void {
    console.log('Reset name');
    this.name = '';
  }
}
