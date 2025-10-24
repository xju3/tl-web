import { PageContainer } from '@ant-design/pro-components';
import { Button, Card, Descriptions, message, Popconfirm, Space } from 'antd';
import React, { useEffect, useState } from 'react';
import { history, useIntl, useParams } from 'umi';
import type { MaterialVo } from '@/services/Tenant/data';
import { deleteMaterial, getMaterial } from '@/services/Tenant/service';

const MaterialView: React.FC = () => {
  const intl = useIntl();
  const { id } = useParams<{ id: string }>();
  const [data, setData] = useState<MaterialVo>();

  useEffect(() => {
    if (id) {
      getMaterial(id).then((response) => {
        setData(response);
      });
    }
  }, [id]);

  const handleRemove = async () => {
    const hide = message.loading(
      intl.formatMessage({ id: 'common.actions.deleting' }),
    );
    try {
      // @ts-expect-error
      await deleteMaterial(id);
      hide();
      message.success(
        intl.formatMessage({ id: 'common.actions.delete.success' }),
      );
      history.back();
    } catch (error) {
      hide();
      message.error(
        intl.formatMessage({ id: 'pages.searchTable.delete.fail' }),
      );
    }
  };

  return (
    <PageContainer onBack={() => history.back()}>
      {data && (
        <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
          <Card>
            <Descriptions
              bordered
              title={intl.formatMessage({ id: 'tenant.material' })}
              extra={
                <>
                  <Space>
                    <Button
                      type="primary"
                      onClick={() => {
                        history.push(`/tenant/material/edit/${id}`);
                      }}
                    >
                      {intl.formatMessage({ id: 'common.actions.edit' })}
                    </Button>
                    <Popconfirm
                      title={intl.formatMessage({
                        id: 'common.delete.confirm',
                      })}
                      onConfirm={handleRemove}
                    >
                      <Button danger>
                        {intl.formatMessage({ id: 'common.actions.delete' })}
                      </Button>
                    </Popconfirm>
                  </Space>
                </>
              }
            >
              <Descriptions.Item
                label={intl.formatMessage({ id: 'tenant.material.code' })}
              >
                {data.code}
              </Descriptions.Item>
              <Descriptions.Item
                label={intl.formatMessage({ id: 'tenant.material.name' })}
              >
                {data.name}
              </Descriptions.Item>
              <Descriptions.Item
                label={intl.formatMessage({ id: 'tenant.material.weight' })}
              >
                {data.weight}
              </Descriptions.Item>
            </Descriptions>
          </Card>
        </Space>
      )}
    </PageContainer>
  );
};

export default MaterialView;
