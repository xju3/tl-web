export default [
  {
    path: '/inventory',
    name: 'inventory',
    icon: 'gateway',
    routes: [
      {
        path: '/inventory',
        redirect: '/inventory/summary',
      },
      {
        name: 'summary',
        path: '/inventory/summary',
        component: './Inventory/Summary/List',
      },
      {
        name: 'purchase',
        path: '/inventory/purchase',
        component: './Inventory/Purchase/List',
      },
      {
        name: 'issue',
        path: '/inventory/issue',
        component: './Inventory/issue/List',
      },
      {
        name: 'transfer',
        path: '/inventory/transfer',
        component: './Inventory/Transfer/List',
      },
      {
        name: 'loan',
        path: '/inventory/loan',
        component: './Inventory/Loan/List',
      },
      {
        name: 'scrap',
        path: '/inventory/scrap',
        component: './Inventory/Scrap/List',
      },
      {
        name: 'repair',
        path: '/inventory/repair',
        component: './Inventory/Repair/List',
      },
    ],
  },
];
