export default [
  {
    path: '/settings',
    name: 'settings',
    icon: 'setting',
    routes: [
      {
        path: '/settings',
        redirect: '/settings/attributes',
      },
      {
        name: 'attributes',
        icon: 'hdd',
        path: '/settings/attributes',
        component: './Setting/Attribute/List',
      },
    ],
  },
];
