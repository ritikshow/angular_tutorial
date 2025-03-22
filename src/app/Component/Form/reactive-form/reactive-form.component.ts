import { Component } from '@angular/core';
import { FormControl, FormGroup,ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent {
formvalue:any;


  StudentForm:FormGroup = new FormGroup({
    FirstName: new FormControl('',[Validators.required,Validators.minLength(4)]),
    lastName: new FormControl(''),
    username: new FormControl(''),
    city: new FormControl(''),
    state: new FormControl(''),
    Zipcode: new FormControl(''),
    isAcceptTerm: new FormControl(''),
  })


  OnSave(){
    this.formvalue= this.StudentForm.value;
    console.log("FormData",this.formvalue)
  }
}
