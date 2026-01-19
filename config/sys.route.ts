export default [
  {
    path: '/sys',
    name: 'sys',
    icon: 'safety',
    routes: [
      {
        name: 'apps',
        path: '/sys/apps',
        routers: [
          {
            path: '/sys/apps',
            redirect: '/sys/apps/list',
          },
          {
            name: 'list',
            path: '/sys/apps/list',
            component: './Sys/app/List',
            hideInMenu: true,
          },
          {
            name: 'create',
            path: '/sys/apps/create',
            component: './Sys/App/Edit',
            hideInMenu: true,
          },
          {
            name: 'edit',
            path: '/sys/apps/edit/:id',
            component: './Sys/App/Edit',
            hideInMenu: true,
          },
          {
            name: 'view',
            path: '/sys/apps/view/:id',
            component: './Sys/App/View',
            hideInMenu: true,
          },
        ],
      },
      {
        name: 'menus',
        path: '/sys/menus',
        routers: [
          {
            path: '/sys/menus',
            redirect: '/sys/menus/list',
          },
          {
            name: 'list',
            path: '/sys/menus/list',
            component: './Sys/Menu/List',
            hideInMenu: true,
          },
          {
            name: 'view',
            path: '/sys/menus/view/:id',
            component: './Sys/Menu/View',
            hideInMenu: true,
          },
          {
            name: 'edit',
            path: '/sys/menus/create',
            component: './Sys/Menu/Edit',
            hideInMenu: true,
          },
          {
            name: 'sub.create',
            path: '/sys/menus/:parentId/children/add',
            component: './Sys/Menu/Edit',
            hideInMenu: true,
          },
          {
            name: 'sub.edit',
            path: '/sys/menu/:parentId/children/:id/edit',
            component: './Sys/Menu/Edit',
            hideInMenu: true,
          },
        ],
      },
      {
        name: 'roles',
        path: '/sys/roles',
        routers: [
          {
            path: '/sys/roles',
            redirect: '/sys/roles/list',
            hideInMenu: true,
          },
          {
            name: 'list',
            path: '/sys/roles/list',
            component: './Sys/Role/List',
            hideInMenu: true,
          },
          {
            name: 'create',
            path: '/sys/roles/create',
            component: './Sys/Role/Edit',
            hideInMenu: true,
          },
          {
            name: 'edit',
            path: '/sys/roles/edit/:id',
            component: './Sys/Role/Edit',
            hideInMenu: true,
          },
          {
            name: 'view',
            path: '/sys/roles/view/:id',
            component: './Sys/Role/View',
            hideInMenu: true,
          },
        ],
      },
      {
        name: 'users',
        path: '/sys/users',
        routers: [
          {
            path: '/sys/users',
            redirect: '/sys/users/list',
            hideInMenu: true,
          },
          {
            name: 'list',
            path: '/sys/users/list',
            component: './Sys/User/List',
            hideInMenu: true,
          },
          {
            name: 'create',
            path: '/sys/users/add',
            component: './Sys/User/Edit',
            hideInMenu: true,
          },
          {
            name: 'edit',
            path: '/sys/users/edit/:id',
            component: './Sys/User/Edit',
            hideInMenu: true,
          },
          {
            name: 'view',
            path: '/sys/users/view/:id',
            component: './Sys/User/View',
            hideInMenu: true,
          },

          {
            name: 'role.create',
            path: '/sys/users/:userId/roles/add',
            component: './Sys/User/Role/Edit',
            hideInMenu: true,
          },
          {
            name: 'role.edit',
            path: '/sys/users/:userId/roles/:id/edit',
            component: './Sys/User/Role/Edit',
            hideInMenu: true,
          },
        ],
      },
    ],
  },
];
