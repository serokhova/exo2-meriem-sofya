import { Component, inject } from '@angular/core';
import { ContactForm } from '../../models/contact-form';
import { ContactService } from '../../services/contact';

@Component({
  imports: [],
  selector: 'app-management',
  styleUrl: './management.scss',
  templateUrl: './management.html',
})
export class Management {
  private readonly contactService = inject(ContactService);

  public contactForm: ContactForm | null = this.contactService.getLastContactForm();
}
