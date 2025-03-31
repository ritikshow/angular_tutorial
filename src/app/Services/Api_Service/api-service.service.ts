import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class APIServiceService {

  constructor(private http: HttpClient) {}
 
  
  getbooking(): Observable<any> {
    return this.http.get<any>('https://localhost:7153/api/Booking');
  }

  postContact(obj: any):Observable<any>{
    return this.http.post<any>('https://localhost:7153/api/Contacts',  obj);
  }

  getcontact():Observable<any>{
    return this.http.get<any>('https://localhost:7153/api/Contacts');
  }

  editcontact(id: string, formvalue: any): Observable<any> {
    return this.http.put<any>(`https://localhost:7153/api/Contacts/${id}`, formvalue); 
  }

  deleteContact(id: string): Observable<any> {
    return this.http.delete<any>(`https://localhost:7153/api/Contacts/${id}`);
  }
  

  getcars():Observable<any>{
    return this.http.get<any>('https://localhost:7153/api/Car');
  }


  postbooking(obj:any):Observable<any>{
 return this.http.post<any>('https://localhost:7153/api/Booking',obj)
  }

}
