import type { ProFormInstance } from '@ant-design/pro-components';
import { ProFormDependency, ProFormText } from '@ant-design/pro-components';
import { Button } from 'antd';
import React, { useState } from 'react';
import { useIntl } from 'react-intl';

interface EntitySelectorFormItemProps<T> {
  nameFieldName: string;
  onSelect: (entity: T, form: ProFormInstance) => void;
  labelIntl: string;
  selectorProps?: any | ((dependencies: Record<string, any>) => any); // ✅ 支持函数形式
  formDependencies?: string[];
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
  SelectorModal,
  onSelect,
}: EntitySelectorFormItemProps<T>) => {
  const [modalOpen, setModalOpen] = useState(false);
  const intl = useIntl();

  return (
    <ProFormDependency name={formDependencies || []}>
      {(dep, form) => {
        // ✅ 支持函数形式的 selectorProps
        const resolvedSelectorProps =
          typeof selectorProps === 'function'
            ? selectorProps(dep)
            : selectorProps;

        return (
          <React.Fragment>
            <ProFormText
              name={nameFieldName}
              label={intl.formatMessage({ id: labelIntl })}
              disabled
            />
            <Button onClick={() => setModalOpen(true)}>
              {intl.formatMessage({ id: 'common.actions.select' })}
            </Button>

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
