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
 * StatefulSetPersistentVolumeClaimRetentionPolicy describes the policy used for PVCs created from the StatefulSet VolumeClaimTemplates.
 * @export
 * @interface IoK8sApiAppsV1StatefulSetPersistentVolumeClaimRetentionPolicy
 */
export interface IoK8sApiAppsV1StatefulSetPersistentVolumeClaimRetentionPolicy {
    /**
     * WhenDeleted specifies what happens to PVCs created from StatefulSet VolumeClaimTemplates when the StatefulSet is deleted. The default policy of `Retain` causes PVCs to not be affected by StatefulSet deletion. The `Delete` policy causes those PVCs to be deleted.
     * @type {string}
     * @memberof IoK8sApiAppsV1StatefulSetPersistentVolumeClaimRetentionPolicy
     */
    whenDeleted?: string;
    /**
     * WhenScaled specifies what happens to PVCs created from StatefulSet VolumeClaimTemplates when the StatefulSet is scaled down. The default policy of `Retain` causes PVCs to not be affected by a scaledown. The `Delete` policy causes the associated PVCs for any excess pods above the replica count to be deleted.
     * @type {string}
     * @memberof IoK8sApiAppsV1StatefulSetPersistentVolumeClaimRetentionPolicy
     */
    whenScaled?: string;
}

/**
 * Check if a given object implements the IoK8sApiAppsV1StatefulSetPersistentVolumeClaimRetentionPolicy interface.
 */
export function instanceOfIoK8sApiAppsV1StatefulSetPersistentVolumeClaimRetentionPolicy(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function IoK8sApiAppsV1StatefulSetPersistentVolumeClaimRetentionPolicyFromJSON(json: any): IoK8sApiAppsV1StatefulSetPersistentVolumeClaimRetentionPolicy {
    return IoK8sApiAppsV1StatefulSetPersistentVolumeClaimRetentionPolicyFromJSONTyped(json, false);
}

export function IoK8sApiAppsV1StatefulSetPersistentVolumeClaimRetentionPolicyFromJSONTyped(json: any, ignoreDiscriminator: boolean): IoK8sApiAppsV1StatefulSetPersistentVolumeClaimRetentionPolicy {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'whenDeleted': !exists(json, 'whenDeleted') ? undefined : json['whenDeleted'],
        'whenScaled': !exists(json, 'whenScaled') ? undefined : json['whenScaled'],
    };
}

export function IoK8sApiAppsV1StatefulSetPersistentVolumeClaimRetentionPolicyToJSON(value?: IoK8sApiAppsV1StatefulSetPersistentVolumeClaimRetentionPolicy | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'whenDeleted': value.whenDeleted,
        'whenScaled': value.whenScaled,
    };
}

