import React from 'react';
import * as C from 'src/utils/constants';
import { MAPPING_STATUS } from 'src/utils/enums';
import { useTranslation } from 'src/utils/i18n';

import { getResourceFieldValue } from '@kubev2v/common';
import { RowProps } from '@kubev2v/common';
import { MappingDetailView } from '@kubev2v/legacy/Mappings/components/MappingDetailView';
import { Mapping, MappingType } from '@kubev2v/legacy/queries/types';
import {
  GreenCheckCircleIcon,
  RedExclamationCircleIcon,
  ResourceLink,
} from '@openshift-console/dynamic-plugin-sdk';
import { Label } from '@patternfly/react-core';
import spacing from '@patternfly/react-styles/css/utilities/Spacing/spacing';
import { ExpandableRowContent, Td, Tr } from '@patternfly/react-table';

import { StatusCell } from '../cells/StatusCell';

import { CommonMapping } from './data';

import './styles.css';
export interface CellProps<T extends CommonMapping> {
  value: string;
  resourceData: T;
  currentNamespace: string;
  t: (key: string, params?: { [k: string]: string | number }) => string;
}

const TextCell = ({ value }: CellProps<CommonMapping>) => <>{value ?? ''}</>;

export const SourceCell = ({
  itemsInFirstGroup = [],
  groups = [],
  Icon,
}: {
  itemsInFirstGroup: unknown[];
  groups: unknown[];
  Icon: React.ComponentClass;
}) => {
  const { t } = useTranslation();
  const isSingleGroup = groups.length === 1;
  return (
    <>
      <Icon /> {/*keep ' ' spacer */}
      {isSingleGroup && itemsInFirstGroup.length}
      {!isSingleGroup && t('{{groupCount}} Groups', { groupCount: groups.length })}
    </>
  );
};

export type CellCreator<T extends CommonMapping> = Record<
  string,
  (props: CellProps<T>) => JSX.Element
>;

const NameCell: React.FC<CellProps<CommonMapping>> = ({ resourceData }) => {
  const { t } = useTranslation();

  return (
    <span className="forklift-table__flex-cell">
      <ResourceLink
        groupVersionKind={resourceData.gvk}
        name={resourceData.name}
        namespace={resourceData.namespace}
      />
      {resourceData.managed && (
        <Label isCompact color="grey" className="forklift-table__flex-cell-label">
          {t('managed')}
        </Label>
      )}
    </span>
  );
};

const MappingStatusCell: React.FC<CellProps<CommonMapping>> = ({ resourceData }) => {
  const { t } = useTranslation();

  return (
    <StatusCell
      conditions={resourceData.conditions}
      icon={
        resourceData.status === 'Ready' ? <GreenCheckCircleIcon /> : <RedExclamationCircleIcon />
      }
      label={MAPPING_STATUS(t)[resourceData.status] ?? t('Not Ready')}
    />
  );
};

export const commonCells: CellCreator<CommonMapping> = {
  [C.NAME]: NameCell,
  [C.SOURCE]: ({ resourceData: e }: CellProps<CommonMapping>) => (
    <ResourceLink groupVersionKind={e.sourceGvk} name={e.source} namespace={e.namespace} />
  ),
  [C.TARGET]: ({ resourceData: e }: CellProps<CommonMapping>) => (
    <ResourceLink groupVersionKind={e.targetGvk} name={e.target} namespace={e.namespace} />
  ),
  [C.NAMESPACE]: ({ value }: CellProps<CommonMapping>) => (
    <ResourceLink kind="Namespace" name={value} />
  ),
  [C.STATUS]: MappingStatusCell,
};

function MappingRow<T extends CommonMapping>({
  rowProps: {
    isSelected,
    toggleSelect,
    resourceFields,
    resourceData,
    namespace: currentNamespace,
    resourceIndex: rowIndex,
  },
  cellCreator,
  mappingType,
  mapping,
}: {
  rowProps: RowProps<T>;
  cellCreator: CellCreator<T>;
  mappingType: MappingType;
  mapping: Mapping;
}) {
  const { t } = useTranslation();

  return (
    <>
      <Tr ouiaId={undefined} ouiaSafe={undefined}>
        <Td
          select={{
            rowIndex,
            onSelect: toggleSelect,
            isSelected,
          }}
        />
        {resourceFields.map(({ resourceFieldId, label }) => {
          const Cell = cellCreator[resourceFieldId] ?? TextCell;
          return (
            <Td
              key={resourceFieldId}
              dataLabel={label}
              compoundExpand={
                resourceFieldId === C.FROM || resourceFieldId === C.TO
                  ? { isExpanded: isSelected, onToggle: toggleSelect }
                  : undefined
              }
            >
              <Cell
                value={String(
                  getResourceFieldValue(resourceData, resourceFieldId, resourceFields) ?? '',
                )}
                resourceData={resourceData}
                t={t}
                currentNamespace={currentNamespace}
              />
            </Td>
          );
        })}
      </Tr>
      <Tr isExpanded={isSelected} ouiaId={undefined} ouiaSafe={undefined}>
        <Td dataLabel={t('Mapping graph')} noPadding colSpan={resourceFields.length}>
          {isSelected && (
            <ExpandableRowContent>
              <MappingDetailView
                mappingType={mappingType}
                mapping={mapping}
                className={spacing.mLg}
              />
            </ExpandableRowContent>
          )}
        </Td>
      </Tr>
    </>
  );
}

export default MappingRow;
