import { PageContainer } from '@ant-design/pro-components';
import { history, useIntl, useParams } from '@umijs/max';
import { Button, Descriptions, Popconfirm, Space } from 'antd';
import { useEffect, useState } from 'react';
import type { SerialPort } from '@/services/Device/SerialPort/data';
import {
  deleteSerialPort,
  getSerialPortById,
} from '@/services/Device/SerialPort/service';

const SerialPortViewPage = () => {
  const { id } = useParams<{ id: string }>();
  const [serialPort, setSerialPort] = useState<SerialPort>();
  const intl = useIntl();

  useEffect(() => {
    if (id) {
      getSerialPortById(id).then((res) => {
        setSerialPort(res);
      });
    }
  }, [id]);

  return (
    <PageContainer
      onBack={() => history.push(`/device/serial-ports`)}
      title={intl.formatMessage({ id: 'device.serial-port.view' })}
    >
      {serialPort && (
        <Descriptions
          bordered
          column={2}
          title={intl.formatMessage({ id: 'device.host.basic-info.title' })}
          extra={
            <Space>
              <Button
                type="primary"
                onClick={() => {
                  history.push(`/device/serial-port/edit/${id}`);
                }}
              >
                {intl.formatMessage({ id: 'common.actions.edit' })}
              </Button>
              <Popconfirm
                title={intl.formatMessage({
                  id: 'device.cabinet.delete.confirm',
                })}
                onConfirm={async () => {
                  if (id) {
                    await deleteSerialPort(id);
                    history.push('/device/cabinets');
                  }
                }}
              >
                <Button type="primary" danger>
                  {intl.formatMessage({ id: 'common.actions.delete' })}
                </Button>
              </Popconfirm>
            </Space>
          }
        >
          <Descriptions.Item
            label={intl.formatMessage({ id: 'device.serialport.name' })}
          >
            {serialPort.name}
          </Descriptions.Item>
          <Descriptions.Item
            label={intl.formatMessage({ id: 'device.serialport.protocol' })}
          >
            {serialPort.protocol}
          </Descriptions.Item>
          <Descriptions.Item
            label={intl.formatMessage({ id: 'device.serialport.baudRate' })}
          >
            {serialPort.baudRate}
          </Descriptions.Item>
          <Descriptions.Item
            label={intl.formatMessage({ id: 'device.serialport.dataBits' })}
          >
            {serialPort.dataBits}
          </Descriptions.Item>
          <Descriptions.Item
            label={intl.formatMessage({ id: 'device.serialport.stopBits' })}
          >
            {serialPort.stopBits}
          </Descriptions.Item>
          <Descriptions.Item
            label={intl.formatMessage({ id: 'device.serialport.parity' })}
          >
            {serialPort.parity}
          </Descriptions.Item>
          <Descriptions.Item
            label={intl.formatMessage({ id: 'common.description' })}
          >
            {serialPort.description}
          </Descriptions.Item>
        </Descriptions>
      )}
    </PageContainer>
  );
};

export default SerialPortViewPage;
