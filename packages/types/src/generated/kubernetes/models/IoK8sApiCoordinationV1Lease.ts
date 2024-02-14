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
import type { IoK8sApiCoordinationV1LeaseSpec } from './IoK8sApiCoordinationV1LeaseSpec';
import {
    IoK8sApiCoordinationV1LeaseSpecFromJSON,
    IoK8sApiCoordinationV1LeaseSpecFromJSONTyped,
    IoK8sApiCoordinationV1LeaseSpecToJSON,
} from './IoK8sApiCoordinationV1LeaseSpec';
import type { IoK8sApimachineryPkgApisMetaV1ObjectMeta } from './IoK8sApimachineryPkgApisMetaV1ObjectMeta';
import {
    IoK8sApimachineryPkgApisMetaV1ObjectMetaFromJSON,
    IoK8sApimachineryPkgApisMetaV1ObjectMetaFromJSONTyped,
    IoK8sApimachineryPkgApisMetaV1ObjectMetaToJSON,
} from './IoK8sApimachineryPkgApisMetaV1ObjectMeta';

/**
 * Lease defines a lease concept.
 * @export
 * @interface IoK8sApiCoordinationV1Lease
 */
export interface IoK8sApiCoordinationV1Lease {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof IoK8sApiCoordinationV1Lease
     */
    apiVersion?: string;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof IoK8sApiCoordinationV1Lease
     */
    kind?: string;
    /**
     * 
     * @type {IoK8sApimachineryPkgApisMetaV1ObjectMeta}
     * @memberof IoK8sApiCoordinationV1Lease
     */
    metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
    /**
     * 
     * @type {IoK8sApiCoordinationV1LeaseSpec}
     * @memberof IoK8sApiCoordinationV1Lease
     */
    spec?: IoK8sApiCoordinationV1LeaseSpec;
}

/**
 * Check if a given object implements the IoK8sApiCoordinationV1Lease interface.
 */
export function instanceOfIoK8sApiCoordinationV1Lease(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function IoK8sApiCoordinationV1LeaseFromJSON(json: any): IoK8sApiCoordinationV1Lease {
    return IoK8sApiCoordinationV1LeaseFromJSONTyped(json, false);
}

export function IoK8sApiCoordinationV1LeaseFromJSONTyped(json: any, ignoreDiscriminator: boolean): IoK8sApiCoordinationV1Lease {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'apiVersion': !exists(json, 'apiVersion') ? undefined : json['apiVersion'],
        'kind': !exists(json, 'kind') ? undefined : json['kind'],
        'metadata': !exists(json, 'metadata') ? undefined : IoK8sApimachineryPkgApisMetaV1ObjectMetaFromJSON(json['metadata']),
        'spec': !exists(json, 'spec') ? undefined : IoK8sApiCoordinationV1LeaseSpecFromJSON(json['spec']),
    };
}

export function IoK8sApiCoordinationV1LeaseToJSON(value?: IoK8sApiCoordinationV1Lease | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'apiVersion': value.apiVersion,
        'kind': value.kind,
        'metadata': IoK8sApimachineryPkgApisMetaV1ObjectMetaToJSON(value.metadata),
        'spec': IoK8sApiCoordinationV1LeaseSpecToJSON(value.spec),
    };
}

