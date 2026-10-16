import { Routes } from '@angular/router';
import { NotFound } from './pages/not-found/not-found';
import { Home } from './pages/home/home';
import { List } from './pages/list/list';
import { Management } from './pages/management/management';
import { Contact } from './pages/contact/contact';

export const routes: Routes = [
    {path:'', component:Home},
    {path:'home', component:Home},
    {path:'list', component:List},
    {path:'management', component:Management},
    {path:'contact', component:Contact},
    {path:'not-found', component:NotFound},
    {path: '**', component: Home},
];
