/**
 * @name umi 的路由配置
 * @description 只支持 path,component,routes,redirect,wrappers,name,icon 的配置
 * @param path  path 只支持两种占位符配置，第一种是动态参数 :id 的形式，第二种是 * 通配符，通配符只能出现路由字符串的最后。
 * @param component 配置 location 和 path 匹配后用于渲染的 React 组件路径。可以是绝对路径，也可以是相对路径，如果是相对路径，会从 src/pages 开始找起。
 * @param routes 配置子路由，通常在需要为多个路径增加 layout 组件时使用。
 * @param redirect 配置路由跳转
 * @param wrappers 配置路由组件的包装组件，通过包装组件可以为当前的路由组件组合进更多的功能。 比如，可以用于路由级别的权限校验
 * @param name 配置路由的标题，默认读取国际化文件 menu.ts 中 menu.xxxx 的值，如配置 name 为 login，则读取 menu.ts 中 menu.login 的取值作为标题
 * @param icon 配置路由的图标，取值参考 https://ant.design/components/icon-cn， 注意去除风格后缀和大小写，如想要配置图标为 <StepBackwardOutlined /> 则取值应为 stepBackward 或 StepBackward，如想要配置图标为 <UserOutlined /> 则取值应为 user 或者 User
 * @doc https://umijs.org/docs/guides/routes
 */
export default [
  {
    path: '/welcome',
    name: 'welcome',
    icon: 'smile',
    component: './Welcome',
  },
  {
    path: '/user',
    layout: false,
    routes: [
      {
        name: 'login',
        path: '/user/login',
        component: './user/login',
      },
    ],
  },
  {
    path: '/device/cabinets/edit/:id',
    name: 'cabinet.edit',
    component: './Device/Cabinet/Edit',
    hideInMenu: true,
  },
  {
    path: '/device/cabinets/view/:id',
    name: 'cabinet.view',
    component: './Device/Cabinet/View',
    hideInMenu: true,
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
        component: './Admin',
      },
      {
        name: 'attributes',
        icon: 'profile',
        path: '/admin/attributes',
        component: './Attributes',
      },
    ],
  },
  {
    name: 'list.table-list',
    icon: 'table',
    path: '/list',
    component: './table-list',
    hideInMenu: true,
  },
  {
    path: '/device',
    name: 'device',
    icon: 'cluster',
    routes: [
      {
        path: '/device',
        redirect: '/device/host',
      },
      {
        name: 'cabinets',
        icon: 'hdd',
        path: '/device/cabinets',
        component: './Device/Cabinet/List',
      },
      {
        name: 'create-cabinet',
        path: '/device/cabinets/add',
        component: './Device/Cabinet/Edit',
        hideInMenu: true,
      },
      {
        name: 'create-cabinet-add-child',
        path: '/device/cabinets/add-child/:parentId',
        component: './Device/Cabinet/Edit',
        hideInMenu: true,
      },
      {
        name: 'edit-cabinet',
        path: '/device/cabinets/edit/:id',
        component: './Device/Cabinet/Edit',
        hideInMenu: true,
      },
      {
        name: 'bind-peripheral',
        path: '/device/cabinets/:cabinetId/bind',
        component: './Device/Cabinet/Bind',
        hideInMenu: true,
      },
      {
        name: 'edit-binding',
        path: '/device/cabinets/bindings/:bindingId/edit',
        component: './Device/Cabinet/Bind',
        hideInMenu: true,
      },
      {
        name: 'edit-cable',
        path: '/device/cabinets/:cabinetId/cables/:id/edit',
        component: './Device/Cabinet/Cables/Edit',
        hideInMenu: true,
      },
      {
        name: 'add-usage',
        path: '/device/cabinets/:cabinetId/usages/add',
        component: './Device/Cabinet/Usages/Edit',
        hideInMenu: true,
      },
      {
        name: 'edit-usage',
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
        name: 'create-host',
        path: '/device/hosts/add',
        component: './Device/Host/Edit',
        hideInMenu: true,
      },
      {
        name: 'edit-host',
        path: '/device/hosts/edit/:id',
        component: './Device/Host/Edit',
        hideInMenu: true,
      },
      {
        name: 'view-host',
        path: '/device/hosts/view/:id',
        component: './Device/Host/View',
        hideInMenu: true,
      },
      {
        name: 'edit-port',
        path: '/device/hosts/:hostId/ports/:portId/edit',
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
        name: 'add',
        path: '/device/peripherals/add',
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
        path: '/device/peripherals/:peripheralId/instructions/edit',
        component: './Device/Peripherals/Instructions/Edit',
        hideInMenu: true,
      },
      {
        name: 'instruction.edit',
        path: '/device/peripherals/:peripheralId/instructions/edit/:instructionId',
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
        name: 'add',
        path: '/device/serial-ports/add',
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
      {
        path: '/device/serial-port',
        name: 'serial-port',
        icon: 'smile',
        component: './Device/SerialPort/List',
      },
      {
        path: '/device/serial-port/edit/:id',
        name: 'serial-port-edit',
        icon: 'smile',
        component: './Device/SerialPort/Edit',
        hideInMenu: true,
      },
      {
        path: '/device/serial-port/view/:id',
        name: 'serial-port-view',
        icon: 'smile',
        component: './Device/SerialPort/View',
        hideInMenu: true,
      },
      {
        name: 'products',
        icon: 'shopping',
        path: '/device/product',
        component: './Device/Product',
      },
      {
        name: 'product.add',
        path: '/device/product/add',
        component: './Device/Product/Edit',
        hideInMenu: true,
      },
      {
        name: 'product.edit',
        path: '/device/product/edit/:id',
        component: './Device/Product/Edit',
        hideInMenu: true,
      },
    ],
  },
  {
    path: '/tenant',
    name: 'tenant',
    icon: 'team',
    routes: [
      {
        path: '/tenant',
        redirect: '/tenant/partner/list',
      },
      {
        path: '/tenant/partner/list',
        name: 'partner-list',
        icon: 'user',
        component: './Tenant/Partner/List',
      },
      {
        path: '/tenant/partner/edit/:id',
        name: 'partner-edit',
        component: './Tenant/Partner/Edit',
        hideInMenu: true,
      },
      {
        path: '/tenant/partner/edit',
        name: 'partner-create',
        component: './Tenant/Partner/Edit',
        hideInMenu: true,
      },
      {
        path: '/tenant/partner/view/:id',
        name: 'partner-view',
        component: './Tenant/Partner/View',
        hideInMenu: true,
      },
      {
        path: '/tenant/partner/:partnerId/product/add',
        name: 'partner-product-create',
        component: './Tenant/Partner/Product/Edit',
        hideInMenu: true,
      },
      {
        path: '/tenant/partner/:partnerId/product/edit/:id',
        name: 'partner-product-edit',
        component: './Tenant/Partner/Product/Edit',
        hideInMenu: true,
      },
    ],
  },
  {
    path: '/',
    redirect: '/welcome',
  },
  {
    component: '404',
    layout: false,
    path: './*',
  },
];
