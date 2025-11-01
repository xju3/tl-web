import { SearchOutlined } from '@ant-design/icons';
import type { ProFormInstance } from '@ant-design/pro-components';
import { ProFormDependency, ProFormText } from '@ant-design/pro-components';
import React, { useState } from 'react';
import { useIntl } from 'react-intl';

interface EntitySelectorFormItemProps<T> {
  nameFieldName: string;
  onSelect: (entity: T, form: ProFormInstance) => void;
  labelIntl: string;
  selectorProps?: any | ((dependencies: Record<string, any>) => any); // ✅ 支持函数形式
  formDependencies?: string[];
  width?: number | 'sm' | 'md' | 'xl' | 'xs' | 'lg';
  SelectorModal: React.ComponentType<{
    open: boolean;
    onCancel: () => void;
    onSelect: (entity: T) => void;
    [key: string]: any;
  }>;
}

const EntitySelectorFormItem = <T extends { id: any }>({
  nameFieldName,
  labelIntl,
  selectorProps,
  formDependencies,
  width,
  SelectorModal,
  onSelect,
}: EntitySelectorFormItemProps<T>) => {
  const [modalOpen, setModalOpen] = useState(false);
  const intl = useIntl();
  const isChinese = intl.locale.startsWith('zh');
  const separator = isChinese ? '' : ' ';
  return (
    <ProFormDependency name={formDependencies || []}>
      {(dep, form) => {
        const resolvedSelectorProps =
          typeof selectorProps === 'function'
            ? selectorProps(dep)
            : selectorProps;

        return (
          <React.Fragment>
            <ProFormText
              name={nameFieldName}
              label={intl.formatMessage({ id: labelIntl })}
              width={width}
              disabled
              placeholder={
                intl.formatMessage({ id: 'common.actions.select' }) +
                separator +
                intl.formatMessage({ id: labelIntl })
              }
              fieldProps={{
                style: {
                  color: 'rgba(0, 0, 0, 0.88)', // ✅ 覆盖为正常文字颜色
                  backgroundColor: '#fff', // 背景色为白色
                  cursor: 'default',
                },
                suffix: (
                  <SearchOutlined
                    onClick={() => setModalOpen(true)}
                    style={{
                      cursor: 'pointer',
                      color: '#1677ff',
                    }}
                  />
                ),
              }}
            />
            <SelectorModal
              open={modalOpen}
              onCancel={() => setModalOpen(false)}
              onSelect={(entity) => {
                if (form) {
                  onSelect(entity, form);
                }
                setModalOpen(false);
              }}
              {...resolvedSelectorProps}
            />
          </React.Fragment>
        );
      }}
    </ProFormDependency>
  );
};

export default EntitySelectorFormItem;
