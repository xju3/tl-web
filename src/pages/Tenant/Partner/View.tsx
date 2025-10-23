import { PageContainer, ProDescriptions } from '@ant-design/pro-components';
import { history, useIntl, useParams } from '@umijs/max';
import { Button, Card, Descriptions, message, Popconfirm } from 'antd';
import React, { useEffect, useState } from 'react';
import type { PartnerVo } from './data.d';
import { deletePartner, getPartner } from './service';

const PartnerView: React.FC = () => {
  const intl = useIntl();
  const { id } = useParams<{ id: string }>();
  const [data, setData] = useState<PartnerVo>();

  useEffect(() => {
    if (id) {
      getPartner(id).then((response) => {
        setData(response);
      });
    }
  }, [id]);

  const handleRemove = async () => {
    if (!id) return;
    const hide = message.loading(
      intl.formatMessage({ id: 'common.actions.deleting' }),
    );
    try {
      await deletePartner(id);
      hide();
      message.success(
        intl.formatMessage({ id: 'common.actions.delete.success' }),
      );
      history.push('/tenant/partner/list');
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
        <Card
          extra={
            <>
              <Button
                onClick={() => {
                  history.push(`/tenant/partner/edit/${id}`);
                }}
              >
                {intl.formatMessage({ id: 'common.actions.edit' })}
              </Button>
              <Popconfirm
                title={intl.formatMessage({ id: 'common.delete.confirm' })}
                onConfirm={handleRemove}
              >
                <Button danger>
                  {intl.formatMessage({ id: 'common.actions.delete' })}
                </Button>
              </Popconfirm>
            </>
          }
        >
          <Descriptions title={data.name} bordered>
            <Descriptions.Item
              label={intl.formatMessage({ id: 'tenant.partner.code' })}
            >
              {data.code}
            </Descriptions.Item>
            <Descriptions.Item
              label={intl.formatMessage({ id: 'tenant.partner.name' })}
            >
              {data.name}
            </Descriptions.Item>
            <Descriptions.Item
              label={intl.formatMessage({ id: 'tenant.partner.address' })}
            >
              {data.address}
            </Descriptions.Item>
            <Descriptions.Item
              label={intl.formatMessage({ id: 'tenant.partner.tenant' })}
            >
              {data.tenant ? 'Yes' : 'No'}
            </Descriptions.Item>
          </Descriptions>
        </Card>
      )}
    </PageContainer>
  );
};

export default PartnerView;
