// https://umijs.org/config/

import { join } from 'node:path';
import { defineConfig } from '@umijs/max';
import defaultSettings from './defaultSettings';
import proxy from './proxy';

import routes from './routes';

const { UMI_ENV = 'dev' } = process.env;
const PUBLIC_PATH: string = '/';
export default defineConfig({
  hash: true,
  publicPath: PUBLIC_PATH,

  targets: {
    ie: 11,
  },
  routes,
  theme: { '@primary-color': '#1DA57A' },
  ignoreMomentLocale: true,
  proxy: proxy[UMI_ENV as keyof typeof proxy],
  fastRefresh: true,
  model: {},
  initialState: {},
  title: 'Aeons Intelligent Devices',
  layout: {
    locale: true,
    ...defaultSettings,
  },
  moment2dayjs: {
    preset: 'antd',
    plugins: ['duration'],
  },
  locale: {
    default: 'zh-CN',
    antd: true,
    baseNavigator: true,
  },
  antd: {
    appConfig: {},
    configProvider: {
      theme: {
        cssVar: true,
        token: {
          fontFamily: 'AlibabaSans, sans-serif',
        },
      },
    },
  },
  request: {},
  access: {},
  headScripts: [{ src: join(PUBLIC_PATH, 'scripts/loading.js'), async: true }],
  presets: ['umi-presets-pro'],
  openAPI: [
    {
      requestLibPath: "import { request } from '@umijs/max'",
      schemaPath: join(__dirname, 'oneapi.json'),
      mock: false,
    },
    {
      requestLibPath: "import { request } from '@umijs/max'",
      schemaPath:
        'https://gw.alipayobjects.com/os/antfincdn/CA1dOm%2631B/openapi.json',
      projectName: 'swagger',
    },
  ],
  mock: {
    include: ['mock/**/*', 'src/pages/**/_mock.ts'],
  },
  mako: {},
  esbuildMinifyIIFE: true,
  requestRecord: {},
  exportStatic: {},
  define: {
    'process.env.CI': process.env.CI,
  },
});
