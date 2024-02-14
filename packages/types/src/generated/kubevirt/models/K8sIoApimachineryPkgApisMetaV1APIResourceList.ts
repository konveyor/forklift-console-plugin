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
import type { K8sIoApimachineryPkgApisMetaV1APIResource } from './K8sIoApimachineryPkgApisMetaV1APIResource';
import {
    K8sIoApimachineryPkgApisMetaV1APIResourceFromJSON,
    K8sIoApimachineryPkgApisMetaV1APIResourceFromJSONTyped,
    K8sIoApimachineryPkgApisMetaV1APIResourceToJSON,
} from './K8sIoApimachineryPkgApisMetaV1APIResource';

/**
 * APIResourceList is a list of APIResource, it is used to expose the name of the resources supported in a specific group and version, and if the resource is namespaced.
 * @export
 * @interface K8sIoApimachineryPkgApisMetaV1APIResourceList
 */
export interface K8sIoApimachineryPkgApisMetaV1APIResourceList {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof K8sIoApimachineryPkgApisMetaV1APIResourceList
     */
    apiVersion?: string;
    /**
     * groupVersion is the group and version this APIResourceList is for.
     * @type {string}
     * @memberof K8sIoApimachineryPkgApisMetaV1APIResourceList
     */
    groupVersion: string;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof K8sIoApimachineryPkgApisMetaV1APIResourceList
     */
    kind?: string;
    /**
     * resources contains the name of the resources and if they are namespaced.
     * @type {Array<K8sIoApimachineryPkgApisMetaV1APIResource>}
     * @memberof K8sIoApimachineryPkgApisMetaV1APIResourceList
     */
    resources: Array<K8sIoApimachineryPkgApisMetaV1APIResource>;
}

/**
 * Check if a given object implements the K8sIoApimachineryPkgApisMetaV1APIResourceList interface.
 */
export function instanceOfK8sIoApimachineryPkgApisMetaV1APIResourceList(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "groupVersion" in value;
    isInstance = isInstance && "resources" in value;

    return isInstance;
}

export function K8sIoApimachineryPkgApisMetaV1APIResourceListFromJSON(json: any): K8sIoApimachineryPkgApisMetaV1APIResourceList {
    return K8sIoApimachineryPkgApisMetaV1APIResourceListFromJSONTyped(json, false);
}

export function K8sIoApimachineryPkgApisMetaV1APIResourceListFromJSONTyped(json: any, ignoreDiscriminator: boolean): K8sIoApimachineryPkgApisMetaV1APIResourceList {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'apiVersion': !exists(json, 'apiVersion') ? undefined : json['apiVersion'],
        'groupVersion': json['groupVersion'],
        'kind': !exists(json, 'kind') ? undefined : json['kind'],
        'resources': ((json['resources'] as Array<any>).map(K8sIoApimachineryPkgApisMetaV1APIResourceFromJSON)),
    };
}

export function K8sIoApimachineryPkgApisMetaV1APIResourceListToJSON(value?: K8sIoApimachineryPkgApisMetaV1APIResourceList | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'apiVersion': value.apiVersion,
        'groupVersion': value.groupVersion,
        'kind': value.kind,
        'resources': ((value.resources as Array<any>).map(K8sIoApimachineryPkgApisMetaV1APIResourceToJSON)),
    };
}

