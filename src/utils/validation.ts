import type { IntlShape } from 'react-intl';

export const validationRules = (intl: IntlShape) => {
  const format = (id?: string) => (id ? intl.formatMessage({ id }) : '');

  return {
    required: (fieldId?: string) => ({
      required: true,
      message: intl.formatMessage(
        { id: 'common.err.required' },
        { field: format(fieldId) },
      ),
    }),
    length: (min: number, max: number, fieldId?: string) => ({
      min,
      max,
      message: intl.formatMessage(
        { id: 'common.err.length.range' },
        { field: format(fieldId), min, max },
      ),
    }),
    ip: (fieldId?: string) => ({
      pattern:
        /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/,
      message: intl.formatMessage(
        { id: 'common.err.pattern' },
        { field: format(fieldId) },
      ),
    }),
    phone: (fieldId?: string) => ({
      pattern: /^1[3456789]\d{9}$/,
      message: intl.formatMessage(
        { id: 'common.err.pattern' },
        { field: format(fieldId) },
      ),
    }),
    email: (fieldId?: string) => ({
      pattern: /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/,
      message: intl.formatMessage(
        { id: 'common.err.pattern' },
        { field: format(fieldId) },
      ),
    }),
  };
};
