import * as Icons from '@ant-design/icons';
import { LinkOutlined } from '@ant-design/icons';
import type { Settings as LayoutSettings } from '@ant-design/pro-components';
import { SettingDrawer } from '@ant-design/pro-components';
import type { RequestConfig, RunTimeLayoutConfig } from '@umijs/max';
import { history, Link } from '@umijs/max';
import React from 'react';
import { AvatarDropdown, Footer, Question, SelectLang } from '@/components';
import defaultSettings from '../config/defaultSettings';
import { errorConfig } from './requestErrorConfig';
import '@ant-design/v5-patch-for-react-19';
import { getManagementMenus } from '@/services/Sys/Menu/service';

const isDev = process.env.NODE_ENV === 'development';
const isDevOrTest = isDev || process.env.CI;
const loginPath = '/user/login';

// Helper to render icon
const IconMap = (iconName: string) => {
  if (!iconName) return null;
  // Convert first char to upper case just in case, though AntD icons are usually PascalCase
  const fixIconName = iconName.charAt(0).toUpperCase() + iconName.slice(1);
  const IconComponent =
    (Icons as any)[fixIconName + 'Outlined'] || (Icons as any)[fixIconName];
  return IconComponent ? <IconComponent /> : null;
};

export async function getInitialState(): Promise<{
  settings?: Partial<LayoutSettings>;
  currentUser?: API.CurrentUser;
  loading?: boolean;
  fetchUserInfo?: () => Promise<API.CurrentUser | undefined>;
}> {
  const fetchUserInfo = async () => {
    const userInfoStr = localStorage.getItem('user-info');
    if (userInfoStr) {
      const userInfo = JSON.parse(userInfoStr);
      const { customUserDetails } = userInfo;
      if (customUserDetails) {
        const photo = customUserDetails.photo || '/icons/avatar-boy.svg';
        return {
          name: `${customUserDetails.username}`,
          employeeName: customUserDetails.employeeName,
          partnerName: customUserDetails.partnerName,
          avatar: photo,
          userid: customUserDetails.id,
          email: customUserDetails.email,
          signature: '海纳百川，有容乃大',
          title: '交互专家',
          group: '蚂蚁金服－某某某事业群－某某平台部－某某技术部－UED',
          tags: [],
          notifyCount: 12,
          unreadCount: 11,
          country: 'China',
          access: 'admin',
          geographic: {
            province: {
              label: '浙江省',
              key: '330000',
            },
            city: {
              label: '杭州市',
              key: '330100',
            },
          },
          address: '西湖区工专路 77 号',
          phone: '0752-26888888',
        };
      }
    }
    history.push(loginPath);
    return undefined;
  };
  // 如果不是登录页面，执行
  const { location } = history;
  if (
    ![loginPath, '/user/register', '/user/register-result'].includes(
      location.pathname,
    )
  ) {
    const currentUser = await fetchUserInfo();
    return {
      fetchUserInfo,
      currentUser,
      settings: defaultSettings as Partial<LayoutSettings>,
    };
  }
  return {
    fetchUserInfo,
    settings: defaultSettings as Partial<LayoutSettings>,
  };
}

export const layout: RunTimeLayoutConfig = ({
  initialState,
  setInitialState,
}) => {
  return {
    actionsRender: () => [
      // <AvatarName/>,
      <Question key="doc" />,
      <SelectLang key="SelectLang" />,
    ],
    title: initialState?.currentUser?.partnerName,
    avatarProps: {
      title: initialState?.currentUser?.employeeName,
      render: (_, avatarChildren) => (
        <AvatarDropdown menu>{avatarChildren}</AvatarDropdown>
      ),
    },
    footerRender: () => <Footer />,
    onPageChange: () => {
      const { location } = history;
      // 如果没有登录，重定向到 login
      if (!initialState?.currentUser && location.pathname !== loginPath) {
        history.push(loginPath);
      }
    },
    bgLayoutImgList: [
      {
        src: 'https://mdn.alipayobjects.com/yuyan_qk0oxh/afts/img/D2LWSqNny4sAAAAAAAAAAAAAFl94AQBr',
        left: 85,
        bottom: 100,
        height: '303px',
      },
      {
        src: 'https://mdn.alipayobjects.com/yuyan_qk0oxh/afts/img/C2TWRpJpiC0AAAAAAAAAAAAAFl94AQBr',
        bottom: -68,
        right: -45,
        height: '303px',
      },
      {
        src: 'https://mdn.alipayobjects.com/yuyan_qk0oxh/afts/img/F6vSTbj8KpYAAAAAAAAAAAAAFl94AQBr',
        bottom: 0,
        left: 0,
        width: '331px',
      },
    ],
    links: isDevOrTest
      ? [
          <Link key="openapi" to="/umi/plugin/openapi" target="_blank">
            <LinkOutlined />
            <span>OpenAPI 文档</span>
          </Link>,
        ]
      : [],
    menuHeaderRender: undefined,
    // 自定义 403 页面
    // unAccessible: <div>unAccessible</div>,
    // 增加一个 loading 的状态
    childrenRender: (children) => {
      // if (initialState?.loading) return <PageLoading />;
      return (
        <>
          {children}
          {isDevOrTest && (
            <SettingDrawer
              disableUrlParams
              enableDarkTheme
              settings={initialState?.settings}
              onSettingChange={(settings) => {
                setInitialState((preInitialState) => ({
                  ...preInitialState,
                  settings,
                }));
              }}
            />
          )}
        </>
      );
    },
    menu: {
      request: async (params, defaultMenuData) => {
        try {
          const menus = await getManagementMenus();
          if (!menus) return [];

          const mapMenu = (menuItems: any[]): any[] => {
            return menuItems.map((item) => {
              const newItem = { ...item };

              // 1. Fix Icon
              if (newItem.icon && typeof newItem.icon === 'string') {
                newItem.icon = IconMap(newItem.icon);
              }

              // Map 'visible' to 'hideInMenu' (inverse)
              if (newItem.visible === false) {
                newItem.hideInMenu = true;
              }

              if (newItem.children && newItem.children.length > 0) {
                // Recursively map children first
                newItem.children = mapMenu(newItem.children);

                // Logic to add redirect if needed.
                // The user said: "In the third layer menu's first record, add { path: '/device/cabinets', redirect: '/device/cabinets/list' }"
                // "Here path is same as parent path, redirect is parent path + list node"

                if (newItem.path) {
                  const hasListChild = newItem.children.some(
                    (child: any) => child.path === `${newItem.path}/list`,
                  );
                  if (hasListChild) {
                    // Check if redirect already exists to avoid duplication if run multiple times (though request is per load)
                    const hasRedirect = newItem.children.some(
                      (child: any) =>
                        child.path === newItem.path && child.redirect,
                    );
                    if (!hasRedirect) {
                      // newItem.children.unshift({
                      //   path: newItem.path,
                      //   redirect: `${newItem.path}/list`,
                      //   hideInMenu: true,
                      // });
                    }
                  }
                }
                // If all children are hidden, remove children to make it a leaf node
                if (newItem.children.every((child: any) => child.hideInMenu)) {
                  delete newItem.children;
                }
              }

              return newItem;
            });
          };

          return mapMenu(menus);
        } catch (error) {
          console.error('Fetch menu error:', error);
          return [];
        }
      },
    },
    ...initialState?.settings,
  };
};

/**
 * @name request 配置，可以配置错误处理
 * @doc https://umijs.org/docs/max/request#配置
 */
export const request: RequestConfig = {
  baseURL: isDev ? '' : 'https://proapi.azurewebsites.net',
  ...errorConfig,
  requestInterceptors: [
    (config: any) => {
      const token = localStorage.getItem('token');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
  ],
};
