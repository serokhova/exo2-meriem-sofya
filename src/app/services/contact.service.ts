import { Injectable } from '@angular/core';
import { ContactForm } from '../models/contact-form';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private lastContactForm: ContactForm | null = null;

  saveContactForm(contactForm: ContactForm): void {
    this.lastContactForm = contactForm;
  }

  getLastContactForm(): ContactForm | null {
    return this.lastContactForm;
  }
}
