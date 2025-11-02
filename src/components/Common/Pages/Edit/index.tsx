import type { ProFormInstance } from '@ant-design/pro-components';
import { PageContainer } from '@ant-design/pro-components';
import { history, useParams } from '@umijs/max';
import { message } from 'antd';
import React, { useEffect, useRef } from 'react';
import { v4 as uuid_v4 } from 'uuid';
import CustomProForm from '@/components/Common/Form/CustomProForm';

interface EditPageProps<T> {
  services: {
    getItemById: (id: string) => Promise<any>;
    addItem: (data: T) => Promise<any>;
    updateItem: (data: T) => Promise<any>;
  };
  backRoute: string;
  children: React.ReactNode;
}

const EditPage = <T extends { id?: string }>({
  services,
  backRoute,
  children,
}: EditPageProps<T>) => {
  const params = useParams<Record<string, string>>();
  const { id } = params;
  const formRef = useRef<ProFormInstance<T>>(null);

  useEffect(() => {
    if (id) {
      // Edit mode

      services.getItemById(id).then((res) => {
        formRef.current?.setFieldsValue(res);
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
      }
    }
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
      history.push(backRoute);
    } catch (error) {
      // Error handling is managed by the global request error handler
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
      <CustomProForm<T> ref={formRef} onFinish={onFinish}>
        {childrenWithProps}
      </CustomProForm>
    </PageContainer>
  );
};

export default EditPage;
