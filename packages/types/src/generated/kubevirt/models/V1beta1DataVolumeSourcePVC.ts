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
/**
 * DataVolumeSourcePVC provides the parameters to create a Data Volume from an existing PVC
 * @export
 * @interface V1beta1DataVolumeSourcePVC
 */
export interface V1beta1DataVolumeSourcePVC {
    /**
     * The name of the source PVC
     * @type {string}
     * @memberof V1beta1DataVolumeSourcePVC
     */
    name: string;
    /**
     * The namespace of the source PVC
     * @type {string}
     * @memberof V1beta1DataVolumeSourcePVC
     */
    namespace: string;
}

/**
 * Check if a given object implements the V1beta1DataVolumeSourcePVC interface.
 */
export function instanceOfV1beta1DataVolumeSourcePVC(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "namespace" in value;

    return isInstance;
}

export function V1beta1DataVolumeSourcePVCFromJSON(json: any): V1beta1DataVolumeSourcePVC {
    return V1beta1DataVolumeSourcePVCFromJSONTyped(json, false);
}

export function V1beta1DataVolumeSourcePVCFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1beta1DataVolumeSourcePVC {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': json['name'],
        'namespace': json['namespace'],
    };
}

export function V1beta1DataVolumeSourcePVCToJSON(value?: V1beta1DataVolumeSourcePVC | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'namespace': value.namespace,
    };
}

