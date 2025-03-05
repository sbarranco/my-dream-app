import { MenuItem } from './menu.model';

const BASE_MENU_ITEMS: MenuItem[] = [
  { id: 1, label: 'Home', path: '/', authRequired: false },
  { id: 2, label: 'About', path: '/about', authRequired: false },
];

const AUTH_MENU_ITEMS: MenuItem[] = [
  {
    id: 3,
    label: 'Dreams',
    path: '/dreams',
    authRequired: true,
    children: [
      { id: 1, label: 'List', path: '/dreams/list', authRequired: true },
      { id: 2, label: 'Create', path: '/dreams/create', authRequired: true },
    ],
  },
  { id: 4, label: 'Profile', path: '/user', authRequired: true },
  { id: 5, label: 'Logout', path: '', authRequired: true },
];

const PUBLIC_MENU_ITEM: MenuItem[] = [
  { id: 6, label: 'Login', path: '/auth', authRequired: false },
];

export const PRIVATE_MENU_ITEMS: MenuItem[] = [
  ...BASE_MENU_ITEMS,
  ...AUTH_MENU_ITEMS,
];

export const PUBLIC_MENU_ITEMS: MenuItem[] = [
  ...BASE_MENU_ITEMS,
  ...PUBLIC_MENU_ITEM,
];
