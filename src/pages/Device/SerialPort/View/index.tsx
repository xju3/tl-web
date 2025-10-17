import { PageContainer } from '@ant-design/pro-components';
import { useParams } from '@umijs/max';
import { Descriptions } from 'antd';
import { useEffect, useState } from 'react';
import type { SerialPort } from '../data.d';
import { getSerialPortById } from '../service';

const SerialPortViewPage = () => {
  const { id } = useParams<{ id: string }>();
  const [serialPort, setSerialPort] = useState<SerialPort>();

  useEffect(() => {
    if (id) {
      getSerialPortById(id).then((res) => {
        setSerialPort(res);
      });
    }
  }, [id]);

  return (
    <PageContainer>
      {serialPort && (
        <Descriptions bordered>
          <Descriptions.Item label="名称">{serialPort.name}</Descriptions.Item>
          <Descriptions.Item label="端口">{serialPort.port}</Descriptions.Item>
          <Descriptions.Item label="波特率">
            {serialPort.baudRate}
          </Descriptions.Item>
          <Descriptions.Item label="数据位">
            {serialPort.dataBits}
          </Descriptions.Item>
          <Descriptions.Item label="停止位">
            {serialPort.stopBits}
          </Descriptions.Item>
          <Descriptions.Item label="校验位">
            {serialPort.parity}
          </Descriptions.Item>
          <Descriptions.Item label="描述">
            {serialPort.description}
          </Descriptions.Item>
        </Descriptions>
      )}
    </PageContainer>
  );
};

export default SerialPortViewPage;
