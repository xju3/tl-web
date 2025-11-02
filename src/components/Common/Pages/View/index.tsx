import { PageContainer, ProDescriptions } from '@ant-design/pro-components';
import { history, useIntl, useParams } from '@umijs/max';
import { Button, Card, Popconfirm } from 'antd';
import React, { useEffect, useState } from 'react';
import type { ViewPageProps } from './typing';

const ViewPage = <T extends Record<string, any>>({
  title,
  description,
  getById,
  deleteById,
  editUrl,
  listUrl,
  columns,
  detailsComponent,
  gutter,
}: ViewPageProps<T>) => {
  const { id } = useParams<{ id: string }>();
  const [data, setData] = useState<T>();
  const intl = useIntl();

  useEffect(() => {
    if (id) {
      getById(id).then((res) => {
        setData(res);
      });
    }
  }, [id, getById]);

  const descriptionTitle =
    typeof description === 'function' && data
      ? description(data)
      : typeof description === 'string'
        ? description
        : '';

  return (
    <PageContainer
      header={{
        title: title,
        onBack: () => history.back(),
      }}
    >
      <Card>
        <ProDescriptions
          bordered
          column={gutter}
          title={descriptionTitle}
          dataSource={data}
          columns={columns}
          styles={{
            content: {},
          }}
          extra={
            <>
              <Button
                type="primary"
                onClick={() => {
                  history.push(`${editUrl}/${id}`);
                }}
              >
                {intl.formatMessage({ id: 'common.actions.edit' })}
              </Button>
              <Popconfirm
                title={intl.formatMessage({
                  id: 'common.delete.confirm',
                })}
                onConfirm={async () => {
                  if (id) {
                    await deleteById(id);
                    history.push(listUrl);
                  }
                }}
              >
                <Button type="primary" danger>
                  {intl.formatMessage({ id: 'common.actions.delete' })}
                </Button>
              </Popconfirm>
            </>
          }
        />
      </Card>
      <br />
      {data && detailsComponent && detailsComponent(data)}
    </PageContainer>
  );
};

export default ViewPage;
