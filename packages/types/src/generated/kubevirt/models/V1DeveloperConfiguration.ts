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
import type { V1DiskVerification } from './V1DiskVerification';
import {
    V1DiskVerificationFromJSON,
    V1DiskVerificationFromJSONTyped,
    V1DiskVerificationToJSON,
} from './V1DiskVerification';
import type { V1LogVerbosity } from './V1LogVerbosity';
import {
    V1LogVerbosityFromJSON,
    V1LogVerbosityFromJSONTyped,
    V1LogVerbosityToJSON,
} from './V1LogVerbosity';

/**
 * DeveloperConfiguration holds developer options
 * @export
 * @interface V1DeveloperConfiguration
 */
export interface V1DeveloperConfiguration {
    /**
     * For each requested virtual CPU, CPUAllocationRatio defines how much physical CPU to request per VMI from the hosting node. The value is in fraction of a CPU thread (or core on non-hyperthreaded nodes). For example, a value of 1 means 1 physical CPU thread per VMI CPU thread. A value of 100 would be 1% of a physical thread allocated for each requested VMI thread. This option has no effect on VMIs that request dedicated CPUs. More information at: https://kubevirt.io/user-guide/operations/node_overcommit/#node-cpu-allocation-ratio Defaults to 10
     * @type {number}
     * @memberof V1DeveloperConfiguration
     */
    cpuAllocationRatio?: number;
    /**
     * 
     * @type {V1DiskVerification}
     * @memberof V1DeveloperConfiguration
     */
    diskVerification?: V1DiskVerification;
    /**
     * FeatureGates is the list of experimental features to enable. Defaults to none
     * @type {Array<string>}
     * @memberof V1DeveloperConfiguration
     */
    featureGates?: Array<string>;
    /**
     * 
     * @type {V1LogVerbosity}
     * @memberof V1DeveloperConfiguration
     */
    logVerbosity?: V1LogVerbosity;
    /**
     * MemoryOvercommit is the percentage of memory we want to give VMIs compared to the amount given to its parent pod (virt-launcher). For example, a value of 102 means the VMI will "see" 2% more memory than its parent pod. Values under 100 are effectively "undercommits". Overcommits can lead to memory exhaustion, which in turn can lead to crashes. Use carefully. Defaults to 100
     * @type {number}
     * @memberof V1DeveloperConfiguration
     */
    memoryOvercommit?: number;
    /**
     * Allow overriding the automatically determined minimum TSC frequency of the cluster and fixate the minimum to this frequency.
     * @type {number}
     * @memberof V1DeveloperConfiguration
     */
    minimumClusterTSCFrequency?: number;
    /**
     * MinimumReservePVCBytes is the amount of space, in bytes, to leave unused on disks. Defaults to 131072 (128KiB)
     * @type {number}
     * @memberof V1DeveloperConfiguration
     */
    minimumReservePVCBytes?: number;
    /**
     * NodeSelectors allows restricting VMI creation to nodes that match a set of labels. Defaults to none
     * @type {{ [key: string]: string; }}
     * @memberof V1DeveloperConfiguration
     */
    nodeSelectors?: { [key: string]: string; };
    /**
     * LessPVCSpaceToleration determines how much smaller, in percentage, disk PVCs are allowed to be compared to the requested size (to account for various overheads). Defaults to 10
     * @type {number}
     * @memberof V1DeveloperConfiguration
     */
    pvcTolerateLessSpaceUpToPercent?: number;
    /**
     * UseEmulation can be set to true to allow fallback to software emulation in case hardware-assisted emulation is not available. Defaults to false
     * @type {boolean}
     * @memberof V1DeveloperConfiguration
     */
    useEmulation?: boolean;
}

/**
 * Check if a given object implements the V1DeveloperConfiguration interface.
 */
export function instanceOfV1DeveloperConfiguration(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function V1DeveloperConfigurationFromJSON(json: any): V1DeveloperConfiguration {
    return V1DeveloperConfigurationFromJSONTyped(json, false);
}

export function V1DeveloperConfigurationFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1DeveloperConfiguration {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'cpuAllocationRatio': !exists(json, 'cpuAllocationRatio') ? undefined : json['cpuAllocationRatio'],
        'diskVerification': !exists(json, 'diskVerification') ? undefined : V1DiskVerificationFromJSON(json['diskVerification']),
        'featureGates': !exists(json, 'featureGates') ? undefined : json['featureGates'],
        'logVerbosity': !exists(json, 'logVerbosity') ? undefined : V1LogVerbosityFromJSON(json['logVerbosity']),
        'memoryOvercommit': !exists(json, 'memoryOvercommit') ? undefined : json['memoryOvercommit'],
        'minimumClusterTSCFrequency': !exists(json, 'minimumClusterTSCFrequency') ? undefined : json['minimumClusterTSCFrequency'],
        'minimumReservePVCBytes': !exists(json, 'minimumReservePVCBytes') ? undefined : json['minimumReservePVCBytes'],
        'nodeSelectors': !exists(json, 'nodeSelectors') ? undefined : json['nodeSelectors'],
        'pvcTolerateLessSpaceUpToPercent': !exists(json, 'pvcTolerateLessSpaceUpToPercent') ? undefined : json['pvcTolerateLessSpaceUpToPercent'],
        'useEmulation': !exists(json, 'useEmulation') ? undefined : json['useEmulation'],
    };
}

export function V1DeveloperConfigurationToJSON(value?: V1DeveloperConfiguration | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'cpuAllocationRatio': value.cpuAllocationRatio,
        'diskVerification': V1DiskVerificationToJSON(value.diskVerification),
        'featureGates': value.featureGates,
        'logVerbosity': V1LogVerbosityToJSON(value.logVerbosity),
        'memoryOvercommit': value.memoryOvercommit,
        'minimumClusterTSCFrequency': value.minimumClusterTSCFrequency,
        'minimumReservePVCBytes': value.minimumReservePVCBytes,
        'nodeSelectors': value.nodeSelectors,
        'pvcTolerateLessSpaceUpToPercent': value.pvcTolerateLessSpaceUpToPercent,
        'useEmulation': value.useEmulation,
    };
}

