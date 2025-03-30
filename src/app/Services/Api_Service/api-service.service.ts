import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class APIServiceService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/users';
  constructor(private http: HttpClient) {}
 
  
  getStudents(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  postContact(obj: any):Observable<any>{
    return this.http.post<any>('https://localhost:7153/api/Contacts',  obj);
  }

  getcontact():Observable<any>{
    return this.http.get<any>('https://localhost:7153/api/Contacts');
  }
   


}
