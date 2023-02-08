import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ContactRequestService {

  baseUrl = 'http://localhost:8000/api/contact/contact-requests/';
  contactRequest: any;
  
  constructor(private http:HttpClient) { }

  SendContactRequest(contactRequest: any) {
    return this.http.post(this.baseUrl, contactRequest);
  }
}
