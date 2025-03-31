import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { APIServiceService } from 'src/app/Services/Api_Service/api-service.service';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  formvalue: any;
  contactData: any;
  active: boolean = true;
  editingId: any;
  isEditMode: boolean = false;

  constructor(private apiServiceService: APIServiceService) { }
  ngOnInit(): void {
    this.showData();
  }
  StudentForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(4)]),
    age: new FormControl(''),
    phoneNo: new FormControl(''),
    email: new FormControl(''),
    address: new FormControl(''),
  })


  OnSave() {
    this.formvalue = this.StudentForm.value;
    this.apiServiceService.postContact(this.formvalue).subscribe((res: any) => {
      console.log("Sussefuly inserted")
      this.StudentForm.reset()
    })
    console.log("FormData", this.formvalue)
  }

  showData() {
    this.apiServiceService.getcontact().subscribe((res: any) => {
      this.contactData = res;
    })
  }

  OnEdit(data: any) {
    console.log(data)
    this.editingId = data.id;
    console.log("EDIT ID", this.editingId)
    this.StudentForm.patchValue({
      name: data.name,
      age: data.age,
      phoneNo: data.phoneNo,
      email: data.email,
      address: data.address
    });
    this.active = false;
  }

  Update() {
    if (!this.editingId) {
      console.error("Error: Missing ID for update.");
      return;
    }

    // Ensure all fields exist
    const updatedData = {
      id:this.editingId,
      name: this.StudentForm.value.name || '',
      age: this.StudentForm.value.age || 0,
      phoneNo: this.StudentForm.value.phoneNo || '',
      email: this.StudentForm.value.email || '',
      address: this.StudentForm.value.address || ''
    };

    console.log("Updating ID:", this.editingId);
    console.log("Form Data Sent:", JSON.stringify(updatedData));

    this.apiServiceService.editcontact(this.editingId, updatedData).subscribe({
      next: (res: any) => {
        console.log("Successfully updated", res);
        this.StudentForm.reset();
        this.editingId = null;
        this.isEditMode = false;
        this.showData(); // Refresh data
      },
      error: (err) => {
        console.error("Update failed:", err);
      }
    });
  }



  OnDelete(id: string) {
    if (!id || id.length !== 24) {
      console.error("Invalid  Id");
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
