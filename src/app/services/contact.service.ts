import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private lastContact: any = null;

  saveContact(contactData: any) {
    this.lastContact = contactData; // Écrase le formulaire précédent
  }

  getLastContact() {
    return this.lastContact;
  }
}