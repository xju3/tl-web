export default [
  {
    name: 'instance',
    path: '/inst',
    icon: 'laptop',
    routes: [
      {
        name: 'cabinets',
        path: '/inst/cabinets',
        hideChildrenInMenu: true,
        routes: [
          {
            path: '/inst/cabinets',
            redirect: '/inst/cabinets/list',
          },
          {
            name: 'list',
            path: '/inst/cabinets/list',
            component: './Inst/Cabinet/List',
            hideInMenu: true,
          },
          {
            name: 'edit',
            path: '/inst/cabinets/edit/:id',
            component: './Inst/Cabinet/Edit',
            hideInMenu: true,
          },
          {
            name: 'view',
            path: '/inst/cabinets/view/:id',
            component: './Inst/Cabinet/View',
            hideInMenu: true,
          },
        ],
      },
      {
        name: 'hosts',
        path: '/inst/hosts',
        hideChildrenInMenu: true,
        routes: [
          {
            path: '/inst/hosts',
            redirect: '/inst/hosts/list',
          },
          {
            name: 'list',
            path: '/inst/hosts/list',
            component: './Inst/Host/List',
            hideInMenu: true,
          },
          {
            name: 'edit',
            path: '/inst/hosts/edit/:id',
            component: './Inst/Host/Edit',
            hideInMenu: true,
          },
          {
            name: 'view',
            path: '/inst/hosts/view/:id',
            component: './Inst/Host/View',
            hideInMenu: true,
          },
        ],
      },
      {
        name: 'cabinet-groups',
        path: '/inst/cabinet-groups',
        hideChildrenInMenu: true,
        routes: [
          {
            path: '/inst/cabinet-groups',
            redirect: '/inst/cabinet-groups/list',
          },
          {
            name: 'list',
            path: '/inst/cabinet-groups/list',
            component: './Inst/Group/List',
            hideInMenu: true,
          },
          {
            name: 'create',
            path: '/inst/cabinet-groups/create',
            component: './Inst/Group/Edit',
            hideInMenu: true,
          },
          {
            name: 'edit',
            path: '/inst/cabinet-groups/edit/:id',
            component: './Inst/Group/Edit',
            hideInMenu: true,
          },
          {
            name: 'view',
            path: '/inst/cabinet-groups/view/:id',
            component: './Inst/Group/View',
            hideInMenu: true,
          },
          {
            name: 'items.create',
            path: '/inst/cabinet-groups/:instCabinetGroupId/items/create',
            component: './Inst/Group/Items/Edit',
            hideInMenu: true,
          },
          {
            name: 'items.edit',
            path: '/inst/cabinet-groups/:instCabinetGroupId/items/:id/edit',
            component: './Inst/Group/Items/Edit',
            hideInMenu: true,
          },
        ],
      },
    ],
  },
];
