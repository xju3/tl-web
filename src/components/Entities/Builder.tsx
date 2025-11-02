import {
  type ProDescriptionsItemProps,
  ProFormDigit,
  type ProFormInstance,
  ProFormText,
  ProFormTextArea,
} from '@ant-design/pro-components';
import React from 'react';
import type { IntlShape } from 'react-intl';
import CustomProFormText from '@/components/Common/Form/CustomProFormText';
import type { CustomProColumns } from '@/components/Common/Pages/List/typing';
import { validationRules } from '@/utils/validation';
import type { EntityField } from './types';

export function buildTableColumns<T>(
  definitions: EntityField<T>[],
  intl: IntlShape,
): CustomProColumns<T>[] {
  return definitions
    .filter((def) => def.visibility?.inTable)
    .map((def) => ({
      ...def,
      title: def.intlId ? intl.formatMessage({ id: def.intlId }) : '',
    }));
}

export function buildDescriptions<T>(
  definitions: EntityField<T>[],
  intl: IntlShape,
): ProDescriptionsItemProps<T>[] {
  return definitions
    .filter((def) => def.visibility?.inDescription)
    .map((def) => ({
      ...def,
      title: def.intlId ? intl.formatMessage({ id: def.intlId }) : '',
    }));
}

export function buildSelectors<T>(
  definitions: EntityField<T>[],
  intl: IntlShape,
): CustomProColumns<T>[] {
  return definitions
    .filter((def) => def.visibility?.inSelector)
    .map((def) => ({
      ...def,
      title: intl.formatMessage({ id: def.intlId }),
    }));
}

export function buildFormFields<T>(
  definitions: EntityField<T>[],
  intl: IntlShape,
  formRef?: React.RefObject<ProFormInstance<T>>,
): React.ReactNode[] {
  const rulesBuilder = validationRules(intl);

  return definitions
    .filter((def) => def.visibility?.inForm)
    .map((def, index) => {
      // 使用组合键确保唯一性
      const key = `${def.dataIndex as string}-${index}`;

      if (
        def.form?.fieldType === 'custom' &&
        def.form?.renderFormItem &&
        formRef
      ) {
        return (
          <React.Fragment key={key}>
            {def.form.renderFormItem(undefined, { formRef }, intl)}
          </React.Fragment>
        );
      }

      const generatedRules = def.form?.rules?.map((rule) => {
        const messageKey = def.intlId;
        switch (rule.type) {
          case 'required':
            return rulesBuilder.required(messageKey);
          case 'length':
            // 添加类型检查和默认值
            if (rule.args && rule.args.length >= 2) {
              return rulesBuilder.length(
                rule.args[0],
                rule.args[1],
                messageKey,
              );
            }
            return {};
          case 'ip':
            return rulesBuilder.ip(messageKey);
          default:
            return {};
        }
      });

      const commonProps = {
        name: def.dataIndex,
        label: def.intlId ? intl.formatMessage({ id: def.intlId }) : '',
        rules: generatedRules,
        hidden: def.form?.hidden,
        ...def.form?.formItemProps,
      };

      switch (def.form?.fieldType) {
        case 'textarea':
          return <ProFormTextArea key={key} width="lg" {...commonProps} />;
        case 'digit':
          return <ProFormDigit key={key} width="lg" {...commonProps} />;
        case 'password':
          return <ProFormText.Password key={key} width="lg" {...commonProps} />;
        default:
          return <CustomProFormText key={key} width="lg" {...commonProps} />;
      }
    });
}
