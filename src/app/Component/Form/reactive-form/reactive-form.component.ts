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
active:boolean=true;

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

    Onedit(data:any){
         console.log(data)
         this.StudentForm.patchValue({
          name: data.name,
          age: data.age,
          phoneNo: data.phoneNo,
          email: data.email,
          address: data.address
        });
        this.active=false;
    }

    Update() {
     
      this.formvalue = this.StudentForm.value; // Get form data
      console.log("Form Data:", this.formvalue);
         console.log("ID",this.formvalue.id);
      if (!this.formvalue.id) {
        console.error("Error: Missing ID for update.");
        return;
      }
    
      this.apiServiceService.editcontact(this.formvalue.id, this.formvalue).subscribe(
          (res: any) => {
            console.log("Successfully updated");
            this.StudentForm.reset();
          },
          (error) => {
            console.error("Update failed:", error);
          }
        );
    
      console.log("Form Data:", this.formvalue);
    }
    

    // OnDelete(id:string){
    //   this.apiServiceService.deleteContact(id).subscribe((res:any)=>{
    //       console.log("Sussess");
    //   });

    // }
    OnDelete(id: string) {
      if (!id || id.length !== 24) {
        console.error("Invalid MongoDB ObjectId:", id);
        return;
      }
    
      this.apiServiceService.deleteContact(id).subscribe({
        next: (res: any) => {
          console.log("Success", res);
        },
        error: (err) => {
          console.error("Error deleting contact:", err);
        },
      });
    }
    
    

}
