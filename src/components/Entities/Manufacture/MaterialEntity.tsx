import type { Material } from '@/services/Manufacture/Material/data';
import { getProcessList } from '@/services/Manufacture/Process/service';
import type { ScenarioFilter } from '@/services/Manufacture/Scenario/data';
import { getScenarios } from '@/services/Manufacture/Scenario/service';
import type { SpecGroupFilter } from '@/services/Manufacture/SpecGroup/data';
import { getSpecGroups } from '@/services/Manufacture/SpecGroup/service';
import type { SpecTypeFilter } from '@/services/Manufacture/SpecType/data';
import { getSpecTypes } from '@/services/Manufacture/SpecType/service';
import { getValueLevels } from '@/services/Manufacture/ValueLevel/service';
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
    // This field is for displaying the process name in the table and for the edit form.
    dataIndex: 'process',
    intlId: 'material.process',

    // ProTable Column Properties
    hideInSearch: true, // CRITICAL: Prevents a duplicate text input in the search filter.

    // Builder Visibility Flags
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
    // This field is for displaying the scenario name in the table and for the edit form.
    dataIndex: 'scenario',
    intlId: 'material.scenario',
    hideInSearch: true, // Hide from search filter
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
    dataIndex: 'specGroup',
    intlId: 'material.specGroup',
    hideInSearch: true, // Hi
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
    hideInSearch: true, // Hi
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
    hideInSearch: true, // Hi
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
    dataIndex: 'parentId',
    visibility: {
      inForm: true,
    },
    form: {
      hidden: true,
    },
  },
  {
    dataIndex: 'processId',
    intlId: 'material.process', // Use the same title as the 'process' field.
    hideInTable: true, // CRITICAL: Hides the column from the table view.
    valueType: 'select', // Renders as a select dropdown in the search filter.
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
    fieldProps: (form: any) => ({
      onChange: () => {
        form.setFieldValue('scenarioId', undefined);
        form.setFieldValue('specTypeId', undefined);
      },
      placeholder: '请选择工序',
    }),
    visibility: {
      inTable: true, // CRITICAL: Allows this definition to pass the `buildTableColumns` filter.
      inForm: false, // CRITICAL: Prevents this from appearing on the separate Edit page.
    },
  },

  {
    dataIndex: 'scenarioId',
    intlId: 'material.scenario',
    hideInTable: true,
    valueType: 'select',
    dependencies: ['processId'], // CRITICAL: This triggers the re-fetch when processId changes
    request: async (params) => {
      if (!params.processId) {
        return [];
      }
      const res = await getScenarios(
        {
          current: 1,
          pageSize: 99,
        },
        undefined,
        { processId: params.processId } as ScenarioFilter,
      );
      if (res && res.data) {
        return res.data.map((s) => ({
          label: s.name,
          value: s.id,
        }));
      }
      return [];
    },
    visibility: {
      inTable: true, // Pass the builder filter
      inForm: false, // Do not show on edit page
    },
  },
  {
    dataIndex: 'specTypeId',
    intlId: 'material.specType',
    hideInTable: true,
    valueType: 'select',
    dependencies: ['processId'], // CRITICAL: This triggers the re-fetch when processId changes
    request: async (params) => {
      // It depends on processId. If processId is not selected, do not fetch.
      if (!params.processId) {
        return [];
      }
      const res = await getSpecTypes(
        {
          current: 1,
          pageSize: 99,
        },
        undefined,
        { processId: params.processId } as SpecTypeFilter,
      );
      if (res && res.data) {
        return res.data.map((s) => ({
          label: s.name,
          value: s.id,
        }));
      }
      return [];
    },
    fieldProps: (form: any) => ({
      onChange: () => {
        form.setFieldValue('specGroupId', undefined);
      },
      placeholder: '请选择规格分类',
    }),
    visibility: {
      inTable: true, // Pass the builder filter
      inForm: false, // Do not show on edit page
    },
  },
  {
    dataIndex: 'specGroupId',
    intlId: 'material.specGroup',
    hideInTable: true,
    valueType: 'select',
    dependencies: ['specTypeId'], // CRITICAL: This triggers the re-fetch when processId changes
    request: async (params) => {
      // It depends on processId. If processId is not selected, do not fetch.
      if (!params.specTypeId) {
        return [];
      }
      const res = await getSpecGroups(
        {
          current: 1,
          pageSize: 98,
        },
        undefined,
        { specTypeId: params.specTypeId } as SpecGroupFilter,
      );
      if (res && res.data) {
        return res.data.map((s) => ({
          label: s.name,
          value: s.id,
        }));
      }
      return [];
    },
    visibility: {
      inTable: true, // Pass the builder filter
      inForm: false, // Do not show on edit page
    },
  },
  {
    dataIndex: 'valueLevelId',
    intlId: 'material.value',
    hideInTable: true,
    valueType: 'select',
    request: async (params) => {
      // It depends on processId. If processId is not selected, do not fetch.
      const res = await getValueLevels(
        {
          current: 1,
          pageSize: 97,
        },
        undefined,
        undefined,
      );
      if (res && res.data) {
        return res.data.map((s) => ({
          label: s.name,
          value: s.id,
        }));
      }
      return [];
    },
    visibility: {
      inTable: true, // Pass the builder filter
      inForm: false, // Do not show on edit page
    },
  },
];
