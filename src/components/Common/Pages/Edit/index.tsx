import type { ProFormInstance } from '@ant-design/pro-components';
import { PageContainer } from '@ant-design/pro-components';
import { history, useIntl, useParams } from '@umijs/max';
import { Button, message } from 'antd';
import React, { useEffect, useRef } from 'react';
import { v4 as uuid_v4 } from 'uuid';
import CustomProForm from '@/components/Common/Form/CustomProForm';

interface EditPageProps<T> {
  services: {
    getItemById: (id: string) => Promise<any>;
    addItem: (data: T) => Promise<any>;
    updateItem: (data: T) => Promise<any>;
  };
  children: React.ReactNode;
  backRoute?: string;
  actionButtons?: React.ReactNode;
  transformData?: (data: T) => T;
}

const EditPage = <T extends { id?: string }>({
  services,
  backRoute,
  children,
  actionButtons,
  transformData,
}: EditPageProps<T>) => {
  const intl = useIntl();
  const params = useParams<Record<string, string>>();
  const { id } = params;
  const formRef = useRef<ProFormInstance<T>>(null);

  const loadData = () => {
    if (id) {
      // Edit mode
      services.getItemById(id).then((res) => {
        const transformedRes = transformData ? transformData(res) : res;
        console.log(transformedRes);
        formRef.current?.setFieldsValue(transformedRes);
      });
    } else {
      // Add child mode
      const parentIdKey = Object.keys(params).find(
        (key) => key.endsWith('Id') && key !== 'id',
      );
      if (parentIdKey && params[parentIdKey]) {
        // Use 'as any' to bypass strict type checking for the generic type T,
        // as T is not guaranteed to have a parentId property.
        // The form field is expected to exist at runtime.
        formRef.current?.setFieldsValue({
          [parentIdKey]: params[parentIdKey],
        } as any);
        console.log(formRef.current?.getFieldsValue());
      } else {
        formRef.current?.resetFields();
      }
    }
  };

  useEffect(() => {
    loadData();
  }, [id, params, services]);

  const onFinish = async (values: T) => {
    try {
      if (id) {
        await services.updateItem({ ...values, id });
        message.success('Updated successfully');
      } else {
        await services.addItem({ ...values, id: uuid_v4() });
        message.success('Added successfully');
      }
      if (backRoute) {
        history.push(backRoute);
      } else {
        history.back();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const childrenWithProps = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child as React.ReactElement<any>, { formRef });
    }
    return child;
  });

  return (
    <PageContainer onBack={() => history.back()}>
      <CustomProForm<T>
        ref={formRef}
        onFinish={onFinish}
        submitter={{
          render: (props) => (
            <>
              <Button key="cancel" onClick={loadData}>
                {intl.formatMessage({ id: 'common.actions.cancel' })}
              </Button>
              {actionButtons}
              <Button
                key="submit"
                type="primary"
                onClick={() => props.form?.submit()}
              >
                {intl.formatMessage({ id: 'common.actions.save' })}
              </Button>
            </>
          ),
        }}
      >
        {childrenWithProps}
      </CustomProForm>
    </PageContainer>
  );
};

export default EditPage;
