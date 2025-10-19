import {
  PageContainer,
  ProForm,
  ProFormText,
  ProFormTextArea,
} from '@ant-design/pro-components';
import { history, useIntl, useParams } from '@umijs/max';
import { Card, message } from 'antd';
import React from 'react';
import { v4 as uuid } from 'uuid';
import type { Cable } from '../../data.d';
import {
  addCabinetCables,
  getCabinetCableById,
  updateCabinetCables,
} from '../../service';

const CableEditPage: React.FC = () => {
  const intl = useIntl();
  const { cabinetId, id } = useParams<{ cabinetId: string; id: string }>();

  const onFinish = async (values: Omit<Cable, 'id' | 'cabinetId'>) => {
    const cableToSave: Cable = {
      ...values,
      cabinetId: cabinetId!,
      id: id === 'add' ? uuid() : id!,
    };
    if (id === 'add') {
      await addCabinetCables(cableToSave);
      message.success(intl.formatMessage({ id: 'common.add.success' }));
    } else {
      await updateCabinetCables(cableToSave);
      message.success(intl.formatMessage({ id: 'common.edit.success' }));
    }
    history.push(`/device/cabinets/view/${cabinetId}?tab=cables`);
  };

  return (
    <PageContainer
      header={{
        title: intl.formatMessage({
          id: id === 'add' ? 'cable.add.title' : 'cable.edit.title',
        }),
        onBack: () => history.back(),
      }}
    >
      <Card>
        <ProForm
          onFinish={onFinish}
          request={async () => {
            if (id && id !== 'add') {
              return getCabinetCableById(id);
            }
            return {
              code: '',
              name: '',
              description: '',
            };
          }}
        >
          <ProFormText
            name="code"
            label={intl.formatMessage({ id: 'cable.code' })}
            rules={[
              {
                required: true,
                message: intl.formatMessage({ id: 'cable.code.required' }),
              },
            ]}
          />
          <ProFormText
            name="name"
            label={intl.formatMessage({ id: 'cable.name' })}
            rules={[
              {
                required: true,
                message: intl.formatMessage({ id: 'cable.name.required' }),
              },
            ]}
          />
          <ProFormTextArea
            name="description"
            label={intl.formatMessage({ id: 'cable.description' })}
          />
        </ProForm>
      </Card>
    </PageContainer>
  );
};

export default CableEditPage;
