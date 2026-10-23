import { Component, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FORM_VALID_MESSAGE, ROUTE_PATHS } from '../../app.constants';
import { ContactService } from '../../services/contact.service';

type RequiredField = 'name' | 'surname' | 'email' | 'comment';

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

  contactForm = new FormGroup({
    name: new FormControl('', { nonNullable: true, validators: Validators.required }),
    surname: new FormControl('', { nonNullable: true, validators: Validators.required }),
    age: new FormControl<number | null>(null),
    hideEmail: new FormControl(false, { nonNullable: true }),
    email: new FormControl('', { nonNullable: true, validators: this.emailValidators }),
    comment: new FormControl('', { nonNullable: true, validators: Validators.required }),
  });

  constructor() {
    this.contactForm.controls.hideEmail.valueChanges
      .pipe(takeUntilDestroyed())
      .subscribe((hidden) => this.updateEmailField(hidden));
  }

  isInvalid(field: RequiredField): boolean {
    const control = this.contactForm.controls[field];
    return control.invalid && control.touched;
  }

  submitContactForm(): void {
    const { hideEmail, ...contactForm } = this.contactForm.getRawValue();
    this.contactService.saveContactForm(contactForm);

    alert(FORM_VALID_MESSAGE);
    this.router.navigate(['/', ROUTE_PATHS.home]);
  }

  private updateEmailField(hidden: boolean): void {
    const email = this.contactForm.controls.email;

    if (hidden) {
      email.clearValidators();
      email.reset('');
    } else {
      email.setValidators(this.emailValidators);
    }
    email.updateValueAndValidity();
  }
}
