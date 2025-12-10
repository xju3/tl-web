import type { Material } from '@/services/Manufacture/Material/data';
import { getProcessList } from '@/services/Manufacture/Process/service';
import { getScenarios } from '@/services/Manufacture/Scenario/service';
import type { EntityField } from '../types';

export const MaterialEntity: EntityField<Material>[] = [
  {
    dataIndex: 'code',
    intlId: 'material.code',
    visibility: {
      inTable: true,
      inDescription: true,
      inSelector: true,
      inForm: true,
    },
    form: {
      fieldType: 'text',
      formItemProps: {
        width: 'lg',
        placeholder: 'input code here, max length less than 8',
      },
      rules: [{ type: 'required' }, { type: 'length', args: [2, 16] }],
    },
  },
  {
    dataIndex: 'name',
    intlId: 'material.name',
    visibility: {
      inTable: true,
      inDescription: true,
      inSelector: true,
      inForm: true,
    },
    form: {
      fieldType: 'text',
      formItemProps: {
        width: 'lg',
      },
      rules: [{ type: 'required' }, { type: 'length', args: [2, 32] }],
    },
  },
  {
    dataIndex: 'processId',
    intlId: 'material.process', // Use the same title as the 'process' field.
    hideInTable: true,
    valueType: 'select',
    request: async () => {
      // Populates the dropdown.
      const res = await getProcessList({ current: 1, pageSize: 100 });
      if (res && res.data) {
        return res.data.map((p) => ({
          label: p.name,
          value: p.id,
        }));
      }
      return [];
    },
    // Builder Visibility Flags
    visibility: {
      inTable: true,
      inForm: false,
    },
  },
  {
    dataIndex: 'process',
    intlId: 'material.process',
    hideInSearch: true,
    visibility: {
      inTable: true,
      inDescription: true,
      inSelector: true,
      inForm: true, // Allows this field to be used on the Edit page.
    },
    form: {
      fieldType: 'text',
      formItemProps: {
        width: 'lg',
      },
      rules: [{ type: 'required' }, { type: 'length', args: [2, 32] }],
    },
  },
  {
    dataIndex: 'scenario',
    intlId: 'material.scenario',
    hideInSearch: true,
    visibility: {
      inTable: true,
      inDescription: true,
      inSelector: true,
      inForm: true,
    },
    form: {
      fieldType: 'text',
      formItemProps: {
        width: 'lg',
      },
      rules: [{ type: 'required' }, { type: 'length', args: [2, 32] }],
    },
  },
  {
    dataIndex: 'spec',
    intlId: 'material.spec',
    visibility: {
      inTable: true,
      inDescription: true,
      inSelector: true,
      inForm: true,
    },
    form: {
      fieldType: 'text',
      formItemProps: {
        width: 'lg',
      },
      rules: [{ type: 'required' }, { type: 'length', args: [2, 32] }],
    },
  },
  {
    dataIndex: 'value',
    intlId: 'material.value',
    visibility: {
      inTable: true,
      inDescription: true,
      inSelector: true,
      inForm: true,
    },
    form: {
      fieldType: 'text',
      formItemProps: {
        width: 'lg',
      },
      rules: [{ type: 'required' }, { type: 'length', args: [2, 32] }],
    },
  },
  {
    dataIndex: 'comment',
    intlId: 'material.comment',
    visibility: {
      inTable: true,
      inDescription: true,
      inSelector: true,
      inForm: true,
    },
    form: {
      fieldType: 'text',
      formItemProps: {
        width: 'lg',
      },
    },
  },
  {
    dataIndex: 'id',
    visibility: {
      inForm: true,
    },
    form: {
      hidden: true,
    },
  },
  {
    dataIndex: 'partnerId',
    visibility: {
      inForm: true,
    },
    form: {
      hidden: true,
    },
  },
  {
    dataIndex: 'scenarioId',
    intlId: 'material.scenario', // Use the same title as the 'process' field.
    hideInTable: true,
    valueType: 'select',
    request: async () => {
      // Populates the dropdown.
      const res = await getScenarios({ current: 1, pageSize: 100 });
      if (res && res.data) {
        return res.data.map((p) => ({
          label: p.name,
          value: p.id,
        }));
      }
      return [];
    },
    // Builder Visibility Flags
    visibility: {
      inTable: true,
      inForm: false,
    },
  },
  {
    dataIndex: 'specGroupId',
    visibility: {
      inForm: true,
    },
    form: {
      hidden: true,
    },
  },
  {
    dataIndex: 'valueLevelId',
    visibility: {
      inForm: true,
    },
    form: {
      hidden: true,
    },
  },
  {
    dataIndex: 'parentId',
    visibility: {
      inForm: true,
    },
    form: {
      hidden: true,
    },
  },
];
