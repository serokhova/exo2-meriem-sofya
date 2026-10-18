import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ContactForm } from '../../models/contact-form';
import { ContactService } from '../../services/contact.service';

@Component({
  imports: [RouterLink],
  selector: 'app-management',
  styleUrl: './management.scss',
  templateUrl: './management.html',
})
export class Management {
  private readonly contactService = inject(ContactService);

  public contactForm: ContactForm | null = this.contactService.getLastContactForm();
}
