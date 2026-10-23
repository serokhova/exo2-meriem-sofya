import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CONTACT_LABEL, ROUTE_PATHS } from '../../app.constants';
import { Button } from '../../button/button';

@Component({
  imports: [Button, RouterLink],
  selector: 'app-footer',
  styleUrl: './footer.scss',
  templateUrl: './footer.html',
})
export class Footer {
  contactLabel = CONTACT_LABEL;
  contactPath = '/' + ROUTE_PATHS.contact;
}
