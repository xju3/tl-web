import { ProForm } from '@ant-design/pro-components';
import type { FormInstance } from 'antd';
import React, { useImperativeHandle, useRef } from 'react';

// Define the props type by extracting it from the component itself for robustness.
type CustomProFormProps<T extends Record<string, any> = Record<string, any>> =
  React.ComponentProps<typeof ProForm<T>>;

// Define the implementation with a render function that is generic
const CustomProFormRender = <T extends Record<string, any>>(
  props: CustomProFormProps<T>,
  ref: React.Ref<FormInstance<T>>,
) => {
  const formRef = useRef<FormInstance<T>>(undefined);

  // Expose the form instance to the parent component
  useImperativeHandle(ref, () => formRef.current as FormInstance<T>);

  // ProForm requires a `formRef` prop to get the ref.
  return <ProForm<T> {...props} formRef={formRef} />;
};

// Create the component using React.forwardRef.
const CustomProForm = React.forwardRef(CustomProFormRender) as <
  T extends Record<string, any>,
>(
  props: CustomProFormProps<T> & { ref?: React.Ref<FormInstance<T>> },
) => React.ReactElement;

export default CustomProForm;
