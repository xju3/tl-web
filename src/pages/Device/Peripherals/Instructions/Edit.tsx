import { PageContainer, ProForm } from '@ant-design/pro-components';
import { history, useIntl, useParams } from '@umijs/max';
import { Button, Card, message } from 'antd';
import { useEffect, useRef, useState } from 'react';
import { v4 as uuid_v4 } from 'uuid';
import PeripheralInstructionFormFields from '@/components/FormFields/PeripheralInstructionFormFields';
import type { Instruction } from '@/services/Device/Peripheral/data';
import {
  addInstruction,
  getInstructionById,
  updateInstruction,
} from '@/services/Device/Peripheral/service';

const InstructionEditPage = () => {
  const intl = useIntl();
  const { peripheralId, instructionId } = useParams<{
    peripheralId: string;
    instructionId: string;
  }>();
  const formRef = useRef<any>(null);
  const [instruction, setInstruction] = useState<Instruction | undefined>(
    undefined,
  );

  useEffect(() => {
    // If editing (instructionId present), load data and populate the form
    if (peripheralId && instructionId) {
      getInstructionById(peripheralId, instructionId)
        .then((res: Instruction) => {
          if (res) {
            setInstruction(res);
            formRef.current?.setFieldsValue(res);
          } else {
            message.error('Instruction not found!');
          }
        })
        .catch(() => {
          message.error('Failed to load instruction data.');
        });
    } else if (peripheralId) {
      // Creating new instruction: ensure peripheralId is in the form values
      formRef.current?.setFieldsValue({ peripheralId, id: uuid_v4() });
    }
  }, [peripheralId, instructionId]);

  const onFinish = async (values: any) => {
    const hide = message.loading(
      intl.formatMessage({ id: 'common.actions.saving' }),
    );
    try {
      if (instructionId && peripheralId) {
        await updateInstruction(peripheralId, values);
      } else if (peripheralId) {
        await addInstruction(peripheralId, values);
      }
      hide();
      message.success(
        intl.formatMessage({ id: 'common.actions.save.success' }),
      );
      history.back();
    } catch (error) {
      hide();
    }
  };

  return (
    <PageContainer onBack={() => history.back()}>
      <Card>
        <ProForm
          formRef={formRef}
          onFinish={onFinish}
          submitter={{
            render: (_, dom) => dom,
          }}
        >
          <PeripheralInstructionFormFields />
          <Button type="primary" onClick={() => formRef.current?.submit()}>
            {intl.formatMessage({ id: 'common.actions.save' })}
          </Button>
        </ProForm>
      </Card>
    </PageContainer>
  );
};

export default InstructionEditPage;
