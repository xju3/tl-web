export default [
  {
    path: '/manufacture',
    name: 'manufacture',
    icon: 'product',
    routes: [
      {
        path: '/manufacture',
        redirect: '/manufacture/material',
      },
      {
        name: 'materials',
        path: '/manufacture/materials',
        routes: [
          {
            path: '/manufacture/materials',
            redirect: '/manufacture/materials/list',
          },
          {
            name: 'list',
            path: '/manufacture/materials/list',
            component: './Manufacture/Material/List',
            hideInMenu: true,
          },
          {
            hideInMenu: true,
            name: 'edit',
            path: '/manufacture/materials/edit/:id',
            component: './Manufacture/Material/edit',
          },
          {
            hideInMenu: true,
            name: 'create',
            path: '/manufacture/materials/create',
            component: './Manufacture/Material/edit',
          },
          {
            hideInMenu: true,
            name: 'view',
            path: '/manufacture/materials/view/:id',
            component: './Manufacture/Material/view',
          },
        ],
      },
      {
        name: 'products',
        path: '/manufacture/products',
        routes: [
          {
            path: '/manufacture/products',
            redirect: '/manufacture/products/list',
          },
          {
            name: 'list',
            path: '/manufacture/products/list',
            component: './Manufacture/Product/List',
            hideInMenu: true,
          },
          {
            hideInMenu: true,
            name: 'edit',
            path: '/manufacture/products/edit/:id',
            component: './Manufacture/Product/edit',
          },
          {
            hideInMenu: true,
            name: 'create',
            path: '/manufacture/products/create',
            component: './Manufacture/Product/edit',
          },
          {
            hideInMenu: true,
            name: 'view',
            path: '/manufacture/products/view/:id',
            component: './Manufacture/Product/view',
          },
        ],
      },
      {
        name: 'workgroups',
        path: '/manufacture/workgroups',
        routes: [
          {
            path: '/manufacture/workgroups',
            redirect: '/manufacture/workgroups/list',
          },
          {
            name: 'list',
            path: '/manufacture/workgroups/list',
            component: './Manufacture/Workgroup/List',
            hideInMenu: true,
          },
          {
            hideInMenu: true,
            name: 'edit',
            path: '/manufacture/workgroups/edit/:id',
            component: './Manufacture/Workgroup/Edit',
          },
          {
            hideInMenu: true,
            name: 'create',
            path: '/manufacture/workgroups/create',
            component: './Manufacture/Workgroup/Edit',
          },
          {
            hideInMenu: true,
            name: 'view',
            path: '/manufacture/workgroups/view/:id',
            component: './Manufacture/Workgroup/View',
          },
        ],
      },
      {
        name: 'processes',
        icon: 'hdd',
        path: '/manufacture/processes',
        routes: [
          {
            path: '/manufacture/processes',
            redirect: '/manufacture/processes/list',
          },
          {
            name: 'list',
            path: '/manufacture/processes/list',
            component: './Manufacture/Process/List',
            hideInMenu: true,
          },
          {
            hideInMenu: true,
            name: 'create',
            path: '/manufacture/processes/create',
            component: './Manufacture/Process/Edit',
          },
          {
            hideInMenu: true,
            name: 'edit',
            path: '/manufacture/processes/edit/:id',
            component: './Manufacture/Process/Edit',
          },
          {
            hideInMenu: true,
            name: 'view',
            path: '/manufacture/processes/view/:id',
            component: './Manufacture/Process/View',
          },
        ],
      },
      {
        name: 'workshops',
        icon: 'hdd',
        path: '/manufacture/workshops',
        routes: [
          {
            path: '/manufacture/workshops',
            redirect: '/manufacture/workshops/list',
          },
          {
            name: 'list',
            path: '/manufacture/workshops/list',
            component: './Manufacture/Workshop/List',
            hideInMenu: true,
          },
          {
            hideInMenu: true,
            name: 'create',
            path: '/manufacture/workshops/create',
            component: './Manufacture/Workshop/Edit',
          },
          {
            hideInMenu: true,
            name: 'edit',
            path: '/manufacture/workshops/edit/:id',
            component: './Manufacture/Workshop/Edit',
          },
          {
            hideInMenu: true,
            name: 'view',
            path: '/manufacture/workshops/view/:id',
            component: './Manufacture/Workshop/View',
          },
        ],
      },
    ],
  },
];
