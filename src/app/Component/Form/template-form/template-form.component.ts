import { Component } from '@angular/core';


@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent {
  StudentObh: any={
    firstName:'',
    lastName: '',
    userName: '',
    city:'',
    state:'',
    zipCode:'',
    isacceptTerm: false
  }
 formvalue:any;


  onSubmit(){
    this.formvalue=this.StudentObh;
    console.log("FormData",this.formvalue)
  }

}
