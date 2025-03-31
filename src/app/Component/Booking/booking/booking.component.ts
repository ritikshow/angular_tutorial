import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { APIServiceService } from 'src/app/Services/Api_Service/api-service.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  Data: any[] = []; 
  selectedCarType: string = ''; 
  FormValue:any;

constructor(private apiServiceService: APIServiceService) { }


  ngOnInit(): void {
    this.getcardetails();
  }

  Booking: FormGroup = new FormGroup({
      carcompany: new FormControl('', ),
      carmodel: new FormControl(''),
      bookingtype: new FormControl(''),
      name: new FormControl(''),
      phoneNo: new FormControl(''),
      email: new FormControl(''),
      pickup: new FormControl(''),
      drop: new FormControl(''),
      Date: new FormControl(''),
      Time: new FormControl(''),
    })


getcardetails(){
  this.apiServiceService.getcars().subscribe((res:any)=>{
    console.log("Data",res);
    this.Data=res;

  })
}

getCarModels(): string[] {
  const selectedCar = this.Data.find(cars => cars.company === this.selectedCarType);
  return selectedCar ? selectedCar.carModels : [];
}

OnSave(){
this.FormValue=this.Booking.value;
 console.log("Data",this.FormValue)
 this.apiServiceService.postbooking(this.FormValue).subscribe((res:any)=>{
  console.log("success");
 })
}
}



