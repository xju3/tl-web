export default [
  {
    path: '/device',
    name: 'device',
    icon: 'slack',
    routes: [
      {
        name: 'cabinets',
        icon: 'hdd',
        path: '/device/cabinets',
        routes: [
          { path: '/device/cabinets', redirect: '/device/cabinets/list' },
          {
            name: 'list',
            path: '/device/cabinets/list',
            component: './Device/Cabinet/List',
            hideInMenu: true,
          },
          {
            name: 'edit',
            path: '/device/cabinets/edit/:id',
            component: './Device/Cabinet/Edit',
            hideInMenu: true,
          },
          {
            name: 'view',
            path: '/device/cabinets/view/:id',
            component: './Device/Cabinet/View',
            hideInMenu: true,
          },
          {
            name: 'create',
            path: '/device/cabinets/create',
            component: './Device/Cabinet/Edit',
            hideInMenu: true,
          },
          {
            name: 'create.child',
            path: '/device/cabinets/:parentId/children/create',
            component: './Device/Cabinet/Edit',
            hideInMenu: true,
          },
          {
            name: 'edit.child',
            path: '/device/cabinets/:parentId/children/:id/edit',
            component: './Device/Cabinet/Edit',
            hideInMenu: true,
          },
          {
            name: 'bind.peripheral',
            path: '/device/cabinets/:cabinetId/peripherals/create',
            component: './Device/Cabinet/Peripherals/Edit',
            hideInMenu: true,
          },
          {
            name: 'edit.peripheral',
            path: '/device/cabinets/:cabinetId/peripherals/:id/edit',
            component: './Device/Cabinet/Peripherals/Edit',
            hideInMenu: true,
          },
          {
            name: 'bind.cable',
            path: '/device/cabinets/:cabinetId/cables/create',
            component: './Device/Cabinet/Cables/Edit',
            hideInMenu: true,
          },
          {
            name: 'edit.cable',
            path: '/device/cabinets/:cabinetId/cables/:id/edit',
            component: './Device/Cabinet/Cables/Edit',
            hideInMenu: true,
          },
          {
            name: 'bind.usage',
            path: '/device/cabinets/:cabinetId/usages/create',
            component: './Device/Cabinet/Usages/Edit',
            hideInMenu: true,
          },
          {
            name: 'edit.usage',
            path: '/device/cabinets/:cabinetId/usages/:id/edit',
            component: './Device/Cabinet/Usages/Edit',
            hideInMenu: true,
          },
        ],
      },
      {
        name: 'hosts',
        icon: 'hdd',
        path: '/device/hosts',
        routes: [
          { path: '/device/hosts', redirect: '/device/hosts/list' },
          {
            name: 'list',
            path: '/device/hosts/list',
            hideInMenu: true,
            component: './Device/Host/List',
          },
          {
            name: 'create',
            path: '/device/hosts/create',
            component: './Device/Host/Edit',
            hideInMenu: true,
          },
          {
            name: 'edit',
            path: '/device/hosts/edit/:id',
            component: './Device/Host/Edit',
            hideInMenu: true,
          },
          {
            name: 'view',
            path: '/device/hosts/view/:id',
            component: './Device/Host/View',
            hideInMenu: true,
          },
          {
            name: 'create.serial-port',
            path: '/device/hosts/:hostId/ports/create',
            component: './Device/Host/Ports/Edit',
            hideInMenu: true,
          },
          {
            name: 'edit.serial-port',
            path: '/device/hosts/:hostId/ports/:id/edit',
            component: './Device/Host/Ports/Edit',
            hideInMenu: true,
          },
        ],
      },

      {
        name: 'peripherals',
        icon: 'appstore',
        path: '/device/peripherals',
        routes: [
          {
            path: '/device/peripherals',
            redirect: '/device/peripherals/list',
          },
          {
            name: 'list',
            path: '/device/peripherals/list',
            component: './Device/Peripherals/List',
            hideInMenu: true,
          },
          {
            name: 'create',
            path: '/device/peripherals/create',
            component: './Device/Peripherals/Edit',
            hideInMenu: true,
          },
          {
            name: 'edit',
            path: '/device/peripherals/edit/:id',
            component: './Device/Peripherals/Edit',
            hideInMenu: true,
          },
          {
            name: 'view',
            path: '/device/peripherals/view/:id',
            component: './Device/Peripherals/View',
            hideInMenu: true,
          },
          {
            name: 'instruction.create',
            path: '/device/peripherals/:peripheralId/instructions/create',
            component: './Device/Peripherals/Instructions/Edit',
            hideInMenu: true,
          },
          {
            name: 'instruction.edit',
            path: '/device/peripherals/:peripheralId/instructions/:id/edit',
            component: './Device/Peripherals/Instructions/Edit',
            hideInMenu: true,
          },
        ],
      },
      {
        name: 'serial-ports',
        icon: 'branches',
        path: '/device/serial-ports',
        routes: [
          {
            path: '/device/serial-ports',
            redirect: '/device/serial-ports/list',
          },
          {
            name: 'list',
            path: '/device/serial-ports/list',
            component: './Device/SerialPort/List',
            hideInMenu: true,
          },
          {
            name: 'create',
            path: '/device/serial-ports/create',
            component: './Device/SerialPort/Edit',
            hideInMenu: true,
          },
          {
            name: 'edit',
            path: '/device/serial-ports/edit/:id',
            component: './Device/SerialPort/Edit',
            hideInMenu: true,
          },
          {
            name: 'view',
            path: '/device/serial-ports/view/:id',
            component: './Device/SerialPort/View',
            hideInMenu: true,
          },
        ],
      },
      {
        name: 'products',
        icon: 'shopping',
        path: '/device/product',
        routes: [
          {
            path: '/device/products',
            redirect: '/device/products/list',
          },
          {
            name: 'list',
            path: '/device/product',
            component: './Device/Product/List',
            hideInMenu: true,
          },
          {
            name: 'create',
            path: '/device/products/create',
            component: './Device/Product/Edit',
            hideInMenu: true,
          },
          {
            name: 'edit',
            path: '/device/products/edit/:id',
            component: './Device/Product/Edit',
            hideInMenu: true,
          },
          {
            name: 'view',
            path: '/device/products/view/:id',
            component: './Device/Product/View',
            hideInMenu: true,
          },
          {
            name: 'item.create',
            path: '/device/products/:productId/item/create',
            component: './Device/Product/Item/Edit',
            hideInMenu: true,
          },
          {
            name: 'item.edit',
            path: '/device/products/:productId/item/:id/edit',
            component: './Device/Product/Item/Edit',
            hideInMenu: true,
          },
        ],
      },
    ],
  },
];
