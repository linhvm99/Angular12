import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {

  // public formData: FormGroup = new FormGroup({
  //   name: new FormControl(''),
  //   address: new FormControl('')
  // });

  // public formData2 = this.formBuilder.group({
  //   name: [''], 
  //   address: ['']
  // })

  public reactiveForm = this.formBuilder.group({
    name: ['', [Validators.required, , Validators.minLength(10)]],
    address: ['', Validators.required]
  })

  constructor(private common: CommonService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  public onSubmit(): void{
    // console.log('Form data: ', this.formData.value);
    this.common.submitData(this.reactiveForm.value);
  }

}
