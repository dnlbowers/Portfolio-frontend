import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from './../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ContactRequestService {

  baseUrl = environment.contactsApiUrl;
  contactRequest: any;
  
  constructor(private http:HttpClient) { }

  SendContactRequest(contactRequest: any) {
    return this.http.post(this.baseUrl, contactRequest);
  }
}
