import { Component, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ContactService } from '../../services/contact';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  private readonly router = inject(Router);
  private readonly contactService = inject(ContactService);
  private readonly emailValidators = [Validators.required, Validators.email];

  public contactForm = new FormGroup({
    name: new FormControl('', Validators.required),
    surname: new FormControl('', Validators.required),
    age: new FormControl<number | null>(null),
    checkbox: new FormControl(false, { nonNullable: true }),
    email: new FormControl('', this.emailValidators),
    comment: new FormControl('', Validators.required),
  });

  constructor() {
    const email = this.contactForm.controls.email;

    this.contactForm.controls.checkbox.valueChanges
      .pipe(takeUntilDestroyed())
      .subscribe((checked) => {
        if (checked) {
          email.clearValidators(); 
          email.reset('');           
        } else {
          email.setValidators(this.emailValidators);
        }
        email.updateValueAndValidity();
      });
  }

  public submitContactForm(): void {
    const { name, surname, age, email, comment } = this.contactForm.getRawValue();
    this.contactService.saveContactForm({
      name: name ?? '',
      surname: surname ?? '',
      age,
      email: email ?? '',
      comment: comment ?? '',
    });

    alert('Le formulaire est valide');
    this.router.navigate(['home']);
  }
}