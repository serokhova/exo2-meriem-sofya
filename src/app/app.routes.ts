import { Routes } from '@angular/router';
import { ROUTE_PATHS } from './app.constants';
import { Contact } from './pages/contact/contact';
import { Home } from './pages/home/home';
import { List } from './pages/list/list';
import { Management } from './pages/management/management';
import { NotFound } from './pages/not-found/not-found';

export const routes: Routes = [
  { path: '', redirectTo: ROUTE_PATHS.home, pathMatch: 'full' },
  { path: ROUTE_PATHS.home, component: Home },
  { path: ROUTE_PATHS.list, component: List },
  { path: ROUTE_PATHS.management, component: Management },
  { path: ROUTE_PATHS.contact, component: Contact },
  { path: ROUTE_PATHS.notFound, component: NotFound },
  { path: '**', redirectTo: ROUTE_PATHS.home },
];
