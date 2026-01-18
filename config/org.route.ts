export default [
  {
    path: '/org',
    name: 'org',
    icon: 'team',
    routes: [
      {
        path: '/org/partners',
        name: 'partner',
        icon: 'user',
        routes: [
          {
            path: '/org/partners',
            redirect: '/org/partners/list',
          },
          {
            name: 'list',
            path: '/org/partners/list',
            component: './Org/Partner/List',
            hideInMenu: true,
          },
          {
            name: 'edit',
            path: '/org/partners/edit/:id',
            component: './org/Partner/Edit',
            hideInMenu: true,
          },
          {
            name: 'create',
            path: '/org/partners/create',
            component: './Org/Partner/Edit',
            hideInMenu: true,
          },
          {
            path: '/org/partners/view/:id',
            name: 'view',
            component: './Org/Partner/View',
            hideInMenu: true,
          },
          {
            name: 'products.edit',
            path: '/org/partners/:partnerId/products/:id/edit',
            component: './Org/Partner/Product/Edit',
            hideInMenu: true,
          },
          {
            path: '/org/partners/:partnerId/products/create',
            name: 'products.create',
            component: './Org/Partner/Product/Edit',
            hideInMenu: true,
          },
        ],
      },
      {
        name: 'departments',
        path: '/org/departments',
        routes: [
          {
            path: '/org/departments',
            redirect: '/org/departments/list',
          },
          {
            name: 'list',
            path: '/org/departments/list',
            component: './Org/Department/List',
            hideInMenu: true,
          },
          {
            name: 'create',
            path: '/org/departments/create',
            component: './Org/Department/Edit',
            hideInMenu: true,
          },
          {
            name: 'edit',
            path: '/org/departments/edit/:id',
            component: './Org/Department/Edit',
            hideInMenu: true,
          },
          {
            name: 'view',
            path: '/org/departments/view/:id',
            component: './Org/Department/View',
            hideInMenu: true,
          },
        ],
      },
      {
        name: 'employee',
        path: '/org/employees',
        routes: [
          {
            path: '/org/employees',
            redirect: '/org/employees/list',
          },
          {
            name: 'list',
            path: '/org/employees/list',
            component: './Org/Employee/List',
            hideInMenu: true,
          },
          {
            name: 'create',
            path: '/org/employees/create',
            component: './Org/Employee/Edit',
            hideInMenu: true,
          },
          {
            name: 'edit',
            path: '/org/employees/edit/:id',
            component: './Org/Employee/Edit',
            hideInMenu: true,
          },
          {
            name: 'view',
            path: '/org/employees/view/:id',
            component: './Org/Employee/View',
            hideInMenu: true,
          },
        ],
      },
    ],
  },
];
