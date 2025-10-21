import { PageContainer } from '@ant-design/pro-components';
import { useIntl, useParams } from '@umijs/max';
import { Descriptions } from 'antd';
import { useEffect, useState } from 'react';
import type { SerialPort } from '../data.d';
import { getSerialPortById } from '../service';

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
      onBack={() => history.back()}
      title={intl.formatMessage({ id: 'device.serialport.view' })}
    >
      {serialPort && (
        <Descriptions bordered>
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
