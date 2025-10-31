import common from './zh-CN/common';
import component from './zh-CN/component';
import cabinet from './zh-CN/device/cabinet';
import host from './zh-CN/device/host';
import peripheral from './zh-CN/device/peripheral';
import product from './zh-CN/device/product';
import serial_port from './zh-CN/device/serialport';
import globalHeader from './zh-CN/globalHeader';
import menu from './zh-CN/menu';
import department from './zh-CN/org/department';
import employee from './zh-CN/org/employee';
import partner from './zh-CN/org/partner';
import tenant from './zh-CN/org/tenant';
import pages from './zh-CN/pages';
import pwa from './zh-CN/pwa';
import settingDrawer from './zh-CN/settingDrawer';
import settings from './zh-CN/settings';
import sys_menu from './zh-CN/sys/menu';
import sys_role from './zh-CN/sys/role';
import sys_user from './zh-CN/sys/user';
import material from './zh-CN/tenant/material';
import partnerProduct from './zh-CN/tenant/product';

export default {
  ...host,
  ...peripheral,
  ...cabinet,
  ...common,
  ...serial_port,
  ...product,
  ...tenant,
  ...department,
  ...employee,
  ...sys_menu,
  ...sys_user,
  ...sys_role,
  ...partner,
  ...partnerProduct,
  ...material,

  'navBar.lang': '语言',
  'layout.user.link.help': '帮助',
  'layout.user.link.privacy': '隐私',
  'layout.user.link.terms': '条款',
  'app.preview.down.block': '下载此页面到本地项目',
  'app.welcome.link.fetch-blocks': '获取全部区块',
  'app.welcome.link.block-list': '基于 block 开发，快速构建标准页面',
  ...pages,
  ...globalHeader,
  ...menu,
  ...settingDrawer,
  ...settings,
  ...pwa,
  ...component,
};
