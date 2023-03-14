import React from 'react';
import { Trans } from 'react-i18next';
import { Link } from 'react-router-dom';
import ForkliftEmptyState from 'src/components/empty-states/ForkliftEmptyState';
import automationIcon from 'src/components/empty-states/images/automation.svg';
import { HELP_LINK_HREF } from 'src/utils/constants';
import { useTranslation } from 'src/utils/i18n';

import { PROVIDERS_REFERENCE } from '@kubev2v/legacy/common/constants';
import { createK8sPath } from '@kubev2v/legacy/queries/helpers';
import { Flex, FlexItem } from '@patternfly/react-core';

import { useHasSufficientProviders } from '../Providers/data';

const AutomationIcon = () => <img src={automationIcon} className="forklift-empty-state__icon" />;

const EmptyStatePlans: React.FC<{ namespace: string }> = ({ namespace }) => {
  const { t } = useTranslation();

  const hasSufficientProviders = useHasSufficientProviders(namespace);

  return (
    <ForkliftEmptyState
      icon={AutomationIcon}
      title={t('No StorageMaps found.')}
      textContent={
        !hasSufficientProviders && (
          <Flex direction={{ default: 'column' }}>
            <FlexItem>
              <Trans t={t} ns="plugin__forklift-console-plugin">
                Migration storage maps are used to map storage interfaces between source and traget
                workloads. <a href={HELP_LINK_HREF}>Learn more</a>
              </Trans>
            </FlexItem>
            <FlexItem>
              <Trans t={t} ns="plugin__forklift-console-plugin">
                Go to the{' '}
                <Link to={createK8sPath(PROVIDERS_REFERENCE, namespace)}>providers list page</Link>{' '}
                to create a provider.
              </Trans>
            </FlexItem>
          </Flex>
        )
      }
    />
  );
};

export default EmptyStatePlans;
