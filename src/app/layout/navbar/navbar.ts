import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Button } from '../../button/button';

@Component({
  imports: [Button, RouterLink],
  selector: 'app-navbar',
  styleUrl: './navbar.scss',
  templateUrl: './navbar.html',
})
export class Navbar {
  items = [
    { label: 'Accueil', path: '/home' },
    { label: 'List', path: '/list' },
    { label: 'Management', path: '/management' },
  ];
}
