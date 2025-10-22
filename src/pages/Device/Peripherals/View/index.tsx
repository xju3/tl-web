import { PageContainer } from '@ant-design/pro-components';
import { history, useIntl, useLocation, useParams } from '@umijs/max';
import { Button, Card, Descriptions, message, Popconfirm } from 'antd';
import { useEffect, useState } from 'react';
import type { Peripheral } from '../data.d';
import { deletePeripheral, getPeripheralById } from '../service';
import Instructions from './Instructions';

const PeripheralViewPage = () => {
  const { id } = useParams<{ id: string }>();
  const location = useLocation();
  const [peripheral, setPeripheral] = useState<Peripheral>();
  const intl = useIntl();

  useEffect(() => {
    if (id) {
      getPeripheralById(id).then((res) => {
        setPeripheral(res);
      });
    }
  }, [id]);

  const handleDelete = async () => {
    if (!id) return;
    const hide = message.loading(
      intl.formatMessage({ id: 'common.actions.deleting' }),
    );
    try {
      await deletePeripheral(id);
      hide();
      message.success(
        intl.formatMessage({ id: 'common.actions.delete.success' }),
      );
      history.push('/device/peripherals', location.state);
    } catch (error) {
      hide();
    }
  };

  return (
    <PageContainer
      onBack={() => history.back()}
      extra={[
        <Button
          key="edit"
          type="primary"
          onClick={() =>
            history.push(`/device/peripherals/edit/${id}`, location.state)
          }
        >
          {intl.formatMessage({ id: 'common.actions.edit' })}
        </Button>,
        <Popconfirm
          key="delete"
          title={intl.formatMessage({
            id: 'device.peripheral.delete.confirm',
          })}
          onConfirm={handleDelete}
        >
          <Button danger>
            {intl.formatMessage({ id: 'common.actions.delete' })}
          </Button>
        </Popconfirm>,
      ]}
    >
      {peripheral && (
        <>
          <Card>
            <Descriptions bordered>
              <Descriptions.Item
                label={intl.formatMessage({ id: 'device.peripheral.code' })}
              >
                {peripheral.code}
              </Descriptions.Item>
              <Descriptions.Item
                label={intl.formatMessage({ id: 'device.peripheral.name' })}
              >
                {peripheral.name}
              </Descriptions.Item>
            </Descriptions>
          </Card>
          <Card style={{ marginTop: 16 }}>
            <Instructions peripheralId={peripheral.id} />
          </Card>
        </>
      )}
    </PageContainer>
  );
};

export default PeripheralViewPage;
