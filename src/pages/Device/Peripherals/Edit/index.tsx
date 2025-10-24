import {
  PageContainer,
  ProForm,
  ProFormText,
} from '@ant-design/pro-components';
import { history, useIntl, useParams } from '@umijs/max';
import { Form } from 'antd';
import { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import type { Peripheral } from '../../../../services/Device/Peripheral/data';
import {
  addPeripheral,
  getPeripheralById,
  updatePeripheral,
} from '../../../../services/Device/Peripheral/service';

const PeripheralEditPage = () => {
  const { id } = useParams<{ id: string }>();
  const [form] = Form.useForm<Peripheral>();
  const intl = useIntl();

  useEffect(() => {
    if (id) {
      getPeripheralById(id).then((res) => {
        form.setFieldsValue(res);
      });
    } else {
      form.setFieldsValue({ id: uuidv4() });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const onFinish = async (values: Peripheral) => {
    if (id) {
      await updatePeripheral({ ...values, id });
    } else {
      await addPeripheral(values);
    }
    history.push('/device/peripherals');
  };

  return (
    <PageContainer onBack={() => history.back()}>
      <ProForm form={form} onFinish={onFinish}>
        <ProFormText name="id" hidden />
        <ProFormText
          name="code"
          label={intl.formatMessage({ id: 'device.peripheral.code' })}
        />
        <ProFormText
          name="name"
          label={intl.formatMessage({ id: 'device.peripheral.name' })}
        />
      </ProForm>
    </PageContainer>
  );
};

export default PeripheralEditPage;
