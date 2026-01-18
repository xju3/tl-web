export default [
  {
    path: '/strategies',
    name: 'strategies',
    icon: 'scissor',
    routes: [
      {
        path: '/strategies',
        redirect: '/strategies/storages',
      },
      {
        name: 'storages',
        icon: 'hdd',
        path: '/strategies/storages',
        component: './Strategy/Storage/List',
      },
      {
        name: 'consumptions',
        icon: 'hdd',
        path: '/strategies/consumptions',
        component: './Strategy/Consumption/List',
      },
    ],
  },
];
