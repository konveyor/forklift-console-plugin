/* tslint:disable */
/* eslint-disable */
/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: unversioned
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../../runtime';
import type { IoK8sApiCoreV1LocalObjectReference } from './IoK8sApiCoreV1LocalObjectReference';
import {
    IoK8sApiCoreV1LocalObjectReferenceFromJSON,
    IoK8sApiCoreV1LocalObjectReferenceFromJSONTyped,
    IoK8sApiCoreV1LocalObjectReferenceToJSON,
} from './IoK8sApiCoreV1LocalObjectReference';

/**
 * FlexVolume represents a generic volume resource that is provisioned/attached using an exec based plugin.
 * @export
 * @interface IoK8sApiCoreV1FlexVolumeSource
 */
export interface IoK8sApiCoreV1FlexVolumeSource {
    /**
     * driver is the name of the driver to use for this volume.
     * @type {string}
     * @memberof IoK8sApiCoreV1FlexVolumeSource
     */
    driver: string;
    /**
     * fsType is the filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". The default filesystem depends on FlexVolume script.
     * @type {string}
     * @memberof IoK8sApiCoreV1FlexVolumeSource
     */
    fsType?: string;
    /**
     * options is Optional: this field holds extra command options if any.
     * @type {{ [key: string]: string; }}
     * @memberof IoK8sApiCoreV1FlexVolumeSource
     */
    options?: { [key: string]: string; };
    /**
     * readOnly is Optional: defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.
     * @type {boolean}
     * @memberof IoK8sApiCoreV1FlexVolumeSource
     */
    readOnly?: boolean;
    /**
     * 
     * @type {IoK8sApiCoreV1LocalObjectReference}
     * @memberof IoK8sApiCoreV1FlexVolumeSource
     */
    secretRef?: IoK8sApiCoreV1LocalObjectReference;
}

/**
 * Check if a given object implements the IoK8sApiCoreV1FlexVolumeSource interface.
 */
export function instanceOfIoK8sApiCoreV1FlexVolumeSource(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "driver" in value;

    return isInstance;
}

export function IoK8sApiCoreV1FlexVolumeSourceFromJSON(json: any): IoK8sApiCoreV1FlexVolumeSource {
    return IoK8sApiCoreV1FlexVolumeSourceFromJSONTyped(json, false);
}

export function IoK8sApiCoreV1FlexVolumeSourceFromJSONTyped(json: any, ignoreDiscriminator: boolean): IoK8sApiCoreV1FlexVolumeSource {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'driver': json['driver'],
        'fsType': !exists(json, 'fsType') ? undefined : json['fsType'],
        'options': !exists(json, 'options') ? undefined : json['options'],
        'readOnly': !exists(json, 'readOnly') ? undefined : json['readOnly'],
        'secretRef': !exists(json, 'secretRef') ? undefined : IoK8sApiCoreV1LocalObjectReferenceFromJSON(json['secretRef']),
    };
}

export function IoK8sApiCoreV1FlexVolumeSourceToJSON(value?: IoK8sApiCoreV1FlexVolumeSource | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'driver': value.driver,
        'fsType': value.fsType,
        'options': value.options,
        'readOnly': value.readOnly,
        'secretRef': IoK8sApiCoreV1LocalObjectReferenceToJSON(value.secretRef),
    };
}

