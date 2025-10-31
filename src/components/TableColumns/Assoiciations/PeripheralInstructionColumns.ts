import type { IntlShape } from 'react-intl';
import type { CustomProColumns } from '@/components/Common/Pages/List/typing';
import { buildTableColumns } from '@/components/TableEntities/Builder';
import { PeripheralInstructionEntity } from '@/components/TableEntities/PeripheralInstructionEntity';
import type { Instruction } from '@/services/Device/Peripheral/data';

export const getPeripheralInstructionColumns = (
  intl: IntlShape,
): CustomProColumns<Instruction>[] =>
  buildTableColumns(PeripheralInstructionEntity, intl);
