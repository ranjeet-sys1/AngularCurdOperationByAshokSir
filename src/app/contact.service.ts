import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from './contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private baseUrl='https://ashokit-contact-app.herokuapp.com/';

  constructor(private httpClient: HttpClient) { }

  getAllContacts():Observable<Contact[]>{
    return this.httpClient.get<Contact[]>(`${this.baseUrl}/contacts`);
  }
  createContact(contact:Contact):Observable<Object>{
    return this.httpClient.post(`${this.baseUrl}/contact`,contact,{responseType:"text"});
  }
  removeContact(id:number):Observable<Object>{
    return this.httpClient.delete(`${this.baseUrl}/contact/${id}`,{responseType:"text"})
  }
  findContact(id:number):Observable<Contact>{
    return this.httpClient.get<Contact>(`${this.baseUrl}/contact/${id}`)
  }
}
