import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Button } from '../../button/button';

@Component({
  imports: [Button, RouterLink, RouterLinkActive],
  selector: 'app-navbar',
  styleUrl: './navbar.scss',
  templateUrl: './navbar.html',
})
export class Navbar {
  items = [
    { label: 'Accueil', path: '/home' },
    { label: 'Liste', path: '/list' },
    { label: 'Gestion', path: '/management' },
  ];
}
