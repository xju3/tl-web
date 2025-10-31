import { type ProColumns, ProTable } from '@ant-design/pro-components';
import React, { useMemo } from 'react';
import type { CustomProTableProps } from '@/components/CommonPages/List/typing'; // 导入你的 Props

// 序号列的定义
const indexColumn: ProColumns<any> = {
  title: '序号',
  dataIndex: 'index',
  valueType: 'indexBorder',
  width: 48,
  hideInSearch: true,
};

export function CustomProTable<T extends Record<string, any>>(
  props: CustomProTableProps<T>,
) {
  // 1. 分离出你的自定义 Prop 和 ProTable 的原生 Props
  const { showIndexColumn = false, ...restProps } = props;

  // 2. 使用 useMemo 根据你的 Prop 动态计算最终的 columns
  const finalColumns = useMemo(() => {
    if (showIndexColumn) {
      // 确保 props.columns 是一个数组
      return [indexColumn, ...(props.columns || [])];
    }
    return props.columns;
  }, [props.columns, showIndexColumn]);

  // 3. 渲染 ProTable，传入计算后的 props
  return (
    <ProTable<T>
      {...restProps} // 传入所有 ProTable 的原生 props
      columns={finalColumns} // 传入你处理过的 columns
    />
  );
}

export default CustomProTable;
