export default [
  {
    path: '/sys',
    name: 'sys',
    icon: 'safety',
    routes: [
      {
        name: 'app',
        path: '/sys/apps',
        component: './Sys/app/List',
      },
      {
        name: 'app.create',
        path: '/sys/app/add',
        component: './Sys/App/Edit',
        hideInMenu: true,
      },
      {
        name: 'app.edit',
        path: '/sys/app/edit/:id',
        component: './Sys/App/Edit',
        hideInMenu: true,
      },
      {
        name: 'app.view',
        path: '/sys/app/view/:id',
        component: './Sys/App/View',
        hideInMenu: true,
      },
      {
        name: 'menu',
        path: '/sys/menu',
        component: './Sys/Menu/List',
      },
      {
        name: 'create.menu',
        path: '/sys/menu/add',
        component: './Sys/Menu/Edit',
        hideInMenu: true,
      },
      {
        name: 'menu.create.submenu',
        path: '/sys/menu/:parentId/children/add',
        component: './Sys/Menu/Edit',
        hideInMenu: true,
      },
      {
        name: 'menu.edit.submenu',
        path: '/sys/menu/:parentId/children/:id/edit',
        component: './Sys/Menu/Edit',
        hideInMenu: true,
      },
      {
        name: 'edit.menu',
        path: '/sys/menu/edit/:id',
        component: './Sys/Menu/Edit',
        hideInMenu: true,
      },
      {
        name: 'view.menu',
        path: '/sys/menu/view/:id',
        component: './Sys/Menu/View',
        hideInMenu: true,
      },
      {
        name: 'role',
        path: '/sys/role',
        component: './Sys/Role/List',
      },
      {
        name: 'create.role',
        path: '/sys/role/add',
        component: './Sys/Role/Edit',
        hideInMenu: true,
      },
      {
        name: 'edit.role',
        path: '/sys/role/edit/:id',
        component: './Sys/Role/Edit',
        hideInMenu: true,
      },
      {
        name: 'view.role',
        path: '/sys/role/view/:id',
        component: './Sys/Role/View',
        hideInMenu: true,
      },
      {
        name: 'user',
        path: '/sys/user',
        component: './Sys/User/List',
      },
      {
        name: 'create.user',
        path: '/sys/user/add',
        component: './Sys/User/Edit',
        hideInMenu: true,
      },
      {
        name: 'edit.user',
        path: '/sys/user/edit/:id',
        component: './Sys/User/Edit',
        hideInMenu: true,
      },
      {
        name: 'view.user',
        path: '/sys/user/view/:id',
        component: './Sys/User/View',
        hideInMenu: true,
      },

      {
        name: 'create.user.role',
        path: '/sys/users/:userId/roles/add',
        component: './Sys/User/Role/Edit',
        hideInMenu: true,
      },
      {
        name: 'edit.user.role',
        path: '/sys/users/:userId/roles/:id/edit',
        component: './Sys/User/Role/Edit',
        hideInMenu: true,
      },
    ],
  },
];
