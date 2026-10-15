import { Routes } from '@angular/router';
import { NotFound } from './pages/not-found/not-found';
import { Home } from './pages/home/home';
import { List } from './pages/list/list';
import { Management } from './pages/management/management';

export const routes: Routes = [
    {path:'', component:Home},
    {path:'home', component:Home, title:'Home'},
    {path:'list', component:List, title:'List'},
    {path:'management', component:Management, title:'Management'},
    {path:'not-found', component:NotFound, title:'Not Found'},
    {path: '**', component: NotFound},
];
