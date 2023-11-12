import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Dashboard',
    icon: 'home-outline',
    link: '/pages/dashboard',
    home: true,
  },
  {
    title: 'User Management',
    icon: 'grid-outline',
    children: [
      {
        title: 'User List',
        link: '/pages/user-management/user-list',
        icon: 'people-outline',
      },
      {
        title:'View/Update/New',
        link: '/pages/user-management/user-add-update',
        icon: 'person-done-outline',
      },
    ],
  },
  {
    title: 'Policy Management',
    icon: 'briefcase-outline',
    children: [
      {
        title: 'Policy Management',
        link: '/pages/policy-management/policy-list',
        icon:'shield-outline',
      },
      {
        title: 'View/Update/New',
        link: '/pages/policy-management/policy-add-update',
        icon: 'file-text-outline',
      },
    ],
  },

  {
    title: 'Auth',
    icon: 'lock-outline',

    children: [
      {
        title: 'Logout',
        link: '/auth/logout',
      },
      {
        title: 'Login',
        link: '/auth/login',
        hidden: true,
      },
      {
        title: 'Register',
        link: '/auth/register',
        hidden: true,
      },
      {
        title: 'Request Password',
        link: '/auth/request-password',
        hidden: true,
      },
      {
        title: 'Reset Password',
        link: '/auth/reset-password',
        hidden: true,
      },
    ],
  },
];
