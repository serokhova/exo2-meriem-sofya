import { NavItem } from './models/nav-item';

export const ROUTE_PATHS = {
  home: 'home',
  list: 'list',
  management: 'management',
  contact: 'contact',
  notFound: 'not-found',
};

export const NAV_ITEMS: NavItem[] = [
  { label: 'Accueil', path: ROUTE_PATHS.home },
  { label: 'Liste', path: ROUTE_PATHS.list },
  { label: 'Gestion', path: ROUTE_PATHS.management },
];

export const CONTACT_LABEL = 'Contact';

export const FORM_VALID_MESSAGE = 'Le formulaire est valide';
