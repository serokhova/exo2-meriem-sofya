import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { List } from './pages/list/list';
import { ContactComponent } from './pages/contact/contact';
import { ManagementComponent } from './pages/management/management';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'accueil', redirectTo: '', pathMatch: 'full' },
  { path: 'liste', component: List },
  { path: 'contact', component: ContactComponent },
  { path: 'gestion', component: ManagementComponent },
  { path: '**', redirectTo: '' } // Redirection des URL non trouvées vers l'accueil
];