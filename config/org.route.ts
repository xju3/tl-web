export default [
  {
    path: '/org',
    name: 'org',
    icon: 'team',
    routes: [
      {
        path: '/org',
        redirect: '/org/partner',
      },
      {
        path: '/org/partner',
        name: 'partner',
        icon: 'user',
        component: './Org/Partner/List',
      },
      {
        path: '/org/partner/edit/:id',
        name: 'edit.partner',
        component: './org/Partner/Edit',
        hideInMenu: true,
      },
      {
        path: '/org/partner/add',
        name: 'create.partner',
        component: './Org/Partner/Edit',
        hideInMenu: true,
      },
      {
        path: '/org/partner/view/:id',
        name: 'view.partner',
        component: './Org/Partner/View',
        hideInMenu: true,
      },
      {
        name: 'edit.partner.product',
        path: '/org/partner/:partnerId/products/:id/edit',
        component: './Org/Partner/Product/Edit',
        hideInMenu: true,
      },
      {
        path: '/org/partner/:partnerId/products/create',
        name: 'create.partner.product',
        component: './Org/Partner/Product/Edit',
        hideInMenu: true,
      },

      {
        name: 'department',
        path: '/org/department',
        component: './Org/Department/List',
      },
      {
        name: 'create',
        path: '/org/department/add',
        component: './Org/Department/Edit',
        hideInMenu: true,
      },
      {
        name: 'edit.department',
        path: '/org/department/edit/:id',
        component: './Org/Department/Edit',
        hideInMenu: true,
      },
      {
        name: 'view.department',
        path: '/org/department/view/:id',
        component: './Org/Department/View',
        hideInMenu: true,
      },
      {
        name: 'employee',
        path: '/org/employee',
        component: './Org/Employee/List',
      },
      {
        name: 'create.employee',
        path: '/org/employee/add',
        component: './Org/Employee/Edit',
        hideInMenu: true,
      },
      {
        name: 'edit.employee',
        path: '/org/employee/edit/:id',
        component: './Org/Employee/Edit',
        hideInMenu: true,
      },
      {
        name: 'view.employee',
        path: '/org/employee/view/:id',
        component: './Org/Employee/View',
        hideInMenu: true,
      },
    ],
  },
];
