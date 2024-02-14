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
/**
 * Local represents directly-attached storage with node affinity (Beta feature)
 * @export
 * @interface IoK8sApiCoreV1LocalVolumeSource
 */
export interface IoK8sApiCoreV1LocalVolumeSource {
    /**
     * fsType is the filesystem type to mount. It applies only when the Path is a block device. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". The default value is to auto-select a filesystem if unspecified.
     * @type {string}
     * @memberof IoK8sApiCoreV1LocalVolumeSource
     */
    fsType?: string;
    /**
     * path of the full path to the volume on the node. It can be either a directory or block device (disk, partition, ...).
     * @type {string}
     * @memberof IoK8sApiCoreV1LocalVolumeSource
     */
    path: string;
}

/**
 * Check if a given object implements the IoK8sApiCoreV1LocalVolumeSource interface.
 */
export function instanceOfIoK8sApiCoreV1LocalVolumeSource(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "path" in value;

    return isInstance;
}

export function IoK8sApiCoreV1LocalVolumeSourceFromJSON(json: any): IoK8sApiCoreV1LocalVolumeSource {
    return IoK8sApiCoreV1LocalVolumeSourceFromJSONTyped(json, false);
}

export function IoK8sApiCoreV1LocalVolumeSourceFromJSONTyped(json: any, ignoreDiscriminator: boolean): IoK8sApiCoreV1LocalVolumeSource {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'fsType': !exists(json, 'fsType') ? undefined : json['fsType'],
        'path': json['path'],
    };
}

export function IoK8sApiCoreV1LocalVolumeSourceToJSON(value?: IoK8sApiCoreV1LocalVolumeSource | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'fsType': value.fsType,
        'path': value.path,
    };
}

