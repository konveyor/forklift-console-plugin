/* eslint-disable @cspell/spellchecker */
import { OpenshiftVM, OVirtVM, VSphereVM } from '@kubev2v/types';

import { NAMESPACE_FORKLIFT } from '../utils';

import { MOCK_DISK_ATTACHMENTS } from './disks.mock';
import { MOCK_NICS } from './nicProfiles.mock';
import {
  OPENSHIFT_01_UID,
  OPENSHIFT_02_UID,
  OPENSHIFT_03_UID,
  OPENSHIFT_HOST_UID,
  OpenshiftProviderIDs,
  OVIRT_01_UID,
  OVIRT_02_UID,
  OVIRT_03_UID,
  OVIRT_INSECURE_UID,
  OvirtProviderIDs,
  VMWARE_01_UID,
  VMWARE_02_UID,
  VMWARE_03_UID,
  VmwareProviderIDs,
} from './providers.mock';

const vm1: VSphereVM = {
  id: 'vm-1630',
  powerState: 'poweredOn',
  revision: 1,
  name: 'test-migration',
  selfLink: `providers/vsphere/${VMWARE_01_UID}/vms/vm-1630`,
  networks: [{ kind: 'Network', id: '1' }],
  disks: [
    {
      datastore: { kind: 'Datastore', id: '1' },
      capacity: 1024,
      file: 'test_file',
      key: 1,
      rdm: false,
      shared: false,
    },
    {
      datastore: { kind: 'Datastore', id: '1' },
      capacity: 1024,
      file: 'test_file',
      key: 1,
      rdm: false,
      shared: false,
    },
  ],
  concerns: [
    {
      category: 'Warning',
      label: 'Shareable disk detected',
      assessment:
        'Shared disks are only supported by certain OpenShift Virtualization storage configurations. Ensure that the correct storage is selected for the disk.',
    },
    {
      category: 'Warning',
      label: 'VM running in HA-enabled cluster',
      assessment:
        'Host/Node HA is not currently supported by OpenShift Virtualization. The VM can be migrated but it will not have this feature in the target environment.',
    },
    {
      category: 'Information',
      label: 'VM running in a DRS-enabled cluster',
      assessment:
        'Distributed resource scheduling is not currently supported by OpenShift Virtualization. The VM can be migrated but it will not have this feature in the target environment.',
    },
    {
      category: 'Information',
      label: 'VM snapshot detected',
      assessment: 'Warm migration may not be possible for this VM',
    },
  ],
  revisionValidated: 1,
  isTemplate: false,
  host: 'esx12.v2v.example.com',
  parent: null,
  providerType: 'vsphere',
};

export const MOCK_VMWARE_VMS: { [uid in VmwareProviderIDs]: VSphereVM[] } = {
  [VMWARE_01_UID]: [
    vm1,
    {
      ...vm1,
      id: 'vm-template-test',
      name: 'vm-template-test',
      selfLink: '/providers/vsphere/test/vms/vm-template-test',
      isTemplate: true,
    },
    {
      id: 'vm-2844',
      powerState: 'poweredOff',
      revision: 1,
      name: 'test-migration-2',
      selfLink: `providers/vsphere/${VMWARE_01_UID}/vms/vm-2844`,
      networks: [{ kind: 'Network', id: '1' }],
      disks: [
        {
          datastore: { kind: 'Datastore', id: '2' },
          capacity: 1024,
          file: 'test_file',
          key: 1,
          rdm: false,
          shared: false,
        },
      ],
      concerns: [
        { category: 'Information', label: 'Example', assessment: 'You should know something' },
      ],
      revisionValidated: 1,
      isTemplate: false,
      host: 'esx12.v2v.example.com',
      parent: null,
      providerType: 'vsphere',
    },
    {
      id: 'vm-1008',
      powerState: 'poweredOn',
      revision: 1,
      name: 'test-migration-centos',
      selfLink: `providers/vsphere/${VMWARE_01_UID}/vms/vm-1008`,
      networks: [
        { kind: 'Network', id: '1' },
        { kind: 'Network', id: '2' },
      ],
      disks: [
        {
          datastore: { kind: 'Datastore', id: '1' },
          capacity: 1024,
          file: 'test_file',
          key: 1,
          rdm: false,
          shared: false,
        },
      ],
      concerns: [
        { category: 'Critical', label: 'Example', assessment: 'Something is really bad' },
        {
          category: 'Warning',
          label: 'Changed Block Tracking (CBT) not enabled',
          assessment:
            'Changed Block Tracking (CBT) has not been enabled on this VM. This feature is a prerequisite for VM warm migration.',
        },
      ],
      revisionValidated: 1,
      isTemplate: false,
      host: 'esx13.v2v.example.com',
      parent: null,
      providerType: 'vsphere',
    },
    {
      id: 'vm-2686',
      powerState: 'poweredOn',
      revision: 2,
      name: 'pemcg-discovery02',
      selfLink: `providers/vsphere/${VMWARE_01_UID}/vms/vm-2686`,
      networks: [{ kind: 'Network', id: '1' }],
      disks: [
        {
          datastore: { kind: 'Datastore', id: '2' },
          capacity: 1024,
          file: 'test_file',
          key: 1,
          rdm: false,
          shared: false,
        },
      ],
      concerns: [{ category: 'Warning', label: 'Example', assessment: 'Something is wrong' }],
      revisionValidated: 1,
      isTemplate: false,
      host: 'esx13.v2v.example.com',
      parent: null,
      providerType: 'vsphere',
    },
  ],
  [VMWARE_02_UID]: [],
  [VMWARE_03_UID]: [
    {
      id: 'vm-2685',
      powerState: 'poweredOn',
      revision: 2,
      name: 'pemcg-discovery01',
      selfLink: `providers/vsphere/${VMWARE_03_UID}/vms/vm-2685`,
      networks: [{ kind: 'Network', id: '1' }],
      disks: [
        {
          datastore: { kind: 'Datastore', id: '2' },
          capacity: 1024,
          file: 'test_file',
          key: 1,
          rdm: false,
          shared: false,
        },
      ],
      concerns: [{ category: 'Warning', label: 'Example', assessment: 'Something is wrong' }],
      revisionValidated: 1,
      isTemplate: false,
      host: '',
      parent: null,
      providerType: 'vsphere',
    },
    {
      id: 'vm-431',
      powerState: 'poweredOff',
      revision: 1,
      name: 'pemcg-iscsi-target',
      selfLink: `providers/vsphere/${VMWARE_03_UID}/vms/vm-431`,
      networks: [
        { kind: 'Network', id: '1' },
        { kind: 'Network', id: 'network-33' },
      ],
      disks: [
        {
          datastore: { kind: 'Datastore', id: '3' },
          capacity: 1024,
          file: 'test_file',
          key: 1,
          rdm: false,
          shared: false,
        },
        {
          datastore: { kind: 'Datastore', id: '3' },
          capacity: 1024,
          file: 'test_file',
          key: 1,
          rdm: false,
          shared: false,
        },
      ],
      concerns: [],
      revisionValidated: 1,
      isTemplate: false,
      host: '',
      parent: null,
      providerType: 'vsphere',
    },
  ],
};

export const MOCK_RHV_VMS: { [uid in OvirtProviderIDs]: OVirtVM[] } = {
  [OVIRT_01_UID]: [
    {
      id: '3dcaf3ec-6b51-4ca0-8345-6d61841731d7',
      status: 'up',
      revision: 1,
      path: 'main/cfme-5.11.9.0-1',
      name: 'cfme-5.11.9.0-1',
      selfLink: `providers/ovirt/${OVIRT_01_UID}/vms/3dcaf3ec-6b51-4ca0-8345-6d61841731d7`,
      revisionValidated: 0,
      nics: [MOCK_NICS[OVIRT_01_UID][0]],
      diskAttachments: [MOCK_DISK_ATTACHMENTS[OVIRT_01_UID][0]],
      concerns: [],
      cluster: 'main',
      host: 'host.example.com',
      providerType: 'ovirt',
    },
    {
      id: '2a66a719-440c-4544-9da0-692d14338b12',
      status: 'down',
      revision: 1,
      path: 'main/dev-rhel8',
      name: 'dev-rhel8',
      selfLink: `providers/ovirt/${OVIRT_01_UID}/vms/2a66a719-440c-4544-9da0-692d14338b12`,
      revisionValidated: 0,
      nics: [MOCK_NICS[OVIRT_01_UID][1]],
      diskAttachments: [MOCK_DISK_ATTACHMENTS[OVIRT_01_UID][0]],
      concerns: [],
      cluster: 'main',
      host: 'host.example.com',
      providerType: 'ovirt',
    },
    {
      id: '64333a40-ffbb-4c28-add7-5560bdf082fb',
      status: 'up',
      revision: 1,
      path: 'main/management-dev',
      name: 'management-dev',
      selfLink: `providers/ovirt/${OVIRT_01_UID}/vms/64333a40-ffbb-4c28-add7-5560bdf082fb`,
      revisionValidated: 0,
      nics: [...MOCK_NICS[OVIRT_01_UID]],
      diskAttachments: [],
      concerns: [],
      cluster: 'main',
      host: 'host-2.example.com',
      providerType: 'ovirt',
    },
    {
      id: '6f9de857-ef39-43b7-8853-af982286dc59',
      status: 'up',
      revision: 1,
      path: 'main/isolated-vm',
      name: 'isolated-vm',
      selfLink: `providers/ovirt/${OVIRT_01_UID}/vms/6f9de857-ef39-43b7-8853-af982286dc59`,
      revisionValidated: 0,
      nics: [],
      diskAttachments: [],
      concerns: [],
      cluster: 'main',
      host: 'host-2.example.com',
      providerType: 'ovirt',
    },
  ],
  [OVIRT_02_UID]: [
    {
      id: '6f9de857-ef39-43b7-8853-af982286dc59',
      status: 'down',
      revision: 1,
      path: 'Default/one',
      name: 'one',
      selfLink: `providers/ovirt/${OVIRT_02_UID}/vms/6f9de857-ef39-43b7-8853-af982286dc59`,
      revisionValidated: 0,
      nics: [MOCK_NICS[OVIRT_02_UID][0]],
      diskAttachments: [MOCK_DISK_ATTACHMENTS[OVIRT_02_UID][0]],
      concerns: [],
      cluster: '',
      host: '',
      providerType: 'ovirt',
    },
  ],
  [OVIRT_03_UID]: [
    {
      id: 'b3eb91d4-2c42-4dc6-98fb-fee94f1df30d',
      status: 'up',
      revision: 1,
      path: 'dc1/server.example.com',
      name: 'server.example.com',
      selfLink: `providers/ovirt/${OVIRT_03_UID}/vms/b3eb91d4-2c42-4dc6-98fb-fee94f1df30d`,
      revisionValidated: 0,
      nics: [...MOCK_NICS[OVIRT_03_UID]],
      diskAttachments: [...MOCK_DISK_ATTACHMENTS[OVIRT_03_UID]],
      concerns: [],
      cluster: '',
      host: '',
      providerType: 'ovirt',
    },
    {
      id: 'be55c259-2415-448d-841e-f4b9d743242e',
      status: 'up',
      revision: 1,
      path: 'dc2/engine',
      name: 'engine',
      selfLink: `providers/ovirt/${OVIRT_03_UID}/vms/be55c259-2415-448d-841e-f4b9d743242e`,
      revisionValidated: 0,
      nics: [...MOCK_NICS[OVIRT_03_UID]],
      diskAttachments: [...MOCK_DISK_ATTACHMENTS[OVIRT_03_UID]],
      concerns: [],
      cluster: '',
      host: '',
      providerType: 'ovirt',
    },
  ],
  [OVIRT_INSECURE_UID]: [
    {
      id: 'bea5f184-972e-44e2-811a-2357829ab590',
      status: 'up',
      revision: 1,
      path: 'dc/demo-vm',
      name: 'demo-vm',
      selfLink: `providers/ovirt/${OVIRT_INSECURE_UID}/vms/bea5f184-972e-44e2-811a-2357829ab590`,
      revisionValidated: 0,
      nics: [MOCK_NICS[OVIRT_INSECURE_UID][0]],
      diskAttachments: [MOCK_DISK_ATTACHMENTS[OVIRT_INSECURE_UID][0]],
      concerns: [],
      cluster: '',
      host: '',
      providerType: 'ovirt',
    },
  ],
};

export const MOCK_OPENSHIFT_VMS: { [uid in OpenshiftProviderIDs]: OpenshiftVM[] } = {
  [OPENSHIFT_01_UID]: [],
  [OPENSHIFT_02_UID]: [],
  [OPENSHIFT_03_UID]: [],
  [OPENSHIFT_HOST_UID]: [
    // source: https://kubevirt.io/user-guide/virtual_machines/templates/
    {
      name: 'rheltinyvm',
      namespace: NAMESPACE_FORKLIFT,
      selfLink: `providers/openshift/${OPENSHIFT_HOST_UID}/vms/3dcaf3ec-6b51-4ca0-8345-6d61841731d7`,
      uid: '',
      version: '',
      object: {
        kind: 'VirtualMachine',
        apiVersion: 'kubevirt.io/v1',
        metadata: {
          annotations: {
            ['vm.kubevirt.io/flavor']: 'tiny',
            ['vm.kubevirt.io/os']: 'rhel8',
            ['vm.kubevirt.io/validations']: `
              {
                name: 'minimal-required-memory',
                path: 'jsonpath::.spec.domain.resources.requests.memory',
                rule: 'integer',
                message: 'This VM requires more memory.',
                min: 1610612736,
              }`,
            ['vm.kubevirt.io/workload']: 'server',
          },
          labels: {
            app: 'rheltinyvm',
            ['vm.kubevirt.io/template']: 'rhel8-server-tiny',
            ['vm.kubevirt.io/template.revision']: '45',
            ['vm.kubevirt.io/template.version']: '0.11.3',
          },
          name: 'rheltinyvm',
          namespace: NAMESPACE_FORKLIFT,
        },
        spec: {
          dataVolumeTemplates: [
            {
              apiVersion: 'cdi.kubevirt.io/v1beta1',
              kind: 'DataVolume',
              metadata: {
                name: 'rheltinyvm',
              },
              spec: {
                pvc: {
                  accessModes: ['ReadWriteMany'],
                  resources: {
                    requests: {
                      storage: '30Gi',
                    },
                  },
                },
                source: {
                  pvc: {
                    name: 'rhel',
                    namespace: 'kubevirt',
                  },
                },
              },
            },
          ],
          running: false,
          template: {
            metadata: {
              labels: {
                ['kubevirt.io/domain']: 'rheltinyvm',
                ['kubevirt.io/size']: 'tiny',
              },
            },
            spec: {
              domain: {
                cpu: {
                  cores: 1,
                  sockets: 1,
                  threads: 1,
                },
                devices: {
                  disks: [
                    {
                      disk: {
                        bus: 'virtio',
                      },
                      name: 'rheltinyvm',
                    },
                    {
                      disk: {
                        bus: 'virtio',
                      },
                      name: 'cloudinitdisk',
                    },
                  ],
                  interfaces: [
                    {
                      masquerade: {},
                      name: 'default',
                    },
                  ],
                  networkInterfaceMultiqueue: true,
                  rng: {},
                },
                resources: {
                  requests: {
                    memory: '1.5Gi',
                  },
                },
              },
              networks: [{ name: 'default', pod: {} }],
              terminationGracePeriodSeconds: 180,
              volumes: [
                {
                  dataVolume: {
                    name: 'rheltinyvm',
                  },
                  name: 'rheltinyvm',
                },
              ],
            },
          },
        },
      },
      providerType: 'openshift',
    },
  ],
};
