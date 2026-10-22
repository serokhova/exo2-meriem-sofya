import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrls: ['./contact.scss']
})
export class ContactComponent implements OnInit {
  contactForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private contactService: ContactService,
    private router: Router
  ) {}

  ngOnInit() {
    this.contactForm = this.fb.group({
      prenom: ['', Validators.required],
      nom: ['', Validators.required],
      age: [''],
      hideEmail: [false],
      email: ['', [Validators.required, Validators.email, Validators.pattern(/@/)]],
      commentaire: ['', Validators.required]
    });
  }

  onHideChange(event: any) {
    const isChecked = event.target.checked;
    const emailControl = this.contactForm.get('email');

    if (isChecked) {
      emailControl.setValue('');
      emailControl.clearValidators();
    } else {
      emailControl.setValidators([Validators.required, Validators.email, Validators.pattern(/@/)]);
    }
    emailControl.updateValueAndValidity();
  }

  onSubmit() {
    if (this.contactForm.valid) {
      const formData = {
        ...this.contactForm.value,
        email: this.contactForm.value.hideEmail ? null : this.contactForm.value.email
      };
      
      this.contactService.saveContact(formData);
      alert('Le formulaire est valide'); // Alerte demandée
      this.router.navigate(['/']); // Redirection vers l'accueil
    }
  }
}