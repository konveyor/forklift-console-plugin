import React, { useState } from 'react';
import * as C from 'src/utils/constants';
import { PROVIDER_STATUS, PROVIDERS } from 'src/utils/enums';
import { useTranslation } from 'src/utils/i18n';
import { groupVersionKindForReference } from 'src/utils/resources';
import { ResourceConsolePageProps } from 'src/utils/types';

import { fromI18nEnum } from '@kubev2v/common/components/Filter/helpers';
import withQueryClient from '@kubev2v/common/components/QueryClientHoc';
import {
  loadUserSettings,
  StandardPage,
  UserSettings,
} from '@kubev2v/common/components/StandardPage';
import { Field } from '@kubev2v/common/components/types';
import { useModal } from '@kubev2v/common/polyfills/sdk-shim';
import { ProviderType, SOURCE_PROVIDER_TYPES } from '@kubev2v/legacy/common/constants';
import { AddEditProviderModal } from '@kubev2v/legacy/Providers/components/AddEditProviderModal';
import { Button } from '@patternfly/react-core';

import { MergedProvider, useProvidersWithInventory } from './data';
import EmptyStateProviders from './EmptyStateProviders';
import ProviderRow from './ProviderRow';

export const fieldsMetadata: Field[] = [
  {
    id: C.NAME,
    jsonPath: '$.metadata.name',
    toLabel: (t) => t('Name'),
    isVisible: true,
    isIdentity: true, // Name is sufficient ID when Namespace is pre-selected
    filter: {
      type: 'freetext',
      toPlaceholderLabel: (t) => t('Filter by name'),
    },
    sortable: true,
  },
  {
    id: C.NAMESPACE,
    jsonPath: '$.metadata.namespace',
    toLabel: (t) => t('Namespace'),
    isVisible: true,
    isIdentity: true,
    filter: {
      type: 'freetext',
      toPlaceholderLabel: (t) => t('Filter by namespace'),
    },
    sortable: true,
  },
  {
    id: C.PHASE,
    jsonPath: '$.status.phase',
    toLabel: (t) => t('Status'),
    isVisible: true,
    filter: {
      type: 'enum',
      primary: true,
      toPlaceholderLabel: (t) => t('Status'),
      values: fromI18nEnum(PROVIDER_STATUS),
    },
    sortable: true,
  },
  {
    id: C.URL,
    jsonPath: '$.spec.url',
    toLabel: (t) => t('Endpoint'),
    isVisible: true,
    filter: {
      type: 'freetext',
      toPlaceholderLabel: (t) => t('Filter by endpoint'),
    },
    sortable: true,
  },
  {
    id: C.TYPE,
    jsonPath: '$.spec.type',
    toLabel: (t) => t('Type'),
    isVisible: true,
    filter: {
      type: 'groupedEnum',
      primary: true,
      toPlaceholderLabel: (t) => t('Type'),
      values: fromI18nEnum(PROVIDERS).map(({ id, ...rest }) => ({
        id,
        groupId: SOURCE_PROVIDER_TYPES.includes(id as ProviderType) ? 'source' : 'target',
        ...rest,
      })),
      groups: [
        { groupId: 'target', toLabel: (t) => t('Target') },
        { groupId: 'source', toLabel: (t) => t('Source') },
      ],
    },
    sortable: true,
  },
  {
    id: C.VM_COUNT,
    jsonPath: '$.inventory.vmCount',
    toLabel: (t) => t('VMs'),
    isVisible: true,
    sortable: true,
  },
  {
    id: C.NETWORK_COUNT,
    jsonPath: '$.inventory.networkCount',
    toLabel: (t) => t('Networks'),
    isVisible: true,
    sortable: true,
  },
  {
    id: C.CLUSTER_COUNT,
    toLabel: (t) => t('Clusters'),
    jsonPath: '$.inventory.clusterCount',
    isVisible: false,
    sortable: true,
  },
  {
    id: C.HOST_COUNT,
    jsonPath: '$.inventory.hostCount',
    toLabel: (t) => t('Hosts'),
    isVisible: true,
    sortable: true,
  },
  {
    id: C.STORAGE_COUNT,
    toLabel: (t) => t('Storage'),
    jsonPath: '$.inventory.storageCount',
    isVisible: false,
    sortable: true,
  },
  {
    id: C.ACTIONS,
    toLabel: () => '',
    isAction: true,
    isVisible: true,
    sortable: false,
  },
];

const ProvidersPage: React.FC<ResourceConsolePageProps> = ({ namespace, kind: reference }) => {
  const { t } = useTranslation();
  const [userSettings] = useState(() => loadUserSettings({ pageId: 'Providers' }));
  const dataSource = useProvidersWithInventory({
    namespace,
    groupVersionKind: groupVersionKindForReference(reference),
  });

  // data hook triggers frequent re-renders although data remains the same:
  // both the content content and object reference
  return (
    <PageMemo
      dataSource={dataSource}
      namespace={namespace}
      title={t('Providers')}
      userSettings={userSettings}
    />
  );
};
ProvidersPage.displayName = 'ProvidersPage';

const Page: React.FC<{
  dataSource: [MergedProvider[], boolean, boolean];
  namespace: string;
  title: string;
  userSettings: UserSettings;
}> = ({ dataSource, namespace, title, userSettings }) => {
  const [data, loaded, error] = dataSource;
  const loadedDataIsEmpty = loaded && !error && data?.length === 0;

  return loadedDataIsEmpty ? (
    <EmptyStateProviders namespace={namespace} />
  ) : (
    <StandardPage<MergedProvider>
      addButton={<AddProviderButton namespace={namespace} />}
      dataSource={dataSource}
      RowMapper={ProviderRow}
      fieldsMetadata={fieldsMetadata}
      namespace={namespace}
      title={title}
      userSettings={userSettings}
    />
  );
};

const PageMemo = React.memo(Page);

const AddProviderButton: React.FC<{ namespace: string }> = ({ namespace }) => {
  const { t } = useTranslation();
  const launchModal = useModal();

  return (
    <Button
      variant="primary"
      onClick={() =>
        launchModal(withQueryClient(AddProviderModal), { currentNamespace: namespace })
      }
    >
      {t('Create Provider')}
    </Button>
  );
};
AddProviderButton.displayName = 'AddProviderButton';

const AddProviderModal: React.FC<{
  currentNamespace: string;
  closeModal: () => void;
}> = ({ closeModal, currentNamespace }) => {
  return (
    <AddEditProviderModal
      onClose={closeModal}
      providerBeingEdited={null}
      namespace={currentNamespace}
    />
  );
};
AddProviderModal.displayName = 'AddProviderModal';

export default ProvidersPage;
export { AddProviderButton };
