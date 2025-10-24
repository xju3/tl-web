import common from './en-US/common';
import component from './en-US/component';
import cabinet from './en-US/device/cabinet';
import host from './en-US/device/host';
import peripheral from './en-US/device/peripheral';
import product from './en-US/device/product';
import serialport from './en-US/device/serialport';
import globalHeader from './en-US/globalHeader';
import menu from './en-US/menu';
import pages from './en-US/pages';
import pwa from './en-US/pwa';
import settingDrawer from './en-US/settingDrawer';
import settings from './en-US/settings';
import partner from './en-US/tenant/partner';
import partnerProduct from './en-US/tenant/product';

export default {
  ...host,
  ...peripheral,
  ...cabinet,
  ...common,
  ...serialport,
  ...product,
  ...partner,
  ...partnerProduct,
  'navBar.lang': 'Languages',
  'layout.user.link.help': 'Help',
  'layout.user.link.privacy': 'Privacy',
  'layout.user.link.terms': 'Terms',
  'app.preview.down.block': 'Download this page to your local project',
  'app.welcome.link.fetch-blocks': 'Get all block',
  'app.welcome.link.block-list':
    'Quickly build standard, pages based on `block` development',
  ...globalHeader,
  ...menu,
  ...settingDrawer,
  ...settings,
  ...pwa,
  ...component,
  ...pages,
};
