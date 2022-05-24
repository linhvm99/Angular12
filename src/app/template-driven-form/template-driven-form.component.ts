import { Component, OnInit } from '@angular/core';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.scss']
})
export class TemplateDrivenFormComponent implements OnInit {

  public username = '';
  public password = '';

  constructor(private common: CommonService) { }

  ngOnInit(): void {
  }

  public submitForm(): void{
    console.log('Submit form: ', this.username);
    this.common.submitData({username: this.username, password: this.password });
  }
}
