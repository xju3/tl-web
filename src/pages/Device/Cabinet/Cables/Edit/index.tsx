import {
  PageContainer,
  ProForm,
  ProFormDependency,
  ProFormSelect,
  ProFormText,
  ProFormTextArea,
} from '@ant-design/pro-components';
import { history, useIntl, useParams } from '@umijs/max';
import { Button, Card, message } from 'antd';
import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import HostSelectModal from '../../../../../components/Selectors/HostSelectModal';
import type { Cable } from '../../../../../services/Device/Cabinet/data';
import {
  addCabinetCables,
  getCabinetCableById,
  updateCabinetCables,
} from '../../../../../services/Device/Cabinet/service';
import type {
  Host,
  HostSerialPort,
} from '../../../../../services/Device/Host/data';
import {
  getHostPorts,
  getHosts,
} from '../../../../../services/Device/Host/service';

const CableEditPage: React.FC = () => {
  const intl = useIntl();
  const { cabinetId, id } = useParams<{ cabinetId: string; id: string }>();
  const [form] = ProForm.useForm();
  const [hostSelectModalOpen, setHostSelectModalOpen] = useState(false);

  const onFinish = async (values: Omit<Cable, 'id' | 'cabinetId'>) => {
    const cableToSave: Cable = {
      ...values,
      cabinetId: cabinetId!,
      id: id === 'add' ? uuid() : id!,
    };
    if (id === 'add') {
      await addCabinetCables(cableToSave);
      message.success(intl.formatMessage({ id: 'common.actions.add.success' }));
    } else {
      await updateCabinetCables(cableToSave);
      message.success(
        intl.formatMessage({ id: 'common.actions.edit.success' }),
      );
    }
    history.push(`/device/cabinets/view/${cabinetId}?tab=cables`);
  };

  return (
    <PageContainer
      header={{
        title: intl.formatMessage({
          id:
            id === 'add'
              ? 'device.cabinet.cable.add.title'
              : 'device.cabinet.cable.edit.title',
        }),
        onBack: () => history.back(),
      }}
    >
      <Card>
        <ProForm
          form={form}
          onFinish={onFinish}
          request={async () => {
            if (id && id !== 'add') {
              return getCabinetCableById(id);
            }
            return {
              code: '',
              name: '',
              description: '',
              hostId: undefined,
              hostPortId: undefined,
            };
          }}
        >
          <ProFormText
            name="code"
            label={intl.formatMessage({ id: 'device.cabinet.cable.code' })}
            rules={[
              {
                required: true,
                message: intl.formatMessage({
                  id: 'device.cabinet.cable.code.required',
                }),
              },
            ]}
          />
          <ProFormText
            name="name"
            label={intl.formatMessage({ id: 'device.cabinet.cable.name' })}
            rules={[
              {
                required: true,
                message: intl.formatMessage({
                  id: 'device.cabinet.cable.name.required',
                }),
              },
            ]}
          />
          <ProFormTextArea
            name="description"
            label={intl.formatMessage({
              id: 'device.cabinet.cable.description',
            })}
          />
          <ProForm.Group>
            <ProFormText
              name="hostName"
              label={intl.formatMessage({ id: 'device.host.name' })}
              disabled
            />
            <Button
              onClick={() => {
                setHostSelectModalOpen(true);
              }}
            >
              {intl.formatMessage({ id: 'common.actions.select' })}
            </Button>
          </ProForm.Group>

          <ProFormDependency name={['hostId']}>
            {({ hostId }) => {
              if (!hostId) {
                return null;
              }
              return (
                <ProFormSelect
                  name="hostPortId"
                  label={intl.formatMessage({ id: 'device.host.port.code' })}
                  request={async () => {
                    const res = await getHostPorts(hostId, {
                      currPage: 1,
                      pageSize: 1000,
                    });
                    return res.data.map((item: HostSerialPort) => ({
                      label: item.code,
                      value: item.id,
                      hostPortCode: item.code,
                    }));
                  }}
                  fieldProps={{
                    onChange: (_, option) => {
                      form.setFieldsValue({
                        hostPortCode: option.hostPortCode,
                      });
                    },
                  }}
                />
              );
            }}
          </ProFormDependency>

          <ProFormText name="hostId" hidden />
          <ProFormText name="hostCode" hidden />
          <ProFormText name="hostPortCode" hidden />
        </ProForm>
        <HostSelectModal
          open={hostSelectModalOpen}
          onCancel={() => setHostSelectModalOpen(false)}
          onSelect={(host) => {
            form.setFieldsValue({
              hostId: host.id,
              hostCode: host.code,
              hostName: host.name,
              hostPortId: undefined,
              hostPortCode: undefined,
            });
            setHostSelectModalOpen(false);
          }}
        />
      </Card>
    </PageContainer>
  );
};

export default CableEditPage;
