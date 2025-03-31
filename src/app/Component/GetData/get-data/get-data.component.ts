import { Component } from '@angular/core';
import { APIServiceService } from 'src/app/Services/Api_Service/api-service.service';

@Component({
  selector: 'app-get-data',
  templateUrl: './get-data.component.html',
  styleUrls: ['./get-data.component.css']
})
export class GetDataComponent {
 
   Data: any;
  constructor(private apiServiceService: APIServiceService){}

  ngOnInit(): void {
    this.fetchData();
  }


  fetchData(){
  this.apiServiceService.getbooking().subscribe((res:any)=>{
     this.Data=res;
  })
  }

}
