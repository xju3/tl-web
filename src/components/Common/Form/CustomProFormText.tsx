import { ProFormText } from '@ant-design/pro-components';
import React from 'react';

// Define the props type by extracting it from the component itself for robustness.
// This is the correct way to get props for a component when its props type is not exported.
type CustomProFormTextProps = React.ComponentProps<typeof ProFormText>;

const CustomProFormText: React.FC<CustomProFormTextProps> = (props) => {
  // This simple wrapper allows for future extension of props or logic.
  // It does not need to forward a ref, as ProForm manages its fields by context.
  return <ProFormText {...props} />;
};

// ProForm might identify its children via displayName.
// Setting it explicitly helps maintain the connection between the form and its fields.
CustomProFormText.displayName = 'ProFormText';

export default CustomProFormText;
