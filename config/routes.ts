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
    path: '/welcome',
    name: 'welcome',
    icon: 'smile',
    component: './Welcome',
  },
  {
    path: '/admin',
    name: 'admin',
    icon: 'crown',
    access: 'canAdmin',
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
        name: 'hosts',
        icon: 'hdd',
        path: '/device/hosts',
        component: './Device/Host/List',
      },
      {
        name: 'add',
        path: '/device/hosts/add',
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
        name: 'products',
        icon: 'shopping',
        path: '/device/products',
        component: './Products',
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
