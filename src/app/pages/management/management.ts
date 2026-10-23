import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ContactForm } from '../../models/contact-form';
import { ContactService } from '../../services/contact.service';

@Component({
  imports: [RouterLink],
  selector: 'app-management',
  styleUrl: './management.scss',
  templateUrl: './management.html',
})
export class Management {
  public contactForm: ContactForm | null;

  constructor(private contactService: ContactService, private router: Router) {
    this.contactForm = this.contactService.getLastContactForm();

    if (!this.contactForm) {
      this.router.navigate(['/not-found']);
    }
  }
}
