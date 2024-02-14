/* tslint:disable */
/* eslint-disable */
/**
 * KubeVirt API
 * This is KubeVirt API an add-on for Kubernetes.
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: kubevirt-dev@googlegroups.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../../runtime';
import type { V1alpha1Condition } from './V1alpha1Condition';
import {
    V1alpha1ConditionFromJSON,
    V1alpha1ConditionFromJSONTyped,
    V1alpha1ConditionToJSON,
} from './V1alpha1Condition';
import type { V1alpha1VirtualMachineExportLinks } from './V1alpha1VirtualMachineExportLinks';
import {
    V1alpha1VirtualMachineExportLinksFromJSON,
    V1alpha1VirtualMachineExportLinksFromJSONTyped,
    V1alpha1VirtualMachineExportLinksToJSON,
} from './V1alpha1VirtualMachineExportLinks';

/**
 * VirtualMachineExportStatus is the status for a VirtualMachineExport resource
 * @export
 * @interface V1alpha1VirtualMachineExportStatus
 */
export interface V1alpha1VirtualMachineExportStatus {
    /**
     * 
     * @type {Array<V1alpha1Condition>}
     * @memberof V1alpha1VirtualMachineExportStatus
     */
    conditions?: Array<V1alpha1Condition>;
    /**
     * 
     * @type {V1alpha1VirtualMachineExportLinks}
     * @memberof V1alpha1VirtualMachineExportStatus
     */
    links?: V1alpha1VirtualMachineExportLinks;
    /**
     * 
     * @type {string}
     * @memberof V1alpha1VirtualMachineExportStatus
     */
    phase?: string;
    /**
     * ServiceName is the name of the service created associated with the Virtual Machine export. It will be used to create the internal URLs for downloading the images
     * @type {string}
     * @memberof V1alpha1VirtualMachineExportStatus
     */
    serviceName?: string;
    /**
     * TokenSecretRef is the name of the secret that contains the token used by the export server pod
     * @type {string}
     * @memberof V1alpha1VirtualMachineExportStatus
     */
    tokenSecretRef?: string;
    /**
     * Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
     * @type {Date}
     * @memberof V1alpha1VirtualMachineExportStatus
     */
    ttlExpirationTime?: string;
    /**
     * VirtualMachineName shows the name of the source virtual machine if the source is either a VirtualMachine or a VirtualMachineSnapshot. This is mainly to easily identify the source VirtualMachine in case of a VirtualMachineSnapshot
     * @type {string}
     * @memberof V1alpha1VirtualMachineExportStatus
     */
    virtualMachineName?: string;
}

/**
 * Check if a given object implements the V1alpha1VirtualMachineExportStatus interface.
 */
export function instanceOfV1alpha1VirtualMachineExportStatus(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function V1alpha1VirtualMachineExportStatusFromJSON(json: any): V1alpha1VirtualMachineExportStatus {
    return V1alpha1VirtualMachineExportStatusFromJSONTyped(json, false);
}

export function V1alpha1VirtualMachineExportStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1alpha1VirtualMachineExportStatus {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'conditions': !exists(json, 'conditions') ? undefined : ((json['conditions'] as Array<any>).map(V1alpha1ConditionFromJSON)),
        'links': !exists(json, 'links') ? undefined : V1alpha1VirtualMachineExportLinksFromJSON(json['links']),
        'phase': !exists(json, 'phase') ? undefined : json['phase'],
        'serviceName': !exists(json, 'serviceName') ? undefined : json['serviceName'],
        'tokenSecretRef': !exists(json, 'tokenSecretRef') ? undefined : json['tokenSecretRef'],
        'ttlExpirationTime': !exists(json, 'ttlExpirationTime') ? undefined : json['ttlExpirationTime'],
        'virtualMachineName': !exists(json, 'virtualMachineName') ? undefined : json['virtualMachineName'],
    };
}

export function V1alpha1VirtualMachineExportStatusToJSON(value?: V1alpha1VirtualMachineExportStatus | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'conditions': value.conditions === undefined ? undefined : ((value.conditions as Array<any>).map(V1alpha1ConditionToJSON)),
        'links': V1alpha1VirtualMachineExportLinksToJSON(value.links),
        'phase': value.phase,
        'serviceName': value.serviceName,
        'tokenSecretRef': value.tokenSecretRef,
        'ttlExpirationTime': value.ttlExpirationTime === undefined ? undefined : (value.ttlExpirationTime),
        'virtualMachineName': value.virtualMachineName,
    };
}

