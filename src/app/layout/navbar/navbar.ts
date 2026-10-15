import { Component } from '@angular/core';
import {Button} from '../../button/button';

@Component({
  imports: [Button],
  selector: 'app-navbar',
  styleUrl: './navbar.scss',
  templateUrl: './navbar.html',
})
export class Navbar {
  items = ["Accueil", "List", "Management"];
  redirectionPage() {
    console.log("redirectionPage works!");
  }
}
