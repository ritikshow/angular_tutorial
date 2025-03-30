import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-from-advance',
  templateUrl: './reactive-from-advance.component.html',
  styleUrls: ['./reactive-from-advance.component.css']
})
export class ReactiveFromAdvanceComponent {

  applicationForm: FormGroup = new FormGroup({
    fName: new FormControl("",[Validators.required]),
    mName: new FormControl(""),
    lName: new FormControl(""),
    fullName: new FormControl(""),
    isWorking: new FormControl("No"),
    jobType: new FormControl(""),
    isOwnBusiness: new FormControl(""),

    companyDetails : new FormGroup({
    companyName: new FormControl(""),
    postion: new FormControl(""),
    salary: new FormControl("")
    }),

    busineesDetails : new FormGroup({
      busineesType: new FormControl(""),
      busineesName: new FormControl(""),
      annualIncome: new FormControl(""),
      address: new FormControl("")
    }),
    personalEmail: new FormControl(""),
    businesEmail: new FormControl(""),
    contactList: new FormArray([]),
    loanList: new FormArray([])
  })
 
  constructor() {
    this.addNewContactForm();
    this.addNewLoanForm();
    this.applicationForm.valueChanges.subscribe(()=>{
       const formValue = this.applicationForm.value;
       const {fName,mName,lName} = formValue;
       const fullName =  fName + " "+ mName + " "+ lName;
       
       //this.applicationForm.controls['fullName'].setValue(fullName);

       this.applicationForm.patchValue({fullName: fullName, personalEmail: 'sadasd'},{emitEvent: false});

      //  this.applicationForm.setValue({
      //   fName:
      //  })
    })
  }

  addNewContactForm() {
    const conatctForm =  new FormGroup({
      contactNo:  new FormControl("")
    });
    this.contacts.push(conatctForm);
  }

  addNewLoanForm() {
    const conatctForm =  new FormGroup({
      bankName:  new FormControl(""),
      loanAmount:  new FormControl(""),
      emi:  new FormControl("")
    });
    this.loans.push(conatctForm);
  }

  get contacts() : FormArray {
    return this.applicationForm.controls['contactList'] as FormArray;
  }
  get loans() : FormArray {
    return this.applicationForm.controls['loanList'] as FormArray;
  }

  removeContact(index: number) {
    this.contacts.removeAt(index)
  }

  removeloan(index: number){
    this.loans.removeAt(index)
  }


}
