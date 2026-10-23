import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NAV_ITEMS } from '../../app.constants';
import { Button } from '../../button/button';
import { NavItem } from '../../models/nav-item';

@Component({
  imports: [Button, RouterLink, RouterLinkActive],
  selector: 'app-navbar',
  styleUrl: './navbar.scss',
  templateUrl: './navbar.html',
})
export class Navbar {
  items: NavItem[] = NAV_ITEMS;
}
