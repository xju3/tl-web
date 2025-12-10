/**
 // * @name umi 的路由配置
 * @description 只支持 path,component,routes,redirect,wrappers,name,icon 的配置
 * @param path  path 只支持两种占位符配置，第一种是动态参数 :id 的形式，第二种是 * 通配符，通配符只能出现在路由字符串的最后。
 * @param component 配置 location 和 path 匹配后用于渲染的 React 组件路径。可以是绝对路径，也可以是相对路径，如果是相对路径，会从 src/pages 开始查找。
 * @param routes 配置子路由，通常在需要为多个路径增加 layout 组件时使用。
 * @param redirect 配置路由跳转
 * @param wrappers 配置路由组件的包装组件，通过包装组件可以为当前的路由组件组合进更多的功能。 比方说，可以用于路由级别的权限校验
 * @param name 配置路由的标题，默认读取国际化文件 menu.ts 中 menu.xxxx 的值，如配置 name 为 login，则读取 menu.ts 中 menu.login 的取值作为标题
 * @param icon 配置路由的图标，取值参考 https://ant.design/components/icon-cn， 注意去除风格后缀和大小写，如想要配置图标为 <StepBackwardOutlined /> 则取值为 stepBackward 或 StepBackward，如想要配置图标为 <UserOutlined /> 则取值为 user 或者 User
 * @doc https://umijs.org/docs/guides/routes
 */
export default [
  {
    path: '/welcome',
    name: 'welcome',
    icon: 'smile',
    component: './Common/Welcome',
  },
  {
    name: 'instance',
    path: '/inst',
    icon: 'laptop',
    routes: [
      {
        path: '/inst',
        redirect: '/inst/cabinet',
      },
      {
        name: 'cabinets',
        path: '/inst/cabinets',
        component: './Inst/Cabinet/List',
      },
      {
        name: 'edit.cabinet',
        path: '/inst/cabinets/edit/:id',
        component: './Inst/Cabinet/Edit',
        hideInMenu: true,
      },
      {
        name: 'view.cabinet',
        path: '/inst/cabinets/view/:id',
        component: './Inst/Cabinet/View',
        hideInMenu: true,
      },
      {
        name: 'hosts',
        path: '/inst/host',
        component: './Inst/Host/List',
      },
      {
        name: 'edit.host',
        path: '/inst/hosts/edit/:id',
        component: './Inst/Host/Edit',
        hideInMenu: true,
      },
      {
        name: 'view.host',
        path: '/inst/hosts/view/:id',
        component: './Inst/Host/View',
        hideInMenu: true,
      },

      {
        name: 'cabinet-groups',
        path: '/inst/cabinet-groups',
        component: './Inst/Group/List',
      },
      {
        name: 'create.cabinet-group',
        path: '/inst/cabinet-group/create',
        component: './Inst/Group/Edit',
        hideInMenu: true,
      },
      {
        name: 'edit.cabinet-group',
        path: '/inst/cabinet-group/edit/:id',
        component: './Inst/Group/Edit',
        hideInMenu: true,
      },
      {
        name: 'view.cabinet-group',
        path: '/inst/cabinet-group/view/:id',
        component: './Inst/Group/View',
        hideInMenu: true,
      },
      {
        name: 'cabinet.group.items.create',
        path: '/inst/cabinet-group/:instCabinetGroupId/items/create',
        component: './Inst/Group/Items/Edit',
        hideInMenu: true,
      },
      {
        name: 'cabinet.group.items.edit',
        path: '/inst/cabinet-group/:instCabinetGroupId/items/:id/edit',
        component: './Inst/Group/Items/Edit',
        hideInMenu: true,
      },
    ],
  },
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
        component: './Manufacture/Material/List',
      },
      {
        path: '/manufacture/material/edit/:id',
        component: './Manufacture/Material/edit',
      },
      {
        path: '/manufacture/material/create',
        component: './Manufacture/Material/edit',
      },
      {
        name: 'products',
        path: '/manufacture/products',
        component: './Manufacture/Goods/List',
      },
      {
        name: 'workgroups',
        path: '/manufacture/workgroups',
        component: './Manufacture/Workgroup/List',
      },
      {
        name: 'processes',
        icon: 'hdd',
        path: '/manufacture/processes',
        component: './Manufacture/Process/List',
      },
      {
        name: 'workshops',
        icon: 'hdd',
        path: '/manufacture/workshops',
        component: './Manufacture/Workshop/List',
      },
    ],
  },
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
  {
    path: '/device',
    name: 'device',
    icon: 'slack',
    routes: [
      {
        path: '/device',
        redirect: '/device/cabinets',
      },
      {
        name: 'cabinets',
        icon: 'hdd',
        path: '/device/cabinets',
        component: './Device/Cabinet/List',
      },
      {
        name: 'edit.cabinet',
        path: '/device/cabinets/edit/:id',
        component: './Device/Cabinet/Edit',
        hideInMenu: true,
      },
      {
        path: '/device/cabinets/view/:id',
        component: './Device/Cabinet/View',
        hideInMenu: true,
      },
      {
        name: 'create.cabinet',
        path: '/device/cabinets/add',
        component: './Device/Cabinet/Edit',
        hideInMenu: true,
      },
      {
        name: 'add.cabinet.child',
        path: '/device/cabinets/:parentId/children/add',
        component: './Device/Cabinet/Edit',
        hideInMenu: true,
      },
      {
        name: 'edit.cabinet.child',
        path: '/device/cabinets/:parentId/children/:id/edit',
        component: './Device/Cabinet/Edit',
        hideInMenu: true,
      },
      {
        name: 'create.cabinet.peripheral',
        path: '/device/cabinets/:cabinetId/peripherals/create',
        component: './Device/Cabinet/Peripherals/Edit',
        hideInMenu: true,
      },
      {
        name: 'edit.cabinet.peripheral',
        path: '/device/cabinets/:cabinetId/peripherals/:id/edit',
        component: './Device/Cabinet/Peripherals/Edit',
        hideInMenu: true,
      },
      {
        name: 'bind.cable',
        path: '/device/cabinets/:cabinetId/cables/add',
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
        path: '/device/cabinets/:cabinetId/usages/add',
        component: './Device/Cabinet/Usages/Edit',
        hideInMenu: true,
      },
      {
        name: 'bind.usage.edit',
        path: '/device/cabinets/:cabinetId/usages/:id/edit',
        component: './Device/Cabinet/Usages/Edit',
        hideInMenu: true,
      },
      {
        name: 'hosts',
        icon: 'hdd',
        path: '/device/hosts',
        component: './Device/Host/List',
      },
      {
        name: 'add.host',
        path: '/device/hosts/add',
        component: './Device/Host/Edit',
        hideInMenu: true,
      },
      {
        name: 'edit.host',
        path: '/device/hosts/edit/:id',
        component: './Device/Host/Edit',
        hideInMenu: true,
      },
      {
        name: 'view.host',
        path: '/device/hosts/view/:id',
        component: './Device/Host/View',
        hideInMenu: true,
      },
      {
        name: 'add.serial-port',
        path: '/device/hosts/:hostId/ports/add',
        component: './Device/Host/Ports/Edit',
        hideInMenu: true,
      },
      {
        name: 'edit.serial-port',
        path: '/device/hosts/:hostId/ports/:id/edit',
        component: './Device/Host/Ports/Edit',
        hideInMenu: true,
      },

      {
        name: 'peripherals',
        icon: 'appstore',
        path: '/device/peripherals',
        component: './Device/Peripherals/List',
      },
      {
        name: 'add.peripheral',
        path: '/device/peripherals/add',
        component: './Device/Peripherals/Edit',
        hideInMenu: true,
      },
      {
        name: 'edit.peripheral',
        path: '/device/peripherals/edit/:id',
        component: './Device/Peripherals/Edit',
        hideInMenu: true,
      },
      {
        name: 'view.peripheral',
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
      {
        name: 'serial-ports',
        icon: 'branches',
        path: '/device/serial-ports',
        component: './Device/SerialPort/List',
      },
      {
        name: 'add.serial-port',
        path: '/device/serial-ports/add',
        component: './Device/SerialPort/Edit',
        hideInMenu: true,
      },
      {
        name: 'edit.serial-port',
        path: '/device/serial-ports/edit/:id',
        component: './Device/SerialPort/Edit',
        hideInMenu: true,
      },
      {
        name: 'view.serial-port',
        path: '/device/serial-ports/view/:id',
        component: './Device/SerialPort/View',
        hideInMenu: true,
      },
      {
        name: 'products',
        icon: 'shopping',
        path: '/device/product',
        component: './Device/Product/List',
      },
      {
        name: 'add.product',
        path: '/device/products/add',
        component: './Device/Product/Edit',
        hideInMenu: true,
      },
      {
        name: 'edit.product',
        path: '/device/products/edit/:id',
        component: './Device/Product/Edit',
        hideInMenu: true,
      },
      {
        name: 'view.product',
        path: '/device/products/view/:id',
        component: './Device/Product/View',
        hideInMenu: true,
      },
      {
        name: 'add.product.item',
        path: '/device/products/:productId/items/add',
        component: './Device/Product/Item/Edit',
        hideInMenu: true,
      },
      {
        name: 'edit.product.item',
        path: '/device/products/:productId/items/:id/edit',
        component: './Device/Product/Item/Edit',
        hideInMenu: true,
      },
    ],
  },
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
        component: './org/Partner/Product/Edit',
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
  {
    path: '/sys',
    name: 'sys',
    icon: 'safety',
    routes: [
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
  {
    path: '/admin',
    name: 'admin',
    icon: 'crown',
    access: 'canAdmin',
    hideInMenu: true,
    routes: [
      {
        path: '/admin',
        redirect: '/admin/sub-page',
      },
      {
        path: '/admin/sub-page',
        name: 'sub-page',
        component: './Common/Admin',
      },
    ],
  },
  {
    path: '/user',
    layout: false,
    routes: [
      {
        name: 'login',
        path: '/user/login',
        component: './Sys/User/login',
      },
    ],
  },
  {
    path: '/',
    redirect: '/welcome',
  },
  {
    component: './common/404',
    layout: false,
    path: './*',
  },
];
