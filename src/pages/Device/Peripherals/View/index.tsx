import { PageContainer } from '@ant-design/pro-components';
import { useParams } from '@umijs/max';
import { Descriptions } from 'antd';
import { useEffect, useState } from 'react';
import type { Peripheral } from '../data.d';
import { getPeripheralById } from '../service';

const PeripheralViewPage = () => {
  const { id } = useParams<{ id: string }>();
  const [peripheral, setPeripheral] = useState<Peripheral>();

  useEffect(() => {
    if (id) {
      getPeripheralById(id).then((res) => {
        setPeripheral(res);
      });
    }
  }, [id]);

  return (
    <PageContainer>
      {peripheral && (
        <Descriptions bordered>
          <Descriptions.Item label="外设编码">
            {peripheral.code}
          </Descriptions.Item>
          <Descriptions.Item label="外设名称">
            {peripheral.name}
          </Descriptions.Item>
        </Descriptions>
      )}
    </PageContainer>
  );
};

export default PeripheralViewPage;
