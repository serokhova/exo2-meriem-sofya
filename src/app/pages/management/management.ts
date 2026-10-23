import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ROUTE_PATHS } from '../../app.constants';
import { ContactForm } from '../../models/contact-form';
import { ContactService } from '../../services/contact.service';

@Component({
  imports: [],
  selector: 'app-management',
  styleUrl: './management.scss',
  templateUrl: './management.html',
})
export class Management {
  private readonly contactService = inject(ContactService);
  private readonly router = inject(Router);

  contactForm: ContactForm | null = this.contactService.getLastContactForm();

  constructor() {
    if (!this.contactForm) {
      this.router.navigate(['/', ROUTE_PATHS.notFound]);
    }
  }
}
