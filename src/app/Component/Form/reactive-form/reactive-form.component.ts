import { Component } from '@angular/core';
import { FormControl, FormGroup,ReactiveFormsModule, Validators } from '@angular/forms';
import { APIServiceService } from 'src/app/Services/Api_Service/api-service.service';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent {
formvalue:any;
contactData:any;

  constructor(private apiServiceService: APIServiceService){}
  StudentForm:FormGroup = new FormGroup({
    name: new FormControl('',[Validators.required,Validators.minLength(4)]),
    age: new FormControl(''),
    phoneNo: new FormControl(''),
    email: new FormControl(''),
    address: new FormControl(''),
  })


  OnSave(){
    this.formvalue= this.StudentForm.value;
    this.apiServiceService.postContact(this.formvalue).subscribe((res:any)=>{
      console.log("Sussefuly inserted")
       this.StudentForm.reset()
    })
    console.log("FormData",this.formvalue)
  }

    showData(){
      this.apiServiceService.getcontact().subscribe((res:any)=>{
        this.contactData=res;
      })
    }

}
