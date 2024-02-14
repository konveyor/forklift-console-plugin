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
import type { IoK8sApiDiscoveryV1EndpointSlice } from './IoK8sApiDiscoveryV1EndpointSlice';
import {
    IoK8sApiDiscoveryV1EndpointSliceFromJSON,
    IoK8sApiDiscoveryV1EndpointSliceFromJSONTyped,
    IoK8sApiDiscoveryV1EndpointSliceToJSON,
} from './IoK8sApiDiscoveryV1EndpointSlice';
import type { IoK8sApimachineryPkgApisMetaV1ListMeta } from './IoK8sApimachineryPkgApisMetaV1ListMeta';
import {
    IoK8sApimachineryPkgApisMetaV1ListMetaFromJSON,
    IoK8sApimachineryPkgApisMetaV1ListMetaFromJSONTyped,
    IoK8sApimachineryPkgApisMetaV1ListMetaToJSON,
} from './IoK8sApimachineryPkgApisMetaV1ListMeta';

/**
 * EndpointSliceList represents a list of endpoint slices
 * @export
 * @interface IoK8sApiDiscoveryV1EndpointSliceList
 */
export interface IoK8sApiDiscoveryV1EndpointSliceList {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof IoK8sApiDiscoveryV1EndpointSliceList
     */
    apiVersion?: string;
    /**
     * items is the list of endpoint slices
     * @type {Array<IoK8sApiDiscoveryV1EndpointSlice>}
     * @memberof IoK8sApiDiscoveryV1EndpointSliceList
     */
    items: Array<IoK8sApiDiscoveryV1EndpointSlice>;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof IoK8sApiDiscoveryV1EndpointSliceList
     */
    kind?: string;
    /**
     * 
     * @type {IoK8sApimachineryPkgApisMetaV1ListMeta}
     * @memberof IoK8sApiDiscoveryV1EndpointSliceList
     */
    metadata?: IoK8sApimachineryPkgApisMetaV1ListMeta;
}

/**
 * Check if a given object implements the IoK8sApiDiscoveryV1EndpointSliceList interface.
 */
export function instanceOfIoK8sApiDiscoveryV1EndpointSliceList(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "items" in value;

    return isInstance;
}

export function IoK8sApiDiscoveryV1EndpointSliceListFromJSON(json: any): IoK8sApiDiscoveryV1EndpointSliceList {
    return IoK8sApiDiscoveryV1EndpointSliceListFromJSONTyped(json, false);
}

export function IoK8sApiDiscoveryV1EndpointSliceListFromJSONTyped(json: any, ignoreDiscriminator: boolean): IoK8sApiDiscoveryV1EndpointSliceList {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'apiVersion': !exists(json, 'apiVersion') ? undefined : json['apiVersion'],
        'items': ((json['items'] as Array<any>).map(IoK8sApiDiscoveryV1EndpointSliceFromJSON)),
        'kind': !exists(json, 'kind') ? undefined : json['kind'],
        'metadata': !exists(json, 'metadata') ? undefined : IoK8sApimachineryPkgApisMetaV1ListMetaFromJSON(json['metadata']),
    };
}

export function IoK8sApiDiscoveryV1EndpointSliceListToJSON(value?: IoK8sApiDiscoveryV1EndpointSliceList | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'apiVersion': value.apiVersion,
        'items': ((value.items as Array<any>).map(IoK8sApiDiscoveryV1EndpointSliceToJSON)),
        'kind': value.kind,
        'metadata': IoK8sApimachineryPkgApisMetaV1ListMetaToJSON(value.metadata),
    };
}

