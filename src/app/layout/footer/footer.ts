import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Button } from '../../button/button';

@Component({
  imports: [Button, RouterLink],
  selector: 'app-footer',
  styleUrl: './footer.scss',
  templateUrl: './footer.html',
})
export class Footer {
  contactLabel = 'Contact';
}
