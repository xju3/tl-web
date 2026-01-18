export default [
  {
    path: '/admin',
    name: 'admin',
    icon: 'crown',
    access: 'canAdmin',
    hideInMenu: true,
    routes: [
      {
        path: '/admin',
        redirect: '/admin/sub-page',
      },
      {
        path: '/admin/sub-page',
        name: 'sub-page',
        component: './Common/Admin',
      },
    ],
  },
  {
    path: '/user',
    layout: false,
    routes: [
      {
        name: 'login',
        path: '/user/login',
        component: './Sys/User/login',
      },
    ],
  },
  {
    path: '/',
    redirect: '/welcome',
  },
  {
    component: './common/404',
    layout: false,
    path: './*',
  },
];
